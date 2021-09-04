import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule} from '@angular/material/dialog';
import { TodoComponent } from './todo/todo.component';
import { DialogBoxComponent } from './todo/dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
