export interface ApiCompany {
  linkedinUrl: string
  name: string
  companySize: string
  industry: string
  about: string
  website: string
  founded: string
  headquartersCity: string
  address: string
  bubbleLatitude: number
  bubbleLongtitude: number
}

export interface Marker {
  name: string
  location: Array<number>
  tags: Array<string>
  person?: object
  company?: ApiCompany
}
