import { create } from 'axios'

const api = create({
  baseURL: 'http://coronavirus-19-api.herokuapp.com/countries',
})

export default {
  async getCasesByCountry(country = 'World') {
    const {
      data: { todayCases, todayDeaths, deaths, recovered },
    } = await api.get(`/${country}`)

    return { todayCases, todayDeaths, deaths, recovered }
  },

  async getNamesAllCountries() {
    const { data } = await api.get('/')
    const countries = data.map(({ country }) => country)

    return countries
  },
}
