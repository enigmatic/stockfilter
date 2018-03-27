import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoatsRoutingModule } from './moats-routing.module';
import { MoatsComponent } from './moats.component';

@NgModule({
  imports: [
    CommonModule,
    MoatsRoutingModule
  ],
  declarations: [MoatsComponent]
})
export class MoatsModule { }
