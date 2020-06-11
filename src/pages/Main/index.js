import React, { useEffect, useState } from 'react'
import { Container, Content } from './styles'
import api from 'services/api'

import Header from 'components/Header'
import Graph from 'components/Graph'
import Info from 'components/Info'
import Footer from 'components/Footer'

function Main({ match }) {
  const { country } = match.params
  const [cases, setCases] = useState({})
  const casesIsEmpty = Object.keys(cases).length !== 0

  const getCases = async (country = 'World') => {
    const response = await api.getCasesByCountry(country)
    setCases(response)
  }

  useEffect(() => {
    getCases(country)
  }, [country])

  return (
    <Container>
      <Header />
      {casesIsEmpty && (
        <Content>
          <Graph cases={cases} />
          <Info cases={cases} />
        </Content>
      )}
      <Footer />
    </Container>
  )
}

export default Main
