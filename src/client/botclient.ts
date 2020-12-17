import {AkairoClient, CommandHandler, ListenerHandler} from 'discord-akairo';
import {User, Message} from 'discord.js';
import {join} from 'path';
import {Prefix, Token, OwnerId} from '../config';

declare module "discord-akairo" {
    interface AkairoClient {
        commandHandler: CommandHandler;
        listenerHandler: ListenerHandler;
    }
};

interface BotOptions {
    Token?: string;
    OwnerId?: string | string[];
};

export default class BotClient extends AkairoClient {
    public config: BotOptions;
    public listenerHandler: ListenerHandler = new ListenerHandler(this, {
        directory: join(__dirname, '..', 'listeners')
    });
    public commandHandler: CommandHandler = new CommandHandler(this, {
        directory: join(__dirname, '..', 'commands'),
        prefix: Prefix,
        allowMention: true,
        handleEdits: true,
        commandUtil: true,
        commandUtilLifetime: 3e5,
        defaultCooldown: 6e4,
        argumentDefaults: {
            prompt:  {
                modifyStart: (_: Message, str: string): string => `${str}\n\nType \`exit\` to exit the prompt.`,
                modifyRetry: (_: Message, str: string): string => `${str}\n\nType \`exit\` to exit the prompt.`,
                timeout: "You didn't answer in time, the prompt exited automatically.",
                ended: "You have exceeded the maximum amount of tries, the command exited.",
                cancel: "Exit called.",
                retries: 3,
                time: 3e4
            },
            otherwise: ""
        },
        ignorePermissions: OwnerId
    });
    public constructor(config: BotOptions) {
        super({
            ownerID: config.OwnerId
        });
        this.config = config;
    }
    private async _init(): Promise<void> {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            process
        });
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
    };
    public async start(): Promise<string> {
        await this._init();
        return this.login(this.config.Token);
    }
}
