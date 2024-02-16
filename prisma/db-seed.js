/**
 * db-seed.js
 */

const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.user.deleteMany({});
    await prisma.folder.deleteMany({});
    await prisma.post.deleteMany({});
    await prisma.home.deleteMany({});

    const homeData = {
      heroTitle: "ALTITUDE CORP",
      heroSubtitle: "CLIMB HIGHER",
      heroQuote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nesciunt dolorum fugiat!",
    };

    await prisma.home.create({
      data: homeData,
    });

    // Create a hashed password using bcrypt
    const hashedPassword = await bcrypt.hash("123456", 10);

    // Insert the user into the database
    await prisma.user.create({
      data: {
        name: "Admin",
        username: "blog-admin",
        password: hashedPassword,
        role: "ADMIN",
      },
    });

    // Seed data for Folder model
    const folderSeedData = [
      {
        id: 1,
        title: "Folder 1",
        userId: "user1",
        icon: "folder_icon_1",
      },
      {
        id: 2,
        title: "Folder 2",
        userId: "user1",
        icon: "folder_icon_2",
      },
      {
        id: 3,
        title: "Folder 3",
        userId: "user2",
        icon: "folder_icon_3",
      },
      {
        id: 4,
        title: "Subfolder 1",
        userId: "user2",
        icon: "subfolder_icon_1",
        parentFolder: 1,
      },
      {
        id: 5,
        title: "Subfolder 2",
        userId: "user2",
        icon: "subfolder_icon_2",
        parentFolder: 1,
      },
    ];

    for (const folderData of folderSeedData) {
      await prisma.folder.create({
        data: folderData,
      });
    }

    // Seed data for Post model
    const postSeedData = [
      {
        title: "Post 1",
        content: `[]`,
        coverImage: "",
        isArchived: false,
        isPublished: true,
        publicId: "public_id_1",
        folderId: 1, // Assuming Folder ID 1
        authorEmail: "author1@example.com",
      },
      {
        title: "Post 2",
        content: `[]`,
        coverImage: "",
        isArchived: false,
        isPublished: true,
        publicId: "public_id_2",
        folderId: 1, // Assuming Folder ID 1
        authorEmail: "author2@example.com",
      },
      {
        title: "Post 3",
        content: `[]`,
        coverImage: "",
        isArchived: true,
        isPublished: false,
        publicId: null,
        folderId: 2, // Assuming Folder ID 2
        authorEmail: "author3@example.com",
      },
      {
        title: "Post 4",
        content: `[]`,
        coverImage: "",
        isArchived: false,
        isPublished: true,
        publicId: "public_id_4",
        folderId: 2, // Assuming Folder ID 2
        authorEmail: "author1@example.com",
      },
      {
        title: "Post 5",
        content: `[]`,
        coverImage: "",
        isArchived: false,
        isPublished: true,
        publicId: "public_id_5",
        folderId: null, // Assuming no folder association
        authorEmail: "author2@example.com",
      },
    ];

    for (const postData of postSeedData) {
      await prisma.post.create({
        data: postData,
      });
    }

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
