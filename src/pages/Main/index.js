import React, { useEffect, useState } from 'react'
import { Container, Content } from './styles'
import api from 'services/api'
import ReactLoading from 'react-loading'

import Header from 'components/Header'
import Graph from 'components/Graph'
import Info from 'components/Info'
import Footer from 'components/Footer'

function Main({ match }) {
  const { country } = match.params
  const [cases, setCases] = useState({})
  const [loading, setLoading] = useState(false)
  const casesIsEmpty = Object.keys(cases).length !== 0

  const getCases = async () => {
    setLoading(true)
    const response = await api.getCasesByCountry(country)
    setCases(response)
    setLoading(false)
  }

  useEffect(() => {
    getCases()
  }, [country])

  return (
    <Container>
      <Header />
      {casesIsEmpty && (
        <Content>
          {loading && (
            <ReactLoading
              type={'spinningBubbles'}
              color={'#F79595'}
              height={'10%'}
              width={'10%'}
              className="loading"
            />
          )}
          <Graph cases={cases} />
          <Info cases={cases} />
        </Content>
      )}
      <Footer />
    </Container>
  )
}

export default Main
