import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import { TabsPage} from './tabs.page';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {
      path: '',
      component: TabsPage,
        children: [
            {
                path: 'profile',
                loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
            },
            {
                path: 'welcome-cards',
                loadChildren: () => import('../welcome-cards/welcome-cards.module').then(m => m.WelcomeCardsPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class TabsRoutingModule { }
