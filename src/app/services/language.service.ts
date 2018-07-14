import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  showSelect = false;
  choosenLanguage: any;
  languageList = [
  {
    id: 0, title: 'english', icon: 'english', interface: {menuBuy: 'buy now', menuLogIn: 'log in', 
    headerDesc: 'fast and light utility for database administrators and PL/SQL developers', headerFreeTrial: 'free trial',
    hitTitle: 'how it works', hitScripts: 'Add all necessary scripts', hitConnection: 'Create database connections', 
    hitBeer: 'Drink beer while dozens of databases are upgrading without you'}
  },
  {
    id: 1, title: 'русский', icon: 'russian',interface: {menuBuy: 'купить', menuLogIn: 'логин', 
    headerDesc: 'быстрая и легкая утилита для админов баз данных и PL/SQL разработчиков', headerFreeTrial: 'пробная версия',
    hitTitle: 'Как это работает', hitScripts: 'Добавьте нужные скрипты', hitConnection: 'Установите соединение с бд', 
    hitBeer: 'Пейте пиво, пока десятки бд обновляются без вашего участия'}
  },
  ]

  constructor() { }

  init() {
    this.choosenLanguage = this.languageList[0];
  }
}
