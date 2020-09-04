import BlogAvatar from './blogAvatar';
import BlogCreateTime from './blogCreateTime';
import PostCoverImage from './postCoverImage';
import PostTitle from './postTitle';
import Author from '../types/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <BlogAvatar name={author.name} picture={author.picture} />
      </div>
      {coverImage ? (
        <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
          <PostCoverImage title={title} src={coverImage} />
        </div>
      ) : null}
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <BlogAvatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <BlogCreateTime dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
