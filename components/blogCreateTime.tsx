type Props = {
  dateString: string;
};
// 时间展示组件
const BlogCreateTime = ({ dateString }: Props) => {
  return <time dateTime={dateString}>{dateString}</time>;
};

export default BlogCreateTime;
