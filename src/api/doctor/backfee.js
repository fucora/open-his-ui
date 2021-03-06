import request from '@/utils/request'
// 根据挂号ID查询已支付的处方信息及详情
export function getChargedCareHistoryByRegId(regId) {
  return request({
    url: '/doctor/backfee/getChargedCareHistoryByRegId/' + regId,
    method: 'get'
  })
}
// 创建现金退费订单
export function createOrderBackfeeWithCash(data) {
  return request({
    url: '/doctor/backfee/createOrderBackfeeWithCash',
    method: 'post',
    data: data
  })
}
// 创建支付宝退费订单
export function createOrderBackfeeWithZfb(data) {
  return request({
    url: '/doctor/backfee/createOrderBackfeeWithZfb',
    method: 'post',
    data: data
  })
}
// 分页查询所有退费订单
export function queryAllOrderBackfeeForPage(params) {
  return request({
    url: '/doctor/backfee/queryAllOrderBackfeeForPage',
    method: 'get',
    params: params
  })
}
// 根据订单ID查询订单详情
export function queryOrderBackfeeItemByBackId(backId) {
  return request({
    url: '/doctor/backfee/queryOrderBackfeeItemByBackId/' + backId,
    method: 'get'
  })
}
