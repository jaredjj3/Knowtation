Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :create, :show, :update ]
    resources :teachers, only: :create
    resource :session, only: [ :create, :destroy ]
    resources :knowtations, only: [ :create, :show, :index, :destroy, :update ]
  end

  root to: 'static_pages#root'
end
