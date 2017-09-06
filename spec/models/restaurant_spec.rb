# == Schema Information
#
# Table name: restaurants
#
#  id                :integer          not null, primary key
#  name              :string
#  cuisine_id        :integer
#  accept_10_bis     :boolean
#  max_delivery_time :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  address           :string
#  lon               :float
#  lat               :float
#

require 'rails_helper'

RSpec.describe Restaurant, type: :model do

  describe 'validations' do
    context 'when all attributes are valid' do
      let(:valid_restaurant) {FactoryGirl.build (:restaurant)}

      it 'should pass validations' do
        expect(valid_restaurant.valid?).to be_truthy
      end
    end

    context 'when name is missing' do
      let(:invalid_restaurant) {FactoryGirl.build(:restaurant, name: nil)}

      it 'should not pass validation' do
        expect(invalid_restaurant.valid?).to be_falsey
      end
    end

    context 'when address and name are duplicated' do
      let!(:valid_restaurant) {FactoryGirl.create (:restaurant)}
      let(:duplicated_restaurant) {FactoryGirl.create(:restaurant)}

      it 'should not pass the uniqueness validation' do
        expect {FactoryGirl.create(:restaurant)}.to raise_error(ActiveRecord::RecordInvalid, "Validation failed: Name has already been taken")
      end
    end
  end

  describe 'functionality' do

    context 'calculating correct average' do
      let!(:restaurant) {FactoryGirl.create(:restaurant)}
      let!(:restaurant2) {FactoryGirl.create(:restaurant, :aroma)}
      let!(:restaurant3) {FactoryGirl.create(:restaurant, :oshi_oshi)}
      let!(:review_a) {FactoryGirl.create(:review, :review_3, restaurant: restaurant)}
      let!(:review_b) {FactoryGirl.create(:review, :review_3, restaurant: restaurant)}

      it 'should be 3' do
        expect(restaurant.calculate_restaurant_rating).to eq(3)
      end

      let!(:review_c) {FactoryGirl.create(:review, :review_2, restaurant: restaurant2)}
      let!(:review_d) {FactoryGirl.create(:review, :review_3, restaurant: restaurant2)}
      let!(:review_e) {FactoryGirl.create(:review, :review_3, restaurant: restaurant2)}

      it 'should be 3' do
        expect(restaurant2.calculate_restaurant_rating).to eq(3)
      end

      let!(:review_f) {FactoryGirl.create(:review, :review_1, restaurant: restaurant3)}
      let!(:review_g) {FactoryGirl.create(:review, :review_2, restaurant: restaurant3)}
      it 'should be 2' do
        expect(restaurant3.calculate_restaurant_rating).to eq(2)
      end


      let(:review_h) {FactoryGirl.create(:review, :review_2, restaurant: restaurant3)}
      it 'should be 2' do
        review_h
        expect(restaurant3.calculate_restaurant_rating).to eq(2)
      end

    end

  end


end
