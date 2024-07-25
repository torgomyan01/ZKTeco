"use client";

import styles from "./Blog.module.scss";
import BlogIntro from "./blog-intro/BlogIntro";
import BlogSecond from "./blog-second/BlogSecond";

const Blog = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <BlogIntro />
        <BlogSecond />
      </div>
    </div>
  );
};
export default Blog;
