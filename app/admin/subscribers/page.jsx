/**
 * subscribers/page.jsx
 */

import SubsTable from '@/components/admin/subscribers/subs-table'
import prisma from '@/lib/prismadb'
import React from 'react'

const SubscribersPage = async () => {

  const res = await prisma.subscriber.findMany()

  return (
    <section className='max-w-7xl mx-auto w-full pt-4 pb-5 space-y-5'>
      <h1 className='text-3xl px-3 text-gray-600'>Subscribers</h1>
      <SubsTable data={res} />
    </section>
  )
}

export default SubscribersPage