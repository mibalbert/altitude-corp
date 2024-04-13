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
                        <TableHeaderCell>Email</TableHeaderCell>
                        <TableHeaderCell>Subscribed At</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((el) => (
                        <TableRow key={el.id}>
                            <TableCell>{el.email}</TableCell>
                            <TableCell>
                                {el.subscribedAt.toISOString()}

                            </TableCell>
                            <TableCell>
                                <Badge color={el.active ? "emerald" : "gray"} icon={RiFlag2Line}>
                                    {el.active ? "Active" : "Unsubscribed"}
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
