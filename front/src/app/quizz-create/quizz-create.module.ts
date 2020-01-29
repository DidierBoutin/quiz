import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { QuizzCreateRoutingModule } from './quizz-create-routing.module';
import { CreateComponent } from './create/create.component';
import { SetupComponent } from './setup/setup.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FinishedComponent } from './finished/finished.component';


@NgModule({
  declarations: [CreateComponent, SetupComponent, AddQuestionComponent, FinishedComponent],
  imports: [
    CommonModule,
    QuizzCreateRoutingModule,
    FontAwesomeModule
  ]
})
export class QuizzCreateModule { }
