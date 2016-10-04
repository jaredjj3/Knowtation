Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [ :create, :show, :update ]
    resource :session, only: [ :create, :destroy ]
  end
end
