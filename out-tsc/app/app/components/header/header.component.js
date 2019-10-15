import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], HeaderComponent.prototype, "title", void 0);
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map