import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Main from './pages/Main'

export default () => (
  <BrowserRouter>
    <Route exact path="/" component={Main} />
  </BrowserRouter>
)
