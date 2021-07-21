'use strict';
console.log('index.js starting');
const {openpage} = require('./lib/openpage/openpage.js')
const {clickElement} = require('./lib/clickelement/clickelement.js')
console.log('\n in index, open.done = %j, click.done = %j', openpage.done, clickElement.done)


module.exports = {
openpage,
clickElement
};

exports.done = true;
console.log(require.main);
console.log(module.id);
