
class Api::V1::CuisinesController < ApplicationController

  def get_all_cuisines
    begin
      @cuisines = Cuisine.all

      respond_to do |format|
        format.json  { render :json => @cuisines }
      end
    end
  end


end