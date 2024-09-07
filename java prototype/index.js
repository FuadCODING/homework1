
function Animal(name, kind) {
    this.name = name;
    this.kind = kind;
}


Animal.prototype.changeKind = function(newKind) {
    this.kind = newKind;
};


Animal.prototype.sayVoice = function() {
    console.log(this.name);
};




const lion = new Animal("Lion", "Mammal");
const eagle = new Animal("Eagle", "Bird");


lion.sayVoice(); 
eagle.sayVoice(); 

lion.changeKind("Big Cat");
console.log(lion.kind); 

eagle.changeKind("Raptor");
console.log(eagle.kind); 
