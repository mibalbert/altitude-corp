/**
 * testing/page.jsx
 */

"use client";

import { getFoldersData } from "@/app/_actions";
import { Folder } from "./folder";
import { useLayoutEffect, useState } from "react";
import { useParams } from "next/navigation";

const RecursiveFolders = ({ parentFolder = null, level = 0 }) => {
  const [folders, setFolders] = useState([]);
  const params = useParams();

  useLayoutEffect(() => {
    const getData = async () => {
      const data = await getFoldersData(parentFolder);
      setFolders(data.data);
    };
    getData();
  }, [parentFolder, params.folderId]);

  return (
    <div className="w-60  px-5 h-full overflow-auto ">
      <div>
        {folders.length === 0 ? (
          <p></p>
        ) : (
          folders.map((folder, idx) => (
            <div key={idx}>
              <Folder folder={folder} level={level} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecursiveFolders;

// "use client";

// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { FileIcon } from "lucide-react";
// import { cn } from "@/lib/utils";

// import { Item } from "./item";

// import { getFoldersByParentId } from "@/app/_actions";

// export const DocumentList = ({ parentFolderId = null, level = 0 }) => {
//   const params = useParams();
//   const router = useRouter();
//   const [expanded, setExpanded] = useState({});
//   const [folders, setFolders] = useState([]);

//   console.log("first", parentFolderId);

//   useEffect(() => {
//     const getFolders = async () => {
//       const res = await getFoldersByParentId(parentFolderId);
//       setFolders(res);
//     };
//     getFolders();
//   }, [parentFolderId]);

//   return (
//     <>
//       <p
//         style={{
//           paddingLeft: level ? `${level * 12 + 25}px` : undefined,
//         }}
//         className={cn(
//           "hidden text-sm font-medium text-muted-foreground/80",
//           expanded && "last:block",
//           level === 0 && "hidden"
//         )}
//       >
//         No pages inside
//       </p>

//       <div>
//         {/* {folders &&
//           folders?.map((el, idx) => {
//             return (
//               <div key={idx}>
//                 <pre>{JSON.stringify(el, null, 2)}</pre>
//                 <DocumentList parentFolderId={el.id} level={level + 1} />
//               </div>
//             );
//           })} */}
//       </div>
//     </>
//   );
// };

// // const onExpand = (folderId) => {
// //   setExpanded((prevExpanded) => ({
// //     ...prevExpanded,
// //     [folderId]: !prevExpanded[folderId],
// //   }));
// // };

// // const onRedirect = (folderId) => {
// //   router.push(`/documents/${folderId}`);
// // };

// // if (folders === undefined) {
// //   return (
// //     <>
// //       <Item.Skeleton level={level} />
// //       {level === 0 && (
// //         <>
// //           <Item.Skeleton level={level} />
// //           <Item.Skeleton level={level} />
// //         </>
// //       )}
// //     </>
// //   );
// // }

// {
//   /* {folders.map((folder) => (
//         <div key={folder.id}>
//           <Item
//             id={folder.id}
//             onClick={() => onRedirect(folder.id)}
//             label={folder.title}
//             icon={FileIcon}
//             // documentIcon={document.icon}
//             active={params.folderId === folder.id}
//             level={level}
//             onExpand={() => onExpand(folder.id)}
//             expanded={expanded[folder.id]}
//           />
//           {expanded[folder.id] && (
//             <DocumentList parentFolderId={folder.id} level={level + 1} />
//           )}
//         </div>
//       ))} */
// }
