import figlet from 'figlet'
const server = Bun.serve({
    port: 3000,
    fetch(req) {
      const url = new URL(req.url)
      if(url.pathname === '/'){
        const body = figlet.textSync("Hello world!")
        return new Response(body)
      }
      if(url.pathname === '/about'){
        return new Response('index.html')
      }
      return new Response('404!')
      
    },
  })
  console.log(`Listening on http://localhost:${server.port} ...`)
  