import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import Navbar from "../component/Navbar";
import Loader from "../component/Loader";

const Home = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState();
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("");
  const [err, setErr] = useState("");

  // const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9050b9ac503e465ab64f5319dc63aadf&page=${page}`;
  // const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=a4370f89fe124b3e95e339d57ffe50cf&page=${page}`;
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=12eb621581444cc3b70f093c8157016a&page=${page}`;
  const fetchMorePosts = async () => {
    // console.log("pikachu");
    if (loading) return; // Avoid duplicate fetch requests
    setLoading(true);

    if (total > (page - 1) * 20) {
      try {
        const res = await fetch(`${url}`);
        const data = await res.json();
        setPosts((prevPosts) => [...prevPosts, ...data?.articles]);
        if (data.articles == []) {
          setEnd(true);
          console.log("ravan");
        }
      } catch (error) {
        console.error(error);
        setErr(error.message);
        console.log(err);
        // setTimeout(() => {
        //   setErr("");
        //   // Revert state to false after 3 seconds
        // }, 3000);
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log(page);
      try {
        const response = await fetch(`${url}`);
        // const response = await fetch(` https://dummyjson.com/recipes?limit=10`);
        const data = await response.json();
        console.log(data);
        setPosts(data.articles);
        setTotal(data.totalResults);
      } catch (error) {
        console.error(error);
        setErr(error.message);
        console.log(err);
        // setTimeout(() => {
        //   setErr("");
        //   // Revert state to false after 3 seconds
        // }, 3000);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}`);
        // const response = await fetch(` https://dummyjson.com/recipes?limit=10`);
        const data = await response.json();
        console.log(data);
        setPosts(data.articles);
        setTotal(data.totalResults);
      } catch (error) {
        console.error(error);
        setErr(error.message);
        console.log(err);
        // setTimeout(() => {
        //   setErr("");
        //   // Revert state to false after 3 seconds
        // }, 10000);
      }
      setLoading(false);
    };

    fetchData();
  }, [country, category]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 1
      ) {
        // console.log("pikachu");
        setPage(page + 1);
        fetchMorePosts();
      } else {
        // console.log(window.innerHeight + document.documentElement.scrollTop);
        // console.log(document.documentElement.scrollHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [posts]);
  const handlelength = () => {
    console.log(window.innerHeight + document.documentElement.scrollTop);
    console.log(document.documentElement.scrollHeight);
    console.log(posts.length);
  };
  return (
    <div className="bg-black h-auto">
      <div className=" ">
        <Navbar
          setCategory={setCategory}
          setCountry={setCountry}
          country={country}
          category={category}
        />
      </div>
      <div className="pt-40 pl-10 grid grid-cols-1 gap-x-4 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 pb-10">
        {posts ? (
          posts.map((post, index) => <Card post={post} key={index} />)
        ) : (
          <></>
        )}
      </div>
      <div>{loading ? <Loader /> : <></>}</div>
      {!err == "" ? <div className="text-white text-xl">{err}</div> : <></>}
    </div>
  );
};

export default Home;
