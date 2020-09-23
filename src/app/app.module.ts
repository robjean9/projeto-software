import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartGameComponent } from './start-game/start-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LessonOneComponent } from './lesson-one/lesson-one.component';

@NgModule({
  declarations: [
    AppComponent,
    StartGameComponent,
    LessonOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
