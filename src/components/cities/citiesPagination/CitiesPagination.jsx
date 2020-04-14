import React from 'react'
import {Pagination} from 'react-bootstrap'

import {useCitiesPaginationController} from './CitiesPagination-Controller'

export function CitiesPagination(props) {
  const {nbItems} = props
  const {
    pageActive,
    NB_PAGES,
    BEFORE_PAGE,
    NEXT_PAGE,
    updatePagination
  } = useCitiesPaginationController(nbItems)

  return (
    <Pagination size='sm'>
      <Pagination.First disabled={pageActive === 1} onClick={() => updatePagination(1)} />
      <Pagination.Prev disabled={pageActive === 1} onClick={() => updatePagination(pageActive - 1)} />
      {BEFORE_PAGE >= 1 && <Pagination.Item onClick={() => updatePagination(BEFORE_PAGE)}>{BEFORE_PAGE}</Pagination.Item>}
      <Pagination.Item active>{pageActive}</Pagination.Item>
      {NEXT_PAGE <= NB_PAGES && <Pagination.Item onClick={() => updatePagination(NEXT_PAGE)}>{NEXT_PAGE}</Pagination.Item>}
      <Pagination.Next disabled={pageActive === NB_PAGES} onClick={() => updatePagination(pageActive + 1)} />
      <Pagination.Last disabled={pageActive === NB_PAGES} onClick={() => updatePagination(NB_PAGES)} />
    </Pagination>
  )
}
