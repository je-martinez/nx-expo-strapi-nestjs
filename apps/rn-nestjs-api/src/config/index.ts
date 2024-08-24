export default () => ({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DATABASE_HOST,
  database: process.env.DATABASE_HOST,
  schema: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
});
