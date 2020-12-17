#!/usr/bin/nodemon

import {Token, OwnerId, Prefix} from './config';
import BotClient from './client/botclient';

const client: BotClient = new BotClient({ Token, OwnerId });
client.start();
