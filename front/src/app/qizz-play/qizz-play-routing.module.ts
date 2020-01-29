import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { QuestionComponent } from '../quizz-play/question/question.component';
import { ScoreComponent } from '../quizz-play/score/score.component';
import { ListComponent } from '../quizz-play/list/list.component';


const routes: Routes = [
  {path: 'list', component : ListComponent},
  {path: 'question', component : QuestionComponent},
  {path: 'score', component : ScoreComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QizzPlayRoutingModule { }
