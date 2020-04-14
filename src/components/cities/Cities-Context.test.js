import React from 'react'
import { render } from '@testing-library/react'

import {CitiesProvider} from './Cities-Context'

test('CitiesProvider test', () => {
  const tree = (
    <CitiesProvider>
      <div>Cities</div>
    </CitiesProvider>
  )
  const { getByText } = render(tree)
  expect(getByText(/^Cities/)).toHaveTextContent('Cities')
})
