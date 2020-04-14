import React from 'react'

export function CitiesMapMarkerInfo(props) {
  const {marker} = props

  return (
    <span>
      City: {marker.city}<br/>
      Growth from 2000 to 2013: {marker.growth_from_2000_to_2013}<br/>
      Population: {marker.population}<br/>
      Rank: {marker.rank}<br/>
      State: {marker.state}
    </span>
  )
}
