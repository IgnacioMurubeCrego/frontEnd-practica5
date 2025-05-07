import { FunctionalComponent } from "preact/src/index.d.ts";
import { postCardInfo } from "../types.ts";

import PostCard from "../components/PostCard.tsx";

type Props = {
  posts: postCardInfo[];
};

const PostsViewer: FunctionalComponent<Props> = (props) => {
  const posts = props.posts;
  return (
    <>
      <div class="container">
        <div class="header">
          <h1>
            <strong>Posts:</strong>
          </h1>
        </div>
        <div>
          {posts.map((p) => (
            <div>
              <PostCard post={p} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostsViewer;
