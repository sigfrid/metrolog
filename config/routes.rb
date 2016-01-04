Rails.application.routes.draw do
  root 'sessions#new'
  get 'dashboard', to: 'dashboard#show', as: 'dashboard'


  resources :equipments
  resources :logs
  resources :activities
  resources :reviews
  resources :activity_histories
end
