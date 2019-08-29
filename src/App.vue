<template>
  <div id="app">  
	<BlackLine />
	<Box>
		<router-view/>
	</Box>
  </div>
</template>

<script>
import styled from 'vue-styled-components'
const Box = styled.div`

	width:1000px;
	min-height:99.8vh;
	margin:0 auto;
  overflow: hidden;

`
const BlackLine = styled.div`
    width: 100%;
    height: 0.2vh;
    background: #000;

`
export default {
  name: 'App',
  components:{
	  Box,
	  BlackLine
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline; 
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
#app{
	background-color: #eee;
}


/* Markdown 样式 */
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
    font-weight: bold;
    line-height: 1.5;
  }

  h2,h3,h4,h5,h6 {
    margin: 20px 0 15px;
  } 
  h1 {
    font-size: 22px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 18px;
  }
  h4 {
    font-size: 16px;
  } 
  h5 {
    font-size: 14px;
  }

  h6 {
    font-size: 12px;
  }
  @media (max-width: 767px) {
    h1 {
      font-size: 18px;
	}
	h2 {
      font-size: 16px;
	}
	h3 {
      font-size: 14px;
	}
	h4 {
      font-size: 12px;
	}
	h5 {
      font-size: 10px;
	}
	h6 {
      font-size: 8px;
    }
  }

</style>
 
