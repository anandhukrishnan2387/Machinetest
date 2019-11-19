import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http: HttpClient) { }
  getAsset(id: number): Observable<any> {
    return this.http.get(environment.baseUrl + '/AssetDef' + id);
  }
  getAssetList(): Observable<any> {
    return this.http.get(environment.baseUrl + '/AssetDef');
  }
}
