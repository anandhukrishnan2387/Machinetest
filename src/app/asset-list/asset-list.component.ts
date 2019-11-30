import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Assetdef } from '../shared/assetdef';
import { Assettype } from '../shared/assettype';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {
  assetdef: Observable<Assetdef[]>;
  assetype: Observable<Assettype[]>;
  constructor(private router: Router, private service: AssetService, toastr : ToastrService) { }

  ngOnInit() {
    this.list();
    this.reloadData();
  }
  reloadData() {
    this.assetdef= this.service.getAssetList();
  }
  list() {
    this.assetdef = this.service.getAssetList();
    console.log(this.assetdef);
  }
  deleteAsset(id: number) {
    if(confirm('Do You Want To Delete This Record??'))
    {
      this.service.deleteAsset(id).subscribe(data => {
        console.log(data);
        this.reloadData();
      });
    }
  }
}
