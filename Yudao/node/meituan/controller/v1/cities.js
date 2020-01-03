import BaseClass from '../../prototype/baseClass'
class Cities extends BaseClass{
  constructor() {
    super()
    this.suggestion = this.suggestion.bind(this)
  }
  async suggestion (req, res) {
    let { keyword }  = req.query;
    if (!keyword) {
      // 参数校验
      res.send({
        status: -1,
        message: '参数错误'
      })
      return;
    }
    try {
      // 数据库操作、网络等用 try-catch
      // console.log(keyword)
      let data = await this.locationSearch(keyword);
      // console.log(data)
      res.send({
        status: 200,
        message: '位置信息获取成功',
        data: data
      })
    } catch (error) {
      res.send({
        status: -1,
        message: '获取位置信息失败'
      })
    }
  }
}

export default new Cities();