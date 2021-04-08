# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'


# user seed
15.times do |i|
user = User.create(
first_name: Faker::Name.first_name,
last_name: Faker::Name.last_name,
age: Faker::Number.number(digits: 2),
gender: Faker::Gender.short_binary_type,
email: "user#{i+1}@test.com",
role: 'user',
country_origin: Faker::Address.country,
image: '',
password:'123456'
)



end

#this is issuer seed

issuer1=User.create(name:'walmart', email: 'issuer1@test.com', role:'issuer', password:'123456')
issuer2=User.create(name:'duane read', email:'issuer2@test.com', role:'issuer', password:'123456')
issuer3=User.create(name:'walgreens', email: 'issuer3@test.com', role:'issuer', password:'123456')
issuer4=User.create(name:'intermountain-healthcare', email: 'issuer4@test.com', role:'issuer', password:'123456')
issuer5=User.create(name:'u of u health', email: 'issuer5@test.com', role:'issuer', password:'123456')

required_vaccine1=RequiredVaccine.create(user_id: rand(1..5))
required_vaccine2=RequiredVaccine.create(user_id: rand(1..5))
required_vaccine3=RequiredVaccine.create(user_id: rand(1..5))
required_vaccine4=RequiredVaccine.create(user_id: rand(1..5))
required_vaccine5=RequiredVaccine.create(user_id: rand(1..5))

vaccine1=Vaccine.create(name:'Pfizer', manufacturer:'BioNTech', image:'', verified:'false', user_id: rand(1..5), required_vaccine_id: rand(1..5))
vaccine2=Vaccine.create(name:'Moderna', manufacturer:'Moderna', image:'', verified:'false', user_id: rand(1..5), required_vaccine_id: rand(1..5))
vaccine3=Vaccine.create(name:'Janssen', manufacturer:'Johnson & Johnson', image:'', verified:'false',user_id: rand(1..5), required_vaccine_id: rand(1..5))
vaccine4=Vaccine.create(name:'Johnston', manufacturer:'The Black Market', image:'', verified:'false',user_id: rand(1..5), required_vaccine_id: rand(1..5))




#country seed verifier
5.times do
  User.create(
    name: Faker::Address.country,
    role:'verifier'
  )
end

puts 'completed'