class Boy extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("boy1.png");
      this.bWidth=250;
		  this.bHeight=250;
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
      image(this.image,120,150,this.bWidth, this.bHeight)
    }
  }