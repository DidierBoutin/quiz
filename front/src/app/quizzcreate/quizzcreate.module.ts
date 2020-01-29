import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzcreateRoutingModule } from './quizzcreate-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateComponent } from '../quizz-create/create/create.component';
import { AddQuestionComponent } from '../quizz-create/add-question/add-question.component';
import { FinishedComponent } from '../quizz-create/finished/finished.component';
import { SetupComponent } from '../quizz-create/setup/setup.component';


@NgModule({
  declarations: [CreateComponent, AddQuestionComponent, FinishedComponent, SetupComponent],
  imports: [
    CommonModule,
    QuizzcreateRoutingModule,
    FontAwesomeModule
  ]
})
export class QuizzcreateModule { }
