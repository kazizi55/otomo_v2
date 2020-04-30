Rails.application.routes.draw do
  ActiveAdmin.routes(self)

  root to: 'home#index'

  namespace :api, {format: 'json'} do
    resources :bands, only: [:index, :show]
    resources :jam_sessions, only: [:index, :show]
    resources :lives, only: [:index, :show]
    resources :users, only: [:index, :show]
    post   'signup',  controller: :users,    action: :create
    post   'signin',  controller: :sessions, action: :create
    delete 'signin', controller: :sessions, action: :destroy
    post   'refresh', controller: :refresh,  action: :create
  end
end
