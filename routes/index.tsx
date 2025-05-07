import { Handlers, PageProps } from "$fresh/server.ts";
import { postCardInfo } from "../types.ts";
import PostsViewer from "../islands/PostsViewer.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const response = await fetch(
      `https://back-p5-y0e1.onrender.com/api/posts`,
    );

    const data = await response.json();
    const posts = data.data.posts;

    return ctx.render(posts);
  },
};

const Home = (props: PageProps) => {
  const posts: postCardInfo[] = props.data;
  return (
    <>
      <PostsViewer posts={posts} />
    </>
  );
};

export default Home;
