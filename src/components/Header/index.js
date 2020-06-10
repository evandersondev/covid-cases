import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getNamesAllCountries } from '../../services/api'

import { Container } from './styles'
import Logo from '../../assets/logo.png'

export default () => {
  const history = useHistory()
  const [countries, setCountries] = useState([])

  const getCountryForQuery = ({ target: { value } }) => {
    return history.push(`/?country=${value}`)
  }

  const getNamesOfCountries = async () => {
    const response = await getNamesAllCountries()
    setCountries(response)
  }

  useEffect(() => {
    getNamesOfCountries()
  }, [])

  return (
    <Container>
      <h1>
        C<img src={Logo} alt="Covid cases" />
        vid Cases
      </h1>

      <select onChange={getCountryForQuery} name="country" id="country">
        {countries.map(country => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </Container>
  )
}
