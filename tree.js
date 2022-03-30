class tree {
    constructor(x,y){
        
        this.x=x
        this.y=y
       this.dustbinWidth=450
       this.dustbinHeight=600
       this.thickness=10
       this.image=loadImage("images/tree.png")
       this.bottomBody=bodies.rectangle(this.x,this.y,this.dustbinWidth,this.thickness,{isStatic:true})
       this.leftBody=bodies.rectangle(0,this.y-this.dustbinHeight/2,this.thickness,this.dustbinHeight,{isStatic : false})
       this.rightBody=bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.dustbinHeight/2,this.thickness,this.dustbinHeight,{isStatic:false})
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.bottombody)
        World.add(world,this.leftbody)
        World.add(world,this.rightbody)
    }
    display(){
        var treePos = this.body.position
        push()
       translate(treePos.x,treePos.y)
       rectMode(CENTER)
       fill(128,128,128)
       rect(0,0,this.w,this.h)
       pop()
    }
}