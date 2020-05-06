# git push
  git push 推送到远程主机上

## git push origin 
  上面命令表示，将当前分支推送到origin主机的对应分支；意思就是说 如果你的vscode当前所在分支 是 master就提交 master 分支，如果是 dev 分支就 提交 dev分支；

## git push origin master
  如果远程分支被省略，如上则表示将本地分支(master) 推送到与之存在追踪关系的远程分支（通常两者同名），如果该远程分支不存在，则会被新建;
  推送其它 分支： git push origin dev

## git push origin ：refs/for/master
  表示删除远程分支；如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支，

  等同于 git push origin --delete master

  此外还有 ：
  #慎用！删除远程仓库的分支
  git push origin :master
  #等同于
  git push origin --delete master

## git push -u origin master
  该命令表示将本地的master分支推送到origin主机，同时指定origin为默认主机； 也就是说 后面的 提交 直接使用 git push 就会默认选择 提交 master分支了

## git push --all origin
  表示 将本地的所有分支都推送到远程主机(origin)

## git push --force origin
  说的是 ： 当git push的时候需要本地先git pull更新到跟服务器版本一致时，如果本地版本库比远程服务器上的低，那么一般会提示你git pull更新；如果一定要提交，那么可以使用这个命令

## git push origin --tags 
  - 创建附注标签： git tag -a v0.1.2 -m “0.1.2版本”
  - git tag： 在控制台打印出当前仓库的所有标签
  - git tag -l ‘v0.1.*’ # 搜索符合模式的标签
  - push单个tag，命令格式为：git push origin [tagname]
    git push origin v1.0
  - git tag -d <tag> # 删除 标签(tag)

    如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除
    例如：
    #可以删除一个远程标签，在此之前先删除本地的
    git push origin :refs/tags/<tagname>

  - push所有tag
    git push --tags # 提交当前分支的 标签
    或
    git push origin --tags

  将本地所有Tag一次性提交到git服务器；
  注意 此时 的 git pus不会推送分支


## 关于 refs/for
  refs/for/[brach] 需要经过code review之后才可以提交，而refs/heads/[beanch]不需要code review

  例如:
  如果需要code review，直接执行push：

   git push origin mybranch

   就会报错“! [remote rejected] master -> master (prohibited by Gerrit)”

   必须用以下语句：

   git push origin HEAD:refs/for/mybranch


  // refs/for 的意义在于我们提交代码到服务器之后是需要经过code review 之后才能进行merge的，而refs/heads 不需要


## 强制覆盖 (慎用)
  git push --force origin 
  or 
  git push -f origin