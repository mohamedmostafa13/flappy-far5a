function Pipe() {
  this.spacing = 175;
  this.top = random(height / 6, 1 / 2 * height);
  this.bottom = height - (this.top + this.spacing+50);
  this.x = width;
  this.w = 80;
  this.speed = 2;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom-115) {
      
      if (bird.x+26 > this.x && bird.x < this.x + this.w) {
       
        this.highlight = true;
        return true;
        
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
     image(pipe_up,this.x, 0, this.w, this.top);
    image (pipe_dwn, this.x , height - this.bottom -115 ,this.w, this.bottom);
  }

  this.update = function() {
    
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}