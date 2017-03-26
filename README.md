<p align="center">
    <a href="https://www.npmjs.com/package/videl"><img src="https://img.shields.io/npm/dt/videl.svg" alt="Downloads"></a>
    <a href="https://www.npmjs.com/package/videl"><img src="https://img.shields.io/npm/v/videl.svg" alt="Version"></a>
    <a href="https://www.npmjs.com/package/videl"><img src="https://img.shields.io/npm/l/videl.svg" alt="License"></a>
</p>

<p align="center">
    <img src="https://cloud.githubusercontent.com/assets/2277261/24318452/35ee05ba-110e-11e7-883b-90a710483e34.png" height="128">
</p>

<p align="center">
    <strong>Videl</strong> is a component framework for Vue2. Based on [Bulma](http://bulma.io).
</p>

## Install

``` bash
npm install videl --save-dev
```

## Use

```javascript
import 'Vue' from 'vue'
import 'Videl' from 'videl'

Vue.use(Videl)
```

## Install via CDN

``` html
<link rel="stylesheet" href="https://unpkg.com/videl/dist/videl.min.css">

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/videl/dist/videl.min.js"></script>
```

## Example

``` html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="https://unpkg.com/videl/dist/videl.min.css">

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
