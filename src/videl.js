import Components from './components/_components'
import Load from './utilities/load'
import camelCase from './utilities/camel-case'

const defaults = {
  componentPrefix: 'Vd',
}

const Videl = {
  install(Vue) {
    Object.keys(Components).forEach(name => {
      Vue.component(`${defaults.componentPrefix}${name}`, Components[name])
    })
  }
}

// Automatically install Videl if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Videl);
}

export default Videl
