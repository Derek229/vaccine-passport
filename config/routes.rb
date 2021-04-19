Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do 
    get '/api_test', to:'static#api_test'

    get 'vaccinations', to: "vaccinations#all_vaccinations"
    get 'vaccinations/:user_id', to: "vaccinations#user_vaccinations"
    get 'required_vaccines', to: "vaccinations#required_vaccines"
    get 'required_vaccines/:id', to: "vaccinations#user_required_vaccine"
    get 'verify_vaccine/:user_id/:verifier_id', to: "vaccinations#verify_user"
    get 'users/:user_id/required_vaccines/', to:"required_vaccines#verifiers_required_vaccines"
    get 'users/:user_id/required_vaccines/:id', to:"required_vaccines#destroy"
    resources :users do
      resources :vaccines
      resources :vaccinations
      resources :required_vaccines
      
    end
    
  end
end
