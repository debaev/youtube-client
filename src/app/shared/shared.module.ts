import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

const MaterialComponents = [
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ...MaterialComponents,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ...MaterialComponents,
  ],
})
export class SharedModule { }
