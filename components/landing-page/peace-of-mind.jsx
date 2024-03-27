import Image from "next/image";
import React from "react";
import EditableComp from "../editableComp";

const PeaceOfMind = ({ data }) => {
  const peaceOfMindTitle = data?.find(
    (el) => el.compName === "peace-of-mind-title"
  );
  const peaceOfMindSubtitle = data?.find(
    (el) => el.compName === "peace-of-mind-subtitle"
  );
  const peaceOfMindRightFirstTitle = data?.find(
    (el) => el.compName === "peace-of-mind-right-first-title"
  );
  const peaceOfMindRightFirstSubtitle = data?.find(
    (el) => el.compName === "peace-of-mind-right-first-subtitle"
  );
  const peaceOfMindRightSecTitle = data?.find(
    (el) => el.compName === "peace-of-mind-right-sec-title"
  );
  const peaceOfMindRightSecSubtitle = data?.find(
    (el) => el.compName === "peace-of-mind-right-sec-subtitle"
  );
  return (
    <section className="py-24  bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto ">
        <div className="flex flex-wrap xl:items-center">
          <div className="w-full md:w-1/2 pr-10">
            <div className="block overflow-hidden max-h-[500px] rounded-lg">
              {/* <Image
                width={500}
                height={500}
                alt=""
                className="object-cover object-bottom w-full h-full"
                // className="w-full transform hover:scale-105 transition ease-in-out duration-1000"
                // src="/images/video.png"
                src="/peace-of-mind.jpg"
              /> */}
              <Image
                width={500}
                height={500}
                alt=""
                className="object-cover object-bottom w-full h-full"
                // className="w-full transform hover:scale-105 transition ease-in-out duration-1000"
                // src="/images/video.png"
                src="/new-piece-of-mind.png"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2  px-5 space-y-10">
            <EditableComp isEditable={false} comp={peaceOfMindTitle} />
            <div className="md:max-w-xl">
              <div className=" border-b pb-10">
                <EditableComp isEditable={false} comp={peaceOfMindSubtitle} />
              </div>
              <div className="flex flex-wrap ">
                <div className="w-auto md:w-1/2 py-8 pr-8">
                  <div className="md:max-w-xs">
                    {" "}
                    <EditableComp
                      isEditable={false}
                      comp={peaceOfMindRightFirstTitle}
                    />
                    <EditableComp
                      isEditable={false}
                      comp={peaceOfMindRightFirstSubtitle}
                    />
                  </div>
                </div>
                <div className="w-auto md:w-1/2 py-8 pr-8">
                  <div className="md:max-w-xs">
                    <EditableComp
                      isEditable={false}
                      comp={peaceOfMindRightSecTitle}
                    />
                    <EditableComp
                      isEditable={false}
                      comp={peaceOfMindRightSecSubtitle}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeaceOfMind;
