import app from './app'
import routes from './routes'

const PORT = 8000

app.use(routes)

app.listen(PORT, () => {
  console.log('listening server')
})