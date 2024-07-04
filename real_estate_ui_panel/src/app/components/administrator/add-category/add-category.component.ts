import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralServiceService } from '../../../services/general_service/general-service.service';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  isEditMode = false;
  categoryId!: string;

  constructor(
    private fb: FormBuilder,
    private categoryService: GeneralServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params['id'];
      if (this.categoryId) {
        this.isEditMode = true;
        this.categoryService.getCategoryById(this.categoryId).subscribe((category: Category) => {
          this.categoryForm.patchValue(category);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      const category: Category = this.categoryForm.value;
      if (this.isEditMode) {
        this.categoryService.updateCategory(this.categoryId, category).subscribe(() => {
          this.router.navigate(['/categories']);
        });
      } else {
        this.categoryService.createCategory(category).subscribe(() => {
          this.router.navigate(['/categories']);
        });
      }
    }
  }
}

