Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do 
    get '/api_test', to:'static#api_test'

    #all vaccinations
    get 'vaccinations', to: "vaccinations#all_vaccinations"

    #vaccinations administred to a specific user
    get 'vaccinations/:user_id', to: "vaccinations#user_vaccinations"

    #list of all required vaccines in DB
    get 'required_vaccines', to: "vaccinations#required_vaccines"

    #required vaccines for a specific user
    get 'required_vaccines/:id', to: "vaccinations#user_required_vaccine"

    #check to see if user has verifier's required vaccines
    get 'verify_vaccine/:user_id/:verifier_id', to: "vaccinations#verify_user"

    #
    get 'users/:user_id/required_vaccines/', to:"required_vaccines#verifiers_required_vaccines"
    get 'users/:user_id/required_vaccines/:id', to:"required_vaccines#destroy"
    get 'users/verifiers', to: "users#verifiers"

    get 'uservaccinations/:user_id', to: "vaccinations#user_vaccinations"

    get'issuers/manage/:issuer_id', to: "vaccinations#issuer_vaccinations"


    # put 'users/:user_id/vaccinations/:vaccination_id', to: "vaccinations#vaccination_image_upload"

    # put 'users/:user_id/vaccinations/:vaccination_id', to: "vaccinations#vaccination_image_upload"

    resources :users do
      resources :vaccines
      resources :vaccinations
      resources :required_vaccines
      
    end
    
  end
end
