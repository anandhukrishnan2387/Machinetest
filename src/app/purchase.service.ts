import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Purchase } from './purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }

  getPurchaseList(): Observable<any> {
    return this.http.get(environment.baseUrl + '/Purchase');
  }

  addPurchase(purchase: Purchase) {
    return this.http.post(environment.baseUrl + '/Purchase', purchase);

  }
  getAssetType(na: string): Observable<any> {
    return this.http.get(environment.baseUrl + '/AssetDef?adName='+na);
  }
  getallAssetTypes(): Observable<any> {
    return this.http.get(environment.baseUrl + '/AssetType');
  }
  getAsset(name: string): Observable<any> {
    return this.http.get(environment.baseUrl + '/AssetDef?na=' + name);
  }
  getVendor(adId: number): Observable<any> {
    return this.http.get(environment.baseUrl + '/Purchase?atId=' + adId);
  }
}
