Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  namespace :api, {format: 'json'} do
    namespace :v1 do
      resources :bands, only: [:index, :show]
      resources :sessions, only: [:index, :show]
      resources :lives, only: [:index, :show]
    end
  end
end
