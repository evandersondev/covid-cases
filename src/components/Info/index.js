import React from 'react'
import { numberFormate } from '../../utils/numberFormat'

import { Container } from './styles'

function Info({ cases }) {
  return (
    <Container>
      <table className="border-radius">
        <thead>
          <tr>
            <th>Today Cases</th>
            <th>Today Deaths</th>
            <th>Total / Deaths</th>
            <th>Total / Recovered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{cases && numberFormate(cases).todayCases}</td>
            <td>{cases && numberFormate(cases).todayDeaths}</td>
            <td>{cases && numberFormate(cases).deaths}</td>
            <td>{cases && numberFormate(cases).recovered}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default Info
