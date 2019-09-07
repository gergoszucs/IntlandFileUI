import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { DocumentViewerComponent } from './components/document-viewer/document-viewer.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';

const routes: Routes = [
    { path: 'doc-viewer', component: DocumentViewerComponent },
    { path: 'welcome', component: WelcomeScreenComponent },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), HttpClientModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
