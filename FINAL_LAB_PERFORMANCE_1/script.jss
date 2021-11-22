<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <table>
      <tr>
        <td colspan="4" id="result">0</td>
      </tr>
      <tr>
        <td><button onclick="btn('CE')">CE</button></td>
        <td><button onclick="btn('C')">C</button></td>
        <td><button onclick="btn('DEL')">DEL</button></td>
        <td><button onclick="btn('÷')">/</button></td>
      </tr>
      <tr>
        <td><button onclick="btn('7')">7</button></td>
        <td><button onclick="btn('8')">8</button></td>
        <td><button onclick="btn('8')">9</button></td>
        <td><button onclick="btn('*')">*</button></td>
      </tr>
      <tr>
        <td><button onclick="btn('4')">4</button></td>
        <td><button onclick="btn('5')">5</button></td>
        <td><button onclick="btn('6')">6</button></td>
        <td><button onclick="btn('-')">-</button></td>
      </tr>
      <tr>
        <td><button onclick="btn('1')">1</button></td>
        <td><button onclick="btn('2')">2</button></td>
        <td><button onclick="btn('3')">3</button></td>
        <td><button onclick="btn('+')">+</button></td>
      </tr>
      <tr>
        <td><button onclick="btn('+/-')">+/-</button></td>
        <td><button onclick="btn('0')">0</button></td>
        <td><button onclick="btn('.')">.</button></td>
        <td><button onclick="btn('=')">=</button></td>
      </tr>
    </table>
    <script src="script.js"></script>
  </body>
</html>