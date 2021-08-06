import path from 'path'
import { App as KoishiApp } from 'koishi'

import 'koishi-plugin-text-dialogue'

const app = new KoishiApp({
  bots: [{
    type: 'text-dialogue',
    selfId: 'second-jie',
    watchOptionsMap: [path.resolve(__dirname, '.temp.chat.md')]
  }]
})

app.start().then()
