export default class BaseClass {
  constructor () {

  }
  async locationSearch (keyword) {
    console.log(keyword)
    return {
      city: '南昌',
      area: [
        '江西财经大学',
        '江财理财',
        '江西财经校区'
      ]
    }
  }
  async fetch(url='', data={}, type='GET', resType='JSON') {

  }
}