import { resolve } from 'path'

const config = {
  projectName: 'myApp',
  date: '2021-1-23',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  alias: {
    '@components': resolve(__dirname, '..', 'src/components'),
    '@utils': resolve(__dirname, '..', 'src/utils')
  },
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
      // 需添加如下配置
      {
        from: 'node_modules/taro-echarts/components/ec-canvas/',
        to: 'dist/npm/taro-echarts/components/ec-canvas',
        ignore: ['ec-canvas.js', 'wx-canvas.js']
      }
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        },
        url: {
          enable: true,
          limit: 10240
        }
      }
    }
  },
  h5: {
    publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    devServer: {
      host: 'localhost',
      port: 10086,
      proxy: {
        '/api': {
          target: 'https://humanweaknesses.com',  // 服务端地址
          changeOrigin: true,
          pathRewrite: { '^/api': '/api' },
        }
      }
    },

  }
}

export default function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
