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
  password: 'devpointlabs',
  name:'admin',
  role:'admin'
)

#many issuers
walmart =User.create(name:'Walmart', email: 'walmart@test.com', role:'issuer', password:'123456')
cvs=User.create(name:'CVS', email:'cvs@test.com', role:'issuer', password:'123456')
walgreens=User.create(name:'Walgreens', email: 'walgreens@test.com', role:'issuer', password:'123456')
ihc=User.create(name:'Intermountain Health Care', email: 'ihc@test.com', role:'issuer', password:'123456')
slcohd=User.create(name: 'Salt Lake County Health Department', email: 'slcohd@test.com', role: 'issuer', password:'123456')

#many verifiers
delta = User.create(name:'Delta', email: 'delta@test.com', role:'verifier', password:'123456')
usa = User.create(name:'USA', email: 'usa@test.com', role:'verifier', password:'123456')
mexico = User.create(name:'Mexico', email: 'mexico@test.com', role:'verifier', password:'123456')
utah = User.create(name:'Utah', email: 'utah@test.com', role:'verifier', password:'123456')
devpointlabs = User.create(name:'DevPoint Labs', email: 'devpointlabs@test.com', role:'verifier', password:'123456')
southwest = User.create(name:'Southwest Airline', email: 'southwest@test.com', role:'verifier', password:'123456')
sizzler = User.create(name:'Sizzler', email: 'sizzler@test.com', role:'verifier', password:'123456')

#many users
user1 = User.create(
first_name: "Trevor",
last_name: "von Hake",
email: "tvonhake@covidia.com",
role: 'user',
country_origin: 'United States',
password:'123456',
age: 24,)

user2 = User.create(
  first_name: "Derek",
  last_name: "Cluff",
  email: "dcluff@covidia.com",
  role: 'user',
  country_origin: 'United States',
  password:'123456',
  age: rand(18..80)
)

user3 = User.create(
  first_name: "Adam",
  last_name: "Mazur",
  email: "amazur@covidia.com",
  role: 'user',
  country_origin: 'United States',
  password:'123456',
  age: rand(18..80)
)

user4 = User.create(
  first_name: "Santiago",
  last_name: "Ventura",
  email: "sventura@covidia.com",
  role: 'user',
  country_origin: 'United States',
  password:'123456',
  age: rand(18..80)
)

10.times do |i|
  User.create(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: "user#{i}@test.com",
  role: 'user',
  country_origin: Faker::Address.country,
  password:'123456',
  age: rand(18..80)
  )
end

#this is issuer seed



# VACCINES
# CREATED BY ADMIN IN UI
covid=Vaccine.create(name:'Covid-19', manufacturer:'BioNTech', user_id: admin.id)
flu=Vaccine.create(name:'Influenza', manufacturer:'GlaxoSmithKline', user_id: admin.id)
sars=Vaccine.create(name:'SARS', manufacturer:'Johnson & Johnson', user_id: admin.id)
mers=Vaccine.create(name:'MERS', manufacturer:'Novavax', user_id: admin.id)
tetanus=Vaccine.create(name:'Tetanus', manufacturer:'GlaxoSmithKline', user_id: admin.id)
covid2=Vaccine.create(name:'Covid-19', manufacturer:'Pfizer', user_id: admin.id)
covid3=Vaccine.create(name:'Covid-19', manufacturer:'Johnson & Johnson', user_id: admin.id)
hpv=Vaccine.create(name:'HPV', manufacturer:'GlaxoSmithKline', user_id: admin.id)
meningococcal=Vaccine.create(name:'Meningococcal', manufacturer:'Pfizer', user_id: admin.id)
yellowfever=Vaccine.create(name:'Yellow Fever', manufacturer:'Sanofi Pastuer Biologics Co.', user_id: admin.id)
diphtheria=Vaccine.create(name:'Diphtheria', manufacturer:'GlaxoSmithKline', user_id: admin.id)
hib=Vaccine.create(name:'Haemophilus Influenzae Type B', manufacturer:'Sanofi Pastuer Biologics Co.', user_id: admin.id)
pneumococcal=Vaccine.create(name:'Pneumococcal', manufacturer:'Merck Sharp & Dohme Corp.', user_id: admin.id)
measles=Vaccine.create(name:'Measles', manufacturer:'Merck Sharp & Dohme Corp.', user_id: admin.id)
smallpox=Vaccine.create(name:'Smallpox', manufacturer:'Sanofi Pastuer Biologics Co.', user_id: admin.id)


# VACCINATION (VaccineWallet)
# CREATED BY ISSUER IN UI but add holder id in DB

Vaccination.create(user_id: 16, vaccine_id: covid.id, issuer_name:'walmart', issuer_id: walmart.id)
Vaccination.create(user_id: 18, vaccine_id: flu.id, issuer_name:'cvs', issuer_id: cvs.id)
Vaccination.create(user_id: 22, vaccine_id: sars.id, issuer_name:'walgreens', issuer_id: walgreens.id)
Vaccination.create(user_id:user1.id, vaccine_id: flu.id,  issuer_name:'Salt Lake County Health Department', issuer_id: slcohd.id)
Vaccination.create(user_id:user1.id, vaccine_id: covid3.id,  issuer_name:'Salt Lake County Health Department', issuer_id: slcohd.id)
Vaccination.create(user_id:user2.id, vaccine_id: flu.id,  issuer_name:'Salt Lake County Health Department', issuer_id: slcohd.id)
Vaccination.create(user_id:user2.id, vaccine_id: covid3.id,  issuer_name:'Salt Lake County Health Department', issuer_id: slcohd.id)
Vaccination.create(user_id:user3.id, vaccine_id: flu.id,  issuer_name:'Salt Lake County Health Department', issuer_id: slcohd.id)
Vaccination.create(user_id:user3.id, vaccine_id: covid2.id,  issuer_name:'Salt Lake County Health Department', issuer_id: slcohd.id)
Vaccination.create(user_id:user4.id, vaccine_id: flu.id,  issuer_name:'Salt Lake County Health Department', issuer_id: slcohd.id)
Vaccination.create(user_id:user4.id, vaccine_id: covid.id,  issuer_name:'Salt Lake County Health Department', issuer_id: slcohd.id)
Vaccination.create(user_id: 16, vaccine_id: covid2.id, issuer_name:'walmart', issuer_id: walmart.id)
Vaccination.create(user_id: 17, vaccine_id: yellowfever.id, issuer_name:'cvs', issuer_id: cvs.id)
Vaccination.create(user_id: 18, vaccine_id: sars.id, issuer_name:'walgreens', issuer_id: walgreens.id)
Vaccination.create(user_id: 19, vaccine_id: hpv.id, issuer_name:'ihc', issuer_id: ihc.id)
Vaccination.create(user_id: 20, vaccine_id: covid3.id, issuer_name:'Salt Lake County Health Department', issuer_id: slcohd.id)

# REquired VACCINATION
# CREATED BY Verifer IN UI 
RequiredVaccine.create(user_id:delta.id, vaccine_id:covid.id)
RequiredVaccine.create(user_id:delta.id, vaccine_id:flu.id)
RequiredVaccine.create(user_id:usa.id, vaccine_id:covid.id)
RequiredVaccine.create(user_id:usa.id, vaccine_id:flu.id)
RequiredVaccine.create(user_id:usa.id, vaccine_id:sars.id)
RequiredVaccine.create(user_id:mexico.id, vaccine_id:tetanus.id)
RequiredVaccine.create(user_id:mexico.id, vaccine_id:covid.id)
RequiredVaccine.create(user_id:southwest.id, vaccine_id:flu.id)
RequiredVaccine.create(user_id:southwest.id, vaccine_id:covid.id)
RequiredVaccine.create(user_id:devpointlabs.id, vaccine_id:smallpox.id)
RequiredVaccine.create(user_id:devpointlabs.id, vaccine_id:covid.id)

puts 'completed'