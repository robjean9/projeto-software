import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditsComponent } from './credits/credits.component';
import { EndGameComponent } from './end-game/end-game.component';
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
  {path: 'results', component: ResultsComponent},
  {path: 'credits', component: CreditsComponent},
  {path: 'end', component: EndGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
