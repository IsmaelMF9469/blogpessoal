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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostagemController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const postagem_entity_1 = require("../entities/postagem.entity");
const postagem_services_1 = require("../services/postagem.services");
let PostagemController = class PostagemController {
    constructor(PostagemServices) {
        this.PostagemServices = PostagemServices;
    }
    findAll() {
        return this.PostagemServices.findAll();
    }
    findById(id) {
        return this.PostagemServices.findById(id);
    }
    finByTitulo(titulo) {
        return this.PostagemServices.findByTitulo(titulo);
    }
    create(postagem) {
        return this.PostagemServices.create(postagem);
    }
    update(postagem) {
        return this.PostagemServices.update(postagem);
    }
    delete(id) {
        return this.PostagemServices.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostagemController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostagemController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('/titulo/:titulo'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('titulo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostagemController.prototype, "finByTitulo", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [postagem_entity_1.Postagem]),
    __metadata("design:returntype", Promise)
], PostagemController.prototype, "create", null);
__decorate([
    (0, decorators_1.Put)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [postagem_entity_1.Postagem]),
    __metadata("design:returntype", Promise)
], PostagemController.prototype, "update", null);
__decorate([
    (0, decorators_1.Delete)('/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostagemController.prototype, "delete", null);
PostagemController = __decorate([
    (0, common_1.Controller)('/postagens'),
    __metadata("design:paramtypes", [postagem_services_1.PostagemServices])
], PostagemController);
exports.PostagemController = PostagemController;
//# sourceMappingURL=postagem.controller.js.map