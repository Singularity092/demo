function mouse(name){
    this.name = name;
    this.dead = false;
}
mouse.property.die = function(){
    this.dead = true;
}
module.exports = Mouse;