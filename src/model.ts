export interface CityObj {
  cityName: string
  country: string
  date: string
  emoji: string
  notes: string
  id?: number
  position: {
    lat: number
    lng: number
  }
}

export interface CountryObj {
  country: string
  emoji: string
}

export interface User {
  name: string
  email: string
  password: string
  avatar: string
}
