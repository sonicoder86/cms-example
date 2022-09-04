export const config = {
  port: process.env.PORT || 4000,
  clientSecret: process.env.CLIENT_SECRET || 'supersecret',
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USERNAME || 'db_user',
    password: process.env.DB_PASSWORD || 'db_secret',
    database: process.env.DB_DATABASE || 'cms',
  }
};
