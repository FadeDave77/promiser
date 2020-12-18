import { ConnectionManager }from 'typeorm';
import {dbName} from '../config';

import { Warns } from '../models/warns';

const connectionManager: ConnectionManager = new ConnectionManager();
connectionManager.create({
    name: dbName,
    type: 'sqlite',
    database: './db.sqlite',
    entities: [
        Warns
    ]
})

export default connectionManager;
