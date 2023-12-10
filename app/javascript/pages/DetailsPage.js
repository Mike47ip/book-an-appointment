import React from 'react';
import { useSelector } from 'react-redux';
import {
  useParams, Link
} from 'react-router-dom';

const Details = () => {
  const { content } = useSelector((store) => store.motorbikes);
  const { id } = useParams(); // Assuming the parameter you're interested in is named 'id'

  // Filter the array based on the id parameter
  const filteredArray = content.filter(item => item.id === parseInt(id));

  return (
    <>
    <section>
      <h1>Filtered Motorbike Details</h1>
      {filteredArray.length === 0 ? (
        <p>No motorbike found with the specified ID</p>
      ) : (
        <div>
          <p>ID: {filteredArray[0].id}</p>
          <p>Name: {filteredArray[0].name}</p>
          <p>Model: {filteredArray[0].model}</p>
          <p>Price: {filteredArray[0].price}</p>
          <p>Image: {filteredArray[0].image}</p>
          <p>Description: {filteredArray[0].description}</p>
          <Link to={`./reservation/new`} key={filteredArray[0].id} className="card">Reserve</Link>
        </div>
      )}
    </section>
    </>
  );
};

export default Details;