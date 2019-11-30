import { DecimalPipe } from '@angular/common';

export class Purchase {
    pd_id:number;
    pd_order_no: string;
    pd_ad_id: number;
    pd_atype_id:number;
    pd_qty:number;
    pd_vendor_id:number;
    pd_date:Date;
    pd_ddate:Date;
    pd_status:string;
    pd_datestr:Date;
    pd_ddatestr:Date;
    pd_ad_name:string;
    pd_ad_type:string;
    pd_vendor_name:string;
}
