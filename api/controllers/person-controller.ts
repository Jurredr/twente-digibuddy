import persons from '../models/person-model'

async function createPerson(
  name: String,
  position: String,
  company: String,
  bubbleLatitude: Number,
  bubbleLongtitude: Number
) {
  return await persons
    .create({
      name,
      position,
      company,
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

async function getPersons() {
  return await persons
    .find({})
    .then((personsList) => {
      return personsList
    })
    .catch((error: Error) => {
      throw error
    })
}

async function getPerson(name: String) {
  return await persons
    .findOne({ name })
    .then((data) => {
      return data
    })
    .catch((error: Error) => {
      throw error
    })
}

export default {
  createPerson,
  getPersons,
  getPerson,
}
