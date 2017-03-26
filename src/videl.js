import camelCase from './utilities/camel-case'

import Container from './components/Container/Container'
import Columns from './components/Columns/Columns'
import Column from './components/Columns/Column'
import Tile from './components/Tile/Tile'
import Box from './components/Box/Box'
import Button from './components/Button/Button'
import Content from './components/Content/Content'
import Delete from './components/Delete/Delete'
import Field from './components/Form/Field'
import FieldLabel from './components/Form/FieldLabel'
import FieldBody from './components/Form/FieldBody'
import Label from './components/Form/Label'
import Control from './components/Form/Control'
import Input from './components/Form/Input'
import Textarea from './components/Form/Textarea'

import './videl.scss';

const defaults = {
  componentPrefix: 'Vd',
}

const components = {
  Container,
  Columns,
  Column,
  Tile,
  Box,
  Button,
  Content,
  Delete,
  Field,
  FieldLabel,
  FieldBody,
  Label,
  Control,
  Input,
  Textarea,
};

const Videl = {
  install(Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(defaults.componentPrefix + name, components[name]);
    })
  }
};

// Automatically install Videl if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Videl);
}

export default Videl;
