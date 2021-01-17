"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const botclient_1 = __importDefault(require("./client/botclient"));
const client = new botclient_1.default({ Token: config_1.Token, OwnerId: config_1.OwnerId });
client.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFnRDtBQUNoRCxtRUFBMkM7QUFFM0MsTUFBTSxNQUFNLEdBQWMsSUFBSSxtQkFBUyxDQUFDLEVBQUUsS0FBSyxFQUFMLGNBQUssRUFBRSxPQUFPLEVBQVAsZ0JBQU8sRUFBRSxDQUFDLENBQUM7QUFDNUQsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUb2tlbiwgT3duZXJJZCwgUHJlZml4fSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgQm90Q2xpZW50IGZyb20gJy4vY2xpZW50L2JvdGNsaWVudCc7XG5cbmNvbnN0IGNsaWVudDogQm90Q2xpZW50ID0gbmV3IEJvdENsaWVudCh7IFRva2VuLCBPd25lcklkIH0pO1xuY2xpZW50LnN0YXJ0KCk7XG4iXX0=