class Api::KnowtationsController < ApplicationController

  def index
    @knowtations = Knowtation.all
    render :index
  end

  def show
    @knowtation = Knowtation.find(params[:id])
    render :show
  end

  def create
    @knowtation = current_user.knowtations.new(knowtation_params)

    if @knowtation.save
      render :show
    else
      render :errors, status: 422
    end
  end

  def delete
    @knowtation = Knowtation.find(params[:id])

    if current_user == knowtation.user
      render :index
    else
      render :errors, status: 403
    end
  end

  private

  def knowtation_params
    params.require(:knowtation).permit(:title, :scroll_instructions, :video_url)
  end
end