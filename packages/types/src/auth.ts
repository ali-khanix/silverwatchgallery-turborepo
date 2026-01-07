export interface CustomJwsSessionClaims {
  metadata?: {
    role?: "user" | "admin";
  };
}
