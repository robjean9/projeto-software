import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonOneComponent } from './lesson-one/lesson-one.component';
import { StartGameComponent } from './start-game/start-game.component';

const routes: Routes = [
  {path: 'start', component: StartGameComponent},
  {path: 'lesson/1', component: LessonOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
