# desimas-server

## Description

This application contains nest backend for [tests-hub](https://github.com/DEsimas/tests-hub) and hosts discord bots: [emojis bot](https://github.com/DEsimas/emojis-bot) and [heys bot](https://github.com/DEsimas/heys-bot). It autopings itself to prevent falling in sleeping mode in production.

## Heroku

Procfile contains two scripts: web and worker. Web is nest backend, worker starts bots and pinger.


## .env

 <table>
  <tr>
    <th>Variable</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>MODE</td>
    <td>Mode of discord bots packages, recommended to be PACKAGE</td>
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
    <td>EMOJIS_BOT_TOKEN</td>
    <td>Discord token for emojis bot</td>
  </tr>
  <tr>
    <td>EMOJIS_BOT_DB_URI</td>
    <td>Mongo db uri for emojis bot</td>
  </tr>
  <tr>
    <td>HEYS_BOT_TOKEN</td>
    <td>Discord token for heys bot</td>
  </tr>
  <tr>
    <td>HEYS_BOT_DB_URI</td>
    <td>Mongo db uri for heys bot</td>
  </tr>
  <tr>
    <td>SERVER_URL</td>
    <td>Deployment url for pinger</td>
  </tr>
  <tr>
    <td>PORT</td>
    <td>Port for testing start:web in development mode</td>
  </tr>
</table> 