import { Button } from 'antd'// babel会自动干 antd/lib/button
import Link from 'next/link'

export default ({ children }) => (
  <div>
    <header>
    {/* Link 必须只包裹一个标签元素 */}
    <Link href="/test/a" as='/test/a'>
        <Button>test a</Button>
    </Link>
    <Link href="/test/b" as='/test/b'>
        <Button>test b</Button>
    </Link>
  </header>

  <div>{children}</div>
  </div>
)