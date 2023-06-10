import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  form = {
    telpon : '',
    nik : '',
    nama : '',
    tgl : '',
    jk : '',
    alamat : '',
    pekerjaan : '',
  }

  constructor() {}

  // async trackLocation() {

  //   const coor = await Geolocation.getCurrentPosition();

  //   let data = {
  //     nik : this.form.nik,
  //     nama : this.form.nama,
  //     tgl : this.form.tgl,
  //     jk : this.form.jk,
  //     alamat : this.form.alamat,
  //     pekerjaan : this.form.pekerjaan,
  //     lat : coor.coords.latitude,
  //     lng : coor.coords.longitude
  //   }
    

  //   // console.log(data)

  //   if(localStorage.getItem('data') != null){
  //     const getData = JSON.parse(localStorage.getItem('data') as string);
  //     localStorage.removeItem('dataTmpOfflineMode'); 

  //   console.log(getData)

  //   getData.forEach((element:any) => {


  //     const dataTmp = {
  //       nik : element.nik,
  //       nama : element.nama,
  //       tgl : element.tgl,
  //       jk : element.jk,
  //       alamat : element.alamat,
  //       pekerjaan : element.pekerjaan,
  //       lat : element.lat,
  //       lng : element.lng
  //     };


  //     localStorage.setItem('data', JSON.stringify(data))

  //     console.log("Loop Data ==> "+ element.name_category_outlet);
  //   });
  //   }
    


  // }

  async trackLocation() {
    const coor = await Geolocation.getCurrentPosition();
  
    let data = {
      telpon: this.form.telpon,
      nik: this.form.nik,
      nama: this.form.nama,
      tgl: this.form.tgl,
      jk: this.form.jk,
      alamat: this.form.alamat,
      pekerjaan: this.form.pekerjaan,
      lat: coor.coords.latitude,
      lng: coor.coords.longitude
    };

    const link = "https://wa.me/"+this.form.telpon+"?text=halo%20"+data.nama

    window.open(link, "_system");

  
    if (localStorage.getItem('data') != null) {
      const existingData = JSON.parse(localStorage.getItem('data') as string);
      const newData = [...existingData, data];
      localStorage.setItem('data', JSON.stringify(newData));
  
      console.log(newData);
  
      newData.forEach((element: any) => {
        const dataTmp = {
          nik: element.nik,
          nama: element.nama,
          tgl: element.tgl,
          jk: element.jk,
          alamat: element.alamat,
          pekerjaan: element.pekerjaan,
          lat: element.lat,
          lng: element.lng
        };
      });
    } else {
      localStorage.setItem('data', JSON.stringify([data]));
      console.log(data);
    }
  }

  // formatPhoneNumber(phoneNumber: string): string {
  //   const countryCode = "62";
  //   const formattedPhoneNumber = phoneNumber.replace(/^0/, "");
  //   return countryCode + formattedPhoneNumber;
  // }

}
