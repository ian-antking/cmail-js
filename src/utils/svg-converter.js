const fs = require('fs-extra');
const path = require('path');
const camelcase = require('camelcase');
const SVGO = require('svgo');

const svgo = new SVGO({
  multipass: true,
  js2svg: { pretty: true, indent: '    ' },
  plugins: [
    {
      removeViewBox: false,
      inlineStyles: {
        onlyMatchedOnce: false,
      },
    },
    'convertStyleToAttrs',
  ],
});

const template = ({ name, viewBox, content }) => `
import React from 'react';
import { number } from 'prop-types';
import IconBase from 'react-icon-base';
const ${name}Icon = props => (
    <IconBase viewBox="${viewBox}" {...props}>
        ${content}
    </IconBase>
);
${name}Icon.propTypes = {
  size: number
};
${name}Icon.defaultProps = {
  size: 40
};
export default ${name}Icon;
`;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

fs.readdirSync('./src/icons')
  .filter(file => file.indexOf('.svg') > -1)
  .forEach(file => {
    fs.readFile(
      path.join(__dirname, './src/icons/', file),
      'utf8',
      (err, data) => {
        svgo.optimize(data)
          .then(result => {
            const viewBox = (result.data.match(/viewBox="([^"]+)"/) || ['', ''])[1];
            const content = (result.data.match(/<svg [\S\s]+?>([\S\s]*?)<\/svg>/) || ['', ''])[1]
              .replace(/fill="(.+?)"/g, '')
              .trim();
            const name = capitalizeFirstLetter(camelcase(file
              .replace('icons_', '')
              .replace('.svg', '')));

            fs.outputFileSync(
              path.join(
                __dirname,
                './src/components/Icons',
                name,
                'index.js'
              ),
              template({
                viewBox,
                content,
                name,
              }).trim()
            );
          })
          .catch(e => console.error(e)); // eslint-disable-line no-console
      }
    );
  });
