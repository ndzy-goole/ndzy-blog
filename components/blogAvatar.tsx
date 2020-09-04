import IsShow from './isShow';
type Props = {
  name: string;
  picture: string;
};
// 用户头像以及名称
const BlogAvatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <IsShow
        flag={picture}
        content={
          <img
            src={picture}
            className="w-12 h-12 rounded-full mr-4"
            alt={name}
          />
        }
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default BlogAvatar;
