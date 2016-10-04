class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user
  helper_method :logged_in?

  private
  def current_user
    session_token = session[:session_token]
    return nil unless session_token
    @current_user ||= User.find_by(session_token: session_token)
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout
    return unless current_user
    current_user.reset_session_token!
    @current_user = nil;
    session[:session_token] = nil;
  end
  
end
