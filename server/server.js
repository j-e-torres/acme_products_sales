const app = require('./index')
const db = require('./db');
const PORT = process.env.PORT || 4000;

db.syncAndSeed()
    .then(() => app.listen(PORT, () => {
        console.log(`
            Listening on port ${PORT}
            http://localhost:${PORT}/

            Api:
            http://localhost:${PORT}/api/products
            
        `)
    }))
