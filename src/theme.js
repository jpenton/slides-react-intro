import { condensed, prism } from 'mdx-deck/themes'
import oneDark from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark'

export default prism({
  ...condensed,
  prism: {
    style: oneDark,
  },
})
