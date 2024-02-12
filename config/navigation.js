/**
 * navigation.js
 */

// Define navigation configurations (top nav links and side nav links)
const navigationConfig = {
  ////Guest
  guestTopNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Resources",
      href: "/resources",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "About Us",
      href: "/about-us",
    },
    {
      title: "Contact Us",
      href: "/contact-us",
    },
  ],
  guestSideNav: [
    // {
    //   title: "Overview & Pages",
    //   data: [
    //     {
    //       title: "Overview",
    //       href: "/docs/overview",
    //     },
    //     {
    //       title: "Sign-In",
    //       href: "/docs/sign-in",
    //     },
    //     {
    //       title: "Register",
    //       href: "/docs/register",
    //     },
    //   ],
    // },
    // {
    //   title: "Documentation",
    //   data: [
    //     {
    //       title: "Database",
    //       href: "/docs/database",
    //     },
    //     {
    //       title: "Web Session",
    //       href: "/docs/web-session",
    //     },
    //     {
    //       title: "DB Session",
    //       href: "/docs/db-session",
    //     },
    //   ],
    // },
  ],
  ////User
  userTopNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/user/dashboard",
    },
    {
      title: "Blog",
      href: "/user/blog",
    },
  ],
  userSideNav: [
    // {
    //   title: "Pages",
    //   data: [
    //     {
    //       title: "Home (Landing Page)",
    //       href: "/",
    //     },
    //   ],
    // },
    {
      title: "User Pages",
      data: [
        {
          title: "+New Order",
          href: "/user/new-order",
        },
        {
          title: "Dashboard",
          href: "/user/dashboard",
        },
        {
          title: "Papers",
          href: "/user/papers",
        },

        {
          title: "Blog",
          href: "/user/blog",
        },
        {
          title: "Settings",
          href: "/user/settings",
        },
      ],
    },
  ],
  // ////Writer
  // writerTopNav: [
  //   {
  //     title: "Home",
  //     href: "/",
  //   },
  //   {
  //     title: "Dashboard",
  //     href: "/writer/dashboard",
  //   },
  //   {
  //     title: "Docs",
  //     href: "/docs/overview",
  //   },
  // ],
  // writerSideNav: [
  //   {
  //     title: "Pages",
  //     data: [
  //       {
  //         title: "Home (Landing Page)",
  //         href: "/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "User Pages",
  //     data: [
  //       {
  //         title: "Dashboard",
  //         href: "/writer/dashboard",
  //       },
  //       {
  //         title: "Current Orders",
  //         href: "/writer/current-orders",
  //       },
  //       {
  //         title: "Papers",
  //         href: "/writer/papers",
  //       },
  //     ],
  //   },
  // ],
  ////Admin
  adminTopNav: [
    // {
    //   title: "Home",
    //   href: "/",
    // },
    {
      title: "Home",
      href: "/admin",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "+Post",
      href: "/admin/create-post",
    },
  ],
  adminSideNav: [
    // {
    //   title: "Pages",
    //   data: [
    //     {
    //       title: "Home (Landing Page)",
    //       href: "/",
    //     },
    //   ],
    // },
    {
      title: "Admin Pages",
      data: [
        {
          title: "Dashboard",
          href: "/admin/dashboard",
        },
        {
          title: "Users",
          href: "/admin/users",
        },
        {
          title: "Papers",
          href: "/admin/papers",
        },
        {
          title: "Contracts",
          href: "/admin/contracts",
        },
        {
          title: "Services",
          href: "/admin/services",
        },
      ],
    },
  ],
};

// Export navigation configuration based on the user's role
export function getNavigationConfig(userRole) {
  switch (userRole) {
    case "ADMIN":
      return {
        topNav: navigationConfig.adminTopNav,
        sideNav: navigationConfig.adminSideNav,
      };
    // case "WRITER":
    //   return {
    //     topNav: navigationConfig.writerTopNav,
    //     sideNav: navigationConfig.writerSideNav,
    //   };
    case "USER":
      return {
        topNav: navigationConfig.userTopNav,
        sideNav: navigationConfig.userSideNav,
      };
    case "GUEST":
    default:
      return {
        topNav: navigationConfig.guestTopNav,
        sideNav: navigationConfig.guestSideNav,
      };
    //You can also add something like ADMIN
  }
}
