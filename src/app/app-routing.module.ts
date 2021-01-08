import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PianoGameComponent } from './piano-game/piano-game.component';

const routes: Routes = [{
  path:'piano-game',
  component: PianoGameComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
