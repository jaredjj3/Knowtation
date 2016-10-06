class Api::TeachersController < ApplicationController
  def create
    @student = current_user

    if @student.completed_application?(application_params)
      @student.user_type = 'teacher'
      @student.bio = application_params[:bio]
      @student.save
      render :show
    else
      render :errors, status: 422
    end
  end

  private
  def application_params
    params.require(:application).permit(:bio, :link)
  end
end
