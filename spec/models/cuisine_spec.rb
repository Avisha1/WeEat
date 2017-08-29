# == Schema Information
#
# Table name: cuisines
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  icon       :string
#

# spec/cuisine_spec.rb
require 'rails_helper'

RSpec.describe Cuisine, type: :model do

  describe 'validations' do

    context 'check equality with name' do
      let(:cuisine) {FactoryGirl.build(:cuisine)}

      it 'checks it is equal to right name' do
        expect(cuisine.name).to eql('Italian')
      end
    end

    context 'check missing name' do
      let(:cuisine) {FactoryGirl.build(:cuisine, name: nil)}

      it 'should not be valid' do
        expect(cuisine.valid?).to be_falsey
      end
    end

  end

end
