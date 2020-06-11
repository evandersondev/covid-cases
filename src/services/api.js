import { create } from 'axios'

const api = create({
  baseURL: 'http://coronavirus-19-api.herokuapp.com/countries',
})

export default {
  async getCasesByCountry(country = 'World') {
    const {
      data: { todayCases, todayDeaths, deaths, recovered },
    } = await api.get(`/${country}`, {
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
        cache: 'default',
      },
    })

    return { todayCases, todayDeaths, deaths, recovered }
  },

  async getNamesAllCountries() {
    const { data } = await api.get('/', {
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
        cache: 'default',
      },
    })
    const countries = data.map(({ country }) => country)

    return countries
  },
}
