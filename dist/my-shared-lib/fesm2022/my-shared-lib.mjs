import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class MySharedLibService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MySharedLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MySharedLibService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MySharedLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class MySharedLibComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MySharedLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: MySharedLibComponent, isStandalone: true, selector: "lib-my-shared-lib", ngImport: i0, template: `
    <p>
      my-shared-lib works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MySharedLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-shared-lib', standalone: true, imports: [], template: `
    <p>
      my-shared-lib works!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of my-shared-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MySharedLibComponent, MySharedLibService };
//# sourceMappingURL=my-shared-lib.mjs.map
