# git log
 
 - q 退出 日志浏览
 - git log --pretty=oneline ：oneline 会将每个提交放在一行显示
 - git log --stat : 看到每次提交的简略统计信息
 - git log --pretty=format:"%h - %an, %ar : %s": 定制记录的显示格式


## git log 常用参数

 -p

按补丁格式显示每个提交引入的差异。

--stat

显示每次提交的文件修改统计信息。

--shortstat

只显示 --stat 中最后的行数修改添加移除统计。

--name-only

仅在提交信息后显示已修改的文件清单。

--name-status

显示新增、修改、删除的文件清单。

--abbrev-commit

仅显示 SHA-1 校验和所有 40 个字符中的前几个字符。

--relative-date

使用较短的相对时间而不是完整格式显示日期（比如“2 weeks ago”）。

--graph

在日志旁以 ASCII 图形显示分支与合并历史。

--pretty

使用其他格式显示历史提交信息。可用的选项包括 oneline、short、full、fuller 和 format（用来定义自己的格式）。

--oneline

--pretty=oneline --abbrev-commit 合用的简写。