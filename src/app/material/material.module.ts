import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule,MatButtonToggleModule, MatIconModule, MatBadgeModule, MatChipsModule,MatToolbarModule, MatCardModule, MatInputModule, MatListModule, MatGridListModule, MatMenuModule} from '@angular/material';

const MaterialComponents=[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatChipsModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatGridListModule,
  MatMenuModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
