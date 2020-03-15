import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingRoutingModule } from './building-routing.module';
import { BuildingComponent } from './building.component';
import {ClarityModule} from '@clr/angular';
import { BuildingSearchComponent } from './building-search/building-search.component';
import { BuildingDetailComponent } from './building-detail/building-detail.component';
import { ToggleSwitchesComponent } from './toggle-switches/toggle-switches.component';


@NgModule({
  declarations: [
    BuildingComponent,
    BuildingSearchComponent,
    BuildingDetailComponent,
    ToggleSwitchesComponent
  ],
  imports: [
    CommonModule,
    BuildingRoutingModule,
    ClarityModule
  ],
  exports: [
    BuildingComponent
  ]
})
export class BuildingModule { }
