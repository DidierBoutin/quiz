import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from '../quizz-create/add-question/add-question.component';
import { FinishedComponent } from '../quizz-create/finished/finished.component';
import { SetupComponent } from '../quizz-create/setup/setup.component';
import { CreateComponent } from '../quizz-create/create/create.component';


const routes: Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'setuo', component: SetupComponent},
  {path: 'add-question', component: AddQuestionComponent},
  {path: 'finished', component: FinishedComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzcreateRoutingModule { }
