// Enemies our player must avoid

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
	class Enemy {
			constructor() {
				this.speed = 200;
				this.step = 101;
				this.boundary = this.step * 5;		
				this.positionReset = -this.step;	
				this.x = 0;
				this.y = 55;	
				this.sprite = 'images/enemy-bug.png';

			}

		render() {
				ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
		}

		update(dt) {
				if ( this.x < this.boundary ) {
						this.x += (this.speed * dt);
				}
				else {
						this.x = this.positionReset;
				}
		}

	}


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

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
			update() {	
					for (let enemy of allEnemies) {
					if ( (this.y === enemy.y) && ( (enemy.x + enemy.step/2)  > this.x ) && ( enemy.x < (this.x + this.step/2) ) ) {
							this.reset();
						}
					}

					if (this.y === 55) {
							this.victory = true;
					}



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

			reset() {

					this.x = this.startX;
					this.y = this.startY;
			}
	}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
	const player = new Player();
    const bug1 = new Enemy();
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