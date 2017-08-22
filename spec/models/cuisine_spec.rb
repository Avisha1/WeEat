# spec/cuisine_spec.rb
require 'rails_helper'

RSpec.describe Cuisine, type: :model do

  context 'check positive validation' do
    let(:cuisine) {
      Cuisine.new(:name => 'italian')
    }
    it 'check if exists' do
      expect(cuisine.name).to eql('italian')
    end
  end

=begin
  context 'check negative validation' do

    let(:cuisine2) {
      Cuisine.new()
    }

    it 'check for relevant error' do
      expect(cuisine2.save!).to raise_error(ActiveRecord::RecordInvalid)
    end

  end
=end

end
