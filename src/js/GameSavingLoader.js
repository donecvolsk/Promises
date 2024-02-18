import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {        
        const readData = read(); //вызов функции read()

        //вызов промиса фунции read()
        readData.then((response) => {           
            const jsonValue = json(response);  //вызов функции json()  с параметром промиса фунции read()  
            return jsonValue;
        }).then((jsonValue) => {//вызов промиса функции json() 
            resolve(jsonValue);
        }); 
    })
  }
}
 