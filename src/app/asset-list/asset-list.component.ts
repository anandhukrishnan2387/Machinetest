import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Assetdef } from '../shared/assetdef';
import { Assettype } from '../shared/assettype';
import { HttpClient } from '@angular/common/http';
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
  constructor(private http: HttpClient,
    private router: Router, private service: AssetService) { }

  ngOnInit() {
    this.list();
  }
  list() {
    this.assetdef = this.service.getAssetList();
  }
}
