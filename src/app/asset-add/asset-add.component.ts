
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Assetdef } from '../shared/assetdef';
import { Assettype } from '../shared/assettype';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-asset-add',
  templateUrl: './asset-add.component.html',
  styleUrls: ['./asset-add.component.scss']
})
export class AssetAddComponent implements OnInit {

  assetForm: FormGroup;
  asset: Assetdef = new Assetdef();
  assettypes: Observable<Assettype[]>;
  assetname: string;

  constructor(private formBuilder: FormBuilder, private service: AssetService, private toastr: ToastrService) { }

  ngOnInit() {

    this.assetForm = this.formBuilder.group({
      ad_name: ['', Validators.compose([Validators.required])],
      ad_type_id: ['', Validators.compose([Validators.required])],
      ad_class: ['', Validators.compose([Validators.required])]


    });
    this.assettypes=this.service.getAssetTypes();
  }

  addAsset() {
    this.asset.ad_name = this.assetForm.controls.ad_name.value;
    this.assetname= this.asset.ad_name;
    console.log(this.assetname);
    this.asset.ad_type_id = this.assetForm.controls.ad_type_id.value;
    this.asset.ad_class = this.assetForm.controls.ad_class.value;
    console.log(this.asset.ad_name);
      this.service.addAsset(this.asset).subscribe();
    this.toastr.success('Added SuccesFully!!!..','Success');
    this.ngOnInit();
    


    

  }

}
