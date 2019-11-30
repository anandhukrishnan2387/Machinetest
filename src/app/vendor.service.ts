import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendor } from './vendor';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  vendor: Vendor = new Vendor();

  constructor(private http: HttpClient) { }
  getVendorsList(): Observable<any> {
    return this.http.get(environment.baseUrl + '/Vendors');
  }
  getVendor(id: number): Observable<any> {
    return this.http.get(environment.baseUrl + '/Vendors/' + id);
  }
  addVendor(vendor: Vendor): Observable<any> {
    return this.http.post(environment.baseUrl + '/Vendors', vendor);
  }
  getAssetTypes(): Observable<any> {
    return this.http.get(environment.baseUrl + '/AssetType');
  }

  deleteVendor(id: number): Observable<any> {
    return this.http.delete(environment.baseUrl + '/Vendors/' + id);
  }
  putVendor(id: number, vendor: Vendor): Observable<any> {
    return this.http.put(environment.baseUrl + '/Vendors/' + id, vendor);
  }
}
