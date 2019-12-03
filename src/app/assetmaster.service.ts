import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Assetmaster } from './assetmaster';
import { Purchase } from './purchase';

@Injectable({
  providedIn: 'root'
})
export class AssetmasterService {

  constructor(private http: HttpClient) { }
public getAssetOrders(): Observable<any> {
  return this.http.get(environment.baseUrl+'/AssetMasterOrderView');
}
getAssetOrder(id:string): Observable<any> {
  return this.http.get(environment.baseUrl+'/AssetMasterOrderView?orno='+id);
}
postAsset(asset:Assetmaster)
{
  return this.http.post(environment.baseUrl+'/AssetMaster',asset);
}
updatePurchase(id:number,purchase:Purchase):Observable<any>{
  return this.http.put(environment.baseUrl+'/AssetMaster'+id,purchase);
}
getMasterList():Observable<any>
{
  return this.http.get(environment.baseUrl+'/AssetMaster');
}
}
