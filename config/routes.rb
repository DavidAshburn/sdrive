Rails.application.routes.draw do
  resources :cards
  resources :variants
  resources :courses
  devise_for :users
  root 'home#index'
  get 'home/about'
  get 'home/profile'
  get 'test/colors'
end
