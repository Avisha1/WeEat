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

FactoryGirl.define do

  factory :cuisine do
    name 'Italian'
  end

  trait :israeli do
    name 'Israeli'
  end

  trait :french do
    name 'French'
  end

end
