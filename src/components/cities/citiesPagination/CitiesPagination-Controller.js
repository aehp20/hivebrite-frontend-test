import {useCitiesContext} from '../Cities-Context'

export function useCitiesPaginationController(nbItems) {
  const {citiesData, setCitiesData} = useCitiesContext()
  const {pageActive, nbItemsByPage} = citiesData

  const NB_PAGES = Math.ceil(nbItems / nbItemsByPage)
  const BEFORE_PAGE = pageActive - 1
  const NEXT_PAGE = pageActive + 1

  function updatePagination(pageActive) {
    const newCitiesData = {...citiesData, pageActive}
    setCitiesData(newCitiesData)
  }

  return {
    pageActive,
    NB_PAGES,
    BEFORE_PAGE,
    NEXT_PAGE,
    updatePagination
  }
}
