export const config = {
  REST_API_ENDPOINT: process.env.REST_API_ENDPOINT || "http://localhost:3001",
  ADMINJWTSECRET: process.env.jwtAdminSecret || "jwtAdminSecret",
};
