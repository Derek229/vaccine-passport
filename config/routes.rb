Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do 
    get '/api_test', to:'static#api_test'

    get 'vaccinations', to: "vaccinations#all_vaccinations"
    get 'vaccinations/:user_id', to: "vaccinations#user_vaccinations"
    get 'required_vaccines', to: "user#required_vaccines"
    get 'required_vaccines/:id', to: "user#user_required_vaccine"
    get 'verify_vaccine/:holder_id/:verifer_id', to: "user#verify_user"

    resources :users do
      resources :vaccines
      resources :vaccinations
      resources :required_vaccines
      
    end
    
  end
end
