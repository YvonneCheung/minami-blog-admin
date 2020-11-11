import Http from '@/utils/http'

export const getArticleList = params =>
  Http.setPromise(`GET`, '/article/list', params)
