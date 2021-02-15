class Ground
{

  constructor(x,y,width,height){
  
    var options = {

      isStatic:true,
      restitution:0,
      fricton:1
    }

    this.x = x
    this.y = y
    this.w = width
    this.h = height

    this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options)
    this.color = color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body)

    rectMode(CENTER)

    this.sp = createSprite(this.x,this.y,this.w,this.h)
    this.sp.shapeColor = this.color

  

  }

    display()
    {
      
       
    
    }

}
