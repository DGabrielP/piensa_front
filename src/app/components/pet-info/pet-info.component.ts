import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  standalone: true,
  imports: [CommonModule, NzFormModule, NzInputModule, ReactiveFormsModule, NzButtonModule, NzIconModule, NzInputNumberModule],
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.validateForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required]],
      species: ['', [Validators.required]],
      breed: [''],
      age: [null, [Validators.required]],
      owner: [''],
      hireDate: [null, [Validators.required]],
      status: ['', [Validators.required]],
      createdAt: [null],
      updatedAt: [null]
    });
  }

  ngOnInit(): void {}

  onCreate(): void {
    if (this.validateForm.valid) {
      this.apiService.createPet(this.validateForm.value).subscribe(response => {
        console.log('Pet created:', response);
      });
    } else {
      this.markFormControlsAsDirty();
    }
  }

  onSearch(): void {
    this.apiService.getPets().subscribe(response => {
      console.log('Pets:', response);
    });
  }

  onUpdate(): void {
    if (this.validateForm.valid) {
      const id = this.validateForm.get('id')?.value;
      if (id) {
        this.apiService.updatePet(id, this.validateForm.value).subscribe(response => {
          console.log('Pet updated:', response);
        });
      } else {
        console.log('ID is required to update');
      }
    } else {
      this.markFormControlsAsDirty();
    }
  }

  onDelete(): void {
    const id = this.validateForm.get('id')?.value;
    if (id) {
      this.apiService.deletePet(id).subscribe(response => {
        console.log('Pet deleted:', response);
      });
    } else {
      console.log('ID is required to delete');
    }
  }

  private markFormControlsAsDirty(): void {
    Object.values(this.validateForm.controls).forEach(control => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity();
      }
    });
  }
}
