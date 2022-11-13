import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/articles';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
Bilan(arg0: boolean) {
throw new Error('Method not implemented.');
}
  title:string='welcome !'
  listeEmploi!: Emploi[];
  constructor() { }

  ngOnInit(): void {
    
    this.listeEmploi=[
      {reference:'R1',titre:'Développeur web',entreprise:'Avisto',etat:true},
      {reference:'R2',titre:'data analyst',entreprise:'ProxiWEB',etat:true},
      {reference:'R3',titre:'Développeur web',entreprise:'ProxiWEB',etat:false}

    ]
  }

 Calcul() {
    let s;
    s=0;
    for (let i=0;i<this.listeEmploi.length;i++){
    if(this.listeEmploi[i].etat == true){
      s++;
    }
  }
  return s; 
  }

}
