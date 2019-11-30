import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../purchase.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Assettype } from '../shared/assettype';
import { Vendor } from '../vendor';
import { Assetdef } from '../shared/assetdef';
import { Purchase } from '../purchase';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
assettypes: Observable<Assettype[]>;
vendors: Observable<Vendor[]>;
asset:Observable<Assetdef[]>;
purchases:Observable<Purchase[]>;
  constructor(private service:PurchaseService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
this.reloadData();
  }
PurchaseList() {
  this.purchases= this.service.getPurchaseList();
  console.log(this.purchases);
}
reloadData()
{
  this.PurchaseList();
}
}
