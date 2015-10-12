
(function() { 

	var theCanvas = document.getElementById("canvas"),
		context = theCanvas.getContext("2d"),

		music = document.querySelector("#music"),
		jump = document.querySelector("#jump"),
		shroom = document.querySelector("#shroom"),
		bump = document.querySelector("#bump"),
		powerUp = document.querySelector("#powerUp"),
		powerDown = document.querySelector("#powerDown"),
		dead = document.querySelector("#dead"),
		collapse = document.querySelector("#collapse"),
		fall = document.querySelector("#fall"),
		win = document.querySelector("#win"),
		flame = document.querySelector("#flame");

		music.volume = .4;
		music.play();
	
	function musicPlayer2(event) {
		
		jump.currentTime = 0;
		jump.play();
		jump.volume = .6;
	}
	function musicPlayer3(event) {
		shroom.currentTime = 0;
		shroom.play();
		shroom.volume = .6;
	}
	function musicPlayer4(event) {
		bump.currentTime = 0;
		bump.play();
		bump.volume = .6;
	}
	function musicPlayer5(event) {
		powerUp.currentTime = 0;
		powerUp.play();
		powerUp.volume = .6;
	}
	function musicPlayer6(event) {
		dead.currentTime = 0;
		dead.play();
		dead.volume = .6;
	}

	var player =  {
		
		IMAGE: "images/player.png",
		SIZE: 64,
		numberOfFrames: 2,
		currentFrame: 0,
		sourceX: 0,
		sourceY: 0,
		gravity: 3.4  // Was previously 3
	};

	var monsterX = 5100,
		monsterY = 170,
		monsterWidth = 100,
		monsterHeight = 131,
		monsterVY = 0,
		monsterGravity = 7,
		monsterJumping = false,
		monsterDead = false;

	var axeX = 5200,
		axeY = 220,
		axeWidth = 50,
		axeHeight = 50,
		gotAxe = false;

	var friction = .85,
		frictionLeft = false,
		frictionRight = false;

	var playerX = 50,
		playerX2 = 50,
		playerY = 206,
		ledgeX = 300,
		ledgeY = 250,
		ledgeWidth = 50,
		ledgeHeight = 50;

	var deadFall = false;

	var backgroundX = 0,
		backgroundY = 0,
		backgroundWidth = 6000,
		backgroundHeight = 550;

	var anitaX = 5750,
		anitaY = 190,
		anitaWidth = 100,
		anitaHeight = 151;

	var fireball1X = 1488,
		fireball1Y = 230,
		fireball1Width = 15,
		fireball1Height = 90,
		fireball1Rotation = 0;
		centerX1 = 1487.5,
		centerY1 =  345,
		angle1 = 0,
		radius1 = 90,
		speed1 = .03;

	var fireball2X = 2835,
		fireball2Y = 280,
		fireball2Width = 15,
		fireball2Height = 90,
		fireball2Rotation = 60,
		centerX2 = 2872,
		centerY2 =  280,
		angle2 = 0,
		radius2 = 83,
		speed2 = .03;

	var fireball3X = 3135,
		fireball3Y = 280,
		fireball3Width = 15,
		fireball3Height = 90,
		fireball3Rotation = 110,
		centerX3 = 3168,
		centerY3 =  280,
		angle3 = 0,
		radius3 = 83,
		speed3 = .03;

	var fireball4X = 3305,
		fireball4Y = 115,
		fireball4Width = 15,
		fireball4Height = 90,
		fireball4Rotation = 260,
		centerX4 = 3325,
		centerY4 =  60,
		angle4 = 0,
		radius4 = 83,
		speed4 = .03;

	var fireball5X = 2060,
		fireball5Y = 100,
		fireball5Width = 15,
		fireball5Height = 90,
		fireball5Rotation = 60,
		centerX5 = 2100,
		centerY5 =  40,
		angle5 = 0,
		radius5 = 90,
		speed5 = .03,
		collX = 0,
		collY = 0,
		combinedHalfWidths = 0,
		combinedHalfHeights = 0;

	var fireball6X = 2360,
		fireball6Y = 100,
		fireball6Width = 15,
		fireball6Height = 90,
		fireball6Rotation = 300,
		centerX6 = 2400,
		centerY6 =  40,
		angle6 = 0,
		radius6 = 90,
		speed6 = .03;

	var fireball7X = 2560,
		fireball7Y = 100,
		fireball7Width = 15,
		fireball7Height = 90,
		fireball7Rotation = 110,
		centerX7 = 2600,
		centerY7 =  40,
		angle7 = 0,
		radius7 = 90,
		speed7 = .03;

	var bowserFireX = monsterX,
		bowserFireY = 170,
		bowserFireWidth = 50,
		bowserFireHeight = 26,
		bowserFireVX = -8,

	var platformX = 4900,
		platformY = 170,
		platformWidth = 120,
		platformHeight = 20,
		platformVX = 0;

	boxX = 50;
	boxY = 200;
	boxWidth = 40;
	boxHeight = 400;

	box2X = 50;
	box2Y = 200;
	box2Width = 100;
	box2Height = 400;

	var boxX1 = 1;
	var boxX2 = 30;
	var boxX3 = 100;
	var boxX4 = 775;
	var boxX5 = 1455;
	var boxX6 = 1635;
	var boxX7 = 2635;
	var boxX8 = 3635;
	var boxX9 = 4135;
	var boxX10 = 4335;
	var boxX11 = 4485;
	var boxX12 = 5200;
	var boxX13 = 5300;

	var topX1 = 0;
	var topX2 = 1200;
	var topX3 = 1230;
	var topX4 = 1730;
	var topX5 = 1760;
	var topX6 = 2660;
	var topX7 = 3460;
	var topX8 = 3660;
	var topX9 = 4460;
	var topX10 = 4790;

	longBoxX = 400;
	longBoxY = 250;
	longBoxWidth = 50;
	longBoxHeight = 50;


	var brown2X = 1480;
	var brown3X = 2835;
	var brown4X = 3135;
	var brown5X = 3435;
	var brown6X = 2060;
	var brown7X = 2360;
	var brown8X = 2560;
	var brown9X = 1480;

	var brown2Y = 300;
	var brown3Y = 280;
	var brown4Y = 280;
	var brown5Y = 280;
	var brown6Y = 100;
	var brown7Y = 100;
	var brown8Y = 100;
	var brown9Y = 180;

	var brownWidth = 40;
	var brownHeight = 40;

	var wallBrown1X = 3000;
	var wallBrown1Y = 70;
	var wallBrown1Width = 40;
	var wallBrown1Height = 80;

	var wallBrown2X = 3300;
	var wallBrown2Y = 70;
	var wallBrown2Width = 40;
	var wallBrown2Height = 80;

	var bumped = false;
	var mushroomIn = false;

	var mushroomX = brown9X - 5;
	var mushroomY = brown9Y - 70;
	var mushroomWidth = 50;
	var mushroomHeight = 50;

	var mushVisible = false;

	var mushroomVX = 3;
	var mushroomVY = 5;

	var marioBig = false;
	var marioInvincible = false;

	var marioDead = false;
	var kaput = false;
		
	var Platform = {

		x: 150,
		y: 100,
		width: 20,
		height: 20,

		centerX: function() {
			return this.x + (this.width / 2);
		},
		centerY: function() {
			return this.y + (this.height / 2);
		},
		halfWidth: function() {
			return this.width / 2;
		},
		halfHeight: function() {
			return this.height / 2;
		}
	};

	var map = [
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1],
		[1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
		[1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
		[1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1],
		[1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1],
		[1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1],
		[1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1],
		[1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1],
		[1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
	];


	lava1X = 693;
	lava1Y = 341;
	lava1Width = 83;
	lava1Height = 360;

	lava2X = 1368;
	lava2Y = 341;
	lava2Width = 88;
	lava2Height = 360;

	lava3X = 1545;
	lava3Y = 341;
	lava3Width = 90;
	lava3Height = 360;

	lava4X = 4825;
	lava4Y = 360;
	lava4Width = 375;
	lava4Height = 360;

	var bridgeX = 4700;
	var bridgeY = 300;
	var bridgeWidth = 500;
	var bridgeHeight = 44;

	var background = new Image();
	background.src = "images/marioBackground.png";

	var mushroom = new Image();
	mushroom.src = "images/mushroom.png";

	var anita = new Image();
	anita.src = "images/anita.png";

	var monster = new Image();
	monster.src = "images/monster0001.png";

	var axe = new Image();
	axe.src = "images/axe.png";

	var image2 = new Image();
	image2.src = player.IMAGE;

	var floor = new Image();
	floor.src = "images/floor.png";

	var bridge = new Image();
	bridge.src = "images/bridge.png";

	var bowserFire = new Image();
	bowserFire.src = "images/bowserFire.png";

	//WALL BROWNS

	var wallBrown1 = new Image();
	wallBrown1.src = "images/wallBrown.png";

	var wallBrown2 = new Image();
	wallBrown2.src = "images/wallBrown.png";

	//PLATFORM

	var platform = new Image();
	platform.src = "images/platform.png";

	//ARRAY O' BOXES

	var boxes = [];

	for (var i = 0; i < 24; i++)
	{
	var box = new Image();
	box.src = "new/grey0.png";
	boxes.push(box);
	}

	//ARRAY O' BROWNS

	var browns = [];

	for (var j = 0; j < 10; j++)
	{
	var brown = new Image();
	brown.src = "new/brown.png";
	browns.push(brown);
	}

	//ARRAY O' LAVAS

	var lavas = [];

	for (var k = 0; k < 5; k++)
	{
	var lava = new Image();
	lava.src = "new/lava0.png";
	lavas.push(lava);
	}

	//ARRAY O' FIREBALLS

	var fireballs = [];

	for (var l = 0; l < 8; l++)
	{
	var fireball = new Image();
	fireball.src = "images/fireball.png";
	fireballs.push(fireball);
	}

	var longBox = new Image()
	longBox.src = "images/longBox.png";

	var playerVX = 0;
	var playerVY = 0;
	var playerAcceleration = 1;
	var isJumping = false; 

	var playerWon = false;

	var boxVX = 0;

	var angle = 0;
	var centerX = 330;
	var centerY = 230;
	var radius = 50;
	var speed = .2;

	/*
	var angle2 = 0;
	var centerX2 = 330;
	var centerY2 = 330;
	var radius2 = 50;
	var speed2 = .13;
	*/
	var playerCenterY = 330;


	updateAnimation();

	function onKeyDown(event)
	{
	if(event.keyCode == 37)
	{
	//frictionLeft = false;
	playerVX = -7;
	boxVX = -7;
	}
	if(event.keyCode == 39)
	{
	//frictionLeft = false;
	playerVX = 7;
	boxVX = 7;
	}

	if(event.keyCode == 40 && player.sourceX === 64)
	{
	player.sourceX = 128;
	}

	if (isJumping === false)
	{
	if(event.keyCode === 88)
	{
	//frictionRight = false;
	//frictionLeft = false;
	musicPlayer2();
	playerVY = -28;    //was previously -19
	isJumping = true;
	jump.addEventListener("canplaythrough",musicPlayer2,false);
	}
	if (event.keyCode === 90)
	{
	//playerAcceleration = 1.2;
	}
	}
	}

	function onKeyUp(event)
	{
	if(event.keyCode == 37)
	{
	//frictionLeft = true;
	playerVX = 0;
	}
	if(event.keyCode == 39)
	{
	//frictionRight = true
	playerVX = 0;
	}


	if(event.keyCode == 40 && player.sourceX === 128)
	{
	player.sourceX = 64;
	}


	if (event.keyCode == 90)
	{

	//playerAcceleration = 1;
	if (playerVX > 7)
	{
	playerVX = 7;
	}
	}
	}

	//BOWSER JUMP TIMER

	setInterval(monsterJumpTimer,5000);

	function monsterJumpTimer(event)
	{
	monsterJumping = true;

	}

	//INVINCIBILITY TIMER


	function invincibleTimer()
	{
	marioInvincible = false;
	}

	function updateAnimation()
	{
	context.clearRect(0,0,canvas.width,canvas.height);

	if (marioInvincible === true)
	{
	window.setTimeout(invincibleTimer,3000);
	}


	if (frictionRight === true || frictionLeft === true)
	{
	playerVX *= friction;

	}





	context.drawImage(background,backgroundX,backgroundY,backgroundWidth,backgroundHeight);
	context.drawImage(monster,monsterX,monsterY,monsterWidth,monsterHeight);
	context.drawImage(axe,axeX,axeY,axeWidth,axeHeight);
	context.drawImage(bridge,bridgeX,bridgeY,bridgeWidth,bridgeHeight);
	context.drawImage(platform,platformX,platformY,platformWidth,platformHeight);



	setTimeout(updateAnimation,33);


	window.addEventListener("keydown",onKeyDown,false);
	window.addEventListener("keyup",onKeyUp,false);

	playerX += playerVX;
	playerY += playerVY;

	angle1 = fireball1Rotation * Math.PI / 120;
	angle2 = fireball2Rotation * Math.PI / 120;
	angle3 = fireball3Rotation * Math.PI / 120;
	angle4 = fireball4Rotation * Math.PI / 120;
	angle5 = fireball5Rotation * Math.PI / 120;
	angle6 = fireball6Rotation * Math.PI / 120;
	angle7 = fireball7Rotation * Math.PI / 120;


	monsterY += monsterVY;
	platformX += platformVX;

	if (monsterJumping === true && monsterY == 170)
	{
	monsterVY = -3;
	}
	if (monsterY < 50)
	{
	monsterVY = 3;
	}




	playerVX *= playerAcceleration;

	if (playerVX > 10)
	{
	playerVX = 10;
	}
	if (frictionRight === true || frictionLeft === true)
	{
	boxVX *= friction;

	}

	fireball1Rotation+= 2;
	fireball2Rotation+= 2;
	fireball3Rotation+= 2;
	fireball4Rotation+= 2;
	fireball5Rotation+= 2;
	fireball6Rotation+= 2;
	fireball7Rotation+= 2;


	for (var i = 0; i < boxes.length; i++)
	{

	// WHERE THE MAGIC HAPPENS!

	if (playerX > canvas.width / 2)
	{

	if (bridgeX > -4 || monsterDead == true || playerWon === true)
	{

	backgroundX -= boxVX;

	fireball1X -= boxVX;
	fireball2X -= boxVX;
	fireball3X -= boxVX;
	fireball4X -= boxVX;
	fireball5X -= boxVX;
	fireball6X -= boxVX;
	fireball7X -= boxVX;

	centerX1 -= boxVX;
	centerX2 -= boxVX;
	centerX3 -= boxVX;
	centerX4 -= boxVX;
	centerX5 -= boxVX;
	centerX6 -= boxVX;
	centerX7 -= boxVX;

	brown2X -= boxVX;
	brown3X -= boxVX;
	brown4X -= boxVX;
	brown5X -= boxVX;
	brown6X -= boxVX;
	brown7X -= boxVX;
	brown8X -= boxVX;
	brown9X -= boxVX;

	mushroomX -= boxVX;
	anitaX -= boxVX;

	lava1X -= boxVX;
	lava2X -= boxVX;
	lava3X -= boxVX;
	lava4X -= boxVX;


	boxX1 -= boxVX;
	boxX2 -= boxVX;
	boxX3 -= boxVX;
	boxX4 -= boxVX;
	boxX5 -= boxVX;
	boxX6 -= boxVX;
	boxX7 -= boxVX;
	boxX8 -= boxVX;
	boxX9 -= boxVX;
	boxX10-= boxVX;
	boxX11-= boxVX;
	boxX12-= boxVX;
	boxX13-= boxVX;

	topX1 -= boxVX;
	topX2 -= boxVX;
	topX3 -= boxVX;
	topX4 -= boxVX;
	topX5 -= boxVX;
	topX6 -= boxVX;
	topX7 -= boxVX;
	topX8 -= boxVX;
	topX9 -= boxVX;
	topX10 -= boxVX;

	bridgeX -= boxVX;
	monsterX -= boxVX;
	axeX -= boxVX;

	wallBrown1X -= boxVX;
	wallBrown2X -= boxVX;

	bowserFireX -= boxVX;
	platformX -= boxVX;

	boxVX *= playerAcceleration;

	if(boxVX > 10)
	{
	boxVX = 10;
	}

	}
	}

	if (playerX > 275 && monsterX > 400) {
		playerX = 275;
	}
	if (monsterX < 600)	{
		if (platformX < 150) {
			platformVX = 3;
		}
		if (platformX > 300) {
			platformVX = -3;
		}
	}

	context.drawImage(wallBrown1,wallBrown1X,wallBrown1Y,wallBrown1Width,wallBrown1Height);
	context.drawImage(wallBrown2,wallBrown2X,wallBrown2Y,wallBrown2Width,wallBrown2Height);


	var collisionSide = "";


	if (Math.abs(collX) < combinedHalfWidths && deadFall === false)	{
		if (Math.abs(collY) < combinedHalfHeights && deadFall === false) {
			var overlapX = combinedHalfWidths - Math.abs(collX);
			var overlapY = combinedHalfHeights - Math.abs(collY);

		if (overlapX >= overlapY) {
			if (collY > 0 && deadFall === false) {
				collisionSide = "top";
				playerY = playerY + overlapY;
				playerVY = 0;
				bump.addEventListener("canplaythrough",musicPlayer4,false);
				
				if (collisionSide = "top") {
					bump.play();
				}
			}
			else {
				collisionSide = "bottom";
				playerY = playerY - overlapY;
				isJumping = false;
			
				if (deadFall === false) {
					playerVY = -player.gravity;
				}
			}
		}
		else {
			if (collX > 0 && deadFall === false) {
				collisionSide = "left";
				playerX = playerX + overlapX;
			}
			else {
				collisionSide = "right";
				playerX = playerX - overlapX;
			}
		}
	}
	else {
		collisionSide = "none";
	}
}
	else	{
		collisionSide = "none";
	}
}

	//BRIDGE COLLISION

	var collisionSide2 = "";
	var coll2X = (playerX + (player.SIZE / 2)) - (bridgeX + (bridgeWidth / 2));
	var coll2Y = (playerY + (player.SIZE / 2)) - ((bridgeY) + (bridgeHeight / 2));

	var combinedHalfWidths2 = (player.SIZE / 2) + (bridgeWidth/ 2); 
	var combinedHalfHeights2 = (player.SIZE / 2) + (bridgeHeight / 2); 

	if (Math.abs(coll2X) < combinedHalfWidths2) {
		if (Math.abs(coll2Y) < combinedHalfHeights2) {
			var overlap2X = combinedHalfWidths2 - Math.abs(coll2X);
			var overlap2Y = combinedHalfHeights2 - Math.abs(coll2Y);

		if (overlap2X >= overlap2Y && deadFall === false) {
			if(coll2Y > 0 && deadFall === false) {
				collisionSide2 = "top";
				playerY = playerY + overlap2Y;
				playerVY = 0;
			}
		else {
			collisionSide2 = "bottom";
			playerY = playerY - overlap2Y;
			isJumping = false;
			if (deadFall === false) {
				playerVY = -player.gravity;
			}
		}
	}
	else
	{
	if (coll2X > 0 && deadFall === false)
	{
	collisionSide2 = "left";
	//playerX = playerX + overlap2X;
	}
	else
	{
	collisionSide2 = "right";
	//playerX = playerX - overlap2X;
	}
	}
	}
	else
	{
	collisionSide2 = "none";
	}
	}
	else
	{
	collisionSide2 = "none";
	}

	//BOWSER FIRE COLLISION


	var coll6X = (playerX + (player.SIZE / 2)) - (bowserFireX + (bowserFireWidth / 2));
	var coll6Y = (playerY + (player.SIZE / 2)) - (bowserFireY + (bowserFireHeight / 2));

	var combinedHalfWidths6 = (player.SIZE / 2) + ((bowserFireWidth - 50)/ 2); 
	var combinedHalfHeights6 = (player.SIZE / 2) + (bowserFireHeight / 2); 

	if (Math.abs(coll6X) < combinedHalfWidths6)
	{
	if (Math.abs(coll6Y) < combinedHalfHeights6)
	{
	var overlap6X = combinedHalfWidths6 - Math.abs(coll6X);
	var overlap6Y = combinedHalfHeights6 - Math.abs(coll6Y);

	if (overlap6X >= overlap6Y)
	{
	if(coll6Y > 0 && marioInvincible === false && marioDead === false)
	{


	//playerY = playerY + overlapLava1Y;
	//playerVY = 0;
	if (player.sourceX === 64)
	{
	marioInvincible = true;
	player.sourceX = 0;
	powerDown.play();
	}
	if (player.sourceX === 0 && marioInvincible === false && marioDead === false)
	{
	deadFall = true;
	dead.play();
	music.pause();
	}

	}
	else
	{
	console.log(" bottom ouch!");
	//playerY = playerY - overlapLava1Y;
	//isJumping = false;
	//playerVY = -player.gravity;

	//dead.addEventListener("canplaythrough",musicPlayer6,false);
	//dead.play();
	//music.pause();
	//marioDead = true;

	if (player.sourceX === 64)
	{
	marioInvincible = true;
	player.sourceX = 0;
	powerDown.play();
	}
	if (player.sourceX === 0 && marioInvincible === false && marioDead === false)
	{
	deadFall = true;
	dead.play();
	music.pause();
	}
	}
	}
	else
	{
	if (coll6X > 0 && marioInvincible === false && marioDead === false)
	{

	//playerX = playerX + overlapFireball1X;

	if (player.sourceX === 64)
	{
	marioInvincible = true;
	player.sourceX = 0;
	powerDown.play();
	}
	if (player.sourceX === 0 && marioInvincible === false)
	{
	deadFall = true;
	dead.play();
	music.pause();
	}
	}
	else
	{

	console.log("right ouch!");
	//playerX = playerX - overlapFireball1X;


	if (player.sourceX === 64)
	{
	marioInvincible = true;
	player.sourceX = 0;
	powerDown.play();
	}
	if (player.sourceX === 0 && marioInvincible === false)
	{
	deadFall = true;
	dead.play();
	music.pause();
	}
	}
	}
	}
	else
	{
	fireballCollisionSide3 = "none";
	}
	}
	else
	{
	fireballCollisionSide3 = "none";
	}




	//COLLISION DETECTION WITH MUSHROOM

	var mushCollX = (playerX + (player.SIZE / 2)) - (mushroomX + (mushroomWidth / 2));
	var mushCollY = (playerY + (player.SIZE / 2)) - ((mushroomY - 5) + (mushroomHeight / 2));

	var combinedHalfMushWidths = (player.SIZE / 2) + (mushroomWidth/ 2); 
	var combinedHalfMushHeights = (player.SIZE / 2) + (mushroomHeight / 2); 

	if (Math.abs(mushCollX) < combinedHalfMushWidths)
	{
	if (Math.abs(mushCollY) < combinedHalfMushHeights)
	{
	var overlapMushX = combinedHalfMushWidths - Math.abs(mushCollX);
	var overlapMushY = combinedHalfMushHeights - Math.abs(mushCollY);

	if (overlapMushX >= overlapMushY && mushVisible === true)
	{
	if(mushCollY > 0)
	{
	if (marioDead === false)
	{
	mushVisible = false;
	powerUp.addEventListener("canplaythrough",musicPlayer5,false);
	powerUp.play();
	player.sourceX = 64;
	marioBig = true;
	}
	}
	else
	{
	if (marioDead === false)
	{
	mushVisible = false;
	powerUp.addEventListener("canplaythrough",musicPlayer5,false);
	powerUp.play();
	player.sourceX = 64;
	marioBig = true;
	}
	}
	}
	else
	{
	if (mushCollX > 0)
	{
	if (mushVisible === true)
	{
	if (marioDead === false)
	{
	mushVisible = false;
	powerUp.addEventListener("canplaythrough",musicPlayer5,false);
	powerUp.play();
	player.sourceX = 64;
	marioBig = true;
	}
	}
	}
	else 
	{
	if (mushVisible === true)
	{
	if (marioDead === false)
	{
	mushVisible = false;
	powerUp.addEventListener("canplaythrough",musicPlayer5,false);
	powerUp.play();
	player.sourceX = 64;
	marioBig = true;
	}
	}
	}
	}
	}
	else
	{

	}
	}
	else
	{
	}

	//COLLISION DETECTION WITH AXE

	var axeCollX = (playerX + (player.SIZE / 2)) - (axeX + (axeWidth / 2));
	var axeCollY = (playerY + (player.SIZE / 2)) - ((axeY - 5) + (axeHeight / 2));

	var combinedHalfAxeWidths = (player.SIZE / 2) + (axeWidth/ 2); 
	var combinedHalfAxeHeights = (player.SIZE / 2) + (axeHeight / 2); 

	if (Math.abs(axeCollX) < combinedHalfAxeWidths)
	{
	if (Math.abs(axeCollY) < combinedHalfAxeHeights)
	{
	var overlapAxeX = combinedHalfAxeWidths - Math.abs(axeCollX);
	var overlapAxeY = combinedHalfAxeHeights - Math.abs(axeCollY);

	if (overlapAxeX >= overlapAxeY)
	{
	if(axeCollY > 0)
	{
	//powerUp.addEventListener("canplaythrough",musicPlayer5,false);
	collapse.play();
	monsterVY = 0;
	gotAxe = true;

	}
	else
	{
	//powerUp.addEventListener("canplaythrough",musicPlayer5,false);
	collapse.play();
	monsterVY = 0;
	gotAxe = true;

	}
	}
	else
	{
	if (axeCollX > 0)
	{

	}
	else 
	{

	}
	}
	}
	else
	{

	}
	}
	else
	{
	}

	//COLLISION DETECTION WITH PLATFORM

	var platformCollX = (playerX + (player.SIZE / 2)) - (platformX + (platformWidth / 2));
	var platformCollY = (playerY + (player.SIZE / 2)) - ((platformY - 5) + (platformHeight / 2));

	var combinedHalfPlatformWidths = (player.SIZE / 2) + (platformWidth/ 2); 
	var combinedHalfPlatformHeights = (player.SIZE / 2) + (platformHeight / 2); 

	if (Math.abs(platformCollX) < combinedHalfPlatformWidths)
	{
	if (Math.abs(platformCollY) < combinedHalfPlatformHeights)
	{
	var overlapPlatformX = combinedHalfPlatformWidths - Math.abs(platformCollX);
	var overlapPlatformY = combinedHalfPlatformHeights - Math.abs(platformCollY);


	if (overlapPlatformX >= overlapPlatformY)
	{
	if(platformCollY > 0)
	{
	playerY = playerY + overlapPlatformY;
	playerVY = 0;
	}
	else
	{
	playerY = playerY - overlapPlatformY;
	isJumping = false;
	playerVY = -player.gravity;
	}
	}
	else
	{
	if (platformCollX > 0)
	{

	playerX = playerX + overlapPlatformX;
	}
	else
	{

	playerX = playerX - overlapPlatformX;
	}
	}
	}
	else
	{
	collisionSide2 = "none";
	}
	}
	else
	{
	collisionSide2 = "none";
	}


	//COLLISION DETECTION WITH WALL BROWNS

	//WALL BROWN 1

	var wallBrown1CollX = (playerX + (player.SIZE / 2)) - (wallBrown1X + (wallBrown1Width / 2));
	var wallBrown1CollY = (playerY + (player.SIZE / 2)) - ((wallBrown1Y - 5) + (wallBrown1Height / 2));

	var combinedHalfWallBrown1Widths = (player.SIZE / 2) + (wallBrown1Width/ 2); 
	var combinedHalfWallBrown1Heights = (player.SIZE / 2) + (wallBrown1Height / 2); 

	if (Math.abs(wallBrown1CollX) < combinedHalfWallBrown1Widths)
	{
	if (Math.abs(wallBrown1CollY) < combinedHalfWallBrown1Heights)
	{
	var overlapWallBrown1X = combinedHalfWallBrown1Widths - Math.abs(wallBrown1CollX);
	var overlapWallBrown1Y = combinedHalfWallBrown1Heights - Math.abs(wallBrown1CollY);


	if (overlapWallBrown1X >= overlapWallBrown1Y)
	{
	if(wallBrown1CollY > 0)
	{
	playerY = playerY + overlapWallBrown1Y;
	playerVY = 0;
	}
	else
	{
	playerY = playerY - overlapWallBrown1Y;
	isJumping = false;
	playerVY = -player.gravity;
	}
	}
	else
	{
	if (wallBrown1CollX > 0)
	{

	playerX = playerX + overlapWallBrown1X;
	}
	else
	{

	playerX = playerX - overlapWallBrown1X;
	}
	}
	}
	else
	{
	collisionSide2 = "none";
	}
	}
	else
	{
	collisionSide2 = "none";
	}

	//WALL BROWN 2

	var wallBrown2CollX = (playerX + (player.SIZE / 2)) - (wallBrown2X + (wallBrown2Width / 2));
	var wallBrown2CollY = (playerY + (player.SIZE / 2)) - ((wallBrown2Y - 5) + (wallBrown2Height / 2));

	var combinedHalfWallBrown2Widths = (player.SIZE / 2) + (wallBrown2Width/ 2); 
	var combinedHalfWallBrown2Heights = (player.SIZE / 2) + (wallBrown2Height / 2); 

	if (Math.abs(wallBrown2CollX) < combinedHalfWallBrown2Widths)
	{
	if (Math.abs(wallBrown2CollY) < combinedHalfWallBrown2Heights)
	{
	var overlapWallBrown2X = combinedHalfWallBrown2Widths - Math.abs(wallBrown2CollX);
	var overlapWallBrown2Y = combinedHalfWallBrown2Heights - Math.abs(wallBrown2CollY);


	if (overlapWallBrown2X >= overlapWallBrown2Y)
	{
	if(wallBrown2CollY > 0)
	{
	playerY = playerY + overlapWallBrown2Y;
	playerVY = 0;
	bump.play();
	}
	else
	{
	playerY = playerY - overlapWallBrown2Y;
	isJumping = false;
	playerVY = -player.gravity;
	}
	}
	else
	{
	if (wallBrown2CollX > 0)
	{

	playerX = playerX + overlapWallBrown2X;
	}
	else
	{

	playerX = playerX - overlapWallBrown2X;
	}
	}
	}
	else
	{
	collisionSide2 = "none";
	}
	}
	else
	{
	collisionSide2 = "none";
	}


	//MONSTER COLLISION

	var monsterCollX = (playerX + (player.SIZE / 2)) - (monsterX + (monsterWidth / 2));
	var monsterCollY = (playerY + (player.SIZE / 2)) - ((monsterY - 5) + (monsterHeight / 2));

	var combinedHalfMonsterWidths = (player.SIZE / 2) + (monsterWidth/ 2); 
	var combinedHalfMonsterHeights = (player.SIZE / 2) + (monsterHeight / 2); 

	if (Math.abs(monsterCollX) < combinedHalfMonsterWidths)
	{
	if (Math.abs(monsterCollY) < combinedHalfMonsterHeights)
	{
	var overlapMonsterX = combinedHalfMonsterWidths - Math.abs(monsterCollX);
	var overlapMonsterY = combinedHalfMonsterHeights - Math.abs(monsterCollY);


	if (overlapMonsterX >= overlapMonsterY)
	{
	if(monsterCollY > 0)
	{

	if (player.sourceX === 64)
	{
	marioInvincible = true;
	player.sourceX = 0;
	powerDown.play();
	}
	if (player.sourceX === 0 && marioInvincible === false && marioDead === false)
	{
	deadFall = true;
	dead.play();
	music.pause();
	}
	/*
	playerY = playerY + overlapMonsterY;
	playerVY = 0;
	bump.play();
	*/
	}
	else
	{

	playerY = playerY - overlapMonsterY;
	isJumping = false;
	playerVY = -player.gravity;

	}
	}
	else
	{
	if (monsterCollX > 0)
	{

	playerX = playerX + overlapMonsterX;
	}
	else
	{

	playerX = playerX - overlapMonsterX;
	}
	}
	}
	else
	{
	collisionSide2 = "none";
	}
	}
	else
	{
	collisionSide2 = "none";
	}





	for (var j = 0; j < browns.length; j++)
	{



	//BROWNS

	if (player.sourceX === 64 || player.sourceX === 128)
	{
	if (j=== 2)
	{
	context.drawImage(brown,brown2X,brown2Y,brownWidth,brownHeight); 
	var coll2X = (playerX + (player.SIZE / 2)) - (brown2X + (brownWidth - 50 / 2));
	var coll2Y = (playerY + (player.SIZE / 2)) - (brown2Y + (brownHeight / 2));
	var combinedHalfWidths2 = (player.SIZE / 2) + (brownWidth / 2); 
	var combinedHalfHeights2 = (player.SIZE / 2) + (brownHeight / 2); 
	}
	if (j=== 3)
	{
	context.drawImage(brown,brown3X,brown3Y,brownWidth,brownHeight); 
	var coll3X = (playerX + (player.SIZE / 2)) - (brown3X + (brownWidth - 50 / 2));
	var coll3Y = (playerY + (player.SIZE / 2)) - (brown3Y +(brownHeight / 2));
	var combinedHalfWidths3 = (player.SIZE / 2) + (brownWidth / 2); 
	var combinedHalfHeights3 = (player.SIZE / 2) + (brownHeight / 2); 
	}
	if (j=== 4)
	{
	context.drawImage(brown,brown4X,brown4Y,brownWidth,brownHeight); 
	var coll3X = (playerX + (player.SIZE / 2)) - (brown4X + (brownWidth - 50 / 2));
	var coll3Y = (playerY + (player.SIZE / 2)) - (brown4Y +(brownHeight / 2));
	var combinedHalfWidths3 = (player.SIZE / 2) + (brownWidth / 2); 
	var combinedHalfHeights3 = (player.SIZE / 2) + (brownHeight / 2); 
	}
	if (j=== 5)
	{
	context.drawImage(brown,brown5X,brown5Y,brownWidth,brownHeight); 
	var coll3X = (playerX + (player.SIZE / 2)) - (brown5X + (brownWidth - 50 / 2));
	var coll3Y = (playerY + (player.SIZE / 2)) - (brown5Y +(brownHeight / 2));
	var combinedHalfWidths3 = (player.SIZE / 2) + (brownWidth / 2); 
	var combinedHalfHeights3 = (player.SIZE / 2) + (brownHeight / 2); 
	}
	if (j=== 6)
	{
	context.drawImage(brown,brown6X,brown6Y,brownWidth,brownHeight); 

	var coll3X = (playerX + (player.SIZE / 2)) - (brown6X + (brownWidth - 50 / 2));
	var coll3Y = (playerY + (player.SIZE / 2)) - (brown6Y +(brownHeight / 2));
	var combinedHalfWidths3 = (player.SIZE / 2) + (brownWidth / 2); 
	var combinedHalfHeights3 = (player.SIZE / 2) + (brownHeight / 2); 

	}
	if (j=== 7)
	{
	context.drawImage(brown,brown7X,brown7Y,brownWidth,brownHeight); 

	var coll3X = (playerX + (player.SIZE / 2)) - (brown7X + (brownWidth - 50 / 2));
	var coll3Y = (playerY + (player.SIZE / 2)) - (brown7Y +(brownHeight / 2));
	var combinedHalfWidths3 = (player.SIZE / 2) + (brownWidth / 2); 
	var combinedHalfHeights3 = (player.SIZE / 2) + (brownHeight / 2); 

	}
	if (j=== 8)
	{
	context.drawImage(brown,brown8X,brown8Y,brownWidth,brownHeight); 

	var coll3X = (playerX + (player.SIZE / 2)) - (brown8X + (brownWidth - 50 / 2));
	var coll3Y = (playerY + (player.SIZE / 2)) - (brown8Y +(brownHeight / 2));
	var combinedHalfWidths3 = (player.SIZE / 2) + (brownWidth / 2); 
	var combinedHalfHeights3 = (player.SIZE / 2) + (brownHeight / 2); 
	}
	if (j=== 9)
	{
	context.drawImage(brown,brown9X,brown9Y,brownWidth,brownHeight); 
	var coll3X = (playerX + (player.SIZE / 2)) - (brown9X + (brownWidth/ 2));
	var coll3Y = (playerY + (player.SIZE / 2)) - (brown9Y + (brownHeight / 2));
	var combinedHalfWidths3 = (player.SIZE / 2) + (brownWidth / 2); 
	var combinedHalfHeights3 = (player.SIZE / 2) + (brownHeight / 2); 
	}
	}

	else if (player.sourceX === 0)
	{
	if (j=== 2)
	{
	context.drawImage(brown,brown2X,brown2Y,brownWidth,brownHeight); 
	var coll2X = (playerX + (player.SIZE / 2)) - (brown2X + (brownWidth - 50 / 2));
	var coll2Y = (playerY + (player.SIZE / 2)) - ((brown2Y) + (brownHeight / 2));
	var combinedHalfWidths2 = (player.SIZE / 2) + (brownWidth / 2); 
	var combinedHalfHeights2 = (player.SIZE / 2) + (brownHeight / 2); 
	}
	if (j=== 3)
	{
	context.drawImage(brown,brown3X,brown3Y,brownWidth,brownHeight); 
	var coll3X = (playerX + (player.SIZE / 2)) - (brown3X + (brownWidth - 50 / 2));
	var coll3Y = (playerY + (player.SIZE / 2)) - ((brown3Y) +(brownHeight / 2));
	var combinedHalfWidths3 = (player.SIZE / 2) + (brownWidth / 2); 
	var combinedHalfHeights3 = (player.SIZE / 2) + (brownHeight / 2); 
	}
	if (j=== 4)
	{
	context.drawImage(brown,brown4X,brown4Y,brownWidth,brownHeight); 
	var coll3X = (playerX + (player.SIZE / 2)) - (brown4X + (brownWidth - 50 / 2));
	var coll3Y = (playerY + (player.SIZE / 2)) - ((brown4Y) +(brownHeight / 2));
	var combinedHalfWidths3 = (player.SIZE / 2) + (brownWidth / 2); 
	var combinedHalfHeights3 = (player.SIZE / 2) + (brownHeight / 2); 
	}
	if (j=== 5)
	{
	context.drawImage(brown,brown5X,brown5Y,brownWidth,brownHeight); 
	var coll3X = (playerX + (player.SIZE / 2)) - (brown5X + (brownWidth - 50 / 2));
	var coll3Y = (playerY + (player.SIZE / 2)) - ((brown5Y ) +(brownHeight / 2));
	var combinedHalfWidths3 = (player.SIZE / 2) + (brownWidth / 2); 
	var combinedHalfHeights3 = (player.SIZE / 2) + (brownHeight / 2); 
	}
	if (j=== 6)
	{
	context.drawImage(brown,brown6X,brown6Y,brownWidth,brownHeight); 

	var coll3X = (playerX + (player.SIZE / 2)) - (brown6X + (brownWidth - 50 / 2));
	var coll3Y = (playerY + (player.SIZE / 2)) - ((brown6Y - 25) +(brownHeight / 2));
	var combinedHalfWidths3 = (player.SIZE / 2) + (brownWidth / 2); 
	var combinedHalfHeights3 = (player.SIZE / 2) + (brownHeight / 2); 

	}
	if (j=== 7)
	{
	context.drawImage(brown,brown7X,brown7Y,brownWidth,brownHeight); 

	var coll3X = (playerX + (player.SIZE / 2)) - (brown7X + (brownWidth - 50 / 2));
	var coll3Y = (playerY + (player.SIZE / 2)) - ((brown7Y - 25) +(brownHeight / 2));
	var combinedHalfWidths3 = (player.SIZE / 2) + (brownWidth / 2); 
	var combinedHalfHeights3 = (player.SIZE / 2) + (brownHeight / 2); 

	}
	if (j=== 8)
	{
	context.drawImage(brown,brown8X,brown8Y,brownWidth,brownHeight); 

	var coll3X = (playerX + (player.SIZE / 2)) - (brown8X + (brownWidth - 50 / 2));
	var coll3Y = (playerY + (player.SIZE / 2)) - ((brown8Y - 25) +(brownHeight / 2));
	var combinedHalfWidths3 = (player.SIZE / 2) + (brownWidth / 2); 
	var combinedHalfHeights3 = (player.SIZE / 2) + (brownHeight / 2); 
	}
	if (j=== 9)
	{
	context.drawImage(brown,brown9X,brown9Y,brownWidth,brownHeight); 
	var coll3X = (playerX + (player.SIZE / 2)) - (brown9X + (brownWidth/ 2));
	var coll3Y = (playerY + (player.SIZE / 2)) - ((brown9Y - 25) + (brownHeight / 2));
	var combinedHalfWidths3 = (player.SIZE / 2) + (brownWidth / 2); 
	var combinedHalfHeights3 = (player.SIZE / 2) + (brownHeight / 2); 
	}

	}
	var collisionSide3 = "";

	if (Math.abs(coll3X) < combinedHalfWidths3)
	{
	if (Math.abs(coll3Y) < combinedHalfHeights3)
	{
	var overlap3X = combinedHalfWidths3 - Math.abs(coll3X);
	var overlap3Y = combinedHalfHeights3 - Math.abs(coll3Y);

	if (overlap3X >= overlap3Y && deadFall === false)
	{
	if(coll3Y > 0 && deadFall === false)
	{
	collisionSide3 = "top";
	playerY = playerY + overlap3Y;
	playerVY = 0;
	bump.play();
	if (j === 9)
	{
	brown9Y -= 30;
	}

	}
	else
	{
	collisionSide3 = "bottom";
	playerY = playerY - overlap3Y;
	isJumping = false;
	playerVY = -player.gravity;

	}
	}
	else
	{
	if (coll3X > 0 && deadFall === false)
	{
	collisionSide3 = "left";
	playerX = playerX + overlap3X;
	}
	else
	{
	collisionSide3 = "right";
	playerX = playerX - overlap3X;
	}
	}
	}
	else
	{
	collisionSide3 = "none";
	}
	}
	else
	{
	collisionSide3 = "none";
	}
	}

	//LAVA COLLISION

	for (var k = 0; k < lavas.length; k++)
	{

	if (k=== 1)
	{
	context.drawImage(lava,lava1X,lava1Y,lava1Width,lava1Height); 
	var coll1LavaX = (playerX + (player.SIZE / 2)) - (lava1X + (lava1Width - 50 / 2));
	var coll1LavaY = (playerY + (player.SIZE / 2)) - (lava1Y + (lava1Height / 2));
	var combinedLavaHalfWidths1 = (player.SIZE / 2) + (lava1Width / 2); 
	var combinedLavaHalfHeights1 = (player.SIZE / 2) + (lava1Height / 2); 
	}
	if (k=== 2)
	{
	context.drawImage(lava,lava2X,lava2Y,lava2Width,lava2Height); 
	var coll1LavaX = (playerX + (player.SIZE / 2)) - (lava2X + (lava2Width - 50 / 2));
	var coll1LavaY = (playerY + (player.SIZE / 2)) - (lava2Y + (lava2Height / 2));
	var combinedLavaHalfWidths1 = (player.SIZE / 2) + (lava2Width / 2); 
	var combinedLavaHalfHeights1 = (player.SIZE / 2) + (lava2Height / 2); 
	}
	if (k=== 3)
	{
	context.drawImage(lava,lava3X,lava3Y,lava3Width,lava3Height); 
	var coll1LavaX = (playerX + (player.SIZE / 2)) - (lava3X + (lava3Width - 50 / 2));
	var coll1LavaY = (playerY + (player.SIZE / 2)) - (lava3Y + (lava3Height / 2));
	var combinedLavaHalfWidths1 = (player.SIZE / 2) + (lava3Width / 2); 
	var combinedLavaHalfHeights1 = (player.SIZE / 2) + (lava3Height / 2); 
	}
	if (k=== 4)
	{
	context.drawImage(lava,lava4X,lava4Y,lava4Width,lava4Height); 
	var coll1LavaX = (playerX + (player.SIZE / 2)) - (lava4X + (lava4Width - 50 / 2));
	var coll1LavaY = (playerY + (player.SIZE / 2)) - (lava4Y + (lava4Height / 2));
	var combinedLavaHalfWidths1 = (player.SIZE / 2) + (lava4Width / 2); 
	var combinedLavaHalfHeights1 = (player.SIZE / 2) + (lava4Height / 2); 
	}

	var lavaCollisionSide1 = "";

	if (Math.abs(coll1LavaX) < combinedLavaHalfWidths1)
	{
	if (Math.abs(coll1LavaY) < combinedLavaHalfHeights1)
	{
	var overlapLava1X = combinedLavaHalfWidths1 - Math.abs(coll1LavaX);
	var overlapLava1Y = combinedLavaHalfHeights1 - Math.abs(coll1LavaY);

	if (overlapLava1X >= overlapLava1Y)
	{
	if(coll1LavaY > 0)
	{
	lavaCollisionSide1 = "top";
	//playerY = playerY + overlapLava1Y;
	//playerVY = 0;


	}
	else
	{
	lavaCollisionSide1 = "bottom";
	//playerY = playerY - overlapLava1Y;
	//isJumping = false;
	//playerVY = -player.gravity;
	window.removeEventListener("keydown",onKeyDown,false);
	window.removeEventListener("keyup",onKeyUp,false);
	dead.addEventListener("canplaythrough",musicPlayer6,false);
	dead.play();
	music.pause();
	marioDead = true;

	}
	}
	else
	{
	if (coll1LavaX > 0)
	{
	lavaCollisionSide3 = "left";
	//playerX = playerX + overlapLava1X;
	}
	else
	{
	lavaCollisionSide3 = "right";
	//playerX = playerX - overlapLava1X;
	}
	}
	}
	else
	{
	lavaCollisionSide3 = "none";
	}
	}
	else
	{
	lavaCollisionSide3 = "none";
	}
	}


	//FIREBALL COLLISION


	for (var l = 0; l < fireballs.length; l++)
	{


	//ROTATING THE FIREBALLS


	if (l=== 1)
	{

	var coll1FireballX = (playerX + (player.SIZE / 2)) - ((centerX1 + Math.sin(angle1) * -radius1) + (fireball1Width - 50 / 2));
	var coll1FireballY = (playerY + (player.SIZE / 2)) - ((centerY1 + Math.cos(angle1) * -radius1) + (fireball1Height / 2));
	var combinedFireballHalfWidths1 = (player.SIZE / 2) + (fireball1Width / 2); 
	var combinedFireballHalfHeights1 = (player.SIZE / 2) + (fireball1Height / 2); 

	//console.log(fireball1Rotation * Math.PI / -120,angle1);

	context.save();
	context.translate(fireball1X + fireball1Width / 2,fireball1Y + fireball1Height);
	context.rotate(fireball1Rotation * Math.PI / -120);
	context.drawImage(fireball,-fireball1Width / 2,-fireball1Height,fireball1Width,fireball1Height);
	context.restore();
	}

	if (l=== 2)
	{
	/*
	context.drawImage(fireball,fireball2X,fireball2Y,fireball2Width,fireball2Height); 
	var coll1FireballX = (playerX + (player.SIZE / 2)) - (fireball2X + (fireball2Width - 50 / 2));
	var coll1FireballY = (playerY + (player.SIZE / 2)) - (fireball2Y + (fireball2Height / 2));
	var combinedFireballHalfWidths1 = (player.SIZE / 2) + (fireball2Width / 2); 
	var combinedFireballHalfHeights1 = (player.SIZE / 2) + (fireball2Height / 2); 
	*/

	//console.log(fireball2Rotation * Math.PI / -120,angle2);

	var coll1FireballX = (playerX + (player.SIZE / 2)) - ((centerX2 + Math.sin(angle2) * -radius2) + (fireball2Width - 50 / 2));
	var coll1FireballY = (playerY + (player.SIZE / 2)) - ((centerY2 + Math.cos(angle2) * -radius2) + (fireball2Height / 2));
	var combinedFireballHalfWidths1 = (player.SIZE / 2) + (fireball2Width / 2); 
	var combinedFireballHalfHeights1 = (player.SIZE / 2) + (fireball2Height / 2); 

	context.save();
	context.translate(fireball2X + fireball2Width / 2 + 7.5,fireball2Y - 70 + fireball2Height);
	context.rotate(fireball2Rotation * Math.PI / -120);
	context.drawImage(fireball,-fireball2Width / 2,-fireball2Height,fireball2Width,fireball2Height);
	context.restore();


	}
	if (l=== 3)
	{

	context.save();
	context.translate(fireball3X + fireball3Width / 2 + 7.5,fireball3Y - 70 + fireball3Height);
	context.rotate(fireball3Rotation * Math.PI / -120);
	context.drawImage(fireball,-fireball3Width / 2,-fireball3Height,fireball3Width,fireball3Height);
	context.restore();


	var coll1FireballX = (playerX + (player.SIZE / 2)) - ((centerX3 + Math.sin(angle3) * -radius3) + (fireball3Width - 50 / 2));
	var coll1FireballY = (playerY + (player.SIZE / 2)) - ((centerY3 + Math.cos(angle3) * -radius3) + (fireball3Height / 2));
	var combinedFireballHalfWidths1 = (player.SIZE / 2) + (fireball3Width / 2); 
	var combinedFireballHalfHeights1 = (player.SIZE / 2) + (fireball3Height / 2); 
	}
	if (l=== 4)
	{

	context.save();
	context.translate(fireball4X + fireball4Width / 2 + 7.5,fireball4Y - 70 + fireball4Height);
	context.rotate(fireball4Rotation * Math.PI / -120);
	context.drawImage(fireball,-fireball4Width / 2,-fireball4Height,fireball4Width,fireball4Height);
	context.restore();


	var coll1FireballX = (playerX + (player.SIZE / 2)) - ((centerX4 + Math.sin(angle4) * -radius4) + (fireball4Width - 50 / 2));
	var coll1FireballY = (playerY + (player.SIZE / 2)) - ((centerY4 + Math.cos(angle4) * -radius4) + (fireball4Height / 2));
	var combinedFireballHalfWidths1 = (player.SIZE / 2) + (fireball4Width / 2); 
	var combinedFireballHalfHeights1 = (player.SIZE / 2) + (fireball4Height / 2);  
	}
	if (l=== 5)
	{

	var coll1FireballX = (playerX + (player.SIZE / 2)) - ((centerX5 + Math.sin(angle5) * -radius5) + (fireball5Width - 50 / 2));
	var coll1FireballY = (playerY + (player.SIZE / 2)) - ((centerY5 + Math.cos(angle5) * -radius5) + (fireball5Height / 2));
	var combinedFireballHalfWidths1 = (player.SIZE / 2) + (fireball5Width / 2); 
	var combinedFireballHalfHeights1 = (player.SIZE / 2) + (fireball5Height / 2);

	context.save();
	context.translate(fireball5X + fireball5Width / 2 + 7.5,fireball5Y -70 + fireball5Height);
	context.rotate(fireball5Rotation * Math.PI / -120);
	context.drawImage(fireball,-fireball5Width / 2,-fireball5Height,fireball5Width,fireball5Height);
	context.restore();

	}
	if (l=== 6)
	{

	context.save();
	context.translate(fireball6X + fireball6Width / 2 + 7.5,fireball6Y -70 + fireball6Height);
	context.rotate(fireball6Rotation * Math.PI / -120);
	context.drawImage(fireball,-fireball6Width / 2,-fireball6Height,fireball6Width,fireball6Height);
	context.restore();

	//context.drawImage(fireball,fireball6X,fireball6Y,fireball6Width,fireball6Height); 
	var coll1FireballX = (playerX + (player.SIZE / 2)) - ((centerX6 + Math.sin(angle6) * -radius6) + (fireball6Width - 50 / 2));
	var coll1FireballY = (playerY + (player.SIZE / 2)) - ((centerY6 + Math.cos(angle6) * -radius6) + (fireball6Height / 2));
	var combinedFireballHalfWidths1 = (player.SIZE / 2) + (fireball6Width / 2); 
	var combinedFireballHalfHeights1 = (player.SIZE / 2) + (fireball6Height / 2); 
	}
	if (l=== 7)
	{

	context.save();
	context.translate(fireball7X + fireball7Width / 2 + 7.5,fireball7Y -70 + fireball7Height);
	context.rotate(fireball7Rotation * Math.PI / -120);
	context.drawImage(fireball,-fireball7Width / 2,-fireball7Height,fireball7Width,fireball7Height);
	context.restore();

	//context.drawImage(fireball,fireball7X,fireball7Y,fireball7Width,fireball7Height); 
	var coll1FireballX = (playerX + (player.SIZE / 2)) - ((centerX7 + Math.sin(angle7) * -radius7) + (fireball7Width - 50 / 2));
	var coll1FireballY = (playerY + (player.SIZE / 2)) - ((centerY7 + Math.cos(angle7) * -radius7) + (fireball7Height / 2));
	var combinedFireballHalfWidths1 = (player.SIZE / 2) + (fireball7Width / 2); 
	var combinedFireballHalfHeights1 = (player.SIZE / 2) + (fireball7Height / 2); 
	}


	var fireballCollisionSide1 = "";

	if (Math.abs(coll1FireballX) < combinedFireballHalfWidths1)
	{
	if (Math.abs(coll1FireballY) < combinedFireballHalfHeights1)
	{
	var overlapFireball1X = combinedFireballHalfWidths1 - Math.abs(coll1FireballX);
	var overlapFireball1Y = combinedFireballHalfHeights1 - Math.abs(coll1FireballY);

	if (overlapFireball1X >= overlapFireball1Y)
	{
	if(coll1FireballY > 0 && marioInvincible === false && marioDead === false)
	{
	fireballCollisionSide1 = "top";

	//playerY = playerY + overlapLava1Y;
	//playerVY = 0;
	if (player.sourceX === 64)
	{
	marioInvincible = true;
	player.sourceX = 0;
	powerDown.play();
	}
	if (player.sourceX === 0 && marioInvincible === false && marioDead === false)
	{
	deadFall = true;
	dead.play();
	music.pause();
	}

	}
	else
	{
	console.log(" bottom ouch!");
	fireballCollisionSide1 = "bottom";


	if (player.sourceX === 64)
	{
	marioInvincible = true;
	player.sourceX = 0;
	powerDown.play();
	}
	if (player.sourceX === 0 && marioInvincible === false && marioDead === false)
	{
	deadFall = true;
	dead.play();
	music.pause();
	}
	}
	}
	else
	{
	if (coll1FireballX > 0 && marioInvincible === false && marioDead === false)
	{

	//playerX = playerX + overlapFireball1X;

	if (player.sourceX === 64)
	{
	marioInvincible = true;
	player.sourceX = 0;
	powerDown.play();
	}
	if (player.sourceX === 0 && marioInvincible === false)
	{
	deadFall = true;
	dead.play();
	music.pause();
	}
	}
	else
	{
	fireballCollisionSide3 = "right";
	console.log("right ouch!");
	//playerX = playerX - overlapFireball1X;


	if (player.sourceX === 64)
	{
	marioInvincible = true;
	player.sourceX = 0;
	powerDown.play();
	}
	if (player.sourceX === 0 && marioInvincible === false)
	{
	deadFall = true;
	dead.play();
	music.pause();
	}
	}
	}
	}
	else
	{
	fireballCollisionSide3 = "none";
	}
	}
	else
	{
	fireballCollisionSide3 = "none";
	}
	}



	//BOWSER'S FIREBALLS


	if (boxX8 < 0)
	{
	context.drawImage(bowserFire,bowserFireX,bowserFireY,bowserFireWidth,bowserFireHeight);
	bowserFireX += bowserFireVX;

	}

	//MAKING THE MUSHROOM APPEAR + MOVING THE MUSHROOM

	if (brown9Y < 140) {
		brown9Y = 140;
	}
	if (brown9Y > 170) {
		brown9Y = 170;
	}
	if (brown9Y < 170) {
		bumped = true;
		bump.play();
		brown9Y += 5;
	}
	if (bumped) {
		
		if (!mushroomIn) {
			shroom.play();
			bump.play();
			mushroomIn = true;
			mushVisible = true;
		}
		if (mushVisible) {
			context.drawImage(mushroom,mushroomX,mushroomY,mushroomWidth,mushroomHeight);
		}
		mushroomX += mushroomVX;

		if (mushroomX > brown9X + 40 && mushroomY <= playerY + player.SIZE - mushroomWidth) {
			mushroomVX = 0;
			mushroomY += mushroomVY;
		}
		if (mushroomY > playerY + player.SIZE - mushroomWidth && mushroomX < brown9X + 65) {
			mushroomVX = 3;
			if (!isJumping) {
				mushroomY = playerY + player.SIZE - mushroomWidth;
			}
		}
		if (mushroomX > brown9X + 65) {
			mushroomVX = 0;
			mushroomY += mushroomVY;
		}
	}

	context.drawImage(image2,player.sourceX,player.sourceY,player.SIZE,player.SIZE,playerX,playerY,player.SIZE,player.SIZE);
	context.drawImage(anita,anitaX,anitaY,anitaWidth,anitaHeight);


	if (marioDead) {
		window.removeEventListener("keydown",onKeyDown,false);
		window.removeEventListener("keyup",onKeyUp,false);
	}

	context.font = "20px verdana";
	context.fillStyle = "white";
	context.fillText("Use the left / right arrow keys to move.",50,370);
	context.fillText("Press X to jump.",50,390);

	if (bowserFireX < playerX - 300 && !gotAxe) {
		bowserFireX = monsterX;
		bowserFireY = monsterY + 30;
	}
	if (gotAxe) {
		bridgeX -= 8;
	}
	if (bridgeX < -400) {
		collapse.pause();
		fall.play();
		monsterY += 8;
	}
	if (monsterY > canvas.height && anitaX >= 375) {
		fall.pause();
		music.pause();
		monsterY = canvas.height + 100;
		win.play();
		boxVX = .2;
		playerWon = true;
		window.removeEventListener("keydown",onKeyDown,false);
		window.removeEventListener("keyup",onKeyUp,false);
		bridgeX = bridgeX;
		platformY = -2000;
		axeX = -2000;
	}
	if (boxX13 < -250) {
		win.pause();
		platformX = -1000;
	}

	if (boxX13 < 450 && boxX13 >= -200 && anitaX >= 375) {
		playerX -= 2;
	}

	if (anitaX < 375) {
		boxVX = 0;
		fall.pause();
		context.font = "20px verdana";
		context.fillStyle = "white";
		context.fillText("Sorry Mario, but our princess is in another castle!",20,100);
	}

	if (bowserFireX - playerX < 200 && bowserFireX - playerX > 0) {
		flame.play();
	}

	if (deadFall) {
		playerVY = 20;
	}
	if (playerX < 0) {
		playerX = 0;
	}
	if (playerX > 550) {
		playerX = 550;
	}
	if (playerY < 380 && !marioDead&& !deadFall) {
		playerVY += player.gravity;
	}
	if (playerY > 500) {
		playerY = 500;
		isJumping = true;
		kaput = true;
	}
	if (kaput) {
		music.pause();
		context.clearRect(0,0,canvas.width,canvas.height);
		playerVX = 0;
		playerVY = 0;
		context.font = "20px verdana";
		context.fillStyle = "white";
		context.fillText("GAME OVER",canvas.width / 2 - 50,canvas.height / 2);
		context.fillText("This game is still in development...", 120,370);
		context.fillText("refresh the browser to play again.", 120,390);
	}
}
	

})();

