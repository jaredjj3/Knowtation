class Api::KnowtationsController < ApplicationController

  def index
    @knowtations = Knowtation.includes(:user_loops, :user, :tags).all.shuffle
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

  def update
    @knowtation = Knowtation.find(params[:id])

    if current_user == @knowtation.user
      if @knowtation.update(knowtation_params)
        render :show
      else
        render :errors, status: 422
      end
    else
      render :errors, status: 403
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
    params.require(:knowtation).permit(
      :title,
      :scroll_instructions,
      :video_url,
      :notation_image,
      :thumbnail,
      :tags
    )
  end
end
