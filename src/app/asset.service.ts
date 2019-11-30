import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Assetdef } from './shared/assetdef';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  asset: Assetdef = new Assetdef();

  constructor(private http: HttpClient) { }
  getAsset(id: number): Observable<any> {
    return this.http.get(environment.baseUrl + '/AssetDef/' + id);
  }
  getAssetList(): Observable<any> {
    return this.http.get(environment.baseUrl + '/AssetDef');
  }
  updateAsset(id: number, asset: Assetdef): Observable<any> {
    return this.http.put(environment.baseUrl + '/AssetDef/' + id, asset);
  }
  addAsset(asset: Assetdef): Observable<any> {
    return this.http.post(environment.baseUrl + '/AssetDef', asset);
  }
  getAssetTypes(): Observable<any> {
    return this.http.get(environment.baseUrl + '/AssetType');
  }
  getAssetType(id: number): Observable<any> {
    return this.http.get(environment.baseUrl + '/AssetType/' + id);
  }
  deleteAsset(id: number): Observable<any> {
    return this.http.delete(environment.baseUrl + '/AssetDef/' + id);
  }
  getAssetNames(assetName: string): Observable<any> {
    return this.http.get(environment.baseUrl + '/AssetDef?ad_name=' + assetName);
  }
}

