import React from 'react'
import { numberFormate } from '../../utils/numberFormat'

import { Container } from './styles'

function Info({ cases }) {
  return (
    <Container>
      <table>
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
            <td>{numberFormate(cases).todayCases}</td>
            <td>{numberFormate(cases).todayDeaths}</td>
            <td>{numberFormate(cases).deaths}</td>
            <td>{numberFormate(cases).recovered}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default Info
