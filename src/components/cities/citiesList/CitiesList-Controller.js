import {useCitiesContext} from '../Cities-Context'

export function useCitiesListController(cities) {
  const {citiesData, setCitiesData} = useCitiesContext()
  const {pageActive, nbItemsByPage} = citiesData

  const NB_ITEMS = cities.length
  const NB_ITEMS_BY_PAGE = nbItemsByPage
  const START_INDEX = (pageActive - 1) * NB_ITEMS_BY_PAGE
  const TEMP_END_INDEX = START_INDEX + NB_ITEMS_BY_PAGE
  const END_INDEX = TEMP_END_INDEX > NB_ITEMS ? NB_ITEMS : TEMP_END_INDEX

  let items = []
  for (let index=START_INDEX; index<END_INDEX; index++) {
    items.push(cities[index])
  }

  function updateMarker(marker) {
    const newCitiesData = {...citiesData, marker}
    setCitiesData(newCitiesData)
  }

  return {
    items,
    updateMarker
  }
}
