/**
 * editable-resources.jsx
 */
"use client";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { SortableItem } from "./sortable-item";
import {
    restrictToVerticalAxis,
    restrictToWindowEdges,
} from '@dnd-kit/modifiers';

import { Dialog, DialogContent, DialogPortal, DialogTrigger } from "@/components/ui/dialog";

import { toast } from "sonner";
import { setNewResourcesPositions } from "@/app/_actions";
import { cn } from "@/lib/utils";
import ResourceCard from "./resource-card";
import { DialogOverlay } from "@radix-ui/react-dialog";


const EditableResources = ({ data, isEditable }) => {
    const [resourcesArr, setResourcesArr] = useState(data);

    async function handleDragEnd(event) {
        const { active, over } = event;

        if (active.id !== over.id) {
            const activeIndex = resourcesArr.findIndex((el) => el.id === active.id);
            const overIndex = resourcesArr.findIndex((el) => el.id === over.id);
            const updatedResourcesArr = arrayMove(resourcesArr, activeIndex, overIndex);

            console.log(updatedResourcesArr)
            const newArr = updatedResourcesArr.map((reso, index) => ({
                ...reso,
                position: index,
            }));
            setResourcesArr(newArr);
            // try {
            //     const proceed = async () => {
            const res = await setNewResourcesPositions(newArr);
            if (res.ok) {
                toast("Success");
            } else {
                toast("Failed");
            }
            //     };
            //     proceed();
            // } catch (error) {
            //     toast("Error");
            // }
        }
    }

    return (
        <section className="pb-5 ">
            <div className="w-full flex items-center justify-end max-w-3xl mx-auto">
                {isEditable && (
                    <Dialog>
                        <DialogTrigger className="rounded-full border   px-3 py-1">
                            Edit Blog List
                        </DialogTrigger>
                        <DialogContent className="w-full max-w-xl p-10 overflow-y-hidden overflow-x-hidden">
                            <div>Arange how the resources should appear</div>
                            <div>

                                <DndContext
                                    collisionDetection={closestCenter}
                                    onDragEnd={handleDragEnd}
                                    modifiers={[restrictToVerticalAxis]}
                                >
                                    <SortableContext
                                        items={resourcesArr.map((reso) => reso.id)}
                                        strategy={verticalListSortingStrategy}
                                        modifiers={[restrictToWindowEdges]}
                                    >
                                        {resourcesArr.map((reso) => (
                                            <SortableItem
                                                key={reso.id}
                                                id={reso.id}
                                                title={reso.title}
                                                className="border my-2 p-3 truncate "
                                            />
                                        ))}
                                    </SortableContext>

                                </DndContext>
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
            </div>
            <div className="w-full">
                <div className={cn(" max-w-4xl flex flex-col mx-auto w-full p-10 gap-4 items-center justify-center md:gap-8 lg:gap-12", { "border border-dashed": isEditable })}>
                    {data?.map((el, idx) => {
                        return (
                            <ResourceCard
                                key={idx}
                                data={el}
                                isEditable={isEditable}
                            />
                        )
                    })}
                </div>
            </div>
        </section >
    )
}

export default EditableResources

