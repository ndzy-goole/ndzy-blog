import BlogContainer from './blogContainer';
// import { EXAMPLE_PATH } from '../lib/constants';
// 尾部组件
const BlogFooter = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <BlogContainer>
        <div className="py-4 flex flex-col lg:flex-row items-center">
          <h3>created by ndzy</h3>
        </div>
      </BlogContainer>
    </footer>
  );
};

export default BlogFooter;
