import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetAddComponent } from './asset-add/asset-add.component';


const routes: Routes = [
{path:'',redirectTo :'login',pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'list',component:AssetListComponent},
{path:'add',component:AssetAddComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }