class student{
    constructor(name,age){
      this.age=age;
      this.name=name;
    }
    bio(){console.log("hello there");}  // this is instancve method
    static bio2(){console.log("helloo")}// this is static method which is not inherit
}

class player extends student{
   constructor (name, age, game){
       super(name, age);
       this.game=game;
   }

   print(){
     console.log(`${this.name} , ${this.game}`);
   }
};

let obj1= new player("Rounak", 10, "cricket");
obj1.print();

 
