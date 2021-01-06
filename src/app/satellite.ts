// Added a constructor to the Satellite class. 
// Assigned the class properties in the constructor.
// Used the Satellite class to create an initial array of Statellite objects in app.component.ts

export class Satellite {
    
    constructor(name: string, type: string, operational: boolean, orbitType: string, launchDate: string){
        this.name = name;
        this.type = type;
        this.operational = operational;
        this.orbitType = orbitType;        
        this.launchDate = launchDate;
    }


//add an angular attribute directive to highlight space debris
isSpaceDebris(){
    if (this.type.toLowerCase() === 'space debris'){
        return true;
    } else {
        return false;
    }
}
}