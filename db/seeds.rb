# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'


# user seed
15.times do
  User.create(
first_name: Faker::Name.first_name,
last_name: Faker::Name.last_name,
age: Faker::Number.number(digits: 2),
gender: Faker::Gender.short_binary_type,
email: Faker::Internet.email,
role: 'user',
country_origin: Faker::Address.country,
image: '',
password:'123456'
)
end

#this is verifier seed

verifier1=User.create(first_name:'beth', last_name:'johnson', email: 'verifier1@test.com', role:'verifier', password:'123456')
verifier2=User.create(first_name:'james', last_name:'bond', email: 'verifier2@test.com', role:'verifier', password:'123456')
verifier3=User.create(first_name:'tedd', last_name:'lang', email: 'verifier3@test.com', role:'verifier', password:'123456')
verifier4=User.create(first_name:'john', last_name:'doe', email: 'verifier4@test.com', role:'verifier', password:'123456')
verifier5=User.create(first_name:'jane', last_name:'doe', email: 'verifier5@test.com', role:'verifier', password:'123456')




#country seed 
5.times do
  User.create(
    country_origin: Faker::Address.country,
    role:'issuer'
  )
end

puts 'completed'