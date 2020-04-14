import React from 'react'
import {Col} from 'react-bootstrap'

import {useCitiesListController} from './CitiesList-Controller'
import {StyledRow, StyledSpan} from './CitiesList-Styles'

export function CitiesList(props) {
  const {cities} = props
  const {items, updateMarker} = useCitiesListController(cities)

  return (
    <div>
      {
        items.map((item, index) => (
          <StyledRow key={index}>
            <Col>
              <StyledSpan onClick={() => updateMarker(item)}>{item.city}</StyledSpan>
            </Col>
          </StyledRow>
        ))
      }
    </div>
  )
}
