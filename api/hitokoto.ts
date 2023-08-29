import request from './request'; 

export function getHitokoto() {
  return request.get('https://v1.hitokoto.cn', {
    params: {
      c: 'a',
      encode: 'json' 
    }
  })
}