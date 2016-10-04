Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [ :create, :show, :update ]
  end
end
