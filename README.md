# Videl

**Videl** is a component framework for Vue2. Based on Bulma.

## Install via NPM

``` bash
npm install videl --save-dev
```

### Use

```javascript
let Vue = require('vue');
let Videl = require('videl');

Vue.use(Videl)
```

## Install via CDN

### Styles

``` html
<link rel="stylesheet" href="https://unpkg.com/videl/dist/videl.css">
```

### Scripts

``` html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/videl/dist/videl.js"></script>
```

## "Hello World" example

We're using CDN for this simple example:

``` html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="https://unpkg.com/videl/dist/videl.css">

        <title>Videl example</title>
    </head>

    <body>
        <!-- App -->
        <div id="vd-app">
            <!-- Box -->
            <vd-box>Hello World!</vd-box>
            
            <!-- Button -->
            <vd-button>This is awesome!</vd-button>
        </div>

        <!-- Scripts -->
        <script src="https://unpkg.com/vue/dist/vue.js"></script>
        <script src="https://unpkg.com/videl/dist/videl.js"></script>
        
        <script>
        	new Vue({
        		el: '#vd-app'
        	})
        </script>
    </body>
</html>
```