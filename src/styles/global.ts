import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

*:before,
*:after {
  box-sizing: border-box;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
  display: contents;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img {
  max-width: 100%;
  display: block;
}

article>*+* {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  padding: 0;
  font: inherit;
}
`;
