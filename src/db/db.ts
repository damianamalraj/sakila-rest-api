import pg from 'pg';

type Params = number | string

const pool = new pg.Pool({ connectionString: process.env.CONNECTION_STRING})

export const query = (text: string, params?: Params[] ) =>  pool.query(text, params)