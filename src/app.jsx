import React, { useEffect } from 'react'
import Taro from '@tarojs/taro'
import { Provider } from 'mobx-react'
import store from './store/index'
import 'taro-ui/dist/style/index.scss'
import './app.less'

const App = (props) => {

  useEffect(() => {
    console.log('come on!')
    // authorize()
  }, [])

  // function authorize() {
  //   // 可以通过 Taro.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
  //   Taro.getSetting({
  //     success: function (res) {
  //       if (!res.authSetting['scope.record']) {
  //         Taro.authorize({
  //           scope: 'scope.record',
  //           success: function () {
  //             // 用户已经同意小程序使用录音功能，后续调用 Taro.startRecord 接口不会弹窗询问
  //             Taro.startRecord()
  //           }
  //         })
  //       }
  //     }
  //   })
  // }

  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}

export default App
// class App extends Component {

//   componentDidMount() {
//     console.log('componentDidMount')
//     Taro.login({
//       success: function (res) {
//         console.log('res...', res)
//         if (res.code) {
//           //发起网络请求
//           Taro.request({
//             url: '/user/code2session',
//             data: {
//               code: res.code
//             }
//           })
//         } else {
//           console.log('登录失败！' + res.errMsg)
//         }
//       }
//     })
//   }

//   componentDidShow() {
//     console.log('componentDidShow')
//   }

//   componentDidHide() {
//     console.log('componentDidHide')
//   }

//   componentDidCatchError() {
//     console.log('componentDidCatchError')

//   }

//   // this.props.children 是将要会渲染的页面
//   render() {
//     return (
//       <Provider store={store}>
//         {this.props.children}
//       </Provider>
//     )
//   }
// }

// export default App

