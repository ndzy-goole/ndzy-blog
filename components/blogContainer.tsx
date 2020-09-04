import { ReactNode, FunctionComponent } from 'react';

type Props = {
  children?: ReactNode;
};

// 内容区块组件
const BlogContainer: FunctionComponent = ({ children }: Props) => {
  return <div className="container mx-auto px-5">{children}</div>;
};

export default BlogContainer;
