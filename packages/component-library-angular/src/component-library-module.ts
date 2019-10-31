import { NgModule } from '@angular/core';
import { defineCustomElements } from 'component-library/loader';

import { NumericValueAccessor } from './directives/number-value-accessor';
import { DemoComponent } from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  DemoComponent,

  // Value Accessors
  NumericValueAccessor,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class ComponentLibraryModule { }
