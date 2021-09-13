import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      await fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80")
        .then((response) => response.json())
        .then((data) => {
          const beers = [];
          for (let item of data) {
            const beer = {
              key: item.id,
              ...item,
            };
            beers.push(beer);
          }

          setPosts(beers);
        });

      setLoading(false);
    };

    fetchPosts();
  }, []);

  //Get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Beers</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
