import { LoaderService } from './../../components/componentsAsService/loader/loader.service';
import { Injectable } from '@angular/core';
import Utils from './utils';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariables {

  private paramsData: any = {};
  private retainParamValue = false;

  constructor(private loader: LoaderService) { }

  // returns the data based on the key passed
  // @key => object key from global variable enums
  public getParameterData(key) {
    if (!Utils.isUndefined(this.paramsData) && !Utils.isNull(this.paramsData)) {
      if (this.paramsData.hasOwnProperty(key)) {
        const output = this.paramsData[key];
        if (this.retainParamValue === false) {
          this.setParameterData(key, null);
        }
        return output;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  // single time set method
  // @key => object key from global variable enums
  // @input => any data value either an object or a value
  // @retainvalue => weather the data should present or not
  public setParameterData(key, input, retainValue = true) {
    this.paramsData[key] = input;
    this.retainParamValue = retainValue;
  }

  open() {
    this.loader.showLoading();
  }

  close() {
    this.loader.hideLoading();
  }

}
