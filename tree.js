class Tree extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("tree.png");
      this.treeWidth=250;
		  this.treeHeight=500;
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
      image(this.image,500,-100,this.treeWidth, this.treeHeight)
    }
  }