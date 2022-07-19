import request from '@/utils/request'
import store from '@/store'
export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}
export const getUserInfo = () => {
  return request({
    url: '/user',
    headers: {
      Authorization: `${store.state.user.token}`
    }
  })
}

export const getCollectionList = () => {
  return request({
    url: '/user/favorites',
    headers: {
      Authorization: `${store.state.user.token}`
    }
  })
}
export const getHouseList = () => {
  return request({
    url: '/user/houses',
    headers: {
      Authorization: `${store.state.user.token}`
    }
  })
}
