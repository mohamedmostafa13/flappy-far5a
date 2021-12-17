




function Bird() {
  this.y = height/2;
  this.x = 64;
  
  this.gravity = 0.7;
  this.lift = -12;
  this.velocity = 0;
  
  this.show = function() {
    
    image(birdy ,this.x, this.y, 38, 30);
  }

  this.up = function() {
   
   
    loop();
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
       this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height-143) {
      this.y = height-143;
      this.velocity = 0;
      noLoop();
      image(game_over, 50,250);
     
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }

}
