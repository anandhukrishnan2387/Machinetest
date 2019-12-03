import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PurchaseAddComponent } from './purchase-add/purchase-add.component';
import { AssetmasterListComponent } from './assetmaster-list/assetmaster-list.component';
import { AssetmasterAddComponent } from './assetmaster-add/assetmaster-add.component';
import { AssetMasterListComponent } from './asset-master-list/asset-master-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent,
    AssetEditComponent,
    AssetAddComponent,
    LoginComponent,
    VendorListComponent,
    VendorAddComponent,
    VendorEditComponent,
    PurchaseComponent,
    PurchaseAddComponent,
    AssetmasterListComponent,
    AssetmasterAddComponent,
    AssetMasterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
