import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Purchase } from '../purchase';
import { Observable } from 'rxjs';
import { Assettype } from '../shared/assettype';
import { Vendor } from '../vendor';
import { AuthService } from '../auth.service';
import { PurchaseService } from '../purchase.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase-add',
  templateUrl: './purchase-add.component.html',
  styleUrls: ['./purchase-add.component.scss']
})
export class PurchaseAddComponent implements OnInit {

  purchaseForm: FormGroup;
  purchase: Purchase = new Purchase();
  assetId: number;
  assettypes: Observable<Assettype[]>;
  vendor: Observable<Vendor>;
  vendors: Observable<Vendor[]>;
  constructor(private authservice: AuthService, private formBuilder: FormBuilder, private purchaseservice: PurchaseService, private route: ActivatedRoute,
    private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.purchaseForm = this.formBuilder.group({
      pd_order_no: ['ORD' + Math.floor((Math.random() * 10000) + 1), Validators.compose([Validators.required])],

      pd_type_id: ['', Validators.compose([Validators.required])],
      pd_qty: ['', Validators.compose([Validators.required])],
      pd_vendor_id: ['', Validators.compose([Validators.required])]


    });
  }
  onOptionsSelected(value: number) {

    console.log(value);
    this.vendors = this.purchaseservice.getVendor(value);
    /*   this.purchaseservice.getVendor(value).subscribe(data=>{
        console.log("vendor",data);
      })
      this.vendors.forEach(x=>{
        console.log(x);
      }) */
    console.log(this.vendors);
  }
  Logout() {
    this.authservice.isLogggedOut();
    this.router.navigateByUrl("login");
  }
  searchAssetType(name: string) {
    this.assettypes = this.purchaseservice.getAssetType(name);
    this.purchaseservice.getAsset(name).subscribe(res => {
      res.forEach(element => {

        this.assetId = element["ad_id"];
        console.log(this.assetId);
      });

    })
  }
  addOrder() {
    console.log(this.assetId);
    this.purchase.pd_order_no = this.purchaseForm.controls.pd_order_no.value;
    this.purchase.pd_ad_id = this.assetId;
    this.purchase.pd_atype_id = this.purchaseForm.controls.pd_type_id.value;
    this.purchase.pd_qty = this.purchaseForm.controls.pd_qty.value;
    this.purchase.pd_vendor_id = this.purchaseForm.controls.pd_vendor_id.value;
    this.purchase.pd_status = "PO-Raised with Supplier";
    this.purchaseservice.addPurchase(this.purchase).subscribe(res => {
      this.toastr.success('Success ', 'Order Placed');
    })
  }

}
