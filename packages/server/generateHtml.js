const _ = require('lodash')
const fs = require('fs')

const widgetHTML = `
<!doctype html>
<html lang="en">
<head>
    <title>Virusim</title>
    <style>
        html, body {
            overflow: hidden;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }

        #renderCanvas {
            width: 100%;
            height: 100%;
            touch-action: none;
        }
        
        .footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: white;
            text-align: center;
        }
    </style>
</head>
<body>
<canvas id="renderCanvas" touch-action="none"></canvas>
<script src="<%= HOST %>/main.js"></script>
<div class="footer">
  <p>Find out more information at <a href="https://github.com/openvir/virusim" target="_blank">https://github.com/openvir/virusim</a>.</p>
</div>
</body>
</html>
`

const resultHtml = _.template(widgetHTML)({
    HOST: process.env.HOST,
})

fs.writeFileSync('dist/index.html', resultHtml)
// eslint-disable-next-line no-console
console.log('index.html was created.')
