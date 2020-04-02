import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Route} from "@angular/router";
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {HomePageComponent} from "./home-page/home-page.component";
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Route[] = [
    {path: '', pathMatch: 'full', redirectTo: 'pages/home'},
    {
        path: 'pages',
        data: {
            noNavigation: true,
        },
        children:
        [
            {path: 'home', component: HomePageComponent},
            {path: 'about', component: AboutPageComponent},
        ]

    }
]; 

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);