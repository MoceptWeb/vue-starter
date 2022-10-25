import axios from 'axios'

const axiosInstance = axios.create({
  timeout: 0
})

axiosInstance.interceptors.request.use((config) => {
  config.headers['x-platform'] = 'desktop'
  //   config.headers['accept-language'] = getCurrentLangServe(lang)
  return config
})

axiosInstance.interceptors.response.use(
  (response) => {
    const { data, config } = response
    if (!data || !data.success) {
      const error = data && data.error
      if (['400', '4001', '11001', '050003', '29001', '4008'].includes(error && error.code)) {
        // Modal.error({
        //   icon: 'minus-circle',
        //   content: error.message || 'Error',
        //   onOk() {
        //     const langPath = lang === 'en' ? '' : `/${lang === 'zh-HK' ? 'zh-TW' : lang}`
        //     if ('4008' === error.code) {
        //       window.location.href = `${langPath}/select_merchant`
        //     } else {
        //       Cookie.remove('isLogin')
        //       window.location.href = `${langPath}/login`
        //     }
        //   }
        // })
      }

      if (config.showError !== false) {
        // message.error(data && data.error && data.error.message)
      }

      return Promise.reject(data && data.error)
    }
    return response.data
  },
  (error) => {
    if (
      error.response &&
            error.response.data &&
            !error.response.data.success &&
            error.response.data.error &&
            error.response.data.error.code &&
            error.response.data.error.code === '4001'
    ) {
      //   Modal.error({
      //     icon: 'minus-circle',
      //     content: i18n.t('20602'),
      //     onOk() {
      //       const langPath = lang === 'en' ? '' : `/${lang === 'zh-HK' ? 'zh-TW' : lang}`
      //       if ('4008' === error.code) {
      //         window.location.href = `${langPath}/select_merchant`
      //       } else {
      //         Cookie.remove('isLogin')
      //         window.location.href = `${langPath}/login`
      //       }
      //     }
      //   })
    } else {
      //   message.error(error && error.message)
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
