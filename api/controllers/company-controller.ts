import companies from '../models/company-model'

async function createCompany(
  linkedinUrl: String,
  name: String,
  companySize: String,
  industry: String,
  about: String,
  website: String,
  founded: String,
  headquartersCity: String,
  address: String,
  bubbleLatitude: Number,
  bubbleLongtitude: Number
) {
  return await companies
    .create({
      linkedinUrl,
      name,
      companySize,
      industry,
      about,
      website,
      founded,
      headquartersCity,
      address,
      bubbleLatitude,
      bubbleLongtitude,
    })
    .then((data) => {
      return data
    })
    .catch((error: Error) => {
      throw error
    })
}

async function getCompanies() {
  await companies
    .find({})
    .then((companyList) => {
      return companyList
    })
    .catch((error: Error) => {
      throw error
    })
}

async function getCompany(linkedinUrl: String) {
  return await companies
    .findOne({ linkedinUrl })
    .then((data) => {
      return data
    })
    .catch((error: Error) => {
      throw error
    })
}

export default {
  createCompany,
  getCompanies,
  getCompany,
}
