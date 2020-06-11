import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import countries from 'utils/namesOfCountries'

import { Container } from './styles'
import Logo from 'assets/logo.png'

export default () => {
  const history = useHistory()
  const country = useParams().country

  const getCountryForQuery = ({ target: { value } }) => {
    return history.push(`/${value}`)
  }

  return (
    <Container>
      <h1>
        C<img src={Logo} alt="Covid cases" />
        vid Cases
      </h1>

      <select
        onChange={getCountryForQuery}
        defaultValue={country}
        name="country"
        id="country"
      >
        {countries.map(country => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </Container>
  )
}
