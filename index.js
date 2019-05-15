const superagent = require('superagent');
const cheerio = require('cheerio');

superagent.get('http://www.solidfiles.com/v/aZKjvxnDmk3NX')
.then(res=>{
  const $ = cheerio.load(res.text)('body > script:nth-child(16)')
  const data = JSON.parse($.html().replace("angular.module('sf.viewer').constant('viewerOptions', ","").replace(");",''));
  console.log(data)
})
