# storybook demo1

## 创建应用
  - npx create-react-app demo1
  - cd demo1
  - npx -p @storybook/cli sb init

## 测试使用
  - Run the test runner (Jest) in a terminal:
    yarn test

  - Start the component explorer on port 9009:
    yarn run storybook

  - Run the frontend app proper on port 3000:
    yarn start

## *.stories.js 文件说明

  - compont - 组件本身，
  - title - 如何引用该组件在童话故事的应用程序的侧边栏，
  - excludeStories - 在不应被渲染成由童话故事的故事文件出口

  要定义我们的故事，我们出口的功能我们每个测试的状态产生了一个故事。故事是一个函数，返回一个呈现的元素在给定的状态（与一组道具即组件类）

  action（）允许我们创建单击时出现在动作面板的故事UI的回调。所以，当我们建立了一个固定按钮，我们就可以在测试UI，以确定是否一个按钮，点击成功。

  当我们需要在同一组动作传递给我们的组件的所有排列，可以很方便地捆绑起来成一个单一的actionsData变量和使用React's {...actionsData} props扩张通过他们的一次。
  `<Task {...actionsData}>`
  等同于
  `<Task onPinTask={actionsData.onPinTask} onArchiveTask={actionsData.onArchiveTask}>`

  关于捆绑的行动纳入actionsData的另一个好处是，你可以导出变量和使用案例的行动为重用这个组件

## 自动化测试
  故事给了我们一个伟大的方式直观地测试我们的施工过程中的应用。在“故事”将有助于确保我们不打破我们的任务视觉，我们将继续开发应用程序。然而，正是在这个阶段，完全手工工艺，并有人去点击通过每个测试状态，并确保它呈现良好，没有错误或警告的努力。模拟点击测试需要快照测试Snapshot testing

## Snapshot testing
  快照测试是指记录元件的“已知好的”输出对于给定的输入，然后标记该组件每当输出中的未来变化的做法

### 依赖安装
  - yarn add --dev @storybook/addon-storyshots react-test-renderer

  ```js
  // src/storybook.test.js  
  import initStoryshots from '@storybook/addon-storyshots';  initStoryshots();
  ```