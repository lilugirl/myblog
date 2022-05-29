export default function Menu() {
  return (
    <div className="blog-part is-menu">
      <a href="#" className="blog-menu">
       作品
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth=".7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-up-right"
          viewBox="0 0 24 24"
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </a>
      <a href="#" className="blog-menu">
        工作室
      </a>
      <a href="#" className="blog-menu">
       博客
      </a>
      <a href="#" className="blog-menu">
       联系我们
      </a>
      <a href="#" className="blog-menu mention">
        @Lilu
      </a>
      <a href="#" className="blog-menu subscribe">
        订阅
      </a>
    </div>
  );
}
