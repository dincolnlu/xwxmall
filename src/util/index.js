
const isString = (o) => { // 是否字符串
  return Object.prototype.toString.call(o).slice(8, -1) === 'String'
}

const isNumber = (o) => { // 是否数字
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}

const isObj = (o) => { // 是否对象
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}

const isArray = (o) => { // 是否数组
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

const isDate = (o) => { // 是否时间
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}

const isBoolean = (o) => { // 是否boolean
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

const isFunction = (o) => { // 是否函数
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

const isNull = (o) => { // 是否为null
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

const isUndefined = (o) => { // 是否undefined
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

const isFalse = (o) => {
  if (!o || o === 'null' || o === 'undefined' || o === 'false' || o === 'NaN') return true
  return false
}

const isTrue = (o) => {
  return !this.isFalse(o)
}

const isDef = (o) => {
  return o !== undefined && o !== null
}

export { isString, isNumber, isObj, isArray, isDate, isBoolean, isFunction, isNull, isUndefined, isFalse, isTrue, isDef }
