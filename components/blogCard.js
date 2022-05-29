export default function BlogCard({post}){
   return ( <div className="blog-header" key={post.id}>
   <div className="blog-article header-article">
     <div className="blog-big__title">{post.category}</div>
     <div className="blog-menu small-title date">
       {post.datePublished}
     </div>
   </div>
  
   <div className="blog-article">
     <img src={post.coverImg.url} alt="" />
     <h2>{post.title}</h2>
     <div className="blog-detail">
       <span>By {post.author.name}</span>
       <span>{post.time}</span>
     </div>
     <p>{post.description}</p>
     <a href={'/posts/'+post.id}>
       <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-corner-down-right"
         viewBox="0 0 24 24"
       >
         <path d="M15 10l5 5-5 5" />
         <path d="M4 4v7a4 4 0 004 4h12" />
       </svg>
       See More
     </a>
   </div>
 </div>)
}