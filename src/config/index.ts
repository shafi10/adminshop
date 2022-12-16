export const config = {
  REST_API_ENDPOINT:
    process.env.REACT_APP_REST_API_ENDPOINT || "http://localhost:3001",
  ADMINJWTSECRET: process.env.REACT_APP_jwtAdminSecret || "jwtAdminSecret",
};
