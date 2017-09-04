# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  rating        :integer
#  comment       :text
#  date          :datetime
#  restaurant_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'rails_helper'

RSpec.describe Review, type: :model do

  describe 'validations' do

    context 'when all attributes are valid' do
      let(:valid_review) { FactoryGirl.build(:review, :review_1) }

      it 'should pass validations' do
        expect(valid_review.valid?).to be_truthy
        expect(valid_review.rating).to eq(1)
      end
    end

    context 'when rating is below zero' do
      let(:invalid_review) { FactoryGirl.build(:review, rating:-4) }

      it 'should not pass validation' do
        expect(invalid_review.valid?).to be_falsey
      end
    end

    context 'when rating is above 3' do
      let(:invalid_review) { FactoryGirl.build(:review, rating:6) }

      it 'should not pass validation' do
        expect(invalid_review.valid?).to be_falsey
      end
    end

  end

  describe 'associations' do

    context 'when restaurant is indeed associated' do
      let(:valid_review) { FactoryGirl.build(:review) }

      it 'should be valid' do
        expect(valid_review.valid?).to be_truthy
      end
    end

    context 'when there is no restaurant associate' do
      let(:no_association_review) {FactoryGirl.build(:review, :review_no_ass)}

      it 'should not be valid' do
        expect(no_association_review.valid?).to be_falsey
      end
    end

  end

end
