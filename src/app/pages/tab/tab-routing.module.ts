import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account',
  },
  {
    path: '',
    component: TabPage,
    children:[
      {
        path:'account',
        loadChildren: '../avatar/avatar.module#AvatarPageModule'
      },
      {
        path:'contact',
        loadChildren: '../list/list.module#ListPageModule'
      },
      {
        path:'settings',
        loadChildren: '../infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
