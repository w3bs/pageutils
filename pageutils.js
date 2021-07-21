'use strict';
console.log('index.js starting');
const open = require('./lib/openpage/openpage.js')
const click = require('./lib/clickelement/clickelement.js')
console.log('\n in index, open.done = %j, click.done = %j', open.done, click.done)


module.exports = {
open,
click
};

exports.done = true;
console.log(require.main);
console.log(module.id);
