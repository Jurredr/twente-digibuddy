import { Request, Response, Router } from 'express'
import ConnectionController from '../controllers/connection-controller'

const router = Router()

router.post('/connections', async (req: Request, res: Response) => {
  await ConnectionController.createConnection(
    req.body.data.company1,
    req.body.data.company2,
    req.body.data.type
  )
    .then(() => {
      res.send('Successfully added connection')
    })
    .catch((error: Error) => {
      return res.status(400).send(error)
    })
})

router.get('/connections/:company', async (req: Request, res: Response) => {
  await ConnectionController.getConnections(req.params.company)
    .then((connections) => {
      res.send(connections)
    })
    .catch((error: Error) => {
      return res.status(400).send(error)
    })
})

module.exports = router
