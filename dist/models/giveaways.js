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
exports.Giveaways = void 0;
const typeorm_1 = require("typeorm");
let Giveaways = class Giveaways {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Giveaways.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Giveaways.prototype, "time", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 22 }),
    __metadata("design:type", String)
], Giveaways.prototype, "channel", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 22 }),
    __metadata("design:type", String)
], Giveaways.prototype, "message", void 0);
__decorate([
    typeorm_1.Column({ type: 'integer' }),
    __metadata("design:type", Number)
], Giveaways.prototype, "end", void 0);
Giveaways = __decorate([
    typeorm_1.Entity('giveaways')
], Giveaways);
exports.Giveaways = Giveaways;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l2ZWF3YXlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9naXZlYXdheXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWlFO0FBR2pFLElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7Q0FlckIsQ0FBQTtBQWJHO0lBREMsZ0NBQXNCLEVBQUU7O3FDQUNiO0FBR1o7SUFEQyxnQkFBTSxFQUFFOzt1Q0FDSTtBQUdiO0lBREMsZ0JBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBQyxDQUFDOzswQ0FDdEI7QUFHaEI7SUFEQyxnQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFDLENBQUM7OzBDQUN0QjtBQUdoQjtJQURDLGdCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUM7O3NDQUNkO0FBZEgsU0FBUztJQURyQixnQkFBTSxDQUFDLFdBQVcsQ0FBQztHQUNQLFNBQVMsQ0FlckI7QUFmWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSwgQ29sdW1uLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSAndHlwZW9ybSc7XG5cbkBFbnRpdHkoJ2dpdmVhd2F5cycpXG5leHBvcnQgY2xhc3MgR2l2ZWF3YXlzIHtcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gICAgaWQhOiBudW1iZXI7XG5cbiAgICBAQ29sdW1uKClcbiAgICB0aW1lITpudW1iZXI7XG5cbiAgICBAQ29sdW1uKHt0eXBlOiAndmFyY2hhcicsIGxlbmd0aDogMjJ9KVxuICAgIGNoYW5uZWwhOnN0cmluZztcblxuICAgIEBDb2x1bW4oe3R5cGU6ICd2YXJjaGFyJywgbGVuZ3RoOiAyMn0pXG4gICAgbWVzc2FnZSE6c3RyaW5nO1xuXG4gICAgQENvbHVtbih7dHlwZTogJ2ludGVnZXInfSlcbiAgICBlbmQhOm51bWJlcjtcbn1cbiJdfQ==