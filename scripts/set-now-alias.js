const fs = require('fs')
const nowConfig = require('../now.json')
let alias = process.env.ALIAS || 'find.earth'
nowConfig.alias = alias.replace(/ /g, '').split(',')
fs.writeFileSync('now.json', JSON.stringify(nowConfig, null, 2), 'utf8')
