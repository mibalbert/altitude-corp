/**
 * subscribers/subs-table.jsx
 */

"use client"

import React from 'react'

import { RiFlag2Line } from '@remixicon/react';
import {
    Badge,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';


const SubsTable = ({ data }) => {
    return (
        <section className=' border p-8 rounded-lg border-gray-400'>
            {/* <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">List of Swiss Federal Councillours</h3> */}
            <Table className="">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Position</TableHeaderCell>
                        <TableHeaderCell>Department</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((sub) => (
                        <TableRow key={sub.id}>
                            <TableCell>{sub.email}</TableCell>
                            <TableCell>
                                {sub.subscribedAt}
                            </TableCell>
                            <TableCell>
                                <Badge color="emerald" icon={RiFlag2Line}>
                                    {sub.active}
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
    )
}

export default SubsTable
