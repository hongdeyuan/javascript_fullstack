<template>
  <div class="publish-note">
    <v-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></v-editor>

    <div class="note-wrap">
      <div class="note-title">
        <h2>输入标题</h2>
        <van-field v-model="title" placeholder="请输入用户名" />
      </div>
      <div class="note-title">
        <h2>上传图片</h2>
        <van-uploader :after-read="onRead" accept="image/*.*">
          <van-icon name="photograph"></van-icon>
          <span style="font-size:15px;color:red;margin-left:15px;">图片规格750*750</span>
        </van-uploader>
        <img class="preImg" :src="preImg" alt v-if="preImg" />
      </div>
      <div class="note-title">
        <h2>请选择分类</h2>
        <div @click="selectType" class="note-type">选择分类 &gt; {{selectCon}}</div>
        <van-action-sheet @cancel="onCancel" cancel-text="取消" v-model="show" :actions="actions" @select="onSelect" />
      </div>
      <div class="publish-btn">发布笔记</div>
    </div>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
export default {
  data() {
    return {
      content: "",
      title: "",
      preImg: "",
      show: false,
      actions: [
        {
          name: "选项"
        },
        {
          subname: "美食"
        },
        {
          subname: "旅行"
        },
        {
          subname: "汽车"
        },
        {
          subname: "时尚"
        },
        {
          subname: "科技"
        }
      ],
      selectCon: "",
      editorOption: {
        modules: {
          toolbar: [
            [
              "bold",
              "italic",
              "underline",
              "strike",
              "image",
              "clean",
              { color: [] },
              { background: [] },
              { font: [] },
              { size: ["small", false, "large", "huge"] },
              { header: [1, 2, 3, 4, 5, 6, false] },
              { indent: "-1" },
              { indent: "+1" }
            ], // toggled buttons
            ["blockquote"]
          ]
        }
      }
    };
  },
  components: {
    "v-editor": quillEditor
  },
  methods: {
    onEditorBlur(event) {},
    onEditorFocus(event) {},
    onEditorChange(event) {},
    onRead() {},
    onSelect(item) {
      // console.log(item)
      this.selectCon = item.subname
      this.show = false

    },
    onCancel() {},
    selectType () {
      this.show = true
    }
  }
};
</script>

<style lang="less">
.van-uploader {
  padding: 10px 15px;
  display: flex;
  align-items: center;
}
.ql-container {
  height: 6.666667rem;
  overflow-y: scroll;
}
.note-wrap {
  margin-top: 20px;
  box-sizing: border-box;
  h2 {
    font-weight: 400;
    box-sizing: border-box;
    font-size: 0.373333rem;
    color: rgba(69, 90, 100, 0.6);
    padding: 10px;
    background: #f5f5f5;
  }
  .preImg {
    width: 100px;
    height: 100px;
    margin-left: 15px;
  }
  .note-type {
    width: 100%;
    display: inline-block;
    font-size: 0.373333rem;
    box-sizing: border-box;
    color: #333;
    line-height: 24px;
    padding: 10px 15px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid #ccc;
      width: 200%;
      height: 1px;
      transform: scale(0.5);
      transform-origin: left bottom;
    }
  }
  .publish-btn {
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 44px;
    margin: 40px auto;
    font-size: 0.453333rem;
    border-radius: 6px;
    background-color: rgba(139, 195, 74, 1);
    color: #fff;
  }
}
</style>
