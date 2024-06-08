import { useState } from "react";
import "./style.css";
import { Header } from "../../components/Header/index";
import { Feed } from "../../components/Feed/index";
import { Footer } from "../../components/Footer/index";
import { arrayOfPosts } from "../../lib/posts";
import { useEffect } from "react";
import { arrayOfComments } from "../../lib/comments";

function App() {
  const [posts, setPosts] = useState(
    JSON.parse(window.localStorage.getItem("posts"))
  );

  useEffect(() => {
    const postsInLS = JSON.parse(window.localStorage.getItem("posts"));
    if (postsInLS[0] === undefined) {
      window.localStorage.setItem("posts", JSON.stringify(arrayOfPosts));
      window.localStorage.setItem("comments", JSON.stringify(arrayOfComments));
    }

    window.localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="App">
      <Header
        newPostFunction={(post) => setPosts((state) => [...state, post])}
        posts={posts}
      />
      <Feed posts={posts} />
      <Footer />
    </div>
  );
}

export default App;
