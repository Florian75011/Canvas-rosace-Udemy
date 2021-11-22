// Minify - a minifier of js, css, html and img files.
// https://www.npmjs.com/package/minify

cat << EOT > hello.js
const hello = 'world'

for (let i = 0; i < hello.length; i++) {
  console.log(hello[i])
}
EOT

// npm i minify -g
// minify ./src/exo.js > ./src/exo.min.js
