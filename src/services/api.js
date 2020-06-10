import { create } from 'axios'

const api = create({
  baseURL: 'http://coronavirus-19-api.herokuapp.com/countries',
})

export const getCasesByCountry = async (country = 'World') => {
  const {
    data: { todayCases, todayDeaths, deaths, recovered },
  } = await api.get(`/${country}`)

  return { todayCases, todayDeaths, deaths, recovered }
}

export const getNamesAllCountries = async () => {
  const { data } = await api.get()
  const countries = data.map(contry => contry.country)

  return countries
}
