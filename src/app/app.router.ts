import { NgModule } from "@angular/core";
import { RouterModule, Route, Routes } from "@angular/router";
import { AboutPageComponent } from './components/about-page/about-page.component';

const routes: Routes = [
    { path: '', redirectTo: "/app-root", pathMatch: 'full' },
    { path: 'about-page', component: AboutPageComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}