import Link from "next/link";


export const metadata = {
  title:{
    absolute: "Blog Page",
  },
  description: 'This is blog',
  alternates: {
    canonical: `/blog`,
    languages: {
      "en-CA": `en-CA/blog`
    }
  }
};

// async function getPostsData() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   return res.json();
// }

// async function getUserData() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   await new Promise((resolve) => setTimeout(resolve, 3000))
//   return res.json();
// }

const Blog = async() => {
  // const posts = await getPostsData();

  // // Multiple api endpoint
  // const [posts, users] = await Promise.all([getPostsData(), getUserData()]);
  
  return (
    <div className='container py-5'>
      
      <h1>Users</h1>
      {/* {
        users.map((user, index) => {
            <p key={index}>{user.name}</p>
        })
      } */}

      <h1>Post</h1>
      {/* { posts.map(post => {
          <Link key={post.id} href="/">{post.name}</Link>
        })
      } */}
      Blog
    </div>
  )
}

export default Blog;