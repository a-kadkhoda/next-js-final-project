import {  SignJWT } from "jose";

export const JWTgenerate = async (payload: { email: string }) => {
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const token = await new SignJWT(payload)
    .setProtectedHeader(header)
    .setIssuedAt()
    .sign(getSecretKey());

  return token;
};


const getSecretKey = () => {
  const key = process.env.ACCESS_TOKEN_SECRET_KEY;

  return new TextEncoder().encode(key);
};
