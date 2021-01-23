export default {
  pages: [
    'pages/my/index',
    'pages/map/index',
    'pages/index/index',
    'pages/record/index',
    'pages/location/index',
    'pages/notauthority/index',
    'pages/my/about/index'
  ],
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示'
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '首页',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#a9b7b7",
    selectedColor: "#D2691E",
    backgroundColor: "#fff",
    list: [
      {
        pagePath: "pages/index/index",
        text: "主页",
        selectedIconPath: './assets/image/xinnian-yanhua.png',
        iconPath: './assets/image/xinniantubiao-shangchuantubiaoku-_6.png'
      },
      {
        pagePath: "pages/my/index",
        text: "个人",
        selectedIconPath: '/assets/image/xinnian-yanhua.png',
        iconPath: './assets/image/xinniantubiao-shangchuantubiaoku.png'
      }
    ]
  }
}
