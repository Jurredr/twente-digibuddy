import { Request, Response, Router } from 'express'
import CompanyController from '../controllers/company-controller'

const router = Router()

router.post('/companies', async (req: Request, res: Response) => {
  await CompanyController.createCompany(
    req.body.data.linkedinUrl,
    req.body.data.name,
    req.body.data.companySize,
    req.body.data.industry,
    req.body.data.about,
    req.body.data.website,
    req.body.data.founded,
    req.body.data.headquartersCity,
    req.body.data.address,
    req.body.data.bubbleLatitude,
    req.body.data.bubbleLongtitude
  )
    .then(() => {
      res.send('Successfully added company')
    })
    .catch((error: Error) => {
      return res.status(400).send(error)
    })
})

router.get('/companies', async (_req: Request, res: Response) => {
  await CompanyController.getCompanies()
    .then((companyList) => {
      res.send(companyList)
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
