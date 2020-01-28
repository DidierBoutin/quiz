import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { QuizzcreateModule } from './quizzcreate/quizzcreate.module';
import { CreateComponent } from './quizz-create/create/create.component';
import { SetupComponent } from './quizz-create/setup/setup.component';
import { AddQuestionComponent } from './quizz-create/add-question/add-question.component';
import { FinishedComponent } from './quizz-create/finished/finished.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LegalComponent,
    CreateComponent,
    SetupComponent,
    AddQuestionComponent,
    FinishedComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    QuizzcreateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
