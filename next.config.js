const rewrites = async () => {
  return [
    {
      // 都道府県の全物件リスト ①
      source: '/prefecture-:prefecture(\\w+)/list',
      destination: '/prefecture/:prefecture/list'
    },
    {
      // 都道府県x市区町村内の物件リスト ②
      source: '/prefecture-:prefecture(\\w+)/city-:city(\\d+)/list',
      destination: '/prefecture/:prefecture/city/:city/list'
    },
    {
      // 都道府県x絞り込みラベルの物件リスト ③
      source: '/prefecture-:prefecture(\\w+)/label-:label(\\w+)/list',
      destination: '/prefecture/:prefecture/label/:label/list'
    },
    {
      // 都道府県x市区町村x絞り込みラベルの物件リスト ④
      source: '/prefecture-:prefecture(\\w+)/city-:city(\\d+)/label-:label(\\w+)/list',
      destination: '/prefecture/:prefecture/city/:city/label/:label/list'
    }
  ]
}

const redirects = async () => {
  return [
    {
      // 都道府県の全物件リスト
      source: '/prefecture/:prefecture(\\w+)/list',
      destination: '/prefecture-:prefecture/list',
      statusCode: 301 // 省略した場合、ステータスコードは308
    },
    {
      // 都道府県x市区町村内の物件リスト
      source: '/prefecture/:prefecture(\\w+)/city/:city(\\d+)/list',
      destination: '/prefecture-:prefecture/city-:city/list',
      statusCode: 301
    },
    {
      // 都道府県x絞り込みラベルの物件リスト
      source: '/prefecture/:prefecture(\\w+)/label/:label(\\w+)/list',
      destination: '/prefecture-:prefecture/label-:label/list',
      statusCode: 301
    },
    {
      // 都道府県x市区町村x絞り込みラベルの物件リスト
      source: '/prefecture/:prefecture(\\w+)/city/:city(\\d+)/label/:label(\\w+)/list',
      destination: '/prefecture-:prefecture/city-:city/label-:label/list',
      statusCode: 301
    }
  ]
}

module.exports = {
  rewrites,
  redirects
}