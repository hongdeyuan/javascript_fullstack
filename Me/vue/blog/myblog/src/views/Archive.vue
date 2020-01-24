<template>
  <div class="archive left">
    <el-timeline>
      <el-timeline-item placement="top">
        <h3 class="year">2019</h3>
        <el-timeline-item placement="top">
          <a href="https://juejin.im/post/5ddb8315e51d45232d1165cc">
            <h3 class="title">vue-趣味生活项目</h3>
          </a>
          <p>2019年11月25日</p>
        </el-timeline-item>
        <el-timeline-item placement="top">
          <a href="https://juejin.im/post/5dca50066fb9a04aba52bc65">
            <h3 class="title">腾讯视频插件三部曲</h3>
          </a>
          <p>2019年11月12日</p>
        </el-timeline-item>
      </el-timeline-item>
      <el-timeline-item placement="top">
        <h3 class="year">2018</h3>
        <el-timeline-item placement="top">
          <a href="https://juejin.im/post/5dca203df265da4d4b5ff256">
            <h3 class="title">正视跨域</h3>
          </a>
          <p>2018年11月12日</p>
        </el-timeline-item>
        <el-timeline-item placement="top">
          <a href="https://juejin.im/post/5d9b3cbd5188252c4e5d53d8">
            <h3 class="title">Github Pages-搭建网站</h3>
          </a>
          <p>2018年10月07日</p>
        </el-timeline-item>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.archive{
  padding: 40px 0;
  .left {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding-right: 20px!important;
    ul{
      li{
        .el-timeline-item__wrapper{
          .el-timeline-item__content{
            .year{
              font-size: 30px;
              font-weight: 700;
              color: #000;
              margin-top: 0;
              a{
                text-decoration: none;
                .title{
                  color: #333;
                }
                h3{
                  display: block;
                  font-size: 1.17em;
                  margin-block-start: 1em;
                  margin-block-end: 1em;
                  margin-inline-start: 0px;
                  margin-inline-end: 0px;
                  font-weight: bold;
                }
              }
              p{
                display: block;
                margin-block-start: 1em;
                margin-block-end: 1em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
              }
            }
          }
          
        }
      }
    }
    
  }
}
</style>