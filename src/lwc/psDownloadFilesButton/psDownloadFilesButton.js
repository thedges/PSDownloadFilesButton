import {LightningElement, api} from 'lwc';
import getDownloadLink
  from '@salesforce/apex/PSDownloadFilesButtonController.getContentDownloadLink';

export default class PsDownloadFilesButton extends LightningElement {
  @api recordId;
  @api label;
  env;
  baseURL;

  download () {
    this.setEnv();

    console.log('recordId=' + this.recordId);

    getDownloadLink ({recId: this.recordId})
      .then (result => {
        console.log ('result=' + result);
        if (result && this.env == 'community')
        {
          window.location.href = this.baseURL + result;
        }
        else if (result && this.env == 'lightning')
        {
          window.location.href = result;
        }

        /*
        var oReq = new XMLHttpRequest ();
        //oReq.addEventListener ('load', reqListener);
        oReq.open ('GET', result);
        oReq.send ();
        */
      })
      .catch (error => {
        console.log ('error=' + JSON.stringify(error));
      });
  }

  setEnv() {
    var pathArray = location.href.split('/');
    if (location.href.includes('lightning')) {
        this.env = "lightning";
        this.baseURL = pathArray[0] + '//' + pathArray[2];
    } else if (location.href.includes('/s/')) {
        this.env = "community";
        this.baseURL = pathArray[0] + '//' + pathArray[2] + '/' + pathArray[3];
    }
    console.log('env=' + this.env);
    console.log('baseURL=' + this.baseURL);
  }
}