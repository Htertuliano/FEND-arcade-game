var Enemy = function(x,y,speed) {
				this.x = x;
				this.y = y + 55;
				this.speed = speed;
				this.step = 101;
				this.boundary = this.step * 5;		
				this.resetPos = -this.step;		
				this.sprite = 'images/enemy-bug.png';

			}

		Enemy.prototype.render = function() {
				ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
		};

		Enemy.prototype.update = function(dt) {
				if ( this.x < this.boundary ) {
						this.x += (this.speed * dt);
				}
				else {
						this.x = this.resetPos;
				}
		}

	
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
	class Player {
			constructor() {
					this.step = 101;
					this.jump = 83;
					this.startX = this.step * 2;
					this.startY = (this.jump * 4) + 55;
					this.x = this.startX;
					this.y = this.startY;
					this.sprite = 'images/char-boy.png';
					this.victory = false;
					}

			render() {
					ctx.drawImage(Resources.get(this.sprite), this.x, this.y );
			}

			/** update function updates location based on 
			* input 
			*/
				reset() {
					this.x = this.startX;
					this.y = this.startY;
			}
          	 
			update() {	for (let enemy of allEnemies) {
						if ( ( this.x < (enemy.x + 50) ) && (this.x > (enemy.x - 50) ) ) {
								this.reset();
					}
				
					if ( this.y === 55 ) {
						this.victory = true;
						}
				console.log(this.x, enemy.x, enemy.y, this.y);}
					
			}
			handleInput(direction) {
				switch (direction) {
						case 'left':
								if (this.x > 0) {
								this.x -= this.step;
								}
								break;
						case 'right':
								if (this.x < (this.step * 4)) {
								this.x += this.step;
								}
								break;
						case 'up':
								if ( this.y > this.jump) {
								this.y -= this.jump;
								}
								break;
						case 'down':
								if ( this.y < (this.jump * 4)) {
								this.y += this.jump;
								}
								break;
				}
			}

	}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
	const player = new Player();
    const bug1 = new Enemy(-101,55,100);
	const allEnemies = [];
	allEnemies.push(bug1);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
