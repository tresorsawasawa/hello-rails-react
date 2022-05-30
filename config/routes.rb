Rails.application.routes.draw do
  get 'static/index'

  root 'static#index'
  namespace :api,defaults: { format: 'json'} do
    namespace :v1, defaults: { format: 'json'} do 
        get 'helloworld', to: 'helloworld#index'
    end
  end

end
