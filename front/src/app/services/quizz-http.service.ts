import { Injectable } from '@angular/core';
import { QuizzService } from './quizz.service';
import { HttpClient } from '@angular/common/http';
import { Quizz } from '../entities/quizz';
import { QuizMap } from '../interfaces/quiz-map';

@Injectable({
  providedIn: 'root'
})
export class QuizzHttpService extends QuizzService {

  constructor(private http: HttpClient) {
    super();
    console.log ('http quizz service')
    this.refresh()
   }

 refresh() {
   this.http.get<QuizMap>('http://localhost:3000/v1/quizz').subscribe({
     next: quizzMap =>{
       console.log('quizMap : ', quizzMap);
       this.quizzMap = quizzMap;
       this.saveQuizzMap()
     },
     error:(err)=>{
      console.log('err : ', err)

     },
     complete:()=>{console.log('complete')}
   });
 }
}
