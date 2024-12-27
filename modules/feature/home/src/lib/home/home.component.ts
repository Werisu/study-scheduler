import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DashboardComponent } from '@study-scheduler/dashboard';

@Component({
  selector: 'lib-home',
  imports: [CommonModule, DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'study-scheduler';
}
