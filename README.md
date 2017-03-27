<p align="center">
    <a href="https://www.npmjs.com/package/videl"><img src="https://img.shields.io/npm/dt/videl.svg" alt="Downloads"></a>
    <a href="https://www.npmjs.com/package/videl"><img src="https://img.shields.io/npm/v/videl.svg" alt="Version"></a>
    <a href="https://www.npmjs.com/package/videl"><img src="https://img.shields.io/npm/l/videl.svg" alt="License"></a>
</p>

# Videl

**Videl** is a component framework for Vue2. Based on [Bulma](http://bulma.io).

## Install

``` bash
npm install videl --save-dev
```

## Use

> Make sure to include the **dist/videl.css** file as the styles have been extracted into a single CSS file.

```javascript
import 'Vue' from 'vue'
import 'Videl' from 'videl'

Vue.use(Videl)
```

## Install via CDN

``` html
<link rel="stylesheet" href="https://unpkg.com/videl/dist/videl.css">

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/videl/dist/videl.min.js"></script>
```

## Example

``` html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="https://unpkg.com/videl/dist/videl.css">

        <title>Videl example</title>
    </head>

    <body>
        <div id="app">

            <!-- Container -->
            <vd-container>
            
                <!-- Box -->
                <vd-box>Hello World!</vd-box>
                
                <!-- Button -->
                <vd-button>This is awesome!</vd-button>
                
            </vd-container>
            
        </div>

        <!-- Scripts -->
        <script src="https://unpkg.com/vue/dist/vue.js"></script>
        <script src="https://unpkg.com/videl/dist/videl.min.js"></script>
        
        <script>
            new Vue({
                el: '#app'
            })
        </script>
    </body>
</html>
```
