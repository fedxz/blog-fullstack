import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './post.html',
  styleUrl: './post.scss'
})
export class Post implements OnInit {
  postForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

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
    }
  }
}