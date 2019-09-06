import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentViewerComponent } from './document-viewer/document-viewer.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

const routes: Routes = [
    { path: 'doc-viewer', component: DocumentViewerComponent },
    { path: 'welcome', component: WelcomeScreenComponent },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
