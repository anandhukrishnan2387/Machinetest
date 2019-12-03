import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Assetmaster } from '../assetmaster';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AssetmasterService } from '../assetmaster.service';

@Component({
  selector: 'app-asset-master-list',
  templateUrl: './asset-master-list.component.html',
  styleUrls: ['./asset-master-list.component.scss']
})
export class AssetMasterListComponent implements OnInit {

  masters: Observable<Assetmaster[]>;

  constructor(private authService: AuthService, private router: Router, private masterService: AssetmasterService) { }

  ngOnInit() {
    this.reloadData();
  }


  reloadData(){
    this.masters=this.masterService.getMasterList();
    this.masters.forEach(x=>{
    console.log(x);
    })
  }
}
