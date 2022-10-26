import { makeRequest } from '../request.js'

export const getUserData = () => makeRequest({
  url: '/user'
})

export const getUserRepos = () => makeRequest({
  url: '/user/repos'
})
