import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './cards.component';
import { TranslateModule } from 'ng2-translate';

let routes = [
  { path: '', component: CardsComponent }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardsComponent]
})
export class CardsPageModule { }