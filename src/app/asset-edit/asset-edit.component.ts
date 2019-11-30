import { Component, OnInit } from '@angular/core';
import { Assetdef } from '../shared/assetdef';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Assettype } from '../shared/assettype';
import { AssetService } from '../asset.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.scss']
})
export class AssetEditComponent implements OnInit {

  asset: Assetdef=new Assetdef();
  assetForm: FormGroup;
  assettypes: Observable<Assettype[]>;
  assets: Observable<Assetdef[]>;

  constructor(private service: AssetService, private route: ActivatedRoute, private formBuilder: FormBuilder, private toastr: ToastrService) { }
  id: number;
  pdt: any;

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.assetForm = this.formBuilder.group({
      ad_id: ['null'],
      ad_name: [Validators.compose([Validators.required])],
      ad_type_id: [Validators.compose([Validators.required])],
      ad_class: [Validators.compose([Validators.required])]
    });
    //  this.assets=this.service.getAsset(this.id);
    // this.asset=this.assets[0];
    // console.log(this.asset.ad_name);
    this.service.getAsset(this.id).subscribe(x => {
      console.log(x)
      x.forEach(element => {
        this.asset.ad_id=element['ad_id'];
        this.asset.ad_name=element['ad_name'];
        console.log(element['ad_id']);
        console.log(element['ad_name']);
        this.asset.ad_type_id=element['ad_type_id'];
        this.asset.ad_class=element['ad_class'];
      });
      
      
    });
    this.assettypes = this.service.getAssetTypes();



  }

  get formControls() {
    return this.assetForm.controls;

  }

  updateAsset() {

    this.asset.ad_id = this.id;
    this.asset.ad_name = this.assetForm.controls.ad_name.value;
    this.asset.ad_type_id = this.assetForm.controls.ad_type_id.value;
    this.asset.ad_class = this.assetForm.controls.ad_class.value;
    this.service.updateAsset(this.id, this.asset).subscribe(res => {
      this.toastr.success('Asset Updated');
    });

  }

}
