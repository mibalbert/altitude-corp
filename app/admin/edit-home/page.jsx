/**
 * edit-home/page.jsx
 */

import React from 'react'
import EditHomePage from '../../../components/EditHomePage'

const EditHome = async () => {
  
  const data = await prisma.home.findMany({})


  return (
    <div><EditHomePage data={data} /></div>
  )
}

export default EditHome