  const app = require('./server')

app.listen(app.get('port'), () => {
    console.log(`Listen on port http://localhost:${app.get('port')}`)
})