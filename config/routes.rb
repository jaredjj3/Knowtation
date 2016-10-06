Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [ :create, :show, :update ]
    resources :teachers, only: :create
    resource :session, only: [ :create, :destroy ]
  end

  root to: 'static_pages#root'
end
