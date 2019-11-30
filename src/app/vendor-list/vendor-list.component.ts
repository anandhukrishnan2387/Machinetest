import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { Assettype } from '../shared/assettype';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
  vendors: Observable<Vendor[]>;
  assettype: Observable<Assettype[]>;
  constructor(private router: Router,private toastr: ToastrService,private service: VendorService) { }

  ngOnInit() {
    this.vendorsList();
    this.reloadData();
  }
  vendorsList() {
    this.vendors = this.service.getVendorsList();
    console.log(this.vendors);
  }
  reloadData() {
    this.vendors= this.service.getVendorsList();
  }
  deleteVendor(id: number) {
    if(confirm('Do You Want To Delete This Record??'))
    {
      this.service.deleteVendor(id).subscribe(data => {
        console.log(data);
        this.reloadData();
      });
    }
  }

}
