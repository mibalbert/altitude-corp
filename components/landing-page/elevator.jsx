import Image from "next/image";
import React from "react";
import EditableComp from "../editableComp";

const Elevator = ({ data }) => {
  const elevatorTitle = data?.find((el) => el.compName === "elevator-title");
  const elevatorSubtitle = data?.find(
    (el) => el.compName === "elevator-subtitle"
  );
  const elevatorImgTitle = data?.find(
    (el) => el.compName === "elevator-img-title"
  );
  const elevatorImgSubtitle = data?.find(
    (el) => el.compName === "elevator-img-subtitle"
  );
  const elevatorImgBottomText = data?.find(
    (el) => el.compName === "elevator-img-bottom-text"
  );
  // const elevatorSubtitle = data.find(el=>el.compName === "elevator-subtitle")

  const elevatorRightFirstTitle = data?.find(
    (el) => el.compName === "elevator-right-first-title"
  );
  const elevatorRightFirstSubtitle = data?.find(
    (el) => el.compName === "elevator-right-first-subtitle"
  );
  const elevatorRightSecTitle = data?.find(
    (el) => el.compName === "elevator-right-sec-title"
  );
  const elevatorRightSecSubtitle = data?.find(
    (el) => el.compName === "elevator-right-sec-subtitle"
  );
  const elevatorRightThirdTitle = data?.find(
    (el) => el.compName === "elevator-right-third-title"
  );
  const elevatorRightThirdSubtitle = data?.find(
    (el) => el.compName === "elevator-right-third-subtitle"
  );

  return (
    <section className="py-[10rem] bg-blue-600 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <div className="xl:pt-12">
              <EditableComp isEditable={false} comp={elevatorTitle} />
              <EditableComp isEditable={false} comp={elevatorSubtitle} />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <div className="flex flex-wrap justify-center">
              <div className="relative inline-block rounded-3xl overflow-hidden shadow-3xl transform hover:-translate-y-16 transition ease-in-out duration-1000">
                <Image
                  width={500}
                  height={500}
                  alt=""
                  src="/images/secure.png"
                />
                <div
                  className="absolute bottom-0 left-0 bg-white bg-opacity-30 backdrop-blur-xl py-8 px-9"
                  style={{ backdropFilter: "blur(10px)" }}
                >
                  <EditableComp isEditable={false} comp={elevatorImgTitle} />
                  <EditableComp isEditable={false} comp={elevatorImgSubtitle} />
                  <EditableComp
                    isEditable={false}
                    comp={elevatorImgBottomText}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <div className="flex flex-wrap h-full ">
              <div className="flex flex-wrap self-end -m-10">
                <div className="w-full p-10">
                  <div className="md:max-w-sm">
                    <EditableComp
                      isEditable={false}
                      comp={elevatorRightFirstTitle}
                    />
                    <EditableComp
                      isEditable={false}
                      comp={elevatorRightFirstSubtitle}
                    />
                  </div>
                </div>
                <div className="w-full px-10">
                  <div className="h-px bg-blue-500" />
                </div>
                <div className="w-full p-10">
                  <div className="md:max-w-sm">
                    <EditableComp
                      isEditable={false}
                      comp={elevatorRightSecTitle}
                    />
                    <EditableComp
                      isEditable={false}
                      comp={elevatorRightSecSubtitle}
                    />
                  </div>
                </div>
                <div className="w-full px-10">
                  <div className="h-px bg-blue-500" />
                </div>
                <div className="w-full p-10">
                  <div className="md:max-w-sm">
                    <EditableComp
                      isEditable={false}
                      comp={elevatorRightThirdTitle}
                    />
                    <EditableComp
                      isEditable={false}
                      comp={elevatorRightThirdSubtitle}
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

export default Elevator;
