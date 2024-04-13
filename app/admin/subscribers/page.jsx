/**
 * subscribers/page.jsx
 */

import SubsTable from '@/components/admin/subscribers/subs-table'
import prisma from '@/lib/prismadb'
import React from 'react'


// const data = [
//   {
//     name: 'Viola Amherd',
//     Role: 'Federal Councillor',
//     departement:
//       'The Federal Department of Defence, Civil Protection and Sport (DDPS)',
//     status: 'active',
//   },
//   {
//     name: 'Albert Rösti',
//     Role: 'Federal Councillor',
//     departement:
//       'The Federal Department of the Environment, Transport, Energy and Communications (DETEC)',
//     status: 'active',
//   },
//   {
//     name: 'Beat Jans',
//     Role: 'Federal Councillor',
//     departement: 'The Federal Department of Justice and Police (FDJP)',
//     status: 'active',
//   },
//   {
//     name: 'Ignazio Cassis',
//     Role: 'Federal Councillor',
//     departement: 'The Federal Department of Foreign Affairs (FDFA)',
//     status: 'active',
//   },
//   {
//     name: 'Karin Keller-Sutter',
//     Role: 'Federal Councillor',
//     departement: 'The Federal Department of Finance (FDF)',
//     status: 'active',
//   },
//   {
//     name: 'Guy Parmelin',
//     Role: 'Federal Councillor',
//     departement:
//       'The Federal Department of Economic Affairs, Education and Research (EAER)',
//     status: 'active',
//   },
//   {
//     name: 'Elisabeth Baume-Schneider',
//     Role: 'Federal Councillor',
//     departement: 'The Federal Department of Home Affairs (FDHA)',
//     status: 'active',
//   },
// ];

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