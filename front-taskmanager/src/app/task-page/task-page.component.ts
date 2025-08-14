import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../common/task';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  tasks: Task[] = [];
  newTask: Task = new Task('', '');

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(
      (data: Task[]) => {
        this.tasks = data;
      },
      (error) => {
        console.log('Error when retrieving tasks:', error);
      }
    );
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe({
      next: () => this.getTasks(),
      error: (err) => console.log(err)
    });
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task).subscribe({
      next: (updatedTask) => {
        this.getTasks();
      },
      error: (err) => console.error(err)
    })
  }

  addTask(): void {
    this.taskService.createTask(this.newTask).subscribe((createdTask) => {
      this.tasks.push(createdTask);
      this.newTask = new Task('', ''); 
      this.getTasks();
    });
  }

}
