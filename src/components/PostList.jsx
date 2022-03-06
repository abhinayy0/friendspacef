import React, { useReducer, useState, useEffect } from "react";
import getPosts from "../api/getPosts";
import { Post } from ".";
function PostList(props) {
  const [all_posts, setAllPosts] = useState([{}]);

  useEffect(() => {
    const getallPosts = async () => {
      const posts = await getPosts();
      setAllPosts(posts);
    };
    // run it, run it

    getallPosts();

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);
  return (
    <div className="posts-list">
      {all_posts.map((mypost) => {
        return (
          <div key={mypost.id}>
            <Post key={mypost.id} post={mypost} />
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
