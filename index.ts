import { Plugin } from '@hakkajs/cli/lib/plugin'
import * as quickType from 'quicktype'
import axios from 'axios'

/**
 * FlutterOptions
 */
export interface FlutterOptions {
  api: string
}
export default (api: Plugin) => {
  api
    .command('flutter [action]')
    .option('-A, --api <path>', 'api url')
    .action(async (action: string, options: FlutterOptions) => {
      switch (action) {
        case 'store':
          await quickType.main({
            src: ['dist/store.json'],
            lang: 'dart',
            out: 'dist/store.dart',
          })
          // const res = await axios.get(options.api)
          // if (res.data) {
          // }
          // console.log(action, options.api);
          break
        case 'widget':
          console.log('widget')
          break
      }
    })
}
