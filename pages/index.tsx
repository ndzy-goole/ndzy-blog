import BlogContainer from '../components/blogContainer';
import Posts from '../components/posts';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Post from '../types/post';
import { Input } from 'antd';
import { useState } from 'react';
const { Search } = Input;

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const data = allPosts;
  const [posts, setPosts] = useState(allPosts);

  return (
    <>
      <Layout>
        {/* 网站标题  */}
        <Head>
          <title>ndzy-blog with {CMS_NAME}</title>
        </Head>
        <BlogContainer>
          <div className="p-4">
            <Search
              placeholder="请输入"
              onSearch={(value) => {
                const reg = new RegExp(value);
                const searchPosts = data.filter((item) => {
                  if (value === '') {
                    return item;
                  }

                  return (
                    reg.test(item.title) ||
                    reg.test(item.date) ||
                    reg.test(item.slug) ||
                    reg.test(item.excerpt)
                  );
                });
                setPosts(searchPosts);
              }}
              enterButton
            />
          </div>

          {posts.length > 0 && <Posts posts={posts} />}
        </BlogContainer>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ]);
  return {
    props: { allPosts }
  };
};
