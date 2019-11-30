import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from '../purchase';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AssetmasterService } from '../assetmaster.service';

@Component({
  selector: 'app-assetmaster-list',
  templateUrl: './assetmaster-list.component.html',
  styleUrls: ['./assetmaster-list.component.scss']
})
export class AssetmasterListComponent implements OnInit {
  purchases: Observable<Purchase[]>;
  
  constructor(private authService:AuthService, private toastr: ToastrService, private router:Router, private masterOrderService: AssetmasterService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.purchases=this.masterOrderService.getAssetOrders();
  }
}
