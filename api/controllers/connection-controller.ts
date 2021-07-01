import connections from '../models/connection-model'

async function createConnection(
  company1: String,
  company2: String,
  type: String
) {
  return await connections
    .create({
      company1,
      company2,
      type,
    })
    .then((data) => {
      return data
    })
    .catch((error: Error) => {
      throw error
    })
}

async function getConnections(company: String) {
  await connections
    .find({ company1: company })
    .then(async (personsList) => {
      await connections.find({ company2: company }).then((personsList2) => {
        return personsList.concat(personsList2)
      })
    })
    .catch((error: Error) => {
      throw error
    })
}

export default {
  createConnection,
  getConnections,
}
