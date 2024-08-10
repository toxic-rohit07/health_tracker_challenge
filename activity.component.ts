import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
})
export class ActivityComponent {
  [x: string]: any;

  gridStyle={
    width: '100%',
    textAlign: 'centre',
  };

  activityForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private message: NzMessageService
  ){}

  ngOnInit(){
    this['acitvityForm']= this.fb.group({
      caloriesBurned: [null,[Validators.required]],
      steps:[null,[Validators.required]],
      distance:[null,[Validators.required]],
      date:[null,[Validators.required]],
    })
  }

}
