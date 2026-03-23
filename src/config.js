module.exports = {
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "YourPassword123!",
    database: process.env.DB_NAME || "portfolio",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "YourPassword123!",
    database: process.env.DB_NAME || "portfolio",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
  },
};
