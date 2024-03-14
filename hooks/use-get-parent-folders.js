/**
 *
 */

export async function getParentFolders(folderId) {
  const foldersArr = [];

  const getFolderParent = async (foId) => {
    const res = await prisma.folder.findFirst({
      where: {
        id: foId,
      },
    });
    // console.log(res.parentFwolder);
    if (res.parentFolder !== null) {
      foldersArr.push(res.parentFolder);
      getFolderParent(res.parentFolder);
    }
  };

  getFolderParent(folderId);
  return foldersArr;
}
