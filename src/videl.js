import Components from './components/_components'
import Load from './utilities/load'

const defaults = {
  componentPrefix: 'Vd',
}

function plugin (Vue, options) {
  options = Object.assign(defaults, (options || {}))

  Object.keys(Components).forEach(name => {
    Vue.component(`${options.componentPrefix}${name}`, Components[name])
  })

  Vue.prototype.$vegeta = {
    load: Load
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
