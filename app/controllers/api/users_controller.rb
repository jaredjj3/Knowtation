class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save!
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422 # Unprocessable entity
    end
  end

  def show
    session_token = session[:session_token]
    @user = User.find_by(session_token: session_token), status: 403 # forbidden

    if @user
      render :show
    else
      render json: ["Login required"]
    end

  end

  def update
    # TODO
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
