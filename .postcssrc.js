// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    'postcss-pxtorem': {
      rootValue: 20,
      propList: ['*', '!border', '!border*', '!box*'],
      
    }
  }
}

