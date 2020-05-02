Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  namespace :v1 do

    resources :users do
      resources :meals
      root to: "home#index"
    end

  end
    # devise_for :users
    post '/login' => 'sessions#login'
    delete '/logout' => 'sessions#logout' 
    get '/auth-check' => 'sessions#auth_check' 
end
