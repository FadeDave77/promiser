"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warns = void 0;
const typeorm_1 = require("typeorm");
let Warns = class Warns {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Warns.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Warns.prototype, "time", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 22 }),
    __metadata("design:type", String)
], Warns.prototype, "guild", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 22 }),
    __metadata("design:type", String)
], Warns.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 22 }),
    __metadata("design:type", String)
], Warns.prototype, "moderator", void 0);
__decorate([
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", String)
], Warns.prototype, "reason", void 0);
Warns = __decorate([
    typeorm_1.Entity('warns')
], Warns);
exports.Warns = Warns;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FybnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL3dhcm5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFnRTtBQUdoRSxJQUFhLEtBQUssR0FBbEIsTUFBYSxLQUFLO0NBa0JqQixDQUFBO0FBaEJHO0lBREMsZ0NBQXNCLEVBQUU7O2lDQUNiO0FBR1o7SUFEQyxnQkFBTSxFQUFFOzttQ0FDSztBQUdkO0lBREMsZ0JBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBQyxDQUFDOztvQ0FDeEI7QUFHZDtJQURDLGdCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQzs7bUNBQ3pCO0FBR2I7SUFEQyxnQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFDLENBQUM7O3dDQUNwQjtBQUdsQjtJQURDLGdCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7O3FDQUNSO0FBakJOLEtBQUs7SUFEakIsZ0JBQU0sQ0FBQyxPQUFPLENBQUM7R0FDSCxLQUFLLENBa0JqQjtBQWxCWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSwgQ29sdW1uLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1ufSBmcm9tICd0eXBlb3JtJztcblxuQEVudGl0eSgnd2FybnMnKVxuZXhwb3J0IGNsYXNzIFdhcm5zIHtcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gICAgaWQhOiBudW1iZXI7XG5cbiAgICBAQ29sdW1uKClcbiAgICB0aW1lITogbnVtYmVyO1xuXG4gICAgQENvbHVtbih7dHlwZTogJ3ZhcmNoYXInLCBsZW5ndGg6IDIyfSlcbiAgICBndWlsZCE6c3RyaW5nO1xuXG4gICAgQENvbHVtbih7dHlwZTogJ3ZhcmNoYXInLCBsZW5ndGg6IDIyfSlcbiAgICB1c2VyITpzdHJpbmc7XG5cbiAgICBAQ29sdW1uKHt0eXBlOiAndmFyY2hhcicsIGxlbmd0aDogMjJ9KVxuICAgIG1vZGVyYXRvciE6c3RyaW5nO1xuXG4gICAgQENvbHVtbih7dHlwZTogJ3RleHQnfSlcbiAgICByZWFzb24hOnN0cmluZztcbn1cbiJdfQ==