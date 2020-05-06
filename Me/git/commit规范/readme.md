# Commit 说明
  - feat： 新功能（feature）
  - fix： 修补bug
  - docs： 文档（documentation）
  - style： 格式（不影响代码运行的变动）
  - refactor： 重构（即不是新增功能，也不是修改bug的代码变动）
  - test： 增加测试
  - chore： 构建过程或辅助工具的变动

以新增功能为例：
feat: [XXGH-3123] Add a new module "修改密码".
 - 尽量是一个完整语句
 - feat:后需要空格
 - issue id 前后需要空格
 - commit 语句大写开头，结尾要带上.号（feat、fix 等标识会用脚本格式化成驼峰 or 大写）


 ## 常用命令
  
  - git commit -a -m ‘提交信息’
    -m参数是输入提交信息的，-a 参数就是可以把还没有执行add命令的修改一起提交
  - git commit --amend
    输入命令之后弹出一个vim编辑器的界面，有提交信息，提示，提交时间
    我们直接 按 i 进入编辑状态 修改 提交信息，wq 保存退出
  - -s ： 就是自动加上Signed-off-by
    比如：  git commit --amend -s ； 或者 git commit -a -m ‘提交信息’ -s 都会带上自己的 Signed-off-by
  