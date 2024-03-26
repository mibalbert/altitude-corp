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
    <section className="pt-28 pb-40 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <EditableComp isEditable={false} comp={peaceOfMindTitle} />
        <div className="flex flex-wrap xl:items-center -m-8 xl:-m-10">
          <div className="w-full md:w-1/2 xl:w-auto p-8 xl:p-10">
            <a className="block overflow-hidden rounded-3xl" href="#">
              <Image
                width={500}
                height={500}
                alt=""
                className="w-full transform hover:scale-105 transition ease-in-out duration-1000"
                src="/images/video.png"
              />
            </a>
          </div>
          <div className="w-full md:w-1/2 xl:flex-1 p-8 xl:p-10">
            <div className="md:max-w-xl">
              <div className="mb-11 pb-32 border-b">
                <EditableComp isEditable={false} comp={peaceOfMindSubtitle} />
              </div>
              <div className="flex flex-wrap -m-8">
                <div className="w-auto md:w-1/2 p-8">
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
                <div className="w-auto md:w-1/2 p-8">
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
