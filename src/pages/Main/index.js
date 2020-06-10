import React, { useEffect, useState } from 'react'
import { Container, Content } from './styles'
import queryString from 'query-string'
import { getCasesByCountry } from '../../services/api'

import Header from '../../components/Header'
import Graph from '../../components/Graph'
import Info from '../../components/Info'
import Footer from '../../components/Footer'

function Main({ location }) {
  const { search } = location
  const { country } = queryString.parse(search)
  const [cases, setCases] = useState({})

  const getCases = async country => {
    const response = await getCasesByCountry(country)
    setCases(response)
  }

  useEffect(() => {
    getCases(country)
  }, [country])

  return (
    <Container>
      <Header />
      <Content>
        <Graph cases={cases} />
        <Info cases={cases} />
      </Content>
      <Footer />
    </Container>
  )
}

export default Main
