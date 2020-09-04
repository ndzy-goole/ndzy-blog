import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import BlogContainer from '../../components/blogContainer';
import PostBody from '../../components/postBody';
import Header from '../../components/header';
import PostHeader from '../../components/postHeader';
import Layout from '../../components/layout';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import PostTitle from '../../components/postTitle';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import PostType from '../../types/post';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
  preview = true;
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <BlogContainer>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | ndzy-blog with {CMS_NAME}
                </title>
                {/* TODO: */}
                {post.ogImage.url ? (
                  <meta property="og:image" content={post.ogImage.url} />
                ) : null}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </BlogContainer>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
    fullPath: string;
  };
};

export async function getStaticProps({ params }: Params) {
  // { slug: 'typora-picGo_1596512273308' }
  // 处理 params
  const post_: any = getAllPosts(['slug']).filter((item) => {
    return item.slug === params.slug;
  });
  const post = getPostBySlug(post_[0], [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
          fullPath: posts.fullPath
        }
      };
    }),
    fallback: false
  };
}
