import BlogCard from "./blogCard";

export default function BlogList({posts}){
    return (  <div className="blog-header-container">
    {posts.map((post) => {
      return <BlogCard post={post} key={post.id} />
    })}
  </div>)
}