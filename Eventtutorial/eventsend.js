const amqp = require('amqplib/callback_api')

const rabbitMQUsername = process.env.rabbitUser
const rabbitMQPassword = process.env.rabbitPass
const serverURL = process.env.server

amqp.connect(`amqp://${rabbitMQUsername}:${rabbitMQPassword}@${serverURL}:5672`, function (error0, connection) {
    if (error0) {
        throw error0
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1
        }

        const exchange = 'events'
        const key = 'public.landingpage'
        const msg = 'hello world'

        channel.publish(exchange, key, Buffer.from(msg))
    })

    setTimeout(()=> {
        connection.close()
        process.exit(0)
    }, 500)
})