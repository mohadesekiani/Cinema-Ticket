import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SansComponent } from './sans.component';

const routes: Routes = [
  {
    path: 'sans/:id',
    component: SansComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SansRoutingModule {}
