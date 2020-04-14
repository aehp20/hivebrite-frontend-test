import React from 'react'

import { Cities } from './components/cities'
import { Wrapper } from './App-Styles'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'leaflet/dist/leaflet.css'

const App = () => (
  <Wrapper>
    <Cities />
  </Wrapper>
)

export default App
