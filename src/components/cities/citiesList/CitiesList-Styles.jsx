import React from 'react'
import styled from 'styled-components'
import {Row} from 'react-bootstrap'

export const CustomRow = ({ className, children, key }) => (
  <Row key={key} className={className}>
    {children}
  </Row>
)

export const StyledRow = styled(CustomRow)`
  border-style: solid;
  border-color: #6c757d;
  border-width: 1px;
  margin: 6px 0px;
  width: 210px;
  color: #007bff;
  font-size: 12px;
  height: 40px;
  text-align: center;
  align-items: center;
`

export const StyledSpan = styled.span`
  cursor: pointer;
`
