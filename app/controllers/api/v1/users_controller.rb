class Api::V1::UsersController < ApplicationController
  def index
    user_id = current_user.id
    render json: { user_id: }
  end

  def create
    @user = User.new(user_params)

    if @user.save
      @user.generate_jwt
      render json: { token: @user.generate_token }, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
