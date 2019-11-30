import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Assettype } from '../shared/assettype';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VendorService } from '../vendor.service';
import { AssetService } from '../asset.service';
import { ToastrService } from 'ngx-toastr';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.scss']
})
export class VendorAddComponent implements OnInit {
  
  vendorType: string;
  assetTypes: Observable<Assettype[]>;
  vendor: Vendor= new Vendor();
  FormGroup: FormGroup;
  constructor(private fb: FormBuilder, private vendorService: VendorService,
    private assetService: AssetService, private toastr: ToastrService, ) { }

  ngOnInit() {
    this.assetTypes = this.assetService.getAssetTypes();
    this.FormGroup = this.fb.group({
      vd_name: ['', Validators.compose([Validators.required])],
      vd_type: ['Supplier', Validators.compose([Validators.required])],
      vd_atype_id: ['', Validators.compose([Validators.required])],
      vd_from: ['', Validators.compose([Validators.required])],
      vd_to: ['', Validators.compose([Validators.required])],
      vd_addr: ['', Validators.compose([Validators.required])]
    });
  }
addvendors()
{
  this.vendor.vd_name= this.FormGroup.controls.vd_name.value;
  this.vendor.vd_type= this.FormGroup.controls.vd_type.value;
  this.vendor.vd_atype_id= this.FormGroup.controls.vd_atype_id.value;
  this.vendor.vd_addr= this.FormGroup.controls.vd_addr.value;
  this.vendor.vd_from= this.FormGroup.controls.vd_from.value;
  this.vendor.vd_to= this.FormGroup.controls.vd_to.value;
  this.vendorService.addVendor(this.vendor).subscribe();
  this.toastr.success('Succesfully Added','Success');
  this.ngOnInit();
}

}
