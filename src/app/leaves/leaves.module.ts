import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LeavesRoutingModule } from './leaves-routing.module';
import { LeavesComponent } from './leaves.component';
import { ApplyComponent } from './apply/apply.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    LeavesComponent,
    ApplyComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    LeavesRoutingModule,
    ReactiveFormsModule
  ]
})
export class LeavesModule { }
