import React from 'react'
import {Marker, Popup} from 'react-leaflet'

import {StyledMapContainer, StyledMap} from './CitiesMap-Styles'
import {DEFAULT_ZOOM} from './CitiesMap-Constants'
import {CitiesMapIcon} from './citiesMapIcon'
import {CitiesMapTitleLayer} from './citiesMapTitleLayer'
import {CitiesMapMarkerInfo} from './citiesMapMarkerInfo'
import {useCitiesContext} from '../Cities-Context'

export function CitiesMap() {
  const {citiesData} = useCitiesContext()
  const {marker} = citiesData
  const position = [marker.latitude, marker.longitude]

  return (
    <StyledMapContainer>
      <StyledMap center={position} zoom={DEFAULT_ZOOM}>
        <CitiesMapTitleLayer />
        <Marker position={position} icon={CitiesMapIcon}>
          <Popup>
            <CitiesMapMarkerInfo marker={marker}/>
          </Popup>
        </Marker>
      </StyledMap>
    </StyledMapContainer>
  )
}
