# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

# USERS
# 1 admin
admin = User.create(
  email: 'admin@test.com',
  password:123456,
  name:'admin',
  role:'admin'
)

#many issuers
walmart =User.create(name:'walmart', email: 'walmart@test.com', role:'issuer', password:'123456')
cvs=User.create(name:'cvs', email:'cvs@test.com', role:'issuer', password:'123456')
walgreens=User.create(name:'walgreens', email: 'walgreens@test.com', role:'issuer', password:'123456')
ihc=User.create(name:'ihc', email: 'ihc@test.com', role:'issuer', password:'123456')

#many verifiers
delta = User.create(name:'Delta', email: 'delta@test.com', role:'verifier', password:'123456')
usa = User.create(name:'USA', email: 'usa@test.com', role:'verifier', password:'123456')
mexico = User.create(name:'mexico', email: 'mexico@test.com', role:'verifier', password:'123456')
sizzler = User.create(name:'sizzler', email: 'sizzler@test.com', role:'verifier', password:'123456')

#many users
user1 = User.create(
name: "user1",
first_name: "user1",
last_name: "name",
email: "user1@test.com",
role: 'user',
country_origin: Faker::Address.country,
password:'123456',
age: rand(18..80)
)

user2 = User.create(
  name: "user2",
  first_name: "user2",
  last_name: "name",
  email: "user2@test.com",
  role: 'user',
  country_origin: Faker::Address.country,
  password:'123456',
  age: rand(18..80)
)

user3 = User.create(
  name: "user3",
  first_name: "user3",
  last_name: "name",
  email: "user3@test.com",
  role: 'user',
  country_origin: Faker::Address.country,
  password:'123456',
  age: rand(18..80)
)



#this is issuer seed



# VACCINES
# CREATED BY ADMIN IN UI
covid=Vaccine.create(name:'Covid-19', manufacturer:'BioNTech', user_id: admin.id)
flu=Vaccine.create(name:'Flu', manufacturer:'Moderna', user_id: admin.id)
sars=Vaccine.create(name:'SARS', manufacturer:'Johnson & Johnson', user_id: admin.id)
mers=Vaccine.create(name:'MERS', manufacturer:'The Black Market', user_id: admin.id)


# VACCINATION (VaccineWallet)
# CREATED BY ISSUER IN UI but add holder id in DB

Vaccination.create(user_id:user3.id, vaccine_id: covid.id, issuer_name:'walmart', issuer_id: walmart.id)
Vaccination.create(user_id:user3.id, vaccine_id: flu.id, issuer_name:'cvs', issuer_id: cvs.id)
Vaccination.create(user_id:user3.id, vaccine_id: sars.id, issuer_name:'walgreens', issuer_id: walgreens.id)
Vaccination.create(user_id:user1.id, vaccine_id: sars.id, issuer_name:'ihc', issuer_id: ihc.id)
Vaccination.create(user_id:user1.id, vaccine_id: covid.id, issuer_name:'walgreens', issuer_id: walgreens.id)

# REquired VACCINATION
# CREATED BY Verifer IN UI 
RequiredVaccine.create(user_id:delta.id, vaccine_id:covid.id)
RequiredVaccine.create(user_id:delta.id, vaccine_id:flu.id)
RequiredVaccine.create(user_id:delta.id, vaccine_id:sars.id)
RequiredVaccine.create(user_id:usa.id, vaccine_id:covid.id)
RequiredVaccine.create(user_id:usa.id, vaccine_id:flu.id)
RequiredVaccine.create(user_id:usa.id, vaccine_id:sars.id)

puts 'completed'