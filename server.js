const express = require('express')
const { parse } = require('url');
const { join } = require('path')
const { createReadStream } = require('fs');
const next = require('next')
const LRUCache = require('lru-cache')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60
})

app.prepare()
.then(() => {
  const server = express()

  server.get('/', (req, res) => {
    const queryParams = {
      type: 'best',
      page: 1
    }

    renderAndCache(req, res, '/list', queryParams)
  })

  server.get(/^\/(news|newest|ask|show|jobs|best)$/, (req, res) => {
    const base = req.params[0];
    const page = req.query.page ? req.query.page : 1;
    const queryParams = {
      type: base,
      page: page
    }
    renderAndCache(req, res, '/list', queryParams)
  })

  server.get('/detail/:id', (req, res) => {
    const queryParams = { id: req.params.id }
    renderAndCache(req, res, '/detail', queryParams)
  })

  server.get('/user/:id', (req, res) => {
    const queryParams = { id: req.params.id }
    renderAndCache(req, res, '/user', queryParams)
  })

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    const rootStaticFiles = [
      '/sw.js',
      '/favicon.jpg',
      '/manifest.json'
    ]

    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const path = join(__dirname, 'static', pathname);
      createReadStream(path).pipe(res);
    } else {
      return handle(req, res)
    }
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

function getCacheKey (req) {
  return `${req.url}`
}

async function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)


  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }

  try {
    const html = await app.renderToHTML(req, res, pagePath, queryParams)

    if (res.statusCode !== 200) {
      res.send(html)
      return
    }

    ssrCache.set(key, html)

    res.setHeader('x-cache', 'MISS')
    res.send(html)
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams)
  }
}
