import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { QuizzcreateModule } from './quizzcreate/quizzcreate.module';
import { QizzPlayModule } from './qizz-play/qizz-play.module';
import { ListComponent } from './quizz-play/list/list.component';
import { ScoreComponent } from './quizz-play/score/score.component';
import { QuestionComponent } from './quizz-play/question/question.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LegalComponent,
    ListComponent,
    ScoreComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    QuizzcreateModule,
    QizzPlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
