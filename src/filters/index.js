import Moment from 'moment'

// 日期时间格式化
const dateFormat = (date, formatStr) => {
  return Moment(date).format(formatStr)
}

export {
  dateFormat
}
