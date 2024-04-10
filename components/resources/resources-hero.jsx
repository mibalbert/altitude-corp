/**
 * resources-hero.jsx
 */

import EditableComp from "../editableComp"

const ResourcesHero = ({ data, isEditable }) => {

    const resTitle = data?.find(el => el.compName === "resources-hero-title")
    const resSubtitle = data?.find(el => el.compName === "resources-hero-subtitle")


    // return <div className="space-y-3  flex-col with-clouds-pattern h-[60vh] w-full flex items-center justify-center text-center">
    return <div className="space-y-3 flex-col h-[60vh] w-full flex items-center justify-center text-center">
        <EditableComp comp={resTitle} isEditable={isEditable} />
        <EditableComp comp={resSubtitle} isEditable={isEditable} />

        {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
      Resources
    </h2>
    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
      Introductory Guides. We offer downloadable content like eBooks or
      guides relevant to your services.
    </p> */}

    </div>

}


export default ResourcesHero