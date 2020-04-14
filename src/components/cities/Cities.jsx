import React from 'react'
import {Container} from 'react-bootstrap'

import {CitiesProvider} from './Cities-Context'
import {useCitiesController} from './Cities-Controller'
import {CitiesMap} from './citiesMap'
import {CitiesList} from './citiesList'
import {CitiesPagination} from './citiesPagination'

import {StyledTitle, StyledRow, StyledCol, StyledColMain} from './Cities-Styles'

export function Cities() {
  const {cities} = useCitiesController()
  const nbItems = cities.length

  return (
    <CitiesProvider>
      <Container>
        <StyledTitle>Cities</StyledTitle>
        <StyledRow>
          <StyledCol>
            <CitiesList cities={cities} />
            <CitiesPagination nbItems={nbItems} />
          </StyledCol>
          <StyledColMain>
            <CitiesMap />
          </StyledColMain>
        </StyledRow>
      </Container>
    </CitiesProvider>
  )
}
