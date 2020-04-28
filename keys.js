module.exports = {

    database: {
        connectionLimit: 10,
        host: process.env.DATABASE_HOST || 'sql9.freemysqlhosting.net',
        user: process.env.DATABASE_USER || 'sql9336241',
        password: process.env.DATABASE_PASSWORD || 'Qxdpg6R7RT',
        database: process.env.DATABASE_NAME || 'sql9336241'
    }

};