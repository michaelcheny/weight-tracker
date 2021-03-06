Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do 
    namespace :v1 do
      
      resources :users do
        resources :meals
        resource :weight_histories
        resources :macros
        resources :macro_goals
        
      end
      root to: "home#index"
  end
end

    post '/login' => 'sessions#login'
    delete '/logout' => 'sessions#logout' 
    get '/auth-check' => 'sessions#auth_check' 
    post '/auto-login' => 'sessions#auto_login'
end
