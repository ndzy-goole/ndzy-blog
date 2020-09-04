import { useState, useEffect } from 'react';
type Props = {
  flag: any;
  content: any;
};

const IsShow = (props: Props) => {
  const [content, setContent] = useState();
  useEffect(() => {
    if (props.flag) {
      setContent(props.content || undefined);
    } else {
      setContent(undefined);
    }
  }, [props]);
  return <>{content}</>;
};

export default IsShow;
