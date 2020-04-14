import {useEffect, useState} from 'react'

import api from '../../common/services/api'
import {HTTP_REQUEST_OK} from '../../common/constants/http-codes'
import {CITIES_API_URL} from './Cities-Constants'

export function useCitiesController() {
  const [cities, setCities] = useState([])
  
  useEffect(() => {
    getCities()
  }, [])

  function getCities() {
    api
      .get(CITIES_API_URL)
      .then(res => {
        if (res.status === HTTP_REQUEST_OK) {
          setCities(res.data)
        } else {
          console.log(res.error)
        }
      })
      .catch(error => {
        console.log(error)
      })
  } 

  return {
    cities
  }
}
