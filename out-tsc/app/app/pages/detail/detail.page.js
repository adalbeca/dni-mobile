import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
let DetailPage = class DetailPage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.tmpData = {
            apellido: 'VELAZCO RIVERA',
            disposicion: ' - ',
            exp: '1410852017',
            fechaNac: '05/05/1983',
            hashPrecaria: '==',
            inicioTramite: '23/09/2019',
            intimado: '',
            ip: '198.50.181.49',
            nombre: 'JOHANNA EMILIA',
            precariaRenovada: '',
            tipo_tramite: 'P',
            tramiteDireccion: 'ALMIRANTE BROWN',
            tramiteStatus: 'EN TRAMITE',
            vencimientoTramite: '22/12/2019'
        };
        this.route.queryParams.subscribe(params => {
            console.log('??', this.router.getCurrentNavigation());
            if (this.router.getCurrentNavigation().extras) {
                this.data = this.router.getCurrentNavigation().extras.replaceUrl
                    ? this.tmpData
                    : this.router.getCurrentNavigation().extras;
            }
        });
    }
    ngOnInit() {
        console.log('Llega', this.data);
    }
};
DetailPage = tslib_1.__decorate([
    Component({
        selector: 'app-detail',
        templateUrl: './detail.page.html',
        styleUrls: ['./detail.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        Router])
], DetailPage);
export { DetailPage };
//# sourceMappingURL=detail.page.js.map