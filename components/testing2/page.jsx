/**
 *
 */

import Carouse from "./carousel";
import prisma from "@/lib/prismadb";

const Testing2 = async () => {
  const data = await prisma.featList.findMany({
    select: {
      id: true,
      list: {
        select: {
          id: true,
          content: true,
        },
      },
      order: true,
    },
  });

  // const op = data[0]?.list?.map((el) => el.id);

  const res = await prisma.featList.update({
    where: {
      id: data[0].id,
    },
    data: {
      // order: op.toString(),
      order: "57",
    },
  });

  console.log(res);
  const orderArr = data[0]?.order?.split(",");
  const orderArrInt = orderArr.map((el) => +el);

  const idToIndexMap = data[0]?.list?.reduce((acc, item, index) => {
    acc[item.id] = index;
    return acc;
  }, {});

  const sortedArray = orderArr.map((id) => data[0]?.list?.[idToIndexMap[id]]);

  const finalArray = [
    ...sortedArray,
    ...data[0]?.list?.filter((item) => !orderArrInt.includes(item.id)),
  ];

  const finalData = finalArray.map((post) => {
    return {
      id: post.id,
      title: JSON.parse(post.content).find((el) => el.type === "heading")
        ?.content[0]?.text,
    };
  });
  console.log(finalData);
  // console.log(orderArr);

  return (
    <div className="h-[80vh] flex flex-col items-center justify-center">
      <Carouse data={finalData} featListId={data[0].id} editable={true} />
    </div>
  );
};

export default Testing2;

// const doTheSwitch = async () => {
// setorder((items) => {
//   const activeIndex = items.indexOf(active.id);
//   const overIndex = items.indexOf(over.id);
//   console.log(arrayMove(items, activeIndex, overIndex));
//   return arrayMove(items, activeIndex, overIndex);
// items: [2, 3, 1]   0  -> 2
// [1, 2, 3] oldIndex: 0 newIndex: 2  -> [2, 3, 1]
// });
// try {
//   const res = await updateOrder(arrayMove(items, activeIndex, overIndex));
// } catch (error) {
//   console.log(error);
// }
// };
// const dndData = [];

// const re = posts.map((post) => {
//   // console.log("aslkdn ", post);

//   // const content = JSON.parse(el?.content);
//   // const headings = content.filter((el) => el.type === "heading");
//   // const titlesJson = headings.map((el) => JSON.stringify(el.content));
//   // const titlesWithA = titlesJson.map((el) => JSON.parse(el));
//   // const titles = titlesWithA.map((el) => console.log("TH", el[0]?.text));

//   return {
//     id: post.id,
//     position: post.position,
//     title: JSON.parse(post.content).find((el) => el.type === "heading")
//       ?.content[0]?.text,
//   };
// });

// const orderArr = [57, 54, 52];

// const simpleData = data[0].list.map((post) => {
//   return {
//     id: post.id,
//     title: JSON.parse(post.content).find((el) => el.type === "heading")
//       ?.content[0]?.text,
//   };
// });

// const data = [];
// featuredBlogs.map((blog) => {
//   const el = JSON.parse(blog.content);
//   let heading = el.find((el) => el.type === "heading");
//   if (
//     !heading ||
//     !heading?.content?.find((el) => el.type === "text")?.text.length
//   ) {
//     heading = el.find((el) => el.type === "heading2");
//   }

//   const text = heading?.content?.find((el) => el.type === "text")?.text;
//   data.push(text);
// });
// console.log(data);

// const extractHeadings = (content) => {
//   try {
//     const parsedContent = JSON.parse(content);
//     const heading = parsedContent.find((block) => block.type === "heading");
//     if (heading && heading.content && heading.content.length > 0) {
//       const textBlock = heading.content.find(
//         (block) => block.type === "text"
//       );
//       if (textBlock && textBlock.text) {
//         return textBlock.text;
//       }
//     }
//   } catch (error) {
//     console.error("Error parsing content:", error);
//   }
//   return null;
// };

// const headings = featuredBlogs.map((blog) => extractHeadings(blog.content));

// console.log(headings);
