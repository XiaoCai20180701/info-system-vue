module.exports = function () {
  var faker = require('faker')
  faker.locale = 'zh_CN'
  var _ = require('lodash')

  var getPhotoList =  _.times(5, function (n) {
    return {
      id: n,
      text: faker.random.word(),
      img_url: faker.random.image()
    }
  })

  return {
    people: _.times(5, function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar()
      }
    }),
    address: _.times(10, function (n) {
      return {
        id: faker.random.uuid(),
        city: faker.address.city(),
        county: faker.address.county()
      }
    }),
    getNewsList: _.times(15, function (n) {
      return {
        id: faker.random.number(),
        title: faker.random.word(),
        click_count: faker.random.number(),
        publish_time: faker.date.past(),
        img_url: faker.random.image()
      }
    }),
    getNewsDetail: _.times(1, function (n) {
      return {
        title: faker.random.word(),
        click_count: faker.random.number(),
        add_time: faker.date.past(),
        v_html: faker.random.words()
      }
    }),
    getPhotoList: _.times(10, function (n) {
      return {
        id: n,
        list: getPhotoList
      }
    }),
    getCategoryList:_.times(10, function (n) {
      return {
        id: n,
        name: faker.random.word()
      }
    })
  }
}
