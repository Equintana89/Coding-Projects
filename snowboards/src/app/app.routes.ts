import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
    {path: '', redirectTo: 'homePage', pathMatch: 'full'},
    {path: 'homePage', component: HomePageComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);