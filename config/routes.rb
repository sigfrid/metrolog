Rails.application.routes.draw do
  root 'dashboard#show'
  get 'login', to: 'sessions#new', as: 'login'


  resources :equipments
end
