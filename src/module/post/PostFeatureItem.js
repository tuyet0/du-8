import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
let slugify = require("slugify");

const PostFeatureItemStyles = styled.div`
  width: 100%;
  border-radius: 16px;
  position: relative;
  height: 200px !important;
  overflow: hidden;
  .post {
    &-image {
      border-radius: 16px;
    }
    &-overlay {
      position: absolute;
      inset: 0;
      border-radius: 16px;
      background: linear-gradient(
        179.77deg,
        #6b6b6b 36.45%,
        rgba(163, 163, 163, 0.622265) 63.98%,
        rgba(255, 255, 255, 0) 99.8%
      );
      mix-blend-mode: multiply;
      opacity: 0.6;
    }
    &-content {
      position: absolute;
      inset: 0;
      z-index: 10;
      padding: 20px;
      color: white;
    }
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 1024px) {
    height: 272px;
  }
`;
const PostFeatureItem = ({ data }) => {
  if (!data || !data.id) return null;
  const {category,user} = data;
  return (
    <PostFeatureItemStyles>
      <PostImage to={data?.slug} url={`${data.image}`} alt="unsplash" />
      <div className="post-overlay"></div>
      <div className="post-content">
        <div className="post-top">
          {category?.name && <PostCategory to={category.slug}>{category.name}</PostCategory>}
          <PostMeta  to={slugify(user?.fullname || "",{lower:true})}
            authorName={user?.fullname}
            date={new Date(data?.createdAt?.seconds * 1000).toLocaleDateString("vi-VI")}
            className="post-info"
          ></PostMeta>
        </div>
        <PostTitle to={data.slug} size="big">{data.title}</PostTitle>
      </div>
    </PostFeatureItemStyles>
  );
};

export default PostFeatureItem;
