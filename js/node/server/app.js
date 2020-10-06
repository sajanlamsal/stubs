const http = require("http")
/*
function requestListener(request, response) {

}

http.createServer(requestListener)*/

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)

    if (req.url === "/") {

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
    } else if (req.url === "/test") {
        handleTestResponse(req, res)
    }

})

function handleTestResponse(req, res) {
    res.statusCode = 302
    res.setHeader("Location", "/")
    res.end()
}

server.listen(8133)
