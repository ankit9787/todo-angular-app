//dialog-box.component.ts
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { todoModel } from '../todo.model';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {

  taskDesc = '';
  taskTitle ='';
  
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public todoObj: todoModel) {
    this.taskTitle = todoObj.title;
    this.taskDesc = todoObj.desc;
  }

  save(title:string, desc:string): void{
    this.dialogRef.close({title:title, desc:desc, dataObj:this.todoObj});
  }

  closeDialog(): void{
    this.dialogRef.close({event:'Cancel'});
  }

}
