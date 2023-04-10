const envConfig = {
    run_mode: process.env.NODE_ENV ? "production" : "development",
    port: Number(process.env.PORT) || 8080,
    db_url: process.env.CLOUD_DB || process.env.DB_URL
}

module.exports = envConfig