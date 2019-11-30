import { Component, OnInit } from '@angular/core';
import { AssetService } from '../asset.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from '../vendor.service';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { Assettype } from '../shared/assettype';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.scss']
})
export class VendorEditComponent implements OnInit {
  vendor:Vendor;
  vendorForm: FormGroup;
  assettypes: Observable<Assettype[]>;

  constructor(private service:VendorService,private route: ActivatedRoute, private formBuilder:FormBuilder, private toastr:ToastrService) { }
  id:number;
  pdt: any;
  ngOnInit() {

    this.id=this.route.snapshot.params["id"];
    this.vendorForm=this.formBuilder.group({
      vd_id: [Validators.required],
      vd_name: [Validators.compose([Validators.required])],
      vd_type: 'Supplier',
      vd_atype_id: [Validators.compose([Validators.required])],
      vd_from: [Validators.compose([Validators.required])],
      vd_to: [Validators.compose([Validators.required])],
      vd_addr: [Validators.compose([Validators.required])]
    }); 
  //  this.assets=this.service.getAsset(this.id);
   // this.asset=this.assets[0];
   // console.log(this.asset.ad_name);
    this.service.getVendor(this.id).subscribe(x=>{
      this.vendor=x;
    }); 
    this.assettypes=this.service.getAssetTypes();
  }
  get formControls(){
    return this.vendorForm.controls;
  
  }
  updateVendor()
    {
  
      this.vendor.vd_id=this.id;
      this.vendor.vd_name=this.vendorForm.controls.vd_name.value;
      this.vendor.vd_type=this.vendorForm.controls.vd_type.value;
      this.vendor.vd_atype_id=this.vendorForm.controls.vd_atype_id.value;
      this.vendor.vd_from=this.vendorForm.controls.vd_from.value;
      this.vendor.vd_to=this.vendorForm.controls.vd_to.value;
      this.vendor.vd_addr=this.vendorForm.controls.vd_addr.value;

      this.service.putVendor(this.id,this.vendor).subscribe(res=>{
        this.toastr.success('Vendor Updated');
      });

    }
}
