import { Request, Response, Router } from 'express'
import CompanyController from '../controllers/company-controller'

const router = Router()

router.post('/companies', async (req: Request, res: Response) => {
  await CompanyController.createCompany(
    req.body.data.linkedin_url,
    req.body.data.name,
    req.body.data.company_size,
    req.body.data.industry,
    req.body.data.about,
    req.body.data.website,
    req.body.data.founded,
    req.body.data.headquarters_city,
    req.body.data.address,
    req.body.data.bubble_latitude,
    req.body.data.bubble_longtitude
  )
    .then(() => {
      res.send('Successfully added company')
    })
    .catch((error: Error) => {
      return res.status(400).send(error)
    })
})

router.get('/companies', async (res: Response) => {
  await CompanyController.getCompanies()
    .then((company) => {
      res.send(company)
    })
    .catch((error: Error) => {
      return res.status(400).send(error)
    })
})

router.get('/companies/:url', async (req: Request, res: Response) => {
  await CompanyController.getCompany(req.params.url)
    .then((company) => {
      res.send(company)
    })
    .catch((error: Error) => {
      return res.status(400).send(error)
    })
})

module.exports = router
