class Block
{

    constructor(x,y,width,height,mycolor){

        
     
        var options = {

            isStatic:false,
            restitution:0,
            friction:1

        }

        this.x = x
        this.y = y
        this.w = width
        this.h = height

        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options)
        World.add(world,this.body)

        
        
        

        this.image = loadImage("cyan-block.png")

        
        this.fade = false

        this.Visibility = 255;

        
     

    }

    display()
    {


        if(this.fade == true) {
            this.Visibility = this.Visibility - 5
            World.remove(world,this.body)
          }


        if (this.body.speed > 5) {
            this.fade = true
          }


          push()
          tint(255,this.Visibility)
          imageMode(CENTER)
          image(this.image, this.body.position.x, this.body.position.y, 30, 40)
          pop()
       
    }
    score()
    {
        if(this.Visibility<=0)
        {
            return 1
        }
        return 0
    }
}


