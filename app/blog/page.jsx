/**
 * blog/page.jsx
 */

import CategoriesList from "@/components/CategoriesList";
import Post from "@/components/Post";

const getPosts = async () => {
  try {
    // const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
    //   cache: "no-store",
    // });

    const res = await prisma.Post.findMany();
    if (res) {
      return res;
    }
    // if (res.ok) {
    //   const posts = await res.json();
    //   return posts;
    // }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div className="w-full max-w-7xl mx-auto">
      <CategoriesList />
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author.name}
            authorEmail={post.authorEmail}
            date={post.createdAt}
            thumbnail={post.imageUrl}
            category={post.catName}
            title={post.title}
            content={post.content}
            links={post.links || []}
          />
        ))
      ) : (
        <div className="py-6">No posts to display</div>
      )}
    </div>
  );
}
