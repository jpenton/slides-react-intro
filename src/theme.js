import { condensed, prism } from 'mdx-deck/themes'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default prism({
  ...condensed,
  prism: {
    style: oneDark,
  },
})
