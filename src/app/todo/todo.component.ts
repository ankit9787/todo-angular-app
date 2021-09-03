import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { todoModel } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: todoModel[]= [
    {
      id: 41,
      title: "Joan",
      desc: "Brown"
  },
  {
      id: 40,
      title: "Mort",
      desc: "Johnston"
  } ]

@ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
      'id',
      'title',
      'desc',
  ];

   dataSource = new MatTableDataSource;


  constructor() { }

  ngOnInit(): void {
  }

}
