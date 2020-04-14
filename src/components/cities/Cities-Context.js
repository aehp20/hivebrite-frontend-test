import React, { createContext, useState, useContext } from 'react'

import {DEFAULT_MARKER} from './citiesMap/CitiesMap-Constants.js'

const CitiesContext = createContext({})

export function CitiesProvider(props) {
  const initialCitiesData = {
    marker: DEFAULT_MARKER,
    pageActive: 1,
    nbItemsByPage: 10
  }
  const [citiesData, setCitiesData] = useState(initialCitiesData)

  const value = {
    citiesData,
    setCitiesData
  }

  return (
    <CitiesContext.Provider value={value}>{props.children}</CitiesContext.Provider>
  )
}

export const useCitiesContext = () => {
  return useContext(CitiesContext)
}
