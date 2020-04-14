import React from 'react'
import renderer from 'react-test-renderer'

import {DEFAULT_MARKER} from '../CitiesMap-Constants'
import {CitiesMapMarkerInfo} from './CitiesMapMarkerInfo'

test('CitiesMapMarkerInfo test', () => {
  const marker = DEFAULT_MARKER
  const component = renderer.create(
    <CitiesMapMarkerInfo  marker={marker} />,
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
