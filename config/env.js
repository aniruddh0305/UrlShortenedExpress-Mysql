import { z } from "zod";

const portSchema = z.coerce.number().min(1).max(65535).default(3001);
export const PORT = portSchema.parse(process.env.PORT);
export const DATABASE_HOST = z.string().min(1).parse(process.env.DATABASE_HOST);
export const DATABASE_USERNAME = z.string().min(1).parse(process.env.DATABASE_USERNAME);
export const DATABASE_PASSWORD = z.string().min(1).parse(process.env.DATABASE_PASSWORD);
export const DATABASE_NAME = z.string().min(1).parse(process.env.DATABASE_NAME);
