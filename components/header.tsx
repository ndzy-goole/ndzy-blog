import Link from 'next/link'
import { Affix } from 'antd';
import { HomeFilled } from '@ant-design/icons'

const Header = () => {
  return (
    <Affix offsetTop={20}>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/">
          <a className="hover:underline"><HomeFilled /></a>
        </Link>
      </h2>
    </Affix>

  )
}

export default Header
