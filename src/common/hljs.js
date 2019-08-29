import Hljs from 'highlight.js'
import '../assets/css/atom-one-light.css'

let Highlight = {}

Highlight.install = (Vue, options) => {
  Vue.directive('highlight', (el) => {
    let blocks = el.querySelectorAll('pre code')
    
    blocks.forEach((block) => {
      Hljs.highlightBlock(block)
    })
  })
}

export default Highlight


