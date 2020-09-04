import BlogAvatar from './blogAvatar';
import BlogCreateTime from './blogCreateTime';
import PostCoverImage from './postCoverImage';
import Link from 'next/link';
import Author from '../types/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}: Props) => {
  return (
    <div>
      {coverImage ? (
        <div className="mb-5">
          <PostCoverImage slug={slug} title={title} src={coverImage} />
        </div>
      ) : null}
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <BlogCreateTime dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <BlogAvatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
