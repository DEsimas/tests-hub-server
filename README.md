# desimas-server

This application contains nest backend for [tests-hub](https://github.com/DEsimas/tests-hub) and hosts discord bots: [emojis bot](https://github.com/DEsimas/emojis-bot) and [heys bot](https://github.com/DEsimas/heys-bot). It autopings itself to prevent falling in sleeping mode in production.

# Tecnologies

<ul>
    <li>Node.js with typescript</li>
    <li>Nest.js</li>
    <li>Crypto</li>
    <li>Mongo DB</li>
</ul>

# Usage

There is heroku deployment on https://tests-hub-server.herokuapp.com/
# .env

 <table>
  <tr>
    <th>Variable</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>TESTS_HUB_DB_URI</td>
    <td>Mongo uri for tests hub</td>
  </tr>
  <tr>
    <td>ACCENT_TESTER_ENCODING_KEY</td>
    <td>Key for accent tester encrypting</td>
  </tr>
  <tr>
    <td>PORT</td>
    <td>Port</td>
  </tr>
</table> 