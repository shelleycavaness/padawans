// Start server

const StartServer = (server) => {
    console.info('SETUP - Starting server..')

    server.listen(7777, (error) => {
        if (error) {
            console.error('ERROR - Unable to start server.')
        } else {
            console.info(`INFO - Server started on http://localhost:${7777} [DEV]`)
        }
    })
}

export default StartServer
