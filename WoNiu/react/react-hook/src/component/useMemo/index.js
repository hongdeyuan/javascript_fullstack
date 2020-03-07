// useMemo(useCallBack) 优化React Hooks 程序的性能

import React, { useState, useMemo} from 'react'

function Example() {
  const [dhyuan, setDhyuan] = useState('dhyuan代码狂魔')
  const [ljc, setLjc] = useState('ljc is a girl')

  return (
    <div>
      {/* {dhyuan} - {ljc} */}
      <button onClick={() => { setDhyuan(new Date().getTime())}}>dhyuan</button>
      <button onClick={() => { setLjc(new Date().getTime()+'ljc很漂亮')}}>ljc</button>
      <ChildComponent name={ljc}>{dhyuan}</ChildComponent>
    </div>
  )
}

function ChildComponent({name, children}) {
  
  function changeLjc(name) {
    console.log(name + '不知道去哪了')

    return name + '去哪儿了'
  }

  const actionLjc = useMemo(() => changeLjc(name), [name])

  return (
    <div>
      <div>
        {children}
      </div>
      <div>
        {actionLjc}
      </div>
    </div>
  )
}

export default Example