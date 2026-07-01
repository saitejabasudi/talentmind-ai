// Vercel serverless function — wraps the pre-built Express API.
// All /api/* requests are rewritten here by vercel.json.
export { default } from "../artifacts/api-server/dist/serverless.mjs";
