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
    await prisma.featList.deleteMany({});
    await prisma.pageObject.deleteMany({});

    // const blogPageObj = [
    //   {
    //     page: "blog",
    //     type: "h1",
    //     name: "hero-title",
    //     className: "text-7xl font-serif",
    //     value: "Welcome to Our Blog",
    //   },
    //   {
    //     page: "blog",
    //     type: "h3",
    //     name: "hero-subtitle",
    //     className: "text-lg font-sans",
    //     value:
    //       "Discover a world of baking delights, culinary adventures, and more.",
    //   },
    //   {
    //     page: "blog",
    //     type: "h3",
    //     name: "latest-posts-title",
    //     className: "text-lg font-sans",
    //     value: "Here are our latest posts",
    //   },
    // ];

    // for (let item of blogPageObj) {
    //   await prisma.pageObject.create({
    //     data: item,
    //   });
    // }

    await prisma.featList.create({
      data: {
        id: 1,
        order: "46,47,48,49,50",
      },
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
        isFeatured: false,
        publicId: "public_id_1",
        folder: { connect: { id: 1 } }, // Use folder instead of folderId
        featList: { connect: { id: 1 } }, // Assuming you have a FeatList with ID 1
        // authorEmail: "author1@example.com",
      },
      {
        title: "Post 2",
        content: `[]`,
        coverImage: "",
        isArchived: false,
        isPublished: true,
        isFeatured: false,
        publicId: "public_id_2",
        folder: { connect: { id: 1 } }, // Use folder instead of folderId
        featList: { connect: { id: 1 } }, // Assuming you have a FeatList with ID 1
        // authorEmail: "author2@example.com",
      },
      {
        title: "Post 3",
        content: `[]`,
        coverImage: "",
        isArchived: true,
        isPublished: false,
        isFeatured: true,
        folder: { connect: { id: 1 } }, // Use folder instead of folderId
        featList: { connect: { id: 1 } }, // Assuming you have a FeatList with ID 1
        // authorEmail: "author3@example.com",
      },
      {
        title: "Post 4",
        content: `[]`,
        coverImage: "",
        isArchived: false,
        isPublished: true,
        publicId: "public_id_4",
        // authorEmail: "author1@example.com",
      },
      {
        title: "Post 5",
        content: `[]`,
        coverImage: "",
        isArchived: false,
        isPublished: true,
        isFeatured: true,
        publicId: "public_id_5",
        folder: { connect: { id: 1 } }, // Use folder instead of folderId
        featList: { connect: { id: 1 } }, // Assuming you have a FeatList with ID 1
        // authorEmail: "author2@example.com",
      },
    ];

    for (const postData of postSeedData) {
      await prisma.post.create({
        data: {
          ...postData,
          featList: { connect: { id: 1 } },
        },
      });
    }

    const compObjs = [
      {
        page: "home",
        type: "h1",
        title: "ALTITUDE CORP",
        compName: "hero-title",
        parentComp: "Hero",
        className:
          "text-4xl md:text-5xl  lg:text-6xl 2xl:text-8xl whitespace-nowrap font-extrabold text-center ",
      },
      {
        page: "home",
        type: "h3",
        title: "Climb Higher",
        compName: "hero-subtitle",
        parentComp: "Hero",
        className: "text-2xl lg:text-4xl font-semibold text-center ",
      },
      {
        page: "home",
        type: "h2",
        title: "Climb Higher",
        compName: "elevator-title",
        parentComp: "Elevator",
        className:
          "mb-7 text-3xl md:text-4xl xl:text-5xl text-white font-bold tracking-px-n leading-tight",
      },
      {
        page: "home",
        type: "p",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat unde aliquid temporibus, vel labore magnam minima cupiditate optio repellendus!",
        compName: "elevator-subtitle",
        parentComp: "Elevator",
        className: "text-white text-opacity-80",
      },
      {
        page: "home",
        type: "p",
        title: "Lorem",
        compName: "elevator-img-title",
        parentComp: "Elevator",
        className:
          "mb-3 font-sans inline-block px-3.5 py-1.5 text-xs text-white font-semibold bg-red-500 uppercase tracking-px rounded-full",
      },
      {
        page: "home",
        type: "p",
        title: "Lorem ipsum dolor sit amet.",
        compName: "elevator-img-subtitle",
        parentComp: "Elevator",
        className: "mb-3 text-xl font-bold font-heading",
      },
      {
        page: "home",
        type: "p",
        title: "4096 nihil tenetur libero.",
        compName: "elevator-img-bottom-text",
        parentComp: "Elevator",
        className: "text-sm text-gray-600 font-semibold",
      },
      {
        page: "home",
        type: "h3",
        title: "Adipisicing elit.",
        compName: "elevator-right-first-title",
        parentComp: "Elevator",
        className: "mb-5 text-2xl text-white font-bold leading-snug",
      },
      {
        page: "home",
        type: "p",
        title: `Amet minim mollit non deserunt ullamco est sit aliqua
        dolor do amet sint. Velit officia consequat duis enim
        velit mollit.`,
        compName: "elevator-right-first-subtitle",
        parentComp: "Elevator",
        className: "text-white text-opacity-70 font-medium leading-relaxed",
      },
      {
        page: "home",
        type: "h3",
        title: "Adipisicing elit.",
        compName: "elevator-right-sec-title",
        parentComp: "Elevator",
        className: "mb-5 text-2xl text-white font-bold leading-snug",
      },
      {
        page: "home",
        type: "p",
        title: `Amet minim mollit non deserunt ullamco est sit aliqua
        dolor do amet sint. Velit officia consequat duis enim
        velit mollit.`,
        compName: "elevator-right-sec-subtitle",
        parentComp: "Elevator",
        className: "text-white text-opacity-70 font-medium leading-relaxed",
      },
      {
        page: "home",
        type: "h3",
        title: "24/7 Access",
        compName: "elevator-right-third-title",
        parentComp: "Elevator",
        className: "mb-5 text-2xl text-white font-bold leading-snug",
      },
      {
        page: "home",
        type: "p",
        title: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.`,
        compName: "elevator-right-third-subtitle",
        parentComp: "Elevator",
        className: "text-white text-opacity-70 font-medium leading-relaxed",
      },
      {
        page: "home",
        type: "h2",
        title: `  Enjoy peace of mind`,
        compName: "peace-of-mind-title",
        parentComp: "PeaceOfMind",
        className:
          "text-3xl md:text-4xl xl:text-5xl font-bold font-heading tracking-px-n leading-none",
      },
      {
        page: "home",
        type: "h3",
        title: ` Amet minim mollit non deserunt ullamco est sit aliqua dolor do
        amet sint. Velit officia consequat duis enim velit mollit.
        Exercitation veniam consequat.
      `,
        compName: "peace-of-mind-subtitle",
        parentComp: "PeaceOfMind",
        className: "text-lg font-semibold md:max-w-lg",
      },
      {
        page: "home",
        type: "h3",
        title: `24/7 Secure Access`,
        compName: "peace-of-mind-right-first-title",
        parentComp: "PeaceOfMind",
        className: "mb-4 text-lg text-blue-600 font-semibold",
      },
      {
        page: "home",
        type: "p",
        title: `Amet minim mollit non deserunt ullamco est sit aliqua
        dolor do amet sint.`,
        compName: "peace-of-mind-right-first-subtitle",
        parentComp: "PeaceOfMind",
        className: "text-gray-900 font-medium",
      },
      {
        page: "home",
        type: "h3",
        title: `Access Logs`,
        compName: "peace-of-mind-right-sec-title",
        parentComp: "PeaceOfMind",
        className: "mb-4 text-lg text-blue-600 font-semibold",
      },
      {
        page: "home",
        type: "p",
        title: `Amet minim mollit non deserunt ullamco est sit aliqua
        dolor do amet sint.`,
        compName: "peace-of-mind-right-sec-subtitle",
        parentComp: "PeaceOfMind",
        className: "text-gray-900 font-medium",
      },
      {
        page: "home",
        type: "p",
        title: `Suscipit sunt facilis aliquam.`,
        compName: "numbers-title",
        parentComp: "Numbers",
        className:
          "pb-16 text-3xl md:text-4xl xl:text-5xl text-white font-bold tracking-px-n leading-none md:max-w-3xl",
      },
      {
        page: "home",
        type: "p",
        title: `Satisfied Clients`,
        compName: "numbers-first-title",
        parentComp: "Numbers",
        className: "mb-6 text-gray-200 font-semibold leading-normal",
      },
      {
        page: "home",
        type: "h3",
        title: `84,900`,
        compName: "numbers-first-number",
        parentComp: "Numbers",
        className:
          "mb-4 text-3xl md:text-4xl xl:text-5xl text-white font-bold tracking-px-n leading-none",
      },
      {
        page: "home",
        type: "p",
        title: `    Qui iure voluptatem quam 15k+ users.`,
        compName: "numbers-first-desc",
        parentComp: "Numbers",
        className: "text-gray-300 font-medium leading-relaxed md:w-56",
      },
      {
        page: "home",
        type: "p",
        title: `Satisfied Clients`,
        compName: "numbers-sec-title",
        parentComp: "Numbers",
        className: "mb-6 text-gray-200 font-semibold leading-normal",
      },
      {
        page: "home",
        type: "h3",
        title: `3.2M+`,
        compName: "numbers-sec-number",
        parentComp: "Numbers",
        className:
          "mb-4 text-3xl md:text-4xl xl:text-5xl text-white font-bold tracking-px-n leading-none",
      },
      {
        page: "home",
        type: "p",
        title: `  Qui iure voluptatem quam 15k+ users.`,
        compName: "numbers-sec-desc",
        parentComp: "Numbers",
        className: "text-gray-300 font-medium leading-relaxed md:w-56",
      },
      {
        page: "home",
        type: "p",
        title: `Customer Reviews`,
        compName: "numbers-third-title",
        parentComp: "Numbers",
        className: "mb-6 text-gray-200 font-semibold leading-normal",
      },
      {
        page: "home",
        type: "h3",
        title: `21,394`,
        compName: "numbers-third-number",
        parentComp: "Numbers",
        className:
          "mb-4 text-3xl md:text-4xl xl:text-5xl text-white font-bold tracking-px-n leading-none",
      },
      {
        page: "home",
        type: "p",
        title: `Qui iure voluptatem quam 15k+ users.`,
        compName: "numbers-third-desc",
        parentComp: "Numbers",
        className: "text-gray-300 font-medium leading-relaxed md:w-56",
      },
      {
        page: "home",
        type: "h1",
        title: `   Start protecting your bussiness reveneue`,
        compName: "landing-footer-title",
        parentComp: "LandingFooter",
        className:
          "mb-16 text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-px-n leading-tight",
      },
      {
        page: "home",
        type: "p",
        title: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Voluptatem quis nam tenetur itaque.`,
        compName: "landing-footer-text",
        parentComp: "LandingFooter",
        className:
          "text-sm text-white text-opacity-50 font-medium leading-relaxed",
      },
      {
        page: "blog",
        type: "h1",
        title: `View Our Latest Blogs`,
        compName: "hero-title",
        parentComp: "Hero",
        className:
          "text-4xl font-bold tracking-tighter font-serif text-center p-0 m-0 sm:text-5xl md:text-5xl lg:text-6xl bg-transparent ",
      },
      {
        page: "services",
        type: "h1",
        title: `SERVICES`,
        compName: "hero-title",
        parentComp: "Hero",
        className:
          "text-4xl md:text-5xl  lg:text-6xl 2xl:text-8xl whitespace-nowrap font-extrabold text-center ",
      },
      {
        page: "services",
        type: "h3",
        title: `Let's adventure together`,
        compName: "hero-subtitle",
        parentComp: "Hero",
        className: "text-2xl lg:text-4xl font-semibold text-center ",
      },
      {
        page: "services",
        type: "h1",
        title: `Our partners`,
        compName: "services-sec-title",
        parentComp: "ServicesSec",
        className: "text-2xl md:text-4xl font-bold",
      },
      {
        page: "services",
        type: "p",
        title: `From the most basic tasks to the most challanging.....`,
        compName: "services-sec-subtitle",
        parentComp: "ServicesSec",
        className: "text-md md:text-lg",
      },
      {
        page: "services",
        type: "h1",
        title: `LOrem insdasdasnd asnd laksn dlaksnd lkasndkn aslkda`,
        compName: "services-car-title",
        parentComp: "ServicesCar",
        className: "text-2xl md:text-4xl font-bold",
      },
      {
        page: "services",
        type: "p",
        title: `Asdn aksdn wi askldnqwio asiodn oiwan doisnd oaisd`,
        compName: "services-car-subtitle",
        parentComp: "ServicesCar",
        className: "text-md md:text-lg",
      },
    ];

    for (const item of compObjs) {
      await prisma.pageObject.create({
        data: item,
      });
    }
    const rev = [
      {
        author: "John Snow",
        quote: "A fantastic product!",
        company: "Winterfell Co.",
      },
      {
        author: "Jack Sparrow",
        quote: "The best I've ever used, matey!",
        company: "Black Pearl Ltd.",
      },
      {
        author: "Koko Banana",
        quote: "Absolutely delicious and nutritious!",
        company: "Fruit Kingdom Inc.",
      },
      {
        author: "Opopo Iousef",
        quote: "Changed my life, highly recommend.",
        company: "Tech Innovations",
      },
      {
        author: "Julien King",
        quote: "Incredible service and quality.",
        company: "Royal Enterprises",
      },
      {
        author: "Wharp Fute",
        quote: "Superb craftsmanship, exceeded my expectations.",
        company: "Artisan Works",
      },
    ];

    for (let review of rev) {
      await prisma.reviews.create({
        data: review,
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

// await prisma.featuredPostList.deleteMany();

// const res = await prisma.featuredPost.create({
//   data: {
//     position: 1,
//     post: {
//       connect: [
//         {
//           id: 46,
//         },
//       ],
//     },
//   },
// });

// console.log(res);

// blogPageLatestSubtitle: "Explore the unknown",
// blogPageExploreTitle: "Explore more",
// blogPageExploreSubtitle:
//   "The latest and greatest news from around the world. Your one-stop shop for all things interesting.",
// blogPageSubscribeTitle: "Subscribe to our Newsletter",
// blogPageSubscribeSubtitle:
//   "Stay updated with our latest news and product releases.",
// blogPageSubscribeMinSubtitle: "Subscribe now to receive our newsletter.",

// await prisma.home.deleteMany({});
// await prisma.blogPage.deleteMany({});
// await prisma.servicesPage.deleteMany({});
// await prisma.faqPage.deleteMany({});

// const homeData = {
//   heroTitle: "ALTITUDE CORP",
//   heroSubtitle: "CLIMB HIGHER",
//   heroQuote:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nesciunt dolorum fugiat!",
//   elevatorTitle: "Lorem ipsum dolor sit amet 50.000 adipisicing.",
//   elevatorSubtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
//   condimentum purus turpis vitae gravida iaculis id quisque
//   nullam. Rhoncus, adipiscing mattis.`,
//   elevatorFirstCompTitle: "Lorem ipsum",
//   elevatorFirstCompDesc:
//     "Gravida iaculis id quisque nullam. Rhoncus, adipiscing matti",
//   elevatorSecCompTitle: "24/7 Access",
//   elevatorSecCompDesc: `Amet minim mollit non deserunt ullamco est sit aliqua
//     dolor do amet sint. Velit officia consequat duis enim
//     velit mollit.`,
//   peaceOfMindTitle: "Enjoy peace of mind",
//   peaceOfMindDesc:
//     "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
//   peaceOfMindFirstCompTitle: "24/7 Secure Access",
//   peaceOfMindFirstCompDesc:
//     "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
//   peaceOfMindSecCompTitle: "Access Logs",
//   peaceOfMindSecCompDesc:
//     "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
//   numbersTitle: "Suscipit sunt facilis aliquam.",
//   numbersDesc:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eucondimentum purus turpis",
//   numbersFirstCompTitle: "Satisfied Clients",
//   numbersFirstCompNumbers: "84,900",
//   numbersFirstCompDesc: "Qui iure voluptatem quam 15k+ users.",
//   numbersSecCompTitle: "Libero sunt",
//   numbersSecCompNumbers: "3.2M+",
//   numbersSecCompDesc: "Qui iure voluptatem quam 15k+ users.",
//   numbersThirdCompTitle: "Customer Reviews",
//   numbersThirdCompNumbers: "21,394",
//   numbersThirdCompDesc: "Qui iure voluptatem quam 15k+ users.",
//   stepsTitle: "How it works",
//   stepsDesc:
//     "Our process is designed to help you succeed. Here's how we can collaborate.",
//   stepsFirstCompTitle: "Reach Out",
//   stepsFirstCompDesc:
//     "Let's start the conversation. Contact us to discuss your project or ask any questions.",
//   stepsSecCompTitle: "Analyze",
//   stepsSecCompDesc:
//     "Our team will carefully analyze your requirements and provide you with the best solution.",
//   stepsThirdCompTitle: "Implement",
//   stepsThirdCompDesc:
//     "Let's bring your vision to life. Our team will work with you to implement the solution.",

//   landingFooterTitle: "Start protecting your bussiness reveneue",
//   landingFooterDesc:
//     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quis nam tenetur itaque.",
//   landingFooterButton: "Get A Free Quote",
//   landingFooterItem1: "Germany",
//   landingFooterItem2: "United Kingdom",
//   landingFooterItem3: "Spain",
//   landingFooterItem4: "United States",
//   landingFooterItem5: "Italy",
//   landingFooterItem6: "Morocco",
//   landingFooterItem7: "Malaga",
//   landingFooterItem8: "Indonesia",
//   landingFooterItem9: "Japan",
//   landingFooterItem10: "Canada",
// };

// const home = await prisma.home.create({
//   data: homeData,
// });

// const testimonials = [
//   {
//     homeId: home.id,
//     quote:
//       "Working with ALTITUDE CORP has been both challenging and rewarding. Their expertise in navigating complex market conditions has helped our business thrive even in uncertain times. I highly recommend their services.",
//     author: "John Smith",
//     company: "ABC Corporation",
//   },
//   {
//     homeId: home.id,
//     quote:
//       "Partnering with ALTITUDE CORP has been instrumental in our company's growth strategy. Their innovative solutions have enabled us to stay ahead of the competition and achieve remarkable success in our industry.",
//     author: "Jane Doe",
//     company: "XYZ Enterprises",
//   },
//   {
//     homeId: home.id,
//     quote:
//       "All that we have achieved in the past year is nothing short of miraculous, thanks to the strategic guidance and support provided by ALTITUDE CORP. Their commitment to our success is unparalleled.",
//     author: "Michael Johnson",
//     company: "123 Industries",
//   },
//   {
//     homeId: home.id,
//     quote:
//       "From inception to execution, ALTITUDE CORP has been a trusted partner every step of the way. Their dedication to understanding our unique needs and delivering tailored solutions has been invaluable to our business.",
//     author: "Emily Wilson",
//     company: "DEF Corporation",
//   },
//   {
//     homeId: home.id,
//     quote:
//       "Choosing to work with ALTITUDE CORP was one of the best decisions we made for our business. Their professionalism, attention to detail, and results-driven approach have exceeded our expectations time and time again.",
//     author: "David Brown",
//     company: "456 Enterprises",
//   },
// ];

// await prisma.review.createMany({
//   data: testimonials,
// });

// const blogPageData = {
//   blogPageTitle: "Welcome to Our Blog",
//   blogPageSubtitle:
//     "Discover a world of baking delights, culinary adventures, and more.",
//   blogPageLatestTitle: "Here are our latest posts",
//   blogPageLatestSubtitle: "Explore the unknown",
//   blogPageExploreTitle: "Explore more",
//   blogPageExploreSubtitle:
//     "The latest and greatest news from around the world. Your one-stop shop for all things interesting.",
//   blogPageSubscribeTitle: "Subscribe to our Newsletter",
//   blogPageSubscribeSubtitle:
//     "Stay updated with our latest news and product releases.",
//   blogPageSubscribeMinSubtitle: "Subscribe now to receive our newsletter.",
// };

// await prisma.blogPage.createMany({
//   data: blogPageData,
// });

// const servicesPageData = {
//   servicesPageHeroTitle: "Grow Professionally with the Best",
//   servicesPageHeroSubtitle:
//     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In accusamus fugiat, mollitia atque id minus veritatis minima pariatur cum quasi!",
//   servicesPageLetUsHelpTitle: "Let Us Help You",
//   servicesPageLetUsHelpSubtitle:
//     "Our team is ready to help you achieve your goals. We provide expert advice and professional services to take your business to the next level.",
//   servicesPageLetUsHelpService1Title: "Service One",
//   servicesPageLetUsHelpService1Desc: "Description of service one.",
//   servicesPageLetUsHelpService2Title: "Service Two",
//   servicesPageLetUsHelpService2Desc: "Description of service two.",
//   servicesPageLetUsHelpService3Title: "Service Three",
//   servicesPageLetUsHelpService3Desc: "Description of service three.",
//   servicesPageStepsBadge: "Embrace the Process",
//   servicesPageStepsTitle: "Enhancing User Experience Through Our Process",
//   servicesPageSteps1Badge: "Step 1",
//   servicesPageSteps1Title: "Initial Consultation",
//   servicesPageSteps1Subtitle:
//     "We start by understanding your vision and requirements to lay the foundation for a successful project.",
//   servicesPageSteps2Badge: "Step 2",
//   servicesPageSteps2Title: "Project Planning",
//   servicesPageSteps2Subtitle:
//     "Our experts meticulously plan every aspect of your project, ensuring that we are aligned with your goals and objectives.",
//   servicesPageSteps3Badge: "Step 3",
//   servicesPageSteps3Title: "Execution",
//   servicesPageSteps3Subtitle:
//     "With careful attention to detail, we bring your ideas to life, leveraging the latest technologies and best practices.",
//   servicesPageSteps4Badge: "Step 4",
//   servicesPageSteps4Title: "Quality Assurance",
//   servicesPageSteps4Subtitle:
//     "We conduct rigorous testing and quality assurance processes to ensure that your project meets the highest standards.",
//   servicesPageSteps5Badge: "Step 5",
//   servicesPageSteps5Title: "Delivery",
//   servicesPageSteps5Subtitle:
//     "Discover how we deliver exceptional results by following a structured and tailored approach. Our process is meticulously crafted to be efficient, effective, and customized to meet the distinct requirements of every project.",
//   servicesPageContactUsTitle: "Let's Build Something Amazing Together",
//   servicesPageContactUsSubtitle:
//     "We are committed to providing our clients with the highest level of service and expertise. If you have a project in mind, we would love to hear from you.",
//   servicesPageContactUsMinTitle: "Get in Touch",
//   servicesPageContactUsMinSubtitle:
//     "We're here to help! Fill out the form below and we'll get back to you as soon as possible.",
// };

// await prisma.servicesPage.createMany({
//   data: servicesPageData,
// });

// const faqPageData = {
//   faqPageTitle: "FAQ",
//   faqPageSubtitle:
//     "Got a question? We've got answers. If you have some other questions, feel free to send us an email to",
//   faqPageHelpEmail: "example@gamail.com",
//   faqPageQuestion1Title: "Lorem ipsum dolor sit amet?",
//   faqPageQuestion1Subtitle:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   faqPageQuestion2Title: "Lorem ipsum dolor sit amet?",
//   faqPageQuestion2Subtitle:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   faqPageQuestion3Title: "Lorem ipsum dolor sit amet?",
//   faqPageQuestion3Subtitle:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   faqPageQuestion4Title: "Lorem ipsum dolor sit amet?",
//   faqPageQuestion4Subtitle:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   faqPageQuestion5Title: "Lorem ipsum dolor sit amet?",
//   faqPageQuestion5Subtitle:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
// };

// await prisma.faqPage.create({
//   data: faqPageData,
// });
