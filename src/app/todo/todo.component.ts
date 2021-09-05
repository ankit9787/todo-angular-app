import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { todoModel } from './todo.model';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['status', 'title', 'options'];
  statusFilters = ['None', 'Todo', 'In Progress', 'Done'];
  taskForm!: FormGroup;
  todoList: todoModel[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  loadTable = true;
  private sort!: MatSort;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  constructor(public dialog: MatDialog, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadTable = false;
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
    });
  }

  setDataSourceAttributes() {
    this.dataSource.sort = this.sort;
  }

  addTask(): void {
    let data = {
      title: this.taskForm.controls['title'].value,
      status: 'Todo',
      desc: this.taskForm.controls['desc'].value,
    };
    this.todoList.push(data);
    this.dataSource.data = this.todoList;
    this.loadTable = true;
    this.taskForm.reset();
  }

  deleteTask(task: todoModel) {
    if (this.todoList.length === 1) {
      this.loadTable = false;
    }
    this.todoList = this.todoList.filter((element) => element !== task);
    this.dataSource.data = this.todoList;
  }

  applyFilter(filterValue: any) {
    let dataFilter = filterValue.value;
    if (dataFilter != 'None') {
      this.dataSource.filter = dataFilter.trim().toLowerCase();
    } else {
      this.dataSource.filter = '';
    }
  }

  openDialog(task: todoModel): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: task,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let data = this.todoList.find((task) => task === result.dataObj);
        if (data) {
          data.title = result.title;
          data.desc = result.desc;
        }
      }
    });
  }

  changeStatus(task: todoModel): void {
    if (task.status === 'Todo') {
      task.status = 'In Progress';
    } else if (task.status === 'In Progress') {
      task.status = 'Done';
    } else if (task.status === 'Done') {
      task.status = 'Todo';
    }
    this.dataSource.data = this.todoList
      .filter((element) => element.status !== 'Done')
      .concat(this.todoList.filter((element) => element.status === 'Done'));
  }

  viewDesc() {
    let columnLength = this.displayedColumns.length;
    if (columnLength === 3) {
      this.displayedColumns = ['status', 'title', 'desc', 'options'];
    } else {
      this.displayedColumns = ['status', 'title', 'options'];
    }
  }
}
