const envConfig = {
    run_mode: process.env.NODE_ENV === "production" ? "production" : "development",
    port: Number(process.env.PORT) || 8080,
    db_url: process.env.CLOUD_DB || process.env.DB_LOCAL_URL
}

module.exports = envConfig