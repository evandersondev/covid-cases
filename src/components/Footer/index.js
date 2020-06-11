import React from 'react'

import { Container } from './styles'

function Footer() {
  return (
    <Container>
      <p>
        &copy; 2020 - made by{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://evandersondev.netlify.app"
        >
          evandersondev
        </a>
      </p>
    </Container>
  )
}

export default Footer
