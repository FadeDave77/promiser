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
exports.Prefix = void 0;
const typeorm_1 = require("typeorm");
let Prefix = class Prefix {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Prefix.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 22 }),
    __metadata("design:type", String)
], Prefix.prototype, "guild", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Prefix.prototype, "value", void 0);
Prefix = __decorate([
    typeorm_1.Entity('prefix')
], Prefix);
exports.Prefix = Prefix;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9wcmVmaXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWdFO0FBR2hFLElBQWEsTUFBTSxHQUFuQixNQUFhLE1BQU07Q0FTbEIsQ0FBQTtBQVBHO0lBREMsZ0NBQXNCLEVBQUU7O2tDQUNiO0FBR1o7SUFEQyxnQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFDLENBQUM7O3FDQUN4QjtBQUdkO0lBREMsZ0JBQU0sRUFBRTs7cUNBQ007QUFSTixNQUFNO0lBRGxCLGdCQUFNLENBQUMsUUFBUSxDQUFDO0dBQ0osTUFBTSxDQVNsQjtBQVRZLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5LCBDb2x1bW4sIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW59IGZyb20gJ3R5cGVvcm0nO1xuXG5ARW50aXR5KCdwcmVmaXgnKVxuZXhwb3J0IGNsYXNzIFByZWZpeCB7XG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICAgIGlkITogbnVtYmVyO1xuXG4gICAgQENvbHVtbih7dHlwZTogJ3ZhcmNoYXInLCBsZW5ndGg6IDIyfSlcbiAgICBndWlsZCE6c3RyaW5nO1xuXG4gICAgQENvbHVtbigpXG4gICAgdmFsdWUhOiBzdHJpbmc7XG59XG4iXX0=