const fs = require('fs')
fs.writeFileSync('./.env', `CLIENT_ID=${process.env.CLIENT_ID}\n`)
fs.writeFileSync('./.env', `CLIENT_SECRET=${process.env.CLIENT_SECRET}\n`)