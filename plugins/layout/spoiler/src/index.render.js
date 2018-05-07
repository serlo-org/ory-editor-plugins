import spoiler from './Component'
import plugin from './plugin'

export default ({ defaultPlugin }) => ({
  ...plugin,
  Component: spoiler
})
