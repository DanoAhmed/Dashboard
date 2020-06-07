import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyinfoService } from '../../_services/companyinfo.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private _CompanyinfoService: CompanyinfoService) { }

  currentCompanyInfo;
  profileHiddin: boolean = false;

  profileForm = new FormGroup({
    companyName: new FormControl('', Validators.required),
    companyDesc: new FormControl('', Validators.required),
    companyTel: new FormControl('', Validators.required),
    companyType: new FormControl('', Validators.required),
    companyEmail: new FormControl('', Validators.required),
    packageSubs: new FormControl('', Validators.required),
    companyAddress: new FormControl('', Validators.required),
  });


  loadCompanyInfo() {
    return this._CompanyinfoService.getCompanyInfo().subscribe(info => {
      this.currentCompanyInfo = info[0];
      console.log(this.currentCompanyInfo);
    });

  }


  profileEdit() {
    // console.log("hello from edit");
    this.profileHiddin = true;
  }

  onSubmit(profileform) {
    this.profileHiddin = false;
  }
  onCancel() {
    // this.profileform.reset();
  }


  ngOnInit() {
    this.loadCompanyInfo();
  }

}
