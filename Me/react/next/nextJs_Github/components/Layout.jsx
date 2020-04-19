import { Button } from 'antd'// babel会自动干 antd/lib/button
import Link from 'next/link'

export default ({ children }) => (
  <header>
    {/* Link 必须只包裹一个标签元素 */}
    <Link href="/test/a?id=1" as='/test/a/1'>
        <Button>test a</Button>
    </Link>
    <Link href="/test/b?id=1" as='/test/b/2'>
        <Button>test b</Button>
    </Link>
  </header>
)