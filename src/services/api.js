import { create } from 'axios'

const api = create({
  baseURL: 'http://coronavirus-19-api.herokuapp.com/countries',
})

const headers = {
  mode: 'cors',
  cache: 'default',
}

export default {
  async getCasesByCountry(country = 'World') {
    const {
      data: { todayCases, todayDeaths, deaths, recovered },
    } = await api.get(`/${country}`, headers)

    return { todayCases, todayDeaths, deaths, recovered }
  },

  async getNamesAllCountries() {
    const { data } = await api.get('/', headers)
    const countries = data.map(({ country }) => country)

    return countries
  },
}
