import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonOneComponent } from './lesson-one/lesson-one.component';
import { LessonTwoComponent } from './lesson-two/lesson-two.component';
import { QuestionOneComponent } from './question-one/question-one.component';
import { QuestionTwoComponent } from './question-two/question-two.component';
import { ResultsComponent } from './results/results.component';
import { StartGameComponent } from './start-game/start-game.component';

const routes: Routes = [
  {path: 'start', component: StartGameComponent},
  {path: '', component: StartGameComponent},
  {path: 'lesson/1', component: LessonOneComponent},
  {path: 'lesson/2', component: LessonTwoComponent},
  {path: 'question/1', component: QuestionOneComponent},
  {path: 'question/2', component: QuestionTwoComponent},
  {path: 'results', component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
