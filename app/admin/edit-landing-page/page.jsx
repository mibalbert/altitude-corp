/**
 * admin/edit-landing-page/page.jsx
 */

const EditLandingPage = async () => {
  const data = await prisma.home.findMany({});

  return <div>Edit Landing Page</div>;
};

export default EditLandingPage;
