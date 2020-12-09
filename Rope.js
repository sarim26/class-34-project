class Rope{
    constructor(bodyA,pointB){
        var options={

bodyA:bodyA,
pointB:pointB,
 stiffness:1,
 length:500
        }

        this.pointB=pointB
        this.rope=Constraint.create(options)
World.add(world,this.rope)
    }

display(){

var a=this.rope.bodyA.position
var b=this.pointB

push()

stroke("blue")

strokeWeight(10)

line(a.x,a.y,b.x,b.y)

pop()
}


}