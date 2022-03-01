
import { auth } from 'express-oauth2-jwt-bearer';

import { PSDB } from 'planetscale-node';

const conn = new PSDB('main')


export default async function handler(req, res) {   

    req.is = () => false;

    await auth()(req, res, (e) => {});

    if (req.auth === undefined) {
        res.status(401).send();
        return;        
    }
    const email = req.auth.payload['https://me-llamo-jordi.com/user'];
    console.log(req.auth);

    const { contenido } = req.query;

    const [rows, fields] = await conn.query(`insert into comentarios(contenido) values ('${contenido}')`);
    res.send(rows);
};