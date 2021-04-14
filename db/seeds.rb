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
delta = User.create(name:'Delta', email: 'delta@test.com', role:'issuer', password:'123456')
usa = User.create(name:'USA', email: 'usa@test.com', role:'issuer', password:'123456')
mexico = User.create(name:'mexico', email: 'mexico@test.com', role:'issuer', password:'123456')
sizzler = User.create(name:'sizzler', email: 'sizzler@test.com', role:'issuer', password:'123456')

#many users
bob = User.create(
name: "bob",
email: "bob@test.com",
role: 'user',
country_origin: Faker::Address.country,
password:'123456'
)

sally = User.create(
  name: "sally",
  email: "sally@test.com",
  role: 'user',
  country_origin: Faker::Address.country,
  password:'123456'
)

jill = User.create(
  name: "jill",
  email: "jill@test.com",
  role: 'user',
  country_origin: Faker::Address.country,
  password:'123456'
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

Vaccination.create(user_id:jill.id, vaccine_id: covid.id, image:'pic here of jill covid card')
Vaccination.create(user_id:jill.id, vaccine_id: flu.id, image:'pic here of jil flu shot')
Vaccination.create(user_id:jill.id, vaccine_id: sars.id, image:'pic here of jill sar shot')
Vaccination.create(user_id:bob.id, vaccine_id: sars.id, image:'pic here of bob sar shot')
Vaccination.create(user_id:bob.id, vaccine_id: covid.id, image:'pic here of bob covid shot')

# REquired VACCINATION
# CREATED BY Verifer IN UI 
RequiredVaccine.create(user_id:delta.id, vaccine_id:covid.id)
RequiredVaccine.create(user_id:delta.id, vaccine_id:flu.id)
RequiredVaccine.create(user_id:delta.id, vaccine_id:sars.id)
RequiredVaccine.create(user_id:usa.id, vaccine_id:covid.id)
RequiredVaccine.create(user_id:usa.id, vaccine_id:flu.id)
RequiredVaccine.create(user_id:usa.id, vaccine_id:sars.id)
