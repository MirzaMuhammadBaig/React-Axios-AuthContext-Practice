import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PersonCard from './PersonCard'

function Person() {

  const [data, setData] = useState([])

  useEffect(() => {

    let url = 'https://api.github.com/users'

    axios.get(url)
      .then((item) => {
        console.log(item.data)
        setData(item.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  return (
    <>
      <div className='row g-2 text-center'>
        {
          data.map((item) => {
            return (
              <PersonCard item={item} />
            )
          })
        }
      </div>
    </>

  )
}

export default Person