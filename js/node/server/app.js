const http = require("http")
/*
function requestListener(request, response) {

}

http.createServer(requestListener)*/

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    res.setHeader("Content-Type", "text/html")
    res.write(`
    <html>
        <head>
            <title>Sajan</title>
        </head>
        <body>
            hello form node server
        </body>
    </html>
    `)

    res.end()

})

server.listen(8133)
