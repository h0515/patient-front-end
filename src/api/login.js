import request from '@/utils/request'
export function testLocal(data) {
    return request({
      url: 'proxy/api/tutorials/published',
      method: 'get',
      data
    })
}
  