class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :edit, :update, :destroy]

  # GET /restaurants/:restaurant_id/reviews
  # GET /restaurants/:restaurant_id/reviews.json
  def index
    #1st you retrieve the restaurant thanks to params[:restaurant_id]
    restaurant = find_restaurant
    #2nd you get all the reviews of this restaurant
    @reviews = restaurant.reviews

    respond_to do |format|
      format.html # index.html.erb
      format.json  { render :json => @reviews }
    end
  end

  # GET /restaurants/:restaurant_id/reviews/:id
  # GET /reviews/:id.json
  def show
    #1st you retrieve the restaurant thanks to params[:restaurant_id]
    restaurant = find_restaurant
    #2nd you retrieve the review thanks to params[:id]
    @review = restaurant.reviews.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json  { render :json => @reviews }
    end
  end

  # GET /restaurants/:restaurant_id/reviews/new
  # GET /restaurants/:restaurant_id/reviews/new.json
  def new
    #1st you retrieve the restaurant thanks to params[:restaurant_id]
    restaurant = find_restaurant
    #2nd you build a new one
    @review = restaurant.reviews.build

    respond_to do |format|
      format.html # new.html.erb
      format.json  { render :json => @reviews }
    end
  end

  # GET /restaurants/:restaurant_id/reviews/:id/edit
  def edit
    #1st you retrieve the restaurant thanks to params[:restaurant_id]
    restaurant = find_restaurant
    #2nd you retrieve the review thanks to params[:id]
    @review = restaurant.reviews.find(params[:id])
  end

  # POST /restaurants/:restaurant_id/reviews
  # POST /restaurants/:restaurant_id/reviews.json
  def create
    #1st you retrieve the restaurant thanks to params[:restaurant_id]
    restaurant = find_restaurant
    #2nd you create the review with arguments in params[:reviews]
    @review = restaurant.reviews.create!(review_params)

    respond_to do |format|
      if @review.save
        #1st argument of redirect_to is an array, in order to build the correct route to the nested resource review
        format.html { redirect_to([@review.restaurant, @review], notice: 'Review was successfully created.') }
        #the key :location is associated to an array in order to build the correct route to the nested resource review
        format.json  { render :json => @review, status: :created, location: [@review.restaurant, @review] }
      else
        format.html { render :action => "new" }
        format.json  { render :json => @review.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /restaurants/:restaurant_id/reviews/:id
  # PUT /restaurants/:restaurant_id/reviews/:id.json
  def update
    #1st you retrieve the restaurant thanks to params[:restaurant_id]
    restaurant = find_restaurant
    #2nd you retrieve the review thanks to params[:id]
    @review = restaurant.reviews.find(params[:id])

    respond_to do |format|
      if @review.update_attributes(review_params)
        #1st argument of redirect_to is an array, in order to build the correct route to the nested resource review
        format.html { redirect_to([@review.restaurant, @review], :notice => 'Review was successfully updated.') }
        format.json  { head :ok }
      else
        format.html { render :action => "edit" }
        format.json  { render :json => @review.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /restaurants/:restaurant_id/reviews/1
  # DELETE /restaurants/:restaurant_id/reviews/1.json
  def destroy
    #1st you retrieve the restaurant thanks to params[:restaurant_id]
    restaurant = find_restaurant
    #2nd you retrieve the review thanks to params[:id]
    @review = restaurant.reviews.find(params[:id])
    @review.destroy

    respond_to do |format|
      #1st argument reference the path /restaurants/:restaurant_id/reviews/
      format.html { redirect_to(restaurant_reviews_url) }
      format.json  { head :ok }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def review_params
      params.require(:review).permit(:rating, :comment, :date, :restaurant_id)
    end

    def find_restaurant
      Restaurant.find(params[:restaurant_id])
    end
end
