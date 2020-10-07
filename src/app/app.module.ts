import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartGameComponent } from './start-game/start-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LessonOneComponent } from './lesson-one/lesson-one.component';
import { QuestionTwoComponent } from './question-two/question-two.component';
import { QuestionOneComponent } from './question-one/question-one.component';
import { LessonTwoComponent } from './lesson-two/lesson-two.component';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { ResultsComponent } from './results/results.component';
import { MinuteSecondsPipe } from './_services/seconds.pipe';

const dbConfig: DBConfig  = {
  name: 'JogoDb',
  version: 1,
  objectStoresMeta: [{
    store: 'results',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'playerName', keypath: 'playerName', options: { unique: false } },
      { name: 'timeOnLessonOne', keypath: 'timeOnLessonOne', options: { unique: false } },
      { name: 'timeOnLessonTwo', keypath: 'timeOnLessonTwo', options: { unique: false } },
      { name: 'timeOnQuestionOne', keypath: 'timeOnQuestionOne', options: { unique: false } },
      { name: 'timeOnQuestionTwo', keypath: 'timeOnQuestionTwo', options: { unique: false } },
      { name: 'errorsOnQuestionOne', keypath: 'errorsOnQuestionOne', options: { unique: false } },
      { name: 'errorsOnQuestionTwo', keypath: 'errorsOnQuestionTwo', options: { unique: false } },
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent,
    StartGameComponent,
    LessonOneComponent,
    LessonTwoComponent,
    QuestionOneComponent,
    QuestionTwoComponent,
    ResultsComponent,
    MinuteSecondsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIndexedDBModule.forRoot(dbConfig)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
