import { Request, Response, Router } from 'express'
import PersonController from '../controllers/person-controller'

const router = Router()

router.post('/persons', async (req: Request, res: Response) => {
  await PersonController.createPerson(
    req.body.data.name,
    req.body.data.position,
    req.body.data.company,
    req.body.data.bubble_latitude,
    req.body.data.bubble_longtitude
  )
    .then(() => {
      res.send('Successfully added person')
    })
    .catch((error: Error) => {
      return res.status(400).send(error)
    })
})

router.get('/persons', async (res: Response) => {
  await PersonController.getPersons()
    .then((persons) => {
      res.send(persons)
    })
    .catch((error: Error) => {
      return res.status(400).send(error)
    })
})

router.get('/persons/:name', async (req: Request, res: Response) => {
  await PersonController.getPerson(req.params.name)
    .then((person) => {
      res.send(person)
    })
    .catch((error: Error) => {
      return res.status(400).send(error)
    })
})

module.exports = router
