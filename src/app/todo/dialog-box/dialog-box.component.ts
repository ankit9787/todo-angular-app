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
  
  disableButton = false;
  taskDesc = '';
  taskTitle ='';
  
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public todoObj: todoModel) {
    this.taskTitle = todoObj.title;
    this.taskDesc = todoObj.desc;
  }

  save(title:string, desc:string): void{
    if(title.trim().length === 0 || desc.trim().length === 0){
      this.disableButton = true;
    }else{
      this.disableButton = false;
      this.dialogRef.close({title:title, desc:desc, dataObj:this.todoObj});
    }
  }

  closeDialog(): void{
    this.dialogRef.close({event:'Cancel'});
  }

}
