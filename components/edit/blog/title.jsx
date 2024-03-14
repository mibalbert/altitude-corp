// /**
//  *
//  */
// "use client";

// import { changeBlogPageTitle } from "@/app/actions/edit-web-pages/edit-blogs-page/_blogs-actions";
// import Contenteditable from "@/components/admin/editor-mode/edit-landing-page/content-editable-component";

// const EditableBlogTitle = ({ data }) => {
//   const handleValueChange = async (e) => {
//     const res = await changeBlogPageTitle(data?.id, e);
//     if (res.ok) {
//       console.log(res.message);
//     }
//   };

//   return (
//     <Contenteditable
//       value={data?.value}
//       // onChange={handleBlogPageTitleChange}
//       className="text-4xl font-bold tracking-tighter font-serif text-center p-0 m-0 sm:text-5xl md:text-5xl lg:text-6xl bg-transparent "
//     />
//   );
// };

// export default EditableBlogTitle;
