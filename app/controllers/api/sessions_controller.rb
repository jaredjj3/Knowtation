class Api::SessionsController < ApplicationController
  def create
    username = params[:user][:username]
    password = params[:user][:password]
    @user = User.find_by_credentials(username, password)

    if @user
      login(@user)
      render :show
    else
      render json: ["Invalid username/password combination"]
    end

  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: {}
    end
  end
end
