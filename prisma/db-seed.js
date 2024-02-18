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
    await prisma.blogPage.deleteMany({});

    const homeData = {
      heroTitle: "ALTITUDE CORP",
      heroSubtitle: "CLIMB HIGHER",
      heroQuote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nesciunt dolorum fugiat!",
      elevatorTitle: "Lorem ipsum dolor sit amet 50.000 adipisicing.",
      elevatorSubtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
      condimentum purus turpis vitae gravida iaculis id quisque
      nullam. Rhoncus, adipiscing mattis.`,
      elevatorFirstCompTitle: "Lorem ipsum",
      elevatorFirstCompDesc:
        "Gravida iaculis id quisque nullam. Rhoncus, adipiscing matti",
      elevatorSecCompTitle: "24/7 Access",
      elevatorSecCompDesc: `Amet minim mollit non deserunt ullamco est sit aliqua
        dolor do amet sint. Velit officia consequat duis enim
        velit mollit.`,
      peaceOfMindTitle: "Enjoy peace of mind",
      peaceOfMindDesc:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
      peaceOfMindFirstCompTitle: "24/7 Secure Access",
      peaceOfMindFirstCompDesc:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      peaceOfMindSecCompTitle: "Access Logs",
      peaceOfMindSecCompDesc:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      numbersTitle: "Suscipit sunt facilis aliquam.",
      numbersDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eucondimentum purus turpis",
      numbersFirstCompTitle: "Satisfied Clients",
      numbersFirstCompNumbers: "84,900",
      numbersFirstCompDesc: "Qui iure voluptatem quam 15k+ users.",
      numbersSecCompTitle: "Libero sunt",
      numbersSecCompNumbers: "3.2M+",
      numbersSecCompDesc: "Qui iure voluptatem quam 15k+ users.",
      numbersThirdCompTitle: "Customer Reviews",
      numbersThirdCompNumbers: "21,394",
      numbersThirdCompDesc: "Qui iure voluptatem quam 15k+ users.",
      stepsTitle: "How it works",
      stepsDesc:
        "Our process is designed to help you succeed. Here's how we can collaborate.",
      stepsFirstCompTitle: "Reach Out",
      stepsFirstCompDesc:
        "Let's start the conversation. Contact us to discuss your project or ask any questions.",
      stepsSecCompTitle: "Analyze",
      stepsSecCompDesc:
        "Our team will carefully analyze your requirements and provide you with the best solution.",
      stepsThirdCompTitle: "Implement",
      stepsThirdCompDesc:
        "Let's bring your vision to life. Our team will work with you to implement the solution.",

      landingFooterTitle: "Start protecting your bussiness reveneue",
      landingFooterDesc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quis nam tenetur itaque.",
      landingFooterButton: "Get A Free Quote",
      landingFooterItem1: "Germany",
      landingFooterItem2: "United Kingdom",
      landingFooterItem3: "Spain",
      landingFooterItem4: "United States",
      landingFooterItem5: "Italy",
      landingFooterItem6: "Morocco",
      landingFooterItem7: "Malaga",
      landingFooterItem8: "Indonesia",
      landingFooterItem9: "Japan",
      landingFooterItem10: "Canada",
    };

    const home = await prisma.home.create({
      data: homeData,
    });

    const testimonials = [
      {
        homeId: home.id,
        quote:
          "Working with ALTITUDE CORP has been both challenging and rewarding. Their expertise in navigating complex market conditions has helped our business thrive even in uncertain times. I highly recommend their services.",
        author: "John Smith",
        company: "ABC Corporation",
      },
      {
        homeId: home.id,
        quote:
          "Partnering with ALTITUDE CORP has been instrumental in our company's growth strategy. Their innovative solutions have enabled us to stay ahead of the competition and achieve remarkable success in our industry.",
        author: "Jane Doe",
        company: "XYZ Enterprises",
      },
      {
        homeId: home.id,
        quote:
          "All that we have achieved in the past year is nothing short of miraculous, thanks to the strategic guidance and support provided by ALTITUDE CORP. Their commitment to our success is unparalleled.",
        author: "Michael Johnson",
        company: "123 Industries",
      },
      {
        homeId: home.id,
        quote:
          "From inception to execution, ALTITUDE CORP has been a trusted partner every step of the way. Their dedication to understanding our unique needs and delivering tailored solutions has been invaluable to our business.",
        author: "Emily Wilson",
        company: "DEF Corporation",
      },
      {
        homeId: home.id,
        quote:
          "Choosing to work with ALTITUDE CORP was one of the best decisions we made for our business. Their professionalism, attention to detail, and results-driven approach have exceeded our expectations time and time again.",
        author: "David Brown",
        company: "456 Enterprises",
      },
    ];

    await prisma.review.createMany({
      data: testimonials,
    });

    const blogPageData = {
      blogPageTitle: "Welcome to Our Blog",
      blogPageSubtitle:
        "Discover a world of baking delights, culinary adventures, and more.",
      blogPageLatestTitle: "Here are our latest posts",
      blogPageLatestSubtitle: "Explore the unknown",
    };

    await prisma.blogPage.createMany({
      data: blogPageData,
    });

    // Create a hashed password using bcrypt
    const hashedPassword = await bcrypt.hash("123456", 10);

    // Insert the user into the database
    await prisma.user.create({
      data: {
        name: "Admin",
        email: "blog-admin@admin.com",
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
