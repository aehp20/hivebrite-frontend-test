import React from 'react'
import styled from 'styled-components'
import { Map } from 'react-leaflet'

export const StyledMapContainer = styled.div`
  height: 100%;
  width: 100%;
`

export const CustomMap = ({ className, children, center, zoom }) => (
  <Map center={center} zoom={zoom} className={className}>
    {children}
  </Map>
)

export const StyledMap = styled(CustomMap)`
  height: 100%;
`
