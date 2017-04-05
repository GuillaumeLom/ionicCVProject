import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})





export class HomePage {

  //GuiGuy : JSON = JSON.parse("{lastName:'Lombard',firstName: 'Guillaume',age: '20',adress: 'Nice'}");
  //Glenn : JSON = JSON.parse("{lastName:'Le Menn',firstName: 'Glenn',age: '20',adress: 'Cap d'Ail}");
  GuiGuy: CV = new CV();
  Glenn: CV = new CV();
  cvs: CV[];
  currentCV: number;
  constructor(public navCtrl: NavController) {
    Object.assign(this.GuiGuy, {
      lastName: 'Lombard',
      firstName: 'Guillaume',
      age: '20',
      adress: 'Nice',
      experiences: [
        {
          titre: "CDD",
          date: "Juin - Juillet 2016",
          descrip: "CDD INRIA"
        },
        {
          titre: "Stage",
          date: "Avril - Juin 2016",
          descrip: "Stage INRIA"
        }],
      formations: [
        {
          titre: "DUT Informatique",
          date: "2014 - 2016",
          lieu: "IUT Nice Côte d'Azur"
        }]
    });
    Object.assign(this.Glenn, {
      lastName: 'Le Menn',
      firstName: 'Glenn',
      age: '20',
      adress: "Cap d'Ail",
      experiences: [
        {
          titre: "Stage",
          date: "Avril - Aout 2016",
          descrip: "Stage DBLOG"
        }
      ],
      formations: [
        {
          titre: "DUT Informatique",
          date: "2014 - 2016",
          lieu: "IUT Nice Côte d'Azur"
        }
      ]
    });
    //var GuiGuyJSON = "{lastName:'Lombard',firstName: 'Guillaume',age: '20',adress: 'Nice'}";
    this.cvs = [this.GuiGuy, this.Glenn];
  }

  public switchDescrip(val) {
    var elem = document.getElementById("descrip");

    //Number a changer
    if (val == "glenn") {
      elem.classList.remove("GuillaumeCV");
      elem.classList.add("GlennCV");
      this.currentCV = 1;
    } else {
      elem.classList.remove("GlennCV");
      elem.classList.add("GuillaumeCV");
      this.currentCV = 0;
    }


    //On resort le div de Descrip
    /*if(elem.classList.contains("bounceOut") && elem.classList.contains("isInvisible")){
      elem.classList.remove("bounceOut")
      elem.classList.add("bounceIn")
    }else{
      if(elem.classList.contains("bounceIn")){
          elem.classList.remove("bounceIn")
      }
      if(!elem.classList.contains("shake") || elem.classList.contains("wobble")){
        elem.classList.remove("wobble")
        elem.classList.add("shake")
      }else{
        elem.classList.remove("shake")
        elem.classList.add("wobble")
      }
    }*/

    if(elem.classList.contains("bounceOut")){
      elem.classList.remove("bounceOut");
      elem.classList.add("bounceIn");
    }else if(elem.classList.contains("bounceIn")){
      elem.classList.remove("bounceIn");
      elem.classList.add("bounceOut");
    }
    setTimeout(function(){
      if(elem.classList.contains("bounceOut")){
      elem.classList.remove("bounceOut");
      elem.classList.add("bounceIn");
    }
    },1);



    //On rend visible le div de description
    if (elem.classList.contains("isInvisible")) {
      elem.classList.remove("isInvisible");
      elem.classList.add("isVisible");
    }

    this.loadDescrip();
    
  }

  public loadDescrip() {
    var elem; //= document.getElementById("descrip");
    elem = document.getElementById("descripTitle");
    elem.innerHTML = "CV de " + this.cvs[this.currentCV].firstName + " " + this.cvs[this.currentCV].lastName;
    elem = document.getElementById("descripAge");
    elem.innerHTML = this.cvs[this.currentCV].age.toString() + " ans";
    elem = document.getElementById("descripAdress");
    elem.innerHTML = this.cvs[this.currentCV].adress;

    // load experiences
    elem = document.getElementById("experiences");
    while (elem.hasChildNodes()) {
      elem.removeChild(elem.firstChild);
    }
    var form = document.createElement('h1'); form.innerHTML = "EXPERIENCES PROFESSIONELLES";
    elem.appendChild(form);
    this.cvs[this.currentCV].experiences.forEach(element => {
      var newDiv = document.createElement('div');
      newDiv.classList.add('card');
      newDiv.classList.add('experienceCard');
      newDiv.classList.add('animated');
      newDiv.classList.add('fadeIn');
      var exp_resume = document.createElement('div');
      var exp_title = document.createElement('p'); exp_title.innerHTML = element.titre;
      var exp_date = document.createElement('p'); exp_date.innerHTML = element.date;
      exp_resume.appendChild(exp_title);
      exp_resume.appendChild(exp_date);
      var exp_descr_div = document.createElement('div');
      var exp_descr = document.createElement('p'); exp_descr.innerHTML = element.descrip;
      exp_descr_div.appendChild(exp_descr);


      newDiv.appendChild(exp_resume);
      newDiv.appendChild(exp_descr_div);
      elem.appendChild(newDiv);
    });

    //load formations
    elem = document.getElementById("formations");
    while (elem.hasChildNodes()) {
      elem.removeChild(elem.firstChild);
    }
    form = document.createElement('h1'); form.innerHTML = "Formations";
    elem.appendChild(form);
    this.cvs[this.currentCV].formations.forEach(element => {
      var newDiv = document.createElement('div');
      newDiv.classList.add('card');
      newDiv.classList.add('formationCard');
      newDiv.classList.add('animated');
      newDiv.classList.add('fadeIn');
      var for_resume = document.createElement('div');
      var for_title = document.createElement('p'); for_title.innerHTML = element.titre;
      var for_date = document.createElement('p'); for_date.innerHTML = element.date;
      var for_lieu = document.createElement('p'); for_lieu.innerHTML = element.lieu;
      for_resume.appendChild(for_title);
      for_resume.appendChild(for_date);
      for_resume.appendChild(for_lieu);

      newDiv.appendChild(for_resume);
      elem.appendChild(newDiv);
    });

  }
}
export class CV {
  lastName: string;
  firstName: string;
  age: number;
  adress: string;
  experiences: [
    {
      titre: string;
      date: string;
      descrip: string;
    }];
  formations: [
    {
      titre: string;
      date: string;
      lieu: string;
    }];

}