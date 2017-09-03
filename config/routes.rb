Rails.application.routes.draw do

  resources :restaurants do
    resources :reviews
  end

  namespace :api, format: :json do
    namespace :v1 do
      namespace :cuisines do
        get 'get_all_cuisines'
      end

    end
  end

  root 'restaurants#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '(*path)', to: 'application#index'

end
