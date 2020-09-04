import cn from 'classnames';
import Link from 'next/link';
import IsShow from './isShow';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const PostCoverImage = ({ title, src, slug }: Props) => {
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>
            <img
              src={src}
              alt={`Cover Image for ${title}`}
              className={cn('shadow-small', {
                'hover:shadow-medium transition-shadow duration-200': slug
              })}
            />
          </a>
        </Link>
      ) : (
        <IsShow
          flag={src}
          content={
            <img
              src={src}
              alt={`Cover Image for ${title}`}
              className={cn('shadow-small', {
                'hover:shadow-medium transition-shadow duration-200': slug
              })}
            />
          }
        />
      )}
    </div>
  );
};

export default PostCoverImage;
