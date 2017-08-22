require 'rails_helper'

RSpec.describe Restaurant, type: :model do

  describe 'validations' do
    context 'when all attributes are valid' do
      let(:valid_restaurant) { FactoryGirl.build (:restaurant) }

      it 'should pass validations' do
        expect(valid_restaurant.valid?).to be_truthy
      end
    end

    context 'when name is missing' do
      let(:invalid_restaurant) { FactoryGirl.build(:restaurant, name: nil) }

      it 'should not pass validation' do
        expect(invalid_restaurant.valid?).to be_falsey
      end
    end

    context 'when address and name are duplicated' do
      let!(:valid_restaurant) { FactoryGirl.create (:restaurant) }
      let(:duplicated_restaurant) { FactoryGirl.create(:restaurant) }

      it 'should not pass the uniqueness validation' do
        expect{FactoryGirl.create(:restaurant)}.to raise_error(ActiveRecord::RecordInvalid, "Validation failed: Name has already been taken")
      end
    end
  end


  context 'check validations - duplications' do
=begin
    let!(:cuisine) {Cuisine.new(:name => 'italian')}
    let!(:cuisine2) {Cuisine.new(:name => 'indian')}
    let!(:valid_restaurant) {
      Restaurant.new(
          :name => "Pam-Pam",
          :cuisine_id => cuisine.id,
          :max_delivery_time => 4,
          :address => "Abn Gabirol 30 TLV"
      )}

    it 'will fail due duplication in address + name' do
      expect(cuisine2.name).to eq('indian')
      expect{Restaurant.new(
          :name => "Pam-Pam",
          :cuisine_id => cuisine2.id,
          :max_delivery_time => 5,
          :address => "Abn Gabirol 30 TLV"
      ).save}.to raise_error()
    end
=end
  end

=begin
  context 'check validations - negative' do
    let!(:cuisine2) {Cuisine.new(:name => 'indian')}

    it 'will fail due to negative number in max_delivery_time' do
      expect{Restaurant.new(
          :name => "example name",
          :cuisine_id => cuisine2.id,
          :max_delivery_time => -5,
          :address => "example address"
      ).save}.to raise_error("error")
    end
  end
=end


end