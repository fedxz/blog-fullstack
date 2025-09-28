import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],

  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class Toolbar {
constructor(private router: Router) {
}
navigateToHome(): void {
  window.location.href = '/'; 
}  
navigateToPost() : void {
  this.router.navigate(['/create-post']);
}
}
