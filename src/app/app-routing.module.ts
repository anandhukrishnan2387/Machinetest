import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseAddComponent } from './purchase-add/purchase-add.component';


const routes: Routes = [
{path:'',redirectTo :'login',pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'list',component:AssetListComponent},
{path:'add',component:AssetAddComponent},
{path:'edit/:id', component:AssetEditComponent},
{path:'vendorlist', component:VendorListComponent},
{path:'vendoradd',component:VendorAddComponent},
{path:'vendoredit/:id',component:VendorEditComponent},
{path:'purchaselist', component:PurchaseComponent},
{path:'purchaseorder',component:PurchaseAddComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }