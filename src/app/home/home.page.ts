import { Component } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  datauser: any;
  queryText: String;
  constructor(
    private router :Router,
    public api: ApiService
  ) {}
  go(code){
    this.router.navigateByUrl('/statistics');
  }

  ngOnInit() {
    this.getDataUser();

  }
  
  async getDataUser() {
    await this.api.getDataUser()
      .subscribe(res => {
        console.log(res);
        this.datauser = res.data;
		console.log(this.datauser);
      }, err => {
        console.log(err);
      });
  }


}
