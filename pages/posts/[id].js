import { GraphQLClient, gql } from "graphql-request";
import Menu from "../../components/menu";

const clinet = new GraphQLClient(
  "https://api-ap-northeast-1.graphcms.com/v2/cl3r5o4vy8pmz01xi8szu1ly9/master"
);

const IDLIST = gql`
  {
    posts {
      id
    }
  }
`;

const QUERY = gql`
  query ($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      datePublished
      author {
        name
        avatar {
          url
        }
      }
      coverImg {
        url
      }
      content {
        html
      }
    }
  }
`;
export async function getStaticPaths() {
  const { posts } = await clinet.request(IDLIST);
  return {
    paths: posts.map((post) => ({ params: { id: post.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await clinet.request(QUERY, { id: params.id });

  return {
    props: {
      post: data.post,
    },
    revalidate:10
  };
}

export default function Post({ post }) {
  if (!post) {
    return <div>loading...</div>;
  }
  return (
    <div className="blog-wrapper">
      <div className="blog">
        <Menu />
        <div className="blog-content">
          <div className="title">{post.title}</div>

          <div className="blog-author">
            <img src={post.author.avatar.url} alt="" />
            <div>
              <div className="date">{post.datePublished}</div>
              <div>By {post.author.name}</div>
            </div>
          </div>
          <p dangerouslySetInnerHTML={{ __html: post.content.html }}></p>
        </div>
      </div>
    </div>
  );
}
