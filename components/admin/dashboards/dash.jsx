/**
 * components/admin/dashboard/dash.jsx
 */

"use client"

import Link from 'next/link'
import { useAdminSideNav } from "@/hooks/use-admin-sidebar";
import { cn } from "@/lib/utils";



import { Tracker } from '@tremor/react';

import { AreaChart, Card, Title } from '@tremor/react';

import { BarChart } from '@tremor/react';

const barChartData = [
    {
        date: 'Jan 23',
        Running: 167,
    },
    {
        date: 'Feb 23',
        Running: 125,
    },
    {
        date: 'Mar 23',
        Running: 156,
    },
    {
        date: 'Apr 23',
        Running: 165,
    },
    {
        date: 'May 23',
        Running: 153,
    },
    {
        date: 'Jun 23',
        Running: 124,
    },
    {
        date: 'Jul 23',
        Running: 164,
    },
    {
        date: 'Aug 23',
        Running: 123,
    },
    {
        date: 'Sep 23',
        Running: 132,
    },
];
const chartdata = [
    {
        date: 'Jan 23',
        Running: 167,
    },
    {
        date: 'Feb 23',
        Running: 125,
    },
    {
        date: 'Mar 23',
        Running: 156,
    },
    {
        date: 'Apr 23',
        Running: 165,
    },
    {
        date: 'May 23',
        Running: 153,
    },
    {
        date: 'Jun 23',
        Running: 124,
    },

]

const Dash = ({ totalPosts, totalSubs, totalViews }) => {


    const customTooltip = (props) => {
        const { payload, active } = props;
        if (!active || !payload) return null;
        return (
            <div className="w-56 rounded-tremor-default mt-10 border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
                {payload.map((category, idx) => (
                    <div key={idx} className="flex flex-1 space-x-2.5">
                        <div
                            className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
                        />
                        <div className="space-y-1">
                            <p className="text-tremor-content">{category.dataKey}</p>
                            <p className="font-medium text-tremor-content-emphasis">
                                {category.value} bpm
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };


    const customBarTooltip = (props) => {
        const { payload, active } = props;
        if (!active || !payload) return null;
        return (
            <div className="w-56 rounded-tremor-default mt-10 border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
                {payload.map((category, idx) => (
                    <div key={idx} className="flex flex-1 space-x-2.5">
                        <div
                            className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
                        />
                        <div className="space-y-1">
                            <p className="text-tremor-content">{category.dataKey}</p>
                            <p className="font-medium text-tremor-content-emphasis">
                                {category.value} bpm
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    const isOpen = useAdminSideNav((state) => state.isOpen);

    return (
        <section className={cn("w-full  max-w-6xl mx-20", { "mx-auto ": !isOpen })}>
            <div className="flex px-3 pt-4">
                <h1 className="text-4xl font-semibold text-gray-600">Hi, Admin!</h1>
            </div>

            <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-3 pt-5 pb-10 w-full gap-10">

                <div className="h-[450px] w-full border border-gray-400 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group hover:scale-[101%]">
                    <div className="h-4/5  w-full relative flex items-end">
                        <div className="absolute top-1/3 right-5 text-9xl font-bold text-gray-300">
                            {totalPosts}
                        </div>
                        <div className="mx-auto flex flex-col w-full h-2/3 pt-16 relative justify-end    px-6 py-3.5    transition-all duration-700">

                            {/* <div
                            > */}
                                <Tracker
                                className="h-1/3 group-hover:h-2/4 transition-all duration-200   "

                                    data={[
                                        { color: 'emerald', tooltip: 'Tracker Info' },
                                        { color: 'emerald', tooltip: 'Tracker Info' },
                                        { color: 'yellow', tooltip: 'Tracker Info' },
                                        { color: 'emerald', tooltip: 'Tracker Info' },
                                        { color: 'red', tooltip: 'Tracker Info' },
                                        { color: 'emerald', tooltip: 'Tracker Info' },
                                        { color: 'yellow', tooltip: 'Tracker Info' },
                                        { color: 'emerald', tooltip: 'Tracker Info' },
                                        { color: 'emerald', tooltip: 'Tracker Info' },
                                        { color: 'red', tooltip: 'Tracker Info' },
                                        { color: 'emerald', tooltip: 'Tracker Info' },
                                        { color: 'emerald', tooltip: 'Tracker Info' },
                                        { color: 'emerald', tooltip: 'Tracker Info' },
                                        { color: 'yellow', tooltip: 'Tracker Info' },
                                        { color: 'emerald', tooltip: 'Tracker Info' },
                                        { color: 'emerald', tooltip: 'Tracker Info' },
                                        { tooltip: 'Tracker Info' },
                                        { color: 'emerald', tooltip: 'Tracker Info' },
                                        { color: 'emerald', tooltip: 'Tracker Info' },
                                        { color: 'emerald', tooltip: 'Tracker Info' },
                                        { color: 'emerald', tooltip: 'Tracker Info' },
                                        { color: 'emerald', tooltip: 'Tracker Info' },
                                    ]}
                                />
                            {/* </div> */}
                            <div className="h-1/3  w-full flex  justify-center items-end ">
                                <div className="text-4xl font-semibold">
                                    Posts</div>

                            </div>
                        </div>
                    </div>
                    <div className="h-1/5  flex items-start justify-center pt-2">
                        <button className="px-5 py-2 border">+Create new Post</button>
                    </div>
                </div>
                <div className="h-[450px] w-full border border-gray-400 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group hover:scale-[101%]">
                    <div className="h-4/5 w-full relative flex items-end">
                        <div className="absolute top-1/3 right-5 text-9xl font-bold text-gray-300">
                            {totalSubs}
                        </div>
                        <div className="mx-auto flex flex-col w-full h-2/3 pt-16 relative justify-end    px-4 py-3.5    transition-all duration-700">
                            <AreaChart
                                className="h-1/3 group-hover:h-full transition-all duration-500   "
                                data={chartdata}
                                index="date"
                                categories={['Running']}
                                colors={['green']}
                                customTooltip={customTooltip}
                                showLegend={false}
                                showXAxis={false}
                                showYAxis={false}
                                showGridLines={false}
                            />
                            <div className="h-1/3  w-full  flex   justify-center items-end transition-all duration-200">
                                <div className="text-4xl font-semibold">
                                    Subscribers
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-1/5  flex items-start justify-center pt-2">
                        <Link href={'/admin/subscribers'} className="px-5 py-2 border" >
                            View all the subscribers
                        </Link>
                    </div>
                </div>
                <div className="h-[450px] w-full border  border-gray-400 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group hover:scale-[101%]">
                    <div className="h-4/5 w-full relative flex   items-end">
                        <div className="absolute top-1/3 right-5 text-9xl font-bold text-gray-300">
                            {totalViews}
                        </div>
                        <div className="mx-auto flex flex-col w-full h-2/3 pt-16 relative justify-end    px-4 py-3.5    transition-all duration-700">

                            <BarChart
                                className="h-1/3 group-hover:h-2/3 transition-all duration-200   "
                                data={barChartData}
                                index="date"
                                categories={['Running']}
                                colors={['green']}
                                // yAxisWidth={30}
                                
                                customTooltip={customBarTooltip}
                                showXAxis={false}
                                showYAxis={false}
                                showLegend={false}
                                showGridLines={false}
                            />

                            <div className="h-1/3  w-full  flex   justify-center items-end transition-all duration-200">
                                <div className="text-4xl font-semibold">
                                    Views</div>
                            </div>

                        </div>
                    </div>
                    <div className="h-1/5  flex items-start justify-center pt-2">
                        {/* <Link href={'/admin/subscribers'} className="px-5 py-2 border" > */}
                        <div className="px-5 py-2 ">
                            All time views
                        </div>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </section >

    )
}

export default Dash
