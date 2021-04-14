Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do 
    get '/api_test', to:'static#api_test'

    get 'vaccinations', to: "examples#all_vaccinations"
    get 'vaccinations/:id', to: "examples#user_vaccinations"
    get 'vaccines', to: "examples#all_vaccines"
    get 'required_vaccines', to: "examples#required_vaccines"
    get 'required_vaccines/:id', to: "examples#user_required_vaccine"
    get 'verify_vaccine/:holder_id/:verifer_id', to: "examples#verify_user"
  

    resources :users do
      resources :vaccines
      resources :vaccination_wallets
      resources :required_vaccines
    end
    
  end
end
