export interface Config {
  port: number;
  dbUrl: string;
}

/** Reads the service configuration from the environment. */
export function loadConfig(): Config {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) throw new Error('DATABASE_URL is required');
  return { port: Number(process.env.PORT ?? 3000), dbUrl };
}
