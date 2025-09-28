import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { PostService } from '../../service/post'; 
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { Router } from '@angular/router'; 
import { MatChipsModule } from '@angular/material/chips';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-post',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './post.html',
  styleUrl: './post.scss'
})
export class Post implements OnInit {
  postForm!: FormGroup;
  tags: string[] = [];

  constructor(
    private fb: FormBuilder, 
    private postService: PostService,
    private snackBar: MatSnackBar, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      nome: ['', Validators.required],
      img: ['', Validators.required],
      content: ['', Validators.required],
      createdBy: ['', Validators.required],
      tags: ['', Validators.required]
    });
  }

  onSubmit(): void {
  if (this.postForm.valid) {
    console.log('Post creato:', this.postForm.value);
    
    // ⬅️ COMMENTA questa parte che chiama le API
    /*
    this.postService.createNewPost(this.postForm.value).subscribe({
      next: (response) => {
        console.log('Post creato!', response);
        this.snackBar.open('Post creato con successo!', 'OK');
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        console.error('Errore:', error);
        this.snackBar.open('Errore nella creazione del post', 'OK');
      }
    });
    */
    
    // ⬅️ AGGIUNGI questo per il test
    this.snackBar.open('Post created successfully!', 'OK');
    console.log('Form funziona perfettamente!');
  }
}
  add(event: any): void {
    const value = (event.value || '').trim();
    if (value) {
      this.tags.push(value);
}
    event.chipInput!.clear();

  }
  remove(tag: any): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }}