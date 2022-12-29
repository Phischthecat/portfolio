import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: "",pathMatch: 'full', component: StartComponent},
  {path: "legal-notice",pathMatch: 'full', component: LegalNoticeComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
