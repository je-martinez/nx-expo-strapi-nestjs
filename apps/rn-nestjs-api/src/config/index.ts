export default () => ({
  appName: process.env.API_NAME,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  schema: process.env.API_DATABASE_SCHEMA,
  port: parseInt(process.env.DATABASE_PORT, 9005) || 9005,
});
