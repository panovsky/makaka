
var game = new Phaser.Game(640, 960, Phaser.WEBGL, '', 
							{preload: preload, create: create, update: update, render: render})
//в файрфоксе работает-WEBGL в опере CANVAS

//ваабсче работает неочень

var win=0;
var nowMyStage=1;
var nowMyProgress=1;
var nowMyCoins=0;
var nowMyCoinsTemp=0;
var nowMyNeed=0;
var nowMyNeed2=0;
var nowMyCombo=0;

var totalCoins=0;
var totalCoinsTemp=0;
var nowMyCoinsWin=0;

var comboUp;
var comboDown;
var showCoin = [];

var bananaSpeed=10;

var preloader10, bg;
var inRotation;
var text;
var text2;
var count=0;

var style = {font: "20px Arial", fill: "ff0044", align: "center", fontWeight: "bold"};
var style2 = { font: '64px font', align: 'center' };
var style3 = {font: '84px font', align: 'right'}
var style4 = {font: '40px font', align: 'right'}

var inDestroy=0;
var inPause=1;
var inPauseG=0;
var inFind=0;

//спрайты пути
var inv;

var tweenTube; //анимация трубы
var tweenFlag=true; //можно или нет анимировать трубу
var timTween;
//внутренности
var inv2=[];
//бананасы
var banana0;
var banana1;
var banana2;
var banana3;
var banana4;

var banana20;
var banana20act = 0;
var banana21;
var banana21act = 0;
var banana22;
var banana22act = 0;
var banana23;
var banana23act = 0;
var banana24;
var banana24act = 0;

var bananaDownNow=0;

var actTest=0;

//текстик
var invTxt=[];
var timerMMt;
var timerSSt;
var timerMM;
var timerSS;

//ИНТЕРФЕЙС
var interf=[];

//
var totalRaiting=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var totalRaitingN=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//АЧЧИВЫ
var acc=[0,0,0,0,0,0,0,0,0]
var btnBck2;
var accTemp;
var accText;

//ПУТЬ
var path0=[];
var path0End=0;
var path1=[];
var path1End=0;
var path2=[];
var path2End=0;
var path3=[];
var path3End=0;
var path4=[];
var path4End=0;

var nTest=[];

var tst=1;
var logButton;
var button;
var buttonD;
var buttonB;

var reStroyArr=[];

var tutor;
var tutorActive=1;

//МАКАКА
var makak=[];
//УЛЫБКА МАКАКИ
var makakRot=[];
var makakActive =[];

//ЗВУК
var soundOn=1;
var musicPlay=0;

var tubeS, nomS, bananaS, musicS, comboUpS, comboDownS, addTubeS, timeUpS, winS;

function updateProgressBar () {

    // Another file has just loaded, so update the size of my progress bar graphic here
    count = game.load.progress;

    text.setText(count);
}

function preload(){
	//Preloader
	
	//preloader10=game.add.sprite(0, 0, 'load');
	//game.load.setPreloadSprite(preloader10);
	text = game.add.text(game.world.centerX, game.world.centerY, "0", {
        font: "65px Arial",
        fill: "#ff0044",
        align: "center"
    });
	game.load.onFileComplete.add(updateProgressBar, this);
	
	//resolution
	

	game.stage.scale.minWidth = 213;
    game.stage.scale.minHeight = 320;
	game.stage.scale.maxWidth = 1365;
    game.stage.scale.maxHeight = 2048;
    game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
    game.stage.scale.pageAlignHorizontally = true;
    game.stage.scale.pageAlignVertically = true;
	game.stage.scale.setScreenSize(true);
	game.stage.fullScreenScaleMode = Phaser.StageScaleMode.SHOW_ALL;
	


    //Loading
    game.load.image('load', 'assets/loading.png');

    //BackGround
	game.load.image('bg', 'assets/backGround_2.png');

	//Tiles
	game.load.image('t_0000', 'assets/tile_0000.png');	
	//game.load.image('t_1010', 'assets/tile_1010.png');
	game.load.spritesheet('t_1010', 'assets/tile_1010_anim.png', 120, 120, 20);
	//game.load.image('t_1100', 'assets/tile_1100.png');
	game.load.spritesheet('t_1100', 'assets/tile_1100_anim.png', 120, 120, 20);
	//game.load.image('t_1110', 'assets/tile_1110.png');
	game.load.spritesheet('t_1110', 'assets/tile_1110_anim.png', 120, 120, 20);
	//game.load.image('t_1111', 'assets/tile_1111.png');
	game.load.spritesheet('t_1111', 'assets/tile_1111_anim.png', 120, 120, 20);

	//bananas
	//game.load.image('banana0', 'assets/banana.png');
	game.load.spritesheet('banana0', 'assets/bananaAnim0.png', 100, 100, 14);
	game.load.spritesheet('banana0d', 'assets/bananaAnim1.png', 100, 100, 14);

	game.load.spritesheet('banana1', 'assets/bananaAnim01.png', 100, 100, 14);
	game.load.spritesheet('banana1d', 'assets/bananaAnim11.png', 100, 100, 14);

	game.load.spritesheet('banana2', 'assets/bananaAnim02.png', 100, 100, 14);
	game.load.spritesheet('banana2d', 'assets/bananaAnim12.png', 100, 100, 14);

	game.load.spritesheet('banana3', 'assets/bananaAnim03.png', 100, 100, 14);
	game.load.spritesheet('banana3d', 'assets/bananaAnim13.png', 100, 100, 14);

	//Buttons
	game.load.image('btnStart', 'assets/btnStart.png');
	game.load.image('btnTmp', 'assets/TMPBTN.png');
	game.load.image('btnBck0', 'assets/btnBck0.png')
	game.load.image('btnSnd0', 'assets/btnSnd0.png')
	game.load.image('btnSnd1', 'assets/btnSnd1.png')
	

	game.load.image('timer1', 'assets/timer.png');


	game.load.image('youWin1', 'assets/youWin.png');
	game.load.image('youLos1', 'assets/tryAgain.png');
	
	game.load.image('backBtn1', 'assets/backBtn.png');
	game.load.image('nextBtn1', 'assets/nextBtn.png');
	game.load.image('retryBtn1', 'assets/retryBtn.png');
	
	

	//ОЧЕЧИ
	game.load.bitmapFont('font', 'assets/font.png', 'assets/font.xml');
	game.load.spritesheet('coin10', 'assets/coin10.png', 76, 34, 20);
	game.load.spritesheet('coinWow', 'assets/coinWow.png', 146, 88, 20);
	game.load.spritesheet('coin100', 'assets/coin100.png', 102, 34, 20);
	game.load.spritesheet('combo2', 'assets/coin2combo.png', 238, 40, 20);

	//MAKAKAS
	game.load.spritesheet('makaka0', 'assets/makakAnim0.png', 120, 120, 30);
	game.load.spritesheet('makakaR', 'assets/makakAnimR.png', 120, 120, 10);
	game.load.image('makakOhNo1', 'assets/makakOhNo.png');

	//СТАГ
	game.load.image('stag1', 'assets/stage1.png');
	game.load.image('stagZ', 'assets/zamok.png');

	//АЧЧИВЫ
	game.load.image('acc01e', 'assets/acc01e.png');
		game.load.image('acc01', 'assets/acc01.png');
		game.load.image('acc1', 'assets/acc1.png');

	game.load.image('acc02e', 'assets/acc02e.png');
		game.load.image('acc02', 'assets/acc02.png');
		game.load.image('acc2', 'assets/acc2.png');

	game.load.image('acc03e', 'assets/acc03e.png');
		game.load.image('acc03', 'assets/acc03.png');
		game.load.image('acc3', 'assets/acc3.png');

	game.load.image('acc04e', 'assets/acc04e.png');
		game.load.image('acc04', 'assets/acc04.png');
		game.load.image('acc4', 'assets/acc4.png');

	game.load.image('acc05e', 'assets/acc05e.png');
		game.load.image('acc05', 'assets/acc05.png');
		game.load.image('acc5', 'assets/acc5.png');

	game.load.image('acc06e', 'assets/acc06e.png');
		game.load.image('acc06', 'assets/acc06.png');
		game.load.image('acc6', 'assets/acc6.png');

	game.load.image('acc07e', 'assets/acc07e.png');
		game.load.image('acc07', 'assets/acc07.png');
		game.load.image('acc7', 'assets/acc7.png');

	game.load.image('acc08e', 'assets/acc08e.png');
		game.load.image('acc08', 'assets/acc08.png');
		game.load.image('acc8', 'assets/acc8.png');


	//TUTORIALS
	game.load.image('tutor1', 'assets/tutor1.png');
	game.load.image('tutor3', 'assets/tutor3.png');
	game.load.image('tutor5', 'assets/tutor5.png');
	game.load.image('tutor7', 'assets/tutor7.png');
	game.load.image('tutor9', 'assets/tutor9.png');

	//ЗВУКИ
	game.load.audio('tube4', 'assets/audio/tubes-4.ogg');
	game.load.audio('nom3', 'assets/audio/omnom-3.ogg');
	game.load.audio('ban2', 'assets/audio/banana-2.ogg');
	game.load.audio('mus1', 'assets/audio/muzlou_4.ogg');
	game.load.audio('comboUpS1', 'assets/audio/ding_1.ogg');
	game.load.audio('comboDownS1', 'assets/audio/ding_2.ogg');
	game.load.audio('addTubeS1', 'assets/audio/tube_in.ogg');	
	game.load.audio('timeUp', 'assets/audio/timeUp.ogg');
	game.load.audio('winS1', 'assets/audio/ovation.ogg');
}

function makakCreate(xx, yy, ii){
	makak[ii]= game.add.sprite(xx, yy, 'makaka0');
	makak[ii].anchor.setTo(0.5, 0.5);
	makak[ii].animations.add('makakak');
	var r=Math.floor(Math.random()*5+20);
	if(nowMyStage==1){
		r=26;
	}
	if(nowMyStage>10){
		if(r==20){
			r+=3;
		}
	}
	makak[ii].animations.frame=r;
	makak[ii].animations.paused=true;
	makakRot[ii]=r;	
	makakActive[ii]=1;
}

function makakas5(){
	makakCreate(80, 850, 0);
	makakCreate(200, 850, 1);
	makakCreate(320, 850, 2);
	makakCreate(440, 850, 3);
	makakCreate(560, 850, 4);
}

function randomBananaUp(rr){
	var r=Math.floor(Math.random()*rr);
	
	if(r == 0){
		return('banana0');		
	}
	if(r==1){
		return('banana1');
	}
	if(r==2){
		return('banana2');
	}
	if(r==3){
		return('banana3');
	}
}

function randomBananaDn(rr){
	var r=Math.floor(Math.random()*rr);
	if(r==0){
		return('banana0d');		
	}
	if(r==1){
		return('banana1d');
	}
	if(r==2){
		return('banana2d');
	}
	if(r==3){
		return('banana3d');
	}
}

function createBanana(){


	banana0 = game.add.sprite(80,100, randomBananaUp(4));
	banana0.anchor.setTo(0.5, 0.5);
	banana0.animations.add('fall');


	banana1 = game.add.sprite(200,100, randomBananaUp(4));
	banana1.anchor.setTo(0.5, 0.5);
	banana1.animations.add('fall');
	

	banana2 = game.add.sprite(320,100, randomBananaUp(4));
	banana2.anchor.setTo(0.5, 0.5);
	banana2.animations.add('fall');
	

	banana3 = game.add.sprite(440,100, randomBananaUp(4));
	banana3.anchor.setTo(0.5, 0.5);
	banana3.animations.add('fall');
	

	banana4 = game.add.sprite(560,100, randomBananaUp(4));
	banana4.anchor.setTo(0.5, 0.5);
	banana4.animations.add('fall');
	

	banana20 = game.add.sprite(80,-110, randomBananaDn(4));
	banana20.anchor.setTo(0.5, 0.5);
	banana20.animations.add('fallD');
	

	banana21 = game.add.sprite(200,-110, randomBananaDn(4));
	banana21.anchor.setTo(0.5, 0.5);
	banana21.animations.add('fallD');
	

	banana22 = game.add.sprite(320,-110, randomBananaDn(4));
	banana22.anchor.setTo(0.5, 0.5);
	banana22.animations.add('fallD');
	

	banana23 = game.add.sprite(440,-110, randomBananaDn(4));
	banana23.anchor.setTo(0.5, 0.5);
	banana23.animations.add('fallD');
	

	banana24 = game.add.sprite(560,-110, randomBananaDn(4));
	banana24.anchor.setTo(0.5, 0.5);
	banana24.animations.add('fallD');
	
}

function createText(){
	/*invTxt[invTxt.length] = game.add.text(20,150, "0", style);
	invTxt[invTxt.length] = game.add.text(140,150, "1", style);
	invTxt[invTxt.length] = game.add.text(260,150, "2", style);
	invTxt[invTxt.length] = game.add.text(380,150, "3", style);
	invTxt[invTxt.length] = game.add.text(500,150, "4", style);
	
	invTxt[invTxt.length] = game.add.text(20,270, "5", style);
	invTxt[invTxt.length] = game.add.text(140,270, "6", style);
	invTxt[invTxt.length] = game.add.text(260,270, "7", style);
	invTxt[invTxt.length] = game.add.text(380,270, "8", style);
	invTxt[invTxt.length] = game.add.text(500,270, "9", style);
	
	invTxt[invTxt.length] = game.add.text(20,390, "10", style);
	invTxt[invTxt.length] = game.add.text(140,390, "11", style);
	invTxt[invTxt.length] = game.add.text(260,390, "12", style);
	invTxt[invTxt.length] = game.add.text(380,390, "13", style);
	invTxt[invTxt.length] = game.add.text(500,390, "14", style);
	
	invTxt[invTxt.length] = game.add.text(20,510, "15", style);
	invTxt[invTxt.length] = game.add.text(140,510, "16", style);
	invTxt[invTxt.length] = game.add.text(260,510, "17", style);
	invTxt[invTxt.length] = game.add.text(380,510, "18", style);
	invTxt[invTxt.length] = game.add.text(500,510, "19", style);

	invTxt[invTxt.length] = game.add.text(20,630, "20", style);
	invTxt[invTxt.length] = game.add.text(140,630, "21", style);
	invTxt[invTxt.length] = game.add.text(260,630, "22", style);
	invTxt[invTxt.length] = game.add.text(380,630, "23", style);
	invTxt[invTxt.length] = game.add.text(500,630, "24", style);*/

	//invTxt[invTxt.length] = game.add.bitmapText(20, -20, 'find', style2);
	invTxt[invTxt.length] = game.add.bitmapText(140, -500, "reset", style2);
	invTxt[invTxt.length] = game.add.bitmapText(270, -500, "back", style2);
	text=game.add.bitmapText(-500, -20, 'find', style2);
	text2=game.add.bitmapText(20, 715, '0', style2);
	invTxt[invTxt.length] = game.add.sprite(450, 730, 'timer1');
	invTxt[invTxt.length] = game.add.bitmapText(500, 715, "88:88", style2);
}
function createField(){
	//1row
	addInv(20+60,150+60);
	addInv(140+60,150+60);
	addInv(260+60,150+60);
	addInv(380+60,150+60);
	addInv(500+60,150+60);
	
	

	//2row
	addInv(20+60,270+60);
	addInv(140+60,270+60);
	addInv(260+60,270+60);
	addInv(380+60,270+60);
	addInv(500+60,270+60);


	
	//3row
	addInv(20+60,390+60);
	addInv(140+60,390+60);
	addInv(260+60,390+60);
	addInv(380+60,390+60);
	addInv(500+60,390+60);


	//4row
	addInv(20+60,510+60);
	addInv(140+60,510+60);
	addInv(260+60,510+60);
	addInv(380+60,510+60);
	addInv(500+60,510+60);


	//5row
	addInv(20+60,630+60);
	addInv(140+60,630+60);
	addInv(260+60,630+60);
	addInv(380+60,630+60);
	addInv(500+60,630+60);
	addTubeSplay();

	//КНОПУЛИЧКИ
	logButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	button = game.add.button(20, 10, 'btnBck0', backF, this, 0, 0, 0);
	buttonB = game.add.button(270, -500, 'btnTmp', backF, this, 0, 0, 0);
	if(soundOn==1){
		buttonD = game.add.button(90, 10, 'btnSnd0', soundOnF, this, 0, 0, 0);
	} else {
		buttonD = game.add.button(90, 10, 'btnSnd1', soundOnF, this, 0, 0, 0);
	}
}

function soundOnF(){
	var xx, yy;
	xx=buttonD.x; yy=buttonD.y;
	if(soundOn==1){
		soundOn=0;
		buttonD.destroy();
		buttonD = game.add.button(xx, yy, 'btnSnd1', soundOnF, this, 0, 0, 0);
		musicS.stop();
	} else {
		soundOn=1;
		buttonD.destroy();
		buttonD = game.add.button(xx, yy, 'btnSnd0', soundOnF, this, 0, 0, 0);
		musicS.play('', 0, 0.8, true);
	}
}

function addInv(xx, yy){
	var r=Math.floor(Math.random()*17+1);
	//r=1; 12
	//r=17;

	//  -=LEVEL 1=-
	
	if(nowMyStage==1 && tutorActive==1){
		if(inv.length==2 || inv.length==7 || inv.length==17 || inv.length==22){
			r=18;
		} else if(inv.length==12){
			r=1;
		}
	}

	if(nowMyStage==3 && tutorActive==1){
		if(inv.length==2 || inv.length==7 || inv.length==17 || inv.length==22 || inv.length==23){
			r=18;
		} else if(inv.length==12){
			r=1;
		}
	}

	if(nowMyStage==5 && tutorActive==1){
		if(inv.length==2 || inv.length==7 || inv.length==17 || inv.length==20 || inv.length==21 || inv.length==22 || inv.length==23 || inv.length==24){
			r=18;
		} else if(inv.length==12){
			r=1;
		}
	}

	if(nowMyStage==7 && tutorActive==1){
		if(inv.length==2 || inv.length==7 || inv.length==17 || inv.length==22){
			r=18;
		} else if(inv.length==12){
			r=1;
		}
	}

	if(nowMyStage==9 && tutorActive==1){
		if(inv.length==10 || inv.length==11 || inv.length==13 || inv.length==14){
			r=7;
		} else if(inv.length==12){
			r=1;
		} else {
			r=18;
		}
	}

	if(nowMyStage==11 && tutorActive==1){
		if(inv.length==2 || inv.length==7 || inv.length==17 || inv.length==22){
			r=18;
		} else if(inv.length==12){
			r=1;
		}
	}

	if(nowMyStage==13 && tutorActive==1){
		if(inv.length==2 || inv.length==7 || inv.length==17 || inv.length==22 || inv.length==23){
			r=18;
		} else if(inv.length==12){
			r=1;
		}
	}

	if(nowMyStage==15 && tutorActive==1){
		if(inv.length==2 || inv.length==7 || inv.length==17 || inv.length==22){
			r=18;
		} else if(inv.length==12){
			r=1;
		}
	}

	if(nowMyStage==17 && tutorActive==1){
		if(inv.length==10 || inv.length==11 || inv.length==13 || inv.length==14){
			r=7;
		} else if(inv.length==12){
			r=1;
		} else {
			r=18;
		}
	}

	if(nowMyStage==19 && tutorActive==1){
		if(inv.length==2 || inv.length==7 || inv.length==17 || inv.length==20 || inv.length==21 || inv.length==22 || inv.length==23 || inv.length==24){
			r=18;
		} else if(inv.length==12){
			r=1;
		}
	}

	if(nowMyStage<6){
		if(r==0){

			inv[inv.length]=(game.add.sprite(xx, yy, 't_0000'));
			inv2[inv2.length]=[0,0,0,0];
		}
		if(r==1 || r==2 || r==3 ){
			inv[inv.length]=(game.add.sprite(xx, yy, 't_1010'));
			inv2[inv2.length]=[0,1,0,1];   
	       
		}
		if(r==7 || r==8 || r==6  ){
			inv[inv.length]=(game.add.sprite(xx, yy, 't_1100'));
			inv2[inv2.length]=[1,1,0,0];
			
		}
		if(r==13 || r==14 || r==15 || r==16 || r==10 || r==11 || r==9){
			inv[inv.length]=(game.add.sprite(xx, yy, 't_1110'));
			inv2[inv2.length]=[1,1,0,1];
		}
		if(r==17 || r==18 || r==12 || r==4 || r==5 ){
			inv[inv.length]=(game.add.sprite(xx, yy, 't_1111'));
			inv2[inv2.length]=[1,1,1,1];
		}
	}

	if(nowMyStage<11 && nowMyStage>5){
		if(r==0){

			inv[inv.length]=(game.add.sprite(xx, yy, 't_0000'));
			inv2[inv2.length]=[0,0,0,0];
		}
		if(r==1 || r==2 || r==3 || r==4 ){
			inv[inv.length]=(game.add.sprite(xx, yy, 't_1010'));
			inv2[inv2.length]=[0,1,0,1];   
	       
		}
		if(r==7 || r==8 || r==9 || r==10 ){
			inv[inv.length]=(game.add.sprite(xx, yy, 't_1100'));
			inv2[inv2.length]=[1,1,0,0];
			
		}
		if(r==13 || r==14 || r==15 || r==16 || r==11 || r==12){
			inv[inv.length]=(game.add.sprite(xx, yy, 't_1110'));
			inv2[inv2.length]=[1,1,0,1];
		}
		if(r==17 || r==18 || r==5 || r==6){
			inv[inv.length]=(game.add.sprite(xx, yy, 't_1111'));
			inv2[inv2.length]=[1,1,1,1];
		}
	}

	if(nowMyStage>10){
		if(r==0){

			inv[inv.length]=(game.add.sprite(xx, yy, 't_0000'));
			inv2[inv2.length]=[0,0,0,0];
		}
		if(r==1 || r==2 || r==3 || r==4 || r==5 || r==6){
			inv[inv.length]=(game.add.sprite(xx, yy, 't_1010'));
			inv2[inv2.length]=[0,1,0,1];   
	       
		}
		if(r==7 || r==8 || r==9 || r==10 || r==11 || r==12){
			inv[inv.length]=(game.add.sprite(xx, yy, 't_1100'));
			inv2[inv2.length]=[1,1,0,0];
			
		}
		if(r==13 || r==14 || r==15 || r==16){
			inv[inv.length]=(game.add.sprite(xx, yy, 't_1110'));
			inv2[inv2.length]=[1,1,0,1];
		}
		if(r==17 || r==18){
			inv[inv.length]=(game.add.sprite(xx, yy, 't_1111'));
			inv2[inv2.length]=[1,1,1,1];
		}
	}
	inv[inv.length-1].anchor.setTo(0.5, 0.5);
	inv[inv.length-1].animations.add('invIn');
	inv[inv.length-1].input.start(0, true);
    inv[inv.length-1].events.onInputDown.add(select);        
    inv[inv.length-1].animations.play('invIn', 30, false);
	
	
}

function addInvInGame(xx, yy, ii){
	var r=Math.floor(Math.random()*17+1);
	//r=17;
	if(r==0){

		inv[ii]=(game.add.sprite(xx, yy, 't_0000'));
		inv2[ii].length=0;
		inv2[ii]=[0,0,0,0];
	}
	if(r==1 || r==2 || r==3 || r==4 || r==5 || r==6){
		inv[ii]=(game.add.sprite(xx, yy, 't_1010'));
		inv2[ii].length=0;
		inv2[ii]=[0,1,0,1];   
       
	}
	if(r==7 || r==8 || r==9 || r==10 || r==11 || r==12){
		inv[ii]=(game.add.sprite(xx, yy, 't_1100'));
		inv2[ii].length=0;
		inv2[ii]=[1,1,0,0];
		
	}
	if(r==13 || r==14 || r==15 || r==16){
		inv[ii]=(game.add.sprite(xx, yy, 't_1110'));
		inv2[ii].length=0;
		inv2[ii]=[1,1,0,1];
	}
	if(r==17 || r==18){
		inv[ii]=(game.add.sprite(xx, yy, 't_1111'));
		inv2[ii].length=0;
		inv2[ii]=[1,1,1,1];
	}
	inv[ii].anchor.setTo(0.5, 0.5);
	inv[ii].animations.add('invIn');
	inv[ii].input.start(0, true);
    inv[ii].events.onInputDown.add(select);        
    inv[ii].animations.play('invIn', 30, false);

}

function coinPlusPlay(){
	if(soundOn==1){
		timeUpS.play('', 0, 0.3, false);
	}
}

function timeUpSplay(){
	if(soundOn==1){
		timeUpS.play();
	}
}

function winSplay(){
	if (soundOn==1){
		winS.play();
	}
}

function tubeSplay(){
	if(soundOn==1){
		var r=Math.floor(Math.random()*4);
		
		if(r==0){		
			tubeS.play('m0');	
		}
		if(r==1){					
			tubeS.play('m1');	
		}
		if(r==2){			
			tubeS.play('m2');	
		}
		if(r==3){	
			tubeS.play('m3');	
		}
	}
}

function nomSplay(){
	if(soundOn==1){
		var r=Math.floor(Math.random()*3);
		
		if(r==0){		
			nomS.play('nomM0');	
		}
		if(r==1){					
			nomS.play('nomM1');	
		}
		if(r==2){			
			nomS.play('nomM2');	
		}		
	}
}

function bananaSplay(r){
	if(soundOn==1){		
		
		if(r==0){		
			bananaS.play('banM0');	
		}
		if(r==1){					
			bananaS.play('banM1');	
		}			
	}
}

function comboUpSplay(){
	if(soundOn==1){
		comboUpS.play();
	}
}

function comboDownSplay(){
	if(soundOn==1){
		comboDownS.play();
	}
}

function addTubeSplay(){
	if(soundOn==1){
		addTubeS.play();
	}
}

function gamePausedFunc(){
	//console.log(nowMyStage);
	game.paused = false;
	inPauseG=1;
}

function gameResumedFunc(){
	//console.log("unPauseee");
	game.paused = false;
	inPauseG=0;	
}

function create(){
	
	//bg
	game.add.sprite(0,0, 'bg');

	game.time.advancedTiming=true;
	game.time.fpsMin = 5;
	game.time.fpsMax = 60;

	//отказ от автоПаузы
	game.onPause.add(gamePausedFunc);
	game.onResume.add(gameResumedFunc);

	/*game.stage.disablePauseScreen = true;
	game.stage.disableVisibilityChange = true;
	game.stage.webkitvisibilitychange = true;
	game.stage.mozvisibilitychange = true;
	game.stage.msvisibilitychange = true;*/

	//game.stage.events.visibilityChange.true(vChang);
	//inv[inv.length-1].events.onInputDown.add(select);

	//INV
	inv = [];
	var item;

	
	
	//КНОПКА СТАРТ
	btnStart = game.add.button(game.world.centerX, game.world.centerY, 'btnStart', actionStgSelect, this, 2, 1, 0);
    btnStart.anchor.setTo(0.5, 0.5);
    


    //ЗВУККК  МАРКЕР('КЛЮЧ', СТАРТ, ПРОДОЛЖИТЕЛЬНОСТЬ, УРОВЕНЬ, ЛУП)
    tubeS=game.add.sound('tube4', 1, false);
    tubeS.addMarker('m0', 0, 0.230, 1, false);
    tubeS.addMarker('m1', 0.249, 0.230, 1, false);
    tubeS.addMarker('m2', 0.528, 0.230, 1, false);
    tubeS.addMarker('m3', 0.765, 0.230, 1, false);
    nomS=game.add.sound('nom3', 1, false);
    nomS.addMarker('nomM0', 0, 0.787, 1, false);
    nomS.addMarker('nomM1', 0.787, 0.787, 1, false);
    nomS.addMarker('nomM2', 1.576, 0.787, 1, false);
    bananaS=game.add.sound('ban2', 1, false);
    bananaS.addMarker('banM0', 0, 0.177, 1, false);
    bananaS.addMarker('banM1', 0.177, 0.665, 1, false);
    musicS=game.add.sound('mus1', 0.5, true);
    comboUpS=game.add.sound('comboUpS1', 0.5, true);
    comboDownS=game.add.sound('comboDownS1', 0.5, true);
    addTubeS=game.add.sound('addTubeS1', 0.5, true);
    timeUpS=game.add.sound('timeUp', 1, true);
    winS=game.add.sound('winS1', 1, true);
    


} 



function actionOnstart(){
	
	if(nowMyStage==1 || nowMyStage==3 || nowMyStage==5 
		|| nowMyStage==7 || nowMyStage==9 || nowMyStage==11 || nowMyStage==13 
		|| nowMyStage==15 || nowMyStage==17 || nowMyStage==19){		
		tutorActive=1;
	}

	makakas5();
	createBanana();
	
	

	createField();		
	
	//И НАС
	createText();
	

	inPause=0;
	inFind=1;
	win=0;

	

	if(nowMyStage==1){
		tutor=game.add.sprite(0,0, 'tutor1');
		nowMyNeed=2000;
		timerMM=2;
		timerSS=59;
		nowMyCoins=0;
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==2){
		nowMyNeed=3000;
		timerMM=2;
		timerSS=59;
		tutorActive=0;
		nowMyCoins=0;
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==3){
		tutor=game.add.sprite(0,0, 'tutor3');
		nowMyNeed=3000000;
		nowMyNeed2=8;
		nowMyCombo=0;
		timerMM=2;
		timerSS=59;
		nowMyCoins=0;
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==4){
		nowMyNeed=3000000;
		nowMyNeed2=10;
		nowMyCombo=0;
		timerMM=2;
		timerSS=59;
		tutorActive=0;
		nowMyCoins=0;
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==5){
		tutor=game.add.sprite(0,0, 'tutor5');
		nowMyNeed=3000000;
		nowMyNeed2=3;
		nowMyCombo=0;
		timerMM=9;
		timerSS=59;	
		nowMyCoins=0;	
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==6){
		tutorActive=0;
		nowMyNeed=3000000;
		nowMyNeed2=5;
		nowMyCombo=0;
		timerMM=9;
		timerSS=59;		
		nowMyCoins=0;
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==7){
		tutor=game.add.sprite(0,0, 'tutor7');
		nowMyNeed=2500;
		timerMM=0;
		timerSS=59;
		nowMyCoins=0;
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==8){
		nowMyNeed=3000;
		timerMM=0;
		timerSS=59;
		tutorActive=0;
		nowMyCoins=0;
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==9){
		tutor=game.add.sprite(0,0, 'tutor9');
		nowMyNeed=3000000;
		nowMyNeed2=5;
		nowMyCombo=0;
		timerMM=9;
		timerSS=59;	
		nowMyCoins=0;	
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==10){
		tutorActive=0;
		nowMyNeed=3000000;
		nowMyNeed2=7;
		nowMyCombo=0;
		timerMM=9;
		timerSS=59;	
		nowMyCoins=0;	
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==11){
		tutor=game.add.sprite(0,0, 'tutor9');
		nowMyNeed=4500;
		timerMM=3;
		timerSS=59;		
		nowMyCoins=0;
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==12){
		nowMyNeed=4500;
		timerMM=2;
		timerSS=59;
		tutorActive=0;
		nowMyCoins=0;
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==13){
		tutor=game.add.sprite(0,0, 'tutor3');
		nowMyNeed=4500000;
		nowMyNeed2=10;
		nowMyCombo=0;
		timerMM=3;
		timerSS=59;
		
		nowMyCoins=0;
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==14){
		nowMyNeed=4500000;
		nowMyNeed2=15;
		nowMyCombo=0;
		timerMM=2;
		timerSS=59;
		tutorActive=0;
		nowMyCoins=0;
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==15){
		tutor=game.add.sprite(0,0, 'tutor7');
		nowMyNeed=2500;
		timerMM=0;
		timerSS=59;
		nowMyCoins=0;
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==16){
		nowMyNeed=3000;
		timerMM=0;
		timerSS=59;
		tutorActive=0;
		nowMyCoins=0;
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==17){
		tutor=game.add.sprite(0,0, 'tutor9');
		nowMyNeed=3000000;
		nowMyNeed2=5;
		nowMyCombo=0;
		timerMM=6;
		timerSS=59;	
		nowMyCoins=0;	
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==18){
		tutorActive=0;
		nowMyNeed=3000000;
		nowMyNeed2=7;
		nowMyCombo=0;
		timerMM=4;
		timerSS=59;	
		nowMyCoins=0;	
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==19){
		tutor=game.add.sprite(0,0, 'tutor5');
		nowMyNeed=3000000;
		nowMyNeed2=5;
		nowMyCombo=0;
		timerMM=4;
		timerSS=59;	
		nowMyCoins=0;	
		nowMyCoinsTemp=0;
	}

	if(nowMyStage==20){
		tutorActive=0;
		nowMyNeed=3000000;
		nowMyNeed2=7;
		nowMyCombo=0;
		timerMM=4;
		timerSS=59;		
		nowMyCoins=0;
		nowMyCoinsTemp=0;
	}


	//таймер
	timerSSt = game.time.create(false);
	timerSSt.add(1000, timerSSf, this);
	timerSSt.start();
	
}

function timerSSf(){
	if(win==0){
		timerSS--;
	}
	if(timerSS<0){
		timerSS=59;
		timerMM--;
	}
	//console.log(timerSS);
	if(timerMM<0){
		timerMM=0;
		
	}
	if(timerSS<10){
		invTxt[invTxt.length-1].setText('0'+timerMM+':0'+timerSS);
	} else {
		invTxt[invTxt.length-1].setText('0'+timerMM+':'+timerSS);
	}
	if(timerMM<1){
		if(timerSS<30){
			invTxt[invTxt.length-2].scale.x=1.3;
			invTxt[invTxt.length-2].scale.y=1.3;
			timTween=game.add.tween(invTxt[invTxt.length-2].scale)
			timTween.to({x: 1, y: 1}, 180, Phaser.Easing.Cubic.Out);
			timTween.start();
			timeUpSplay();
		}
	}
	if(timerSS==0 && timerMM==0){
		
		inPause=6;
		//LOSE
	}
	var ppC=0;
	for(var pp=0; pp<makak.length; pp++){
		if(makakActive[pp]==0){
			ppC++;
		}
	}
	if(ppC>2){
		inPause=6;
	}
	if(nowMyStage>18){
		for(pp=0; pp<makak.length; pp++){
			if(makakActive[pp]==0){
				ppC++;
			}
		}
		if(ppC>0){
			inPause=6;
		}
	}
	timerSSt.add(1000, timerSSf, this);
}

////////////////
//СТАЖЕ СЕЛЕКТ
///////////////
function actionStgSelect(){
	//ФУЛЛСКРИН???
	//game.stage.scale.startFullScreen();
	//btnStart.input.destroy();
	btnStart.x=-500;

	win=0;
	createStageField();	
	if(musicPlay==0){
		musicS.play('', 0, 0.8, true);
		musicPlay=1;
	}
}

function createStageField(){
	addStg(-100, 0); //0

	//1row
	addStg(20+60,270+60);
	addStg(140+60,270+60);
	addStg(260+60,270+60);
	addStg(380+60,270+60);
	addStg(500+60,270+60);


	
	//2row
	addStg(20+60,390+60);
	addStg(140+60,390+60);
	addStg(260+60,390+60);
	addStg(380+60,390+60);
	addStg(500+60,390+60);


	//3row
	addStg(20+60,510+60);
	addStg(140+60,510+60);
	addStg(260+60,510+60);
	addStg(380+60,510+60);
	addStg(500+60,510+60);


	//4row
	addStg(20+60,630+60);
	addStg(140+60,630+60);
	addStg(260+60,630+60);
	addStg(380+60,630+60);
	addStg(500+60,630+60);

	addAcc();
	
}

//АЧЧИВЫ
function addAcc(){

	var s;

	if(acc[1]==0){
		inv[inv.length]=(game.add.sprite(140, 90, 'acc01e'));
	    inv[inv.length-1].anchor.setTo(0.5, 0.5);
	} else {
		inv[inv.length]=(game.add.sprite(140, 90, 'acc01'));
	    inv[inv.length-1].anchor.setTo(0.5, 0.5);
	    if(acc[1]==1){
		   	inv[inv.length-1].scale.x=0;
		    inv[inv.length-1].scale.y=0;		
			s = game.add.tween(inv[inv.length-1].scale);
		    s.to({x:1, y:1}, 500, Phaser.Easing.Bounce.Out);	    
		    s.start();
		    comboUpSplay();	
		    acc[1]=2;
		}

	    inv[inv.length-1].input.start(0, true);	   
	    inv[inv.length-1].events.onInputDown.add(acc1F);
	}

	if(acc[2]==0){
	    inv[inv.length]=(game.add.sprite(260, 90, 'acc02e'));
	    inv[inv.length-1].anchor.setTo(0.5, 0.5);
	} else {
		inv[inv.length]=(game.add.sprite(260, 90, 'acc02'));
	    inv[inv.length-1].anchor.setTo(0.5, 0.5);
	    if(acc[2]==1){
		    inv[inv.length-1].scale.x=0;
		    inv[inv.length-1].scale.y=0;		
			s = game.add.tween(inv[inv.length-1].scale);
		    s.to({x:1, y:1}, 500, Phaser.Easing.Bounce.Out);	    
		    s.start();
		    comboUpSplay();		    
		    acc[2]=2;
		}

	    inv[inv.length-1].input.start(0, true);
	    inv[inv.length-1].events.onInputDown.add(acc2F);
	}

	if(acc[3]==0){
	    inv[inv.length]=(game.add.sprite(380, 90, 'acc03e'));
	    inv[inv.length-1].anchor.setTo(0.5, 0.5);
	} else {
		inv[inv.length]=(game.add.sprite(380, 90, 'acc03'));
	    inv[inv.length-1].anchor.setTo(0.5, 0.5);
	    if(acc[3]==1){
		    inv[inv.length-1].scale.x=0;
		    inv[inv.length-1].scale.y=0;			
			s = game.add.tween(inv[inv.length-1].scale);
		    s.to({x:1, y:1}, 500, Phaser.Easing.Bounce.Out);	    
		    s.start();
		    acc[3]=2;
		    comboUpSplay();	
		}
	    inv[inv.length-1].input.start(0, true);
	    inv[inv.length-1].events.onInputDown.add(acc3F);
	}

	if(acc[4]==0){
	    inv[inv.length]=(game.add.sprite(500, 90, 'acc04e'));
	    inv[inv.length-1].anchor.setTo(0.5, 0.5);
	} else {
		inv[inv.length]=(game.add.sprite(500, 90, 'acc04'));
	    inv[inv.length-1].anchor.setTo(0.5, 0.5);
	    if(acc[4]==1){
		    inv[inv.length-1].scale.x=0;
		    inv[inv.length-1].scale.y=0;			
			s = game.add.tween(inv[inv.length-1].scale);
		    s.to({x:1, y:1}, 500, Phaser.Easing.Bounce.Out);	    
		    s.start();
		    acc[4]=2;
		    comboUpSplay();	
		}
		inv[inv.length-1].input.start(0, true);
	    inv[inv.length-1].events.onInputDown.add(acc4F);
	}

	if(acc[5]==0){
	    inv[inv.length]=(game.add.sprite(140, 210, 'acc05e'));
	    inv[inv.length-1].anchor.setTo(0.5, 0.5);
	} else {
		inv[inv.length]=(game.add.sprite(140, 210, 'acc05'));
	    inv[inv.length-1].anchor.setTo(0.5, 0.5);
	    if(acc[5]==1){
		    inv[inv.length-1].scale.x=0;
		    inv[inv.length-1].scale.y=0;			
			s = game.add.tween(inv[inv.length-1].scale);
		    s.to({x:1, y:1}, 500, Phaser.Easing.Bounce.Out);	    
		    s.start();
		    acc[5]=2;
		    comboUpSplay();	
		}
		inv[inv.length-1].input.start(0, true);
	    inv[inv.length-1].events.onInputDown.add(acc5F);
	}

	if(acc[6]==0){
	    inv[inv.length]=(game.add.sprite(260, 210, 'acc06e'));
	    inv[inv.length-1].anchor.setTo(0.5, 0.5);
	} else {
		inv[inv.length]=(game.add.sprite(260, 210, 'acc06'));
	    inv[inv.length-1].anchor.setTo(0.5, 0.5);
	    if(acc[6]==1){
		    inv[inv.length-1].scale.x=0;
		    inv[inv.length-1].scale.y=0;
			s = game.add.tween(inv[inv.length-1].scale);
		    s.to({x:1, y:1}, 500, Phaser.Easing.Bounce.Out);	    
		    s.start();
		    acc[6]=2;
		    comboUpSplay();	
		}
		inv[inv.length-1].input.start(0, true);
	    inv[inv.length-1].events.onInputDown.add(acc6F);
	}

	if(acc[7]==0){
	    inv[inv.length]=(game.add.sprite(380, 210, 'acc07e'));
	    inv[inv.length-1].anchor.setTo(0.5, 0.5);
	} else {
		inv[inv.length]=(game.add.sprite(380, 210, 'acc07'));
	    inv[inv.length-1].anchor.setTo(0.5, 0.5);
	    if(acc[7]==1){
		    inv[inv.length-1].scale.x=0;
		    inv[inv.length-1].scale.y=0;			
			s = game.add.tween(inv[inv.length-1].scale);
		    s.to({x:1, y:1}, 500, Phaser.Easing.Bounce.Out);	    
		    s.start();
		    acc[7]=2;
		    comboUpSplay();	
		}
		inv[inv.length-1].input.start(0, true);
	    inv[inv.length-1].events.onInputDown.add(acc7F);
	}

	if(acc[8]==0){
	    inv[inv.length]=(game.add.sprite(500, 210, 'acc08e'));
	    inv[inv.length-1].anchor.setTo(0.5, 0.5);
	} else {
		inv[inv.length]=(game.add.sprite(500, 210, 'acc08'));
	    inv[inv.length-1].anchor.setTo(0.5, 0.5);
	    if(acc[8]==1){
		    inv[inv.length-1].scale.x=0;
		    inv[inv.length-1].scale.y=0;			
			s = game.add.tween(inv[inv.length-1].scale);
		    s.to({x:1, y:1}, 500, Phaser.Easing.Bounce.Out);	    
		    s.start();
		    acc[8]=2;
		    comboUpSplay();
		}
		inv[inv.length-1].input.start(0, true);
	    inv[inv.length-1].events.onInputDown.add(acc8F);
	}
}

function accBackF(){
	btnBck2.destroy();
	accTemp.destroy();
	accText.destroy();
	if(tutorActive==1){
		tutorActive=0;
		tutor.destroy();
	}
	for (var i=0; i<inv.length; i++) {
		inv[i].y+=960;
	}
	for (var i=0; i<interf.length; i++) {
		interf[i].y+=960;
	}
	for (var i=0; i<invTxt.length; i++) {
		invTxt[i].y+=960;
	}

}

function acc1F(){
	for (var i=0; i<inv.length; i++) {
		inv[i].y-=960;
	}
	for (var i=0; i<interf.length; i++) {
		interf[i].y-=960;
	}
	for (var i=0; i<invTxt.length; i++) {
		invTxt[i].y-=960;
	}
	accText=game.add.bitmapText(100, 180, "LORD OF MAKAKAS! \n\n\n\n\n You have finished \n all levels!", style2);
	accTemp=game.add.sprite(320, 420, 'acc1');
	accTemp.anchor.setTo(0.5, 0.5);		
	btnBck2=game.add.button(420, 660, 'backBtn1', accBackF, this, 0, 0, 0)
}

function acc2F(){
	for (var i=0; i<inv.length; i++) {
		inv[i].y-=960;
	}
	for (var i=0; i<interf.length; i++) {
		interf[i].y-=960;
	}
	for (var i=0; i<invTxt.length; i++) {
		invTxt[i].y-=960;
	}
	accText=game.add.bitmapText(120, 180, "BREADWINNER! \n\n\n\n\n You have finished \n first level!", style2);
	accTemp=game.add.sprite(320, 420, 'acc2');
	accTemp.anchor.setTo(0.5, 0.5);		
	btnBck2=game.add.button(420, 660, 'backBtn1', accBackF, this, 0, 0, 0)
}

function acc3F(){
	for (var i=0; i<inv.length; i++) {
		inv[i].y-=960;
	}
	for (var i=0; i<interf.length; i++) {
		interf[i].y-=960;
	}
	for (var i=0; i<invTxt.length; i++) {
		invTxt[i].y-=960;
	}
	accText=game.add.bitmapText(150, 180, "HIGHT RATING! \n\n\n\n\n Your rating \n is up!", style2);
	accTemp=game.add.sprite(320, 420, 'acc3');
	accTemp.anchor.setTo(0.5, 0.5);		
	btnBck2=game.add.button(420, 660, 'backBtn1', accBackF, this, 0, 0, 0)
}

function acc4F(){
	for (var i=0; i<inv.length; i++) {
		inv[i].y-=960;
	}
	for (var i=0; i<interf.length; i++) {
		interf[i].y-=960;
	}
	for (var i=0; i<invTxt.length; i++) {
		invTxt[i].y-=960;
	}
	accText=game.add.bitmapText(85, 180, "JUNGLE MILLIONARE! \n\n\n\n\n Your first \n 10 000!", style2);
	accTemp=game.add.sprite(320, 420, 'acc4');
	accTemp.anchor.setTo(0.5, 0.5);		
	btnBck2=game.add.button(420, 660, 'backBtn1', accBackF, this, 0, 0, 0)
}

function acc5F(){
	for (var i=0; i<inv.length; i++) {
		inv[i].y-=960;
	}
	for (var i=0; i<interf.length; i++) {
		interf[i].y-=960;
	}
	for (var i=0; i<invTxt.length; i++) {
		invTxt[i].y-=960;
	}
	accText=game.add.bitmapText(135, 180, "FEED THEM ALL! \n\n\n\n\n All makakas fed! \n ", style2);
	accTemp=game.add.sprite(320, 420, 'acc5');
	accTemp.anchor.setTo(0.5, 0.5);		
	btnBck2=game.add.button(420, 660, 'backBtn1', accBackF, this, 0, 0, 0)
}

function acc6F(){
	for (var i=0; i<inv.length; i++) {
		inv[i].y-=960;
	}
	for (var i=0; i<interf.length; i++) {
		interf[i].y-=960;
	}
	for (var i=0; i<invTxt.length; i++) {
		invTxt[i].y-=960;
	}
	accText=game.add.bitmapText(120, 180, "SWIRL THEM ALL! \n\n\n\n\n All pipes \n dissappeared!", style2);
	accTemp=game.add.sprite(320, 420, 'acc6');
	accTemp.anchor.setTo(0.5, 0.5);		
	btnBck2=game.add.button(420, 660, 'backBtn1', accBackF, this, 0, 0, 0)
}

function acc7F(){
	for (var i=0; i<inv.length; i++) {
		inv[i].y-=960;
	}
	for (var i=0; i<interf.length; i++) {
		interf[i].y-=960;
	}
	for (var i=0; i<invTxt.length; i++) {
		invTxt[i].y-=960;
	}
	accText=game.add.bitmapText(130, 180, "COMBO MASTER! \n\n\n\n\n Awesome combo \n you made!", style2);
	accTemp=game.add.sprite(320, 420, 'acc7');
	accTemp.anchor.setTo(0.5, 0.5);		
	btnBck2=game.add.button(420, 660, 'backBtn1', accBackF, this, 0, 0, 0)
}

function acc8F(){
	for (var i=0; i<inv.length; i++) {
		inv[i].y-=960;
	}
	for (var i=0; i<interf.length; i++) {
		interf[i].y-=960;
	}
	for (var i=0; i<invTxt.length; i++) {
		invTxt[i].y-=960;
	}
	accText=game.add.bitmapText(70, 180, "GREAT FAMINE! \n\n\n\n\n You have not turned... \n Hug me!", style2);
	accTemp=game.add.sprite(320, 420, 'acc8');
	accTemp.anchor.setTo(0.5, 0.5);		
	btnBck2=game.add.button(420, 660, 'backBtn1', accBackF, this, 0, 0, 0)
}

function addStg(xx, yy){
	var m=inv.length;
	
	
    if(m>nowMyProgress){
    	inv[inv.length]=(game.add.sprite(xx, yy, 'stagZ'));
    	inv[inv.length-1].anchor.setTo(0.5, 0.5);
    	//invTxt[invTxt.length-1].setText('X');
    } else {
    	inv[inv.length]=(game.add.sprite(xx, yy, 'stag1'));
		inv[inv.length-1].anchor.setTo(0.5, 0.5);
		inv[inv.length-1].input.start(0, true);
   	 	inv[inv.length-1].events.onInputDown.add(selectStg);
    	invTxt[invTxt.length] = game.add.bitmapText(xx, yy-35, '0', style3);
    	invTxt[invTxt.length-1].setText(''+m);

    	invTxt[invTxt.length-1].anchor.setTo(0.5,0.5); //fixMe
   		invTxt[invTxt.length] = game.add.bitmapText(xx-45, yy, ""+totalRaiting[m], style4);
    }
    
    
    
}

function selectStg(item, pointer){
	//if(nowMyStage<=nowMyProgress){}
	nowMyStage = inv.indexOf(item);
	
	clearStg();
	actionOnstart();
}

function clearStg(){
	for (var i = 0; i<inv.length; i++) {
			//inv.getAt(i).x=-900;
			inv[i].input.destroy();
			inv[i].destroy();
		}
	for (var i = inv.length-1; i>=0; i--) {			
			inv.shift();
		}
	//inv.destroy;
	for (var i= 0; i<invTxt.length; i++){
		invTxt[i].x=-900;
		invTxt[i].destroy();
		}
	for (var i = invTxt.length-1; i>=0; i--) {			
		invTxt.shift();
	}
	invTxt.length=0;
	inv.length=0;
	
}

////////////////////////
//НЕ ПОБЕДА
///////////////////////
function loosFu(){
	if(tutorActive==1){
		//таймерррр
		
		tutorActive=0;
		tutor.destroy();
		
	}
	if(acc[8]==0){
		acc[8]=1;
	}
	button.y=-500;
	buttonD.y=-500;
	buttonB.y=-500;
	for(var i=0; i<makak.length; i++){	
		if(makakActive[i]==1){
			makak[i].animations.frame=20;
			makak[i].animations.paused=true;
		}
		
	}
	destroyF();
	interf[0]= game.add.sprite(320, 350, 'youLos1');
	interf[0].anchor.setTo(0.5, 0.5);
	interf[0].scale.x=0;
	interf[0].scale.y=0;

	var s;
	s = game.add.tween(interf[0].scale);
    s.to({x:1, y:1}, 1000, Phaser.Easing.Bounce.Out);
    s.onComplete.addOnce(interfComplete0, this);
    s.start();
}
////////////////////////
//ПОБЕДА
///////////////////////
function winFu(){
	winSplay();
	if(tutorActive==1){
		//таймерррр
		
		tutorActive=0;
		tutor.destroy();
		
	}
	if(nowMyStage==1 && acc[2]==0){
		acc[2]=1;
	}
	if(win==1){
		if(nowMyStage+1>nowMyProgress){
			if(nowMyProgress<21){
				nowMyProgress++;
			}
		}
	}
	button.y=-500;
	buttonD.y=-500;
	buttonB.y=-500;

	//console.log("1");
	for(var i=0; i<makak.length; i++){					
		makak[i].animations.stop();		
	}
	destroyF();
	text2=game.add.bitmapText(20, 715, 'coins: '+nowMyCoins, style2);
	nowMyCoinsWin=nowMyCoins;

	//console.log("2");

	interf[0]= game.add.sprite(320, 350, 'youWin1');
	interf[0].anchor.setTo(0.5, 0.5);
	interf[0].scale.x=0;
	interf[0].scale.y=0;

	//надоть перенесть на пораньше
	var s;
	s = game.add.tween(interf[0].scale);
    s.to({x:1, y:1}, 1000, Phaser.Easing.Bounce.Out);
    s.onComplete.addOnce(interfComplete0, this);
    s.start();

}

function interfComplete0(){

	//makakaRating
	var r, xx, yy;
	var makakaRating=0;
	if(win==1){
		for(var ii=0; ii<makak.length; ii++){
			if(makakActive[ii]==1){
				r=makak[ii].animations.frame;
			} else {
				r=1;
			}
			xx=makak[ii].x; 
			yy=makak[ii].y;
			makak[ii].destroy();
			if(r<=20){
				makak[ii]= game.add.sprite(xx, yy, 'makakaR');
				makak[ii].anchor.setTo(0.5, 0.5);
				makak[ii].animations.add('makakakR');
				makak[ii].animations.frame=0;		
				makak[ii].animations.paused=true;
				makakaRating++;
			} else {
				makak[ii]= game.add.sprite(xx, yy, 'makakaR');
				makak[ii].anchor.setTo(0.5, 0.5);
				makak[ii].animations.add('makakakR');
				makak[ii].animations.frame=r-20;		
				makak[ii].animations.paused=true;
				makakaRating=makakaRating+r-19;
			}
				
		}
	} else if(win==-1){
		for(var ii=0; ii<makak.length; ii++){
			xx=makak[ii].x; 
			yy=makak[ii].y;
			makak[ii].destroy();
			makak[ii]= game.add.sprite(xx, yy, 'makakOhNo1');
			makak[ii].anchor.setTo(0.5, 0.5);
		}
	}
	
	//back
	interf[1]= game.add.sprite(88, 620, 'backBtn1');	
	interf[1].scale.x=0;
	interf[1].scale.y=0;

	var s;
	s = game.add.tween(interf[1].scale);
    s.to({x:1, y:1}, 500, Phaser.Easing.Bounce.Out);
    s.onComplete.addOnce(interfComplete1, this);
    s.start();

    //next
    if(win==1){
    	interf[2]= game.add.sprite(551, 620, 'nextBtn1');	
	} else if(win==-1){
		interf[2]= game.add.sprite(551, 620, 'retryBtn1');	
	}
    interf[2].anchor.setTo(1, 0);
	interf[2].scale.x=0;
	interf[2].scale.y=0;

	var s;
	s = game.add.tween(interf[2].scale);
    s.to({x:1, y:1}, 500, Phaser.Easing.Bounce.Out);
    s.onComplete.addOnce(interfComplete2, this);
    s.start();

    if(win==-1){
    	interf[1].y=520;
    	interf[2].y=520;
    }

    //totalCoins
    totalCoinsTemp=totalCoins;
    totalCoins=totalCoins+nowMyCoins;
    if(totalCoins>=10000 && acc[4]==0){
    	acc[4]=1;
    }
    interf[3] = game.add.bitmapText(88, 440, "total coins:" + totalCoinsTemp, style2);

    //makakaRating
    if(makakaRating<=10){
    	interf[4] = game.add.bitmapText(88, 500, "rating: "/*+makakaRating*/+"SAD...", style2);
    }
    if(makakaRating>10 && makakaRating<=20){
    	interf[4] = game.add.bitmapText(88, 500, "rating: "/*+makakaRating*/+"NORM...", style2);
    }
    if(makakaRating>20 && makakaRating<=30){
    	interf[4] = game.add.bitmapText(88, 500, "rating: "/*+makakaRating*/+"GOOD!", style2);
    }
    if(makakaRating>30 && makakaRating<=40){
    	interf[4] = game.add.bitmapText(88, 500, "rating: "/*+makakaRating*/+"COOL!", style2);
    }
    if(makakaRating>40 && makakaRating<=45){
    	interf[4] = game.add.bitmapText(88, 500, "rating: "/*+makakaRating*/+"GREAT!", style2);
    }
    if(makakaRating>45 && makakaRating<50){
    	interf[4] = game.add.bitmapText(88, 500, "rating: "/*+makakaRating*/+"SUPER!", style2);
    }
    if(makakaRating==50){
    	interf[4] = game.add.bitmapText(88, 500, "rating: "/*+makakaRating*/+"WOW!", style2);
    }

    if(totalRaitingN[nowMyStage]<makakaRating){
    	totalRaitingN[nowMyStage]=makakaRating;
    }

    if(totalRaitingN[nowMyStage]<=10){
    	totalRaiting[nowMyStage] = "sad...";
    }
    if(totalRaitingN[nowMyStage]>10 && totalRaitingN[nowMyStage]<=20){
    	totalRaiting[nowMyStage] = "norm...";
    }
    if(totalRaitingN[nowMyStage]>20 && totalRaitingN[nowMyStage]<=30){
    	totalRaiting[nowMyStage] = "good!";
    }
    if(totalRaitingN[nowMyStage]>30 && totalRaitingN[nowMyStage]<=40){
    	totalRaiting[nowMyStage] = "cool!";
    }
    if(totalRaitingN[nowMyStage]>40 && totalRaitingN[nowMyStage]<=45){
    	totalRaiting[nowMyStage] = "great!";
    }
    if(totalRaitingN[nowMyStage]>45 && totalRaitingN[nowMyStage]<50){
    	totalRaiting[nowMyStage] = "super!";
    }
    if(totalRaitingN[nowMyStage]==50){
    	totalRaiting[nowMyStage] = "wow!";
    }


    if(win==-1){
    	interf[3].y=-300;
    	interf[4].y=-300;

    }

    addAcc();

}

function interfComplete1(){
	interf[1].input.start(0, true);
	interf[1].events.onInputDown.add(interFbackF);
}

function interfComplete2(){
	interf[2].input.start(0, true);
	if(win==1){
		interf[2].events.onInputDown.add(interNextF);
	} else if(win==-1){
		interf[2].events.onInputDown.add(interRetryF);
	}
}

function interFbackF(){	
	accDestroy();
	destroyTxt();
	destroyInterf();
	removeMakakas();
	nowMyCoinsTemp=0;
	nowMyCoins=0;
	inPause=1;
	btnStart.x = game.world.centerX;
	inFind=1;

}

function interNextF(){
	accDestroy();
	destroyTxt();
	destroyInterf();
	removeMakakas();
	nowMyCoinsTemp=0;
	nowMyCoins=0;
	actionStgSelect();
}

function interRetryF(){
	accDestroy();
	destroyTxt();
	destroyInterf();
	removeMakakas();
	nowMyCoinsTemp=0;
	nowMyCoins=0;
	win=0;
	actionOnstart();
}


function makakaTest(){
	var tstM=0;
	for (var ii=0; ii<makak.length; ii++) {	
	
		if(makakActive[ii]==1){
			if(makak[ii].animations.currentFrame.index>19){
				tstM++;
			}
		} else if(makakActive[ii]==0){
			tstM++;
		}
	}
	if(tstM==5){
		return true;
	}
}

////////////////////////
//НАШЕ ВСЁ
///////////////////////

function update(){
	if(game.paused){
		console.log("555");
	}
	//console.log(game.device);

	if(win==1 && nowMyCoinsWin>0 && interf[3]!=null){
		totalCoinsTemp+=10;
		nowMyCoinsWin-=10;
		interf[3].setText("total coins:" + totalCoinsTemp);
		text2.setText('coins:' + nowMyCoinsWin);
		if(nowMyCoinsWin==0){
			//text2.y=-500;
		}
		coinPlusPlay();
	}


	if(inPause==0 || inPause==4 || inPause==5 || inPause==6 || inPause==7){

		//MAKAKA ANIMATION STOP
		if(win==0){
			for(var i=0; i<makak.length; i++){
			if(makakActive[i]==1){
				if(makak[i].animations.currentFrame.index==19){				
					makak[i].animations.stop();
					makak[i].animations.frame=makakRot[i];
				}
			}
			}
		}

		//COINS+
		if(nowMyCoins<nowMyCoinsTemp){
				nowMyCoins+=10;
		}
		if(win==0){
			text2.setText('coins:' + nowMyCoins);
			text.setText('fps:' + game.time.fps);
		}

		if(nowMyStage==1 && win==0){
			if(inPause==0){
				text2.setText('coins:' + nowMyCoins + '/' + nowMyNeed);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==2 && win==0){
			if(inPause==0){
				text2.setText('coins:' + nowMyCoins + '/' + nowMyNeed);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==3 && win==0){
			if(inPause==0){
				text2.setText('combo: '+nowMyCombo+'/'+nowMyNeed2);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==4 && win==0){
			if(inPause==0){
				text2.setText('combo: '+nowMyCombo+'/'+nowMyNeed2);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==5 && win==0){
			if(inPause==0){
				text2.setText('feed them all: '+nowMyCombo+'/'+nowMyNeed2);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==6 && win==0){
			if(inPause==0){
				text2.setText('feed them all: '+nowMyCombo+'/'+nowMyNeed2);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==7 && win==0){
			if(inPause==0){
				text2.setText('coins:' + nowMyCoins + '/' + nowMyNeed);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==8 && win==0){
			if(inPause==0){
				text2.setText('coins:' + nowMyCoins + '/' + nowMyNeed);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==9 && win==0){
			if(inPause==0){
				text2.setText('swirl them all: '+nowMyCombo+'/'+nowMyNeed2);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==10 && win==0){
			if(inPause==0){
				text2.setText('swirl them all: '+nowMyCombo+'/'+nowMyNeed2);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==11 && win==0){
			if(inPause==0){
				text2.setText('coins:' + nowMyCoins + '/' + nowMyNeed);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==12 && win==0){
			if(inPause==0){
				text2.setText('coins:' + nowMyCoins + '/' + nowMyNeed);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==13 && win==0){
			if(inPause==0){
				text2.setText('combo: '+nowMyCombo+'/'+nowMyNeed2);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==14 && win==0){
			if(inPause==0){
				text2.setText('combo: '+nowMyCombo+'/'+nowMyNeed2);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==15 && win==0){
			if(inPause==0){
				text2.setText('coins:' + nowMyCoins + '/' + nowMyNeed);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==16 && win==0){
			if(inPause==0){
				text2.setText('coins:' + nowMyCoins + '/' + nowMyNeed);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==17 && win==0){
			if(inPause==0){
				text2.setText('swirl them all: '+nowMyCombo+'/'+nowMyNeed2);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==18 && win==0){
			if(inPause==0){
				text2.setText('swirl them all: '+nowMyCombo+'/'+nowMyNeed2);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==19 && win==0){
			if(inPause==0){
				text2.setText('feed them all: '+nowMyCombo+'/'+nowMyNeed2);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}

		if(nowMyStage==20 && win==0){
			if(inPause==0){
				text2.setText('feed them all: '+nowMyCombo+'/'+nowMyNeed2);
			} else if(inPause==5){
				text2.setText('coins:' + nowMyCoins);
			}

		}



		//победка
		if(inPause==4){
			if(nowMyCoins==nowMyCoinsTemp && makakaTest()){
				if(nowMyStage==1 && nowMyCoins>=nowMyNeed){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==2 && nowMyCoins>=nowMyNeed){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==3 && nowMyCombo>=nowMyNeed2){
					if(acc[7]==0){
						acc[7]=1;
					}
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==4 && nowMyCombo>=nowMyNeed2){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==5 && nowMyCombo>=nowMyNeed2){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==6 && nowMyCombo>=nowMyNeed2){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==7 && nowMyCoins>=nowMyNeed){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==8 && nowMyCoins>=nowMyNeed){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==9 && nowMyCombo>=nowMyNeed2){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==10 && nowMyCombo>=nowMyNeed2){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==11 && nowMyCoins>=nowMyNeed){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==12 && nowMyCoins>=nowMyNeed){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==13 && nowMyCombo>=nowMyNeed2){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==14 && nowMyCombo>=nowMyNeed2){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==15 && nowMyCoins>=nowMyNeed){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==16 && nowMyCoins>=nowMyNeed){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==17 && nowMyCombo>=nowMyNeed2){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==18 && nowMyCombo>=nowMyNeed2){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==19 && nowMyCombo>=nowMyNeed2){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}

				if(nowMyStage==20 && nowMyCombo>=nowMyNeed2){
					
					win=1;
					timerSSt.stop();
					inPause=5;
					winFu();
					//return;
				}
			}
		}

		//пораженька
		if(inPause==6){
			
			win=-1;
			timerSSt.stop();
			inPause=7;
			loosFu();
		}
	}

	if(inPause==0){
		
		
		
		
		for(var i=0; i<inv.length; i++){

				//ПАУЗИМ АНИМАЦИЮ
		    	if(bananaDownNow==0 && inv[i].animations.currentFrame.index>9){
		    		inv[i].animations.frame=9;
		    		inv[i].animations.paused=true;
		    	}

			   	/*if(inv[i].scale.x>1){
		    		inv[i].angle+=10;
		    		inv[i].scale.x-=0.1;
		    		inv[i].scale.y-=0.1;	   	    		 		
		    	}*/
		    	/*if(inv[i].scale.x>0.92 && inv[i].scale.x<1.02){
		    		inv[i].scale.x=1;
		    		inv[i].scale.y=1;
		    		//Если поворот окончен - ИЩЕМ ПУТЬ
		    		if(inFind==1){
						//logF();
					}
		    	}*/
		    	//inv[i].angle = Math.floor(inv[i].angle);
		    	
		    	
		    }

		//ПАДАЮТ БАНАНЫ
		if(bananaDownNow==0){
			
			if(banana0.animations.currentFrame.index==banana0.animations.frameTotal-1 || 
				banana1.animations.currentFrame.index==banana1.animations.frameTotal-1 || 
				banana2.animations.currentFrame.index==banana2.animations.frameTotal-1 || 
				banana3.animations.currentFrame.index==banana3.animations.frameTotal-1 || 
				banana4.animations.currentFrame.index==banana4.animations.frameTotal-1){
					
					bananaDownNow=1;

					pathEndTest(path0);
					pathEndTest(path1);
					pathEndTest(path2);
					pathEndTest(path3);
					pathEndTest(path4);

					var mmC=0;
					var mute=0;
					if(banana20act==1){
						mmC++;
					}
					if(banana21act==1){
						mmC++;
					}
					if(banana22act==1){
						mmC++;
					}
					if(banana23act==1){
						mmC++;
					}
					if(banana24act==1){
						mmC++;
					}
					//console.log(mmC);
					if(mmC!=1){
						mute=0;
					} else if(banana20act==1 && makakActive[0]==0){
						mute=1;
					} else if(banana21act==1 && makakActive[1]==0){
						mute=1;
					} else if(banana22act==1 && makakActive[2]==0){
						mute=1;
					} else if(banana23act==1 && makakActive[3]==0){
						mute=1;
					} else if(banana24act==1 && makakActive[4]==0){
						mute=1;
					} 
					if(mute==0){
						nomSplay();
					} 
					bananaSplay(0);
					bananaSplay(1);

					
					

					if(banana20act==1){

						banana20.x = 80;
						banana20.y = 690+110;						
						if(makakActive[0]==0){
							banana20.x=-300;
						}
						bananaDown(banana20, banana20act);
						if(makakActive[0]==1){
							makak[0].animations.play('makakak', 30, true);		
							if(makakRot[0]<29){							
								makakRot[0]++;
							}
						}
					} else if(nowMyStage>10){
						//if(makakRot[0]>20){
							makakRot[0]--;
							makak[0].animations.frame=makakRot[0];
							
							if(makak[0].animations.frame==18){
								var xxx=makak[0].x;
								var yyy=makak[0].y;
								makak[0].destroy();
								makak[0]=game.add.sprite(xxx, yyy, 'makakOhNo1');
								makak[0].anchor.setTo(0.5,0.5);
								makakActive[0]=0;
							}
						//}
					}
					if(banana21act==1){
						banana21.x = 200;
						banana21.y = 690+110;
						if(makakActive[1]==0){
							banana21.x=-300;
						}
						bananaDown(banana21, banana21act);
						if(makakActive[1]==1){
							makak[1].animations.play('makakak', 30, false);
							if(makakRot[1]<29){
								makakRot[1]++;
							}
						}
					}else if(nowMyStage>10){
						//if(makakRot[0]>20){
							makakRot[1]--;
							makak[1].animations.frame=makakRot[1];
							
							if(makak[1].animations.frame==18){
								var xxx=makak[1].x;
								var yyy=makak[1].y;
								makak[1].destroy();
								makak[1]=game.add.sprite(xxx, yyy, 'makakOhNo1');
								makak[1].anchor.setTo(0.5,0.5);
								makakActive[1]=0;
							}
						//}
					}
					if(banana22act==1){
						banana22.x = 320;
						banana22.y = 690+110;
						if(makakActive[2]==0){
							banana22.x=-300;
						}
						bananaDown(banana22, banana22act);
						if(makakActive[2]==1){
							makak[2].animations.play('makakak', 30, false);
							if(makakRot[2]<29){
								makakRot[2]++;
							}
						}
					}else if(nowMyStage>10){
						//if(makakRot[0]>20){
							makakRot[2]--;
							makak[2].animations.frame=makakRot[2];
							
							if(makak[2].animations.frame==18){
								var xxx=makak[2].x;
								var yyy=makak[2].y;
								makak[2].destroy();
								makak[2]=game.add.sprite(xxx, yyy, 'makakOhNo1');
								makak[2].anchor.setTo(0.5,0.5);
								makakActive[2]=0;
							}
						//}
					}
					if(banana23act==1){
						banana23.x = 440;
						banana23.y = 690+110;
						if(makakActive[3]==0){
							banana23.x=-300;
						}
						bananaDown(banana23, banana23act);
						if(makakActive[3]==1){
							makak[3].animations.play('makakak', 30, false);
							if(makakRot[3]<29){
								makakRot[3]++;
							}
						}
					}else if(nowMyStage>10){
						//if(makakRot[0]>20){
							makakRot[3]--;
							makak[3].animations.frame=makakRot[3];
							
							if(makak[3].animations.frame==18){
								var xxx=makak[3].x;
								var yyy=makak[3].y;
								makak[3].destroy();
								makak[3]=game.add.sprite(xxx, yyy, 'makakOhNo1');
								makak[3].anchor.setTo(0.5,0.5);
								makakActive[3]=0;
							}
						//}
					}
					if(banana24act==1){
						banana24.x = 560;
						banana24.y = 690+110;
						if(makakActive[4]==0){
							banana24.x=-300;
						}
						bananaDown(banana24, banana24act);
						if(makakActive[4]==1){
							makak[4].animations.play('makakak', 30, false);
							if(makakRot[4]<29){
								makakRot[4]++;
							}
						}
					}else if(nowMyStage>10){
						//if(makakRot[0]>20){
							makakRot[4]--;
							makak[4].animations.frame=makakRot[4];
							
							if(makak[4].animations.frame==18){
								var xxx=makak[4].x;
								var yyy=makak[4].y;
								makak[4].destroy();
								makak[4]=game.add.sprite(xxx, yyy, 'makakOhNo1');
								makak[4].anchor.setTo(0.5,0.5);
								makakActive[4]=0;
							}
						//}
					}						
				}
			
		}

		//УПАЛИ
		if(bananaDownNow==1){
			if(banana20.animations.currentFrame.index==banana20.animations.frameTotal-1 ||
				banana21.animations.currentFrame.index==banana21.animations.frameTotal-1 ||
				banana22.animations.currentFrame.index==banana22.animations.frameTotal-1 ||
				banana23.animations.currentFrame.index==banana23.animations.frameTotal-1 ||
				banana24.animations.currentFrame.index==banana24.animations.frameTotal-1){
					
						bananaDownNow=2;


						
						if(comboUp==2){
							showCoin.push(game.add.sprite(320, 100, 'combo2'));	
							showCoin[showCoin.length-1].anchor.setTo(0.5,0.5);
							showCoin[showCoin.length-1].animations.add('sc');
							showCoin[showCoin.length-1].animations.play('sc', 30, false);
							nowMyCoinsTemp+=200;
							comboUpSplay();
							if(nowMyStage!==5 && nowMyStage!==6 && nowMyStage!==9 && nowMyStage!==10 && nowMyStage!=17 && nowMyStage!==18 && nowMyStage!=19 && nowMyStage!=20){
								nowMyCombo++;
							}
						}
						if(comboUp==3){
							showCoin.push(game.add.sprite(320, 100, 'combo2'));	
							showCoin[showCoin.length-1].anchor.setTo(0.5,0.5);
							showCoin[showCoin.length-1].animations.add('sc');
							showCoin[showCoin.length-1].animations.play('sc', 30, false);
							nowMyCoinsTemp+=300;
							comboUpSplay();
							if(nowMyStage!==5 && nowMyStage!==6 && nowMyStage!==9 && nowMyStage!==10 && nowMyStage!=17 && nowMyStage!==18 && nowMyStage!=19 && nowMyStage!=20){
								nowMyCombo++;
							}							
						}
						if(comboUp==4){
							showCoin.push(game.add.sprite(320, 100, 'combo2'));	
							showCoin[showCoin.length-1].anchor.setTo(0.5,0.5);
							showCoin[showCoin.length-1].animations.add('sc');
							showCoin[showCoin.length-1].animations.play('sc', 30, false);
							nowMyCoinsTemp+=400;
							comboUpSplay();
							if(nowMyStage!==5 && nowMyStage!==6 && nowMyStage!==9 && nowMyStage!==10 && nowMyStage!=17 && nowMyStage!==18 && nowMyStage!=19 && nowMyStage!=20){
								nowMyCombo++;
							}
						}
						if(comboUp==5){
							showCoin.push(game.add.sprite(320, 100, 'combo2'));	
							showCoin[showCoin.length-1].anchor.setTo(0.5,0.5);
							showCoin[showCoin.length-1].animations.add('sc');
							showCoin[showCoin.length-1].animations.play('sc', 30, false);
							nowMyCoinsTemp+=500;
							comboUpSplay();
							if(nowMyStage!==5 && nowMyStage!==6 && nowMyStage!==9 && nowMyStage!==10 && nowMyStage!=17 && nowMyStage!==18 && nowMyStage!=19 && nowMyStage!=20){
								nowMyCombo++;
							}
						}

						if(comboDown==2){
							showCoin.push(game.add.sprite(320, 880, 'combo2'));	
							showCoin[showCoin.length-1].anchor.setTo(0.5,0.5);
							showCoin[showCoin.length-1].animations.add('sc');
							showCoin[showCoin.length-1].animations.play('sc', 30, false);
							nowMyCoinsTemp+=200;
							comboDownSplay();
							if(nowMyStage!==5 && nowMyStage!==6 && nowMyStage!==9 && nowMyStage!==10 && nowMyStage!=17 && nowMyStage!==18 && nowMyStage!=19 && nowMyStage!=20){
								nowMyCombo++;
							}
						}
						if(comboDown==3){
							showCoin.push(game.add.sprite(320, 880, 'combo2'));	
							showCoin[showCoin.length-1].anchor.setTo(0.5,0.5);
							showCoin[showCoin.length-1].animations.add('sc');
							showCoin[showCoin.length-1].animations.play('sc', 30, false);
							nowMyCoinsTemp+=300;
							comboDownSplay();
							if(nowMyStage!==5 && nowMyStage!==6 && nowMyStage!==9 && nowMyStage!==10 && nowMyStage!=17 && nowMyStage!==18 && nowMyStage!=19 && nowMyStage!=20){
								nowMyCombo++;
							}
						}
						if(comboDown==4){
							showCoin.push(game.add.sprite(320, 880, 'combo2'));	
							showCoin[showCoin.length-1].anchor.setTo(0.5,0.5);
							showCoin[showCoin.length-1].animations.add('sc');
							showCoin[showCoin.length-1].animations.play('sc', 30, false);
							nowMyCoinsTemp+=400;
							comboDownSplay();
							if(nowMyStage!==5 && nowMyStage!==6 && nowMyStage!==9 && nowMyStage!==10 && nowMyStage!=17 && nowMyStage!==18 && nowMyStage!=19 && nowMyStage!=20){
								nowMyCombo++;
							}
						}
						if(comboDown==5){
							showCoin.push(game.add.sprite(320, 880, 'combo2'));	
							showCoin[showCoin.length-1].anchor.setTo(0.5,0.5);
							showCoin[showCoin.length-1].animations.add('sc');
							showCoin[showCoin.length-1].animations.play('sc', 30, false );
							nowMyCoinsTemp+=500;
							comboDownSplay();							
							if(acc[5]==0){
								acc[5]=1;
							}
							if(nowMyStage!==9 && nowMyStage!==10 && nowMyStage!=17 && nowMyStage!==18){
								nowMyCombo++;
							}
						}
						//console.log(comboDown);
						removePath();
			}
				
		}

		//УБИТЬ+добавить
		if(bananaDownNow==2){
			for(var i=0; i<inv.length; i++){
				//
				if(inv[i].animations.currentFrame.index==inv[i].animations.frameTotal-1){
					reStroyArr.push(i);
					
				}
			}
			if(reStroyArr.length>0){
				
				if(nowMyStage==1 && nowMyCoinsTemp>=nowMyNeed){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==2 && nowMyCoinsTemp>=nowMyNeed){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==3 && nowMyCombo>=nowMyNeed2){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==4 && nowMyCombo>=nowMyNeed2){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==5 && nowMyCombo>=nowMyNeed2){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==6 && nowMyCombo>=nowMyNeed2){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==7 && nowMyCoinsTemp>=nowMyNeed){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==8 && nowMyCoinsTemp>=nowMyNeed){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==9 && nowMyCombo>=nowMyNeed2){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==10 && nowMyCombo>=nowMyNeed2){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==11 && nowMyCoinsTemp>=nowMyNeed){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==12 && nowMyCoinsTemp>=nowMyNeed){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==13 && nowMyCombo>=nowMyNeed2){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==14 && nowMyCombo>=nowMyNeed2){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==15 && nowMyCoinsTemp>=nowMyNeed){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==16 && nowMyCoinsTemp>=nowMyNeed){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==17 && nowMyCombo>=nowMyNeed2){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==18 && nowMyCombo>=nowMyNeed2){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==19 && nowMyCombo>=nowMyNeed2){
					//console.log('pobeda');
					inPause=4;
				} else if(nowMyStage==20 && nowMyCombo>=nowMyNeed2){
					//console.log('pobeda');
					inPause=4;
				} else{
					reStroy();
					logF();
				}
				
			}
		}


		//УБЕЙ МЕНЯ
		if(logButton.isDown){
			for(var i=0; i<game.state.length; i++){
				console.log(i);
			}
			//console.log(game.length);
			/*if(game.paused==false){
				game.paused=true;		
			}else{
				game.paused=false;
			}*/
		}
		if(logButton.isUp){
			//game.paused=false;			
		}			

		
	}	
}

function reStroy(){
	var xx;
	var yy;

	for(var i=0; i<reStroyArr.length; i++){
		//помним + скорбим
		
		xx=inv[reStroyArr[i]].x;
		yy=inv[reStroyArr[i]].y;
		inv[reStroyArr[i]].destroy();

		
		//восстаём
		addInvInGame(xx,yy,reStroyArr[i]);

		/*inv[reStroyArr[i]]=game.add.sprite(xx, yy, 't_1100');
		inv[reStroyArr[i]].anchor.setTo(0.5, 0.5);
		inv[reStroyArr[i]].animations.add('invIn');
		inv[reStroyArr[i]].input.start(0, true);
        inv[reStroyArr[i]].events.onInputDown.add(select);
        inv[reStroyArr[i]].animations.frame=0;
        inv2[reStroyArr[i]].length=0;
        inv2[reStroyArr[i]]=[1,1,0,0];
        inv[reStroyArr[i]].animations.play('invIn', 30, false);*/

        
	}
	addTubeSplay();
	
	path0.length=0;
	path0End=0;
	path1.length=0;
	path1End=0;
	path2.length=0;
	path2End=0;
	path3.length=0;
	path3End=0;
	path4.length=0;
	path4End=0;
	
	banana20act=0;
	banana21act=0;
	banana22act=0;
	banana23act=0;
	banana24act=0;

	//В ОТДЕЛЬНУЮ Ф-ЦИЮ
		if(banana0.animations.currentFrame.index==banana0.animations.frameTotal-1){
			banana0.destroy();
			banana0 = game.add.sprite(80,100, randomBananaUp(4));
			banana0.anchor.setTo(0.5, 0.5);
			banana0.animations.add('fall');
			
		}
		if(banana1.animations.currentFrame.index==banana1.animations.frameTotal-1){
			banana1.destroy();
			banana1 = game.add.sprite(200,100, randomBananaUp(4));
			banana1.anchor.setTo(0.5, 0.5);
			banana1.animations.add('fall');
			
		}
		if(banana2.animations.currentFrame.index==banana2.animations.frameTotal-1){
			banana2.destroy();
			banana2 = game.add.sprite(320,100, randomBananaUp(4));
			banana2.anchor.setTo(0.5, 0.5);
			banana2.animations.add('fall');
			
		}
		if(banana3.animations.currentFrame.index==banana0.animations.frameTotal-1){
			banana3.destroy();
			banana3 = game.add.sprite(440,100, randomBananaUp(4));
			banana3.anchor.setTo(0.5, 0.5);
			banana3.animations.add('fall');
			
		}
		if(banana4.animations.currentFrame.index==banana0.animations.frameTotal-1){
			banana4.destroy();
			banana4 = game.add.sprite(560,100, randomBananaUp(4));
			banana4.anchor.setTo(0.5, 0.5);
			banana4.animations.add('fall');
			
		}

	banana20.destroy();	
	banana20 = game.add.sprite(80,-110, randomBananaDn(4));
	banana20.anchor.setTo(0.5, 0.5);
	banana20.animations.add('fallD');

	banana21.destroy();
	banana21 = game.add.sprite(200,-110, randomBananaDn(4));
	banana21.anchor.setTo(0.5, 0.5);
	banana21.animations.add('fallD');

	banana22.destroy();
	banana22 = game.add.sprite(320,-110, randomBananaDn(4));
	banana22.anchor.setTo(0.5, 0.5);
	banana22.animations.add('fallD');

	banana23.destroy();
	banana23 = game.add.sprite(440,-110, randomBananaDn(4));
	banana23.anchor.setTo(0.5, 0.5);
	banana23.animations.add('fallD');

	banana24.destroy();
	banana24 = game.add.sprite(560,-110, randomBananaDn(4));
	banana24.anchor.setTo(0.5, 0.5);
	banana24.animations.add('fallD');

	bananaDownNow=0;

	reStroyArr.length=0;

	inFind=1;
}

function pathEndTest(mass){
	
	for(var i=0; i<mass.length; i++){
					if(mass[i]==20 & inv2[20][2]==1){
						banana20act=1;
					}
					if(mass[i]==21 & inv2[21][2]==1){
						banana21act=1;
					}
					if(mass[i]==22 & inv2[22][2]==1){
						banana22act=1;
					}
					if(mass[i]==23 & inv2[23][2]==1){
						banana23act=1;
					}
					if(mass[i]==24 & inv2[24][2]==1){
						banana24act=1;
					}
				}
}

function render() {

   // game.debug.renderInputInfo(16, 16);

}

//КЛИК
function select(item, pointer) {
	if(tutorActive==1){
		//таймерррр
		
		tutorActive=0;
		tutor.destroy();
		
	}
	if(inPause==0 && inFind==1 && tweenFlag==true){
		tweenFlag=false;
		if(showCoin.length!=0){
			for(var i=0; i<showCoin.length; i++){
				showCoin[i].destroy();
			}
			showCoin.length=0;
		}
		/*if(item.scale.x == 1 && item.scale.y ==1){
			tubeSplay();
		    item.scale.x = 1.9;   	 
		    item.scale.y = 1.9;
		    //перекидон в начало массива опасен очень...
		    //item.bringToTop();
		    rotateItem(inv.indexOf(item));
		} */
		tubeSplay();
		rotateItem(inv.indexOf(item));
		tweenTube=game.add.tween(item).to({angle: item.angle+90}, 180, Phaser.Easing.Cubic.Out, true, 0, false);
		tweenTube.onComplete.add(tweenTubeComplete, this);
	}
   
}

function tweenTubeComplete(){
		
	comboUp=0;
	comboDown=0;
	logF();
	tweenFlag=true;
}


function resetF(){
	nowMyCoins=0;
	nowMyCoinsTemp=0;
	destroyF();
	createBanana();
	createField();
	createText();
	inFind=1;
}

function backF(){
	if(tutorActive==1){
		tutorActive=0;
		tutor.destroy();
	}
	destroyF();
	destroyTxt();
	removeMakakas();
	inPause=1;
	btnStart.x = game.world.centerX;

	//btnStart.input.start(0, true);
	//btnStart.events.onInputDown.add(actionStgSelect);
	inFind=1;
	//createField();
	//createText();
}

//ДЕСТРОЙ ИНТЕРФЕЙСА
function destroyInterf(){
	for (var i= 0; i<interf.length; i++){
		interf[i].x=-900;
		interf[i].destroy(); 
	}
	for (var i = interf.length-1; i>=0; i--) {			
		interf.shift();
	}

	text2.destroy();
}

//ДЕСТРОЙ ТЕКСТАВАГА МАССИВА

function destroyTxt(){
	if(inDestroy==0){
		for (var i= 0; i<invTxt.length; i++){
			invTxt[i].x=-900;
			invTxt[i].destroy();
		}
		for (var i = invTxt.length-1; i>=0; i--) {			
			invTxt.shift();
		}
		timerSSt.stop();
		timerSSt.destroy();

		button.destroy();
		buttonD.destroy();
		buttonB.destroy();
	}
}


//ДЕСТРОЙ АЧЧИВ
function accDestroy(){
	for (var i = 0; i<inv.length; i++) {
		//inv.getAt(i).x=-900;
		inv[i].destroy();
	}
		for (var i = inv.length-1; i>=0; i--) {			
		inv.shift();
	}
}


//ДЕСТРОЙ ВСЕГО
function destroyF(){
	if(inDestroy==0){
		//inDestroy=1;
		
		
		
		for (var i = 0; i<inv.length; i++) {
			//inv.getAt(i).x=-900;
			inv[i].destroy();
		}
		for (var i = inv.length-1; i>=0; i--) {			
			inv.shift();
		}

		inv.length=0;
		inv.destroy;
		
		
		inv2.length=0;
			
		//createText();
		
		text2.destroy();
		path0.length=0;
		path0End=0;
		path1.length=0;
		path1End=0;
		path2.length=0;
		path2End=0;
		path3.length=0;
		path3End=0;
		path4.length=0;
		path4End=0;
		banana0.destroy();
		banana1.destroy();
		banana2.destroy();
		banana3.destroy();
		banana4.destroy();

		banana20act=0;
		banana21act=0;
		banana22act=0;
		banana23act=0;
		banana24act=0;

		bananaDownNow=0;
		
	}
		
}


// ДЕСТРОЙ МАКАК
function removeMakakas(){
	for (var i= 0; i<makak.length; i++){
		makak[i].x=-900;
		makak[i].destroy();
	}
	for (var i = makak.length-1; i>=0; i--) {			
		makak.shift();
	}
}

//ДЕСТРОЙ ПУТИ
function removePath(){

				var ii=0; //считаем кол-во труб
				
				if(path0End==1){
					
					for(var i=0; i<path0.length; i++){
						if(inv[path0[i]].animations.frame!=10){
							ii++;
							showCoin.push(game.add.sprite(inv[path0[i]].x, inv[path0[i]].y, 'coin10'));	
							showCoin[showCoin.length-1].anchor.setTo(0.5,0.5);
							showCoin[showCoin.length-1].animations.add('sc');
							showCoin[showCoin.length-1].animations.play('sc', 30, false);
							nowMyCoinsTemp+=10;
						}
						inv[path0[i]].animations.frame=10;
						inv[path0[i]].animations.paused=false;										
					}
				}
				if(path1End==1){
					for(var i=0; i<path1.length; i++){
						if(inv[path1[i]].animations.frame!=10){
							ii++;
							showCoin.push(game.add.sprite(inv[path1[i]].x, inv[path1[i]].y, 'coin10'));	
							showCoin[showCoin.length-1].anchor.setTo(0.5,0.5);
							showCoin[showCoin.length-1].animations.add('sc');
							showCoin[showCoin.length-1].animations.play('sc', 30, false);
							nowMyCoinsTemp+=10;
						}
						inv[path1[i]].animations.frame=10;
						inv[path1[i]].animations.paused=false;
					}
				}
				if(path2End==1){
					for(var i=0; i<path2.length; i++){
						if(inv[path2[i]].animations.frame!=10){
							ii++;
							showCoin.push(game.add.sprite(inv[path2[i]].x, inv[path2[i]].y, 'coin10'));	
							showCoin[showCoin.length-1].anchor.setTo(0.5,0.5);
							showCoin[showCoin.length-1].animations.add('sc');
							showCoin[showCoin.length-1].animations.play('sc', 30, false);
							nowMyCoinsTemp+=10;
						}
						inv[path2[i]].animations.frame=10;
						inv[path2[i]].animations.paused=false;
					}
				}
				if(path3End==1){
					for(var i=0; i<path3.length; i++){
						if(inv[path3[i]].animations.frame!=10){
							ii++;
							showCoin.push(game.add.sprite(inv[path3[i]].x, inv[path3[i]].y, 'coin10'));	
							showCoin[showCoin.length-1].anchor.setTo(0.5,0.5);
							showCoin[showCoin.length-1].animations.add('sc');
							showCoin[showCoin.length-1].animations.play('sc', 30, false);
							nowMyCoinsTemp+=10;
						}
						inv[path3[i]].animations.frame=10;
						inv[path3[i]].animations.paused=false;
					}
				}
				if(path4End==1){
					for(var i=0; i<path4.length; i++){
						if(inv[path4[i]].animations.frame!=10){
							ii++;
							showCoin.push(game.add.sprite(inv[path4[i]].x, inv[path4[i]].y, 'coin10'));	
							showCoin[showCoin.length-1].anchor.setTo(0.5,0.5);
							showCoin[showCoin.length-1].animations.add('sc');
							showCoin[showCoin.length-1].animations.play('sc', 30, false);
							nowMyCoinsTemp+=10;
						}
						inv[path4[i]].animations.frame=10;
						inv[path4[i]].animations.paused=false;
					}
				}
				
				if(ii==25){
					showCoin.push(game.add.sprite(inv[12].x, inv[12].y, 'coinWow'));	
					showCoin[showCoin.length-1].anchor.setTo(0.5,0.5);
					showCoin[showCoin.length-1].animations.add('sc');
					showCoin[showCoin.length-1].animations.play('sc', 30, false);
					nowMyCoinsTemp+=500;
					if(acc[6]==0){
						acc[6]=1;
					}
					if(nowMyStage==9 || nowMyStage==10 || nowMyStage==17 || nowMyStage==18){
						nowMyCombo++;
					}
				}
				
			
}

///////////////////////////
//ПОИСК ПУТИ ГЛАВФУНКИЯ
/////////////////////////
function logF(){	
	nTest.length=0;
	findPath0();	
	findPath0a(path0);
	nTest.length=0;
	findPath1();
	findPath1a(path1);
	nTest.length=0;
	findPath2();
	findPath2a(path2);
	nTest.length=0;
	findPath3();
	findPath3a(path3);
	nTest.length=0;
	findPath4();
	findPath4a(path4);
	//testPathLeft(path0, 6);
	
	


	if(path0End==1 || path1End==1 || path2End==1 || path3End==1 || path4End==1){
		
			inFind=2;			

			if(path0End==1){
				bananaUp(banana0);					
			}
			if(path1End==1){
				bananaUp(banana1);
			}
			if(path2End==1){
				bananaUp(banana2);
			}
			if(path3End==1){
				bananaUp(banana3);
			}
			if(path4End==1){
				bananaUp(banana4);
			}


		return;
	}


	path0.length=0;
	path1.length=0;
	path2.length=0;
	path3.length=0;
	path4.length=0;
	path0End=0;
	path1End=0;
	path2End=0;
	path3End=0;
	path4End=0;
}

function bananaUp(banan){
	banan.animations.play('fall', 35, false);

	showCoin.push(game.add.sprite(banan.x, banan.y, 'coin100'));	
	showCoin[showCoin.length-1].anchor.setTo(0.5,0.5);
	showCoin[showCoin.length-1].animations.add('sc');
	showCoin[showCoin.length-1].animations.play('sc', 30, false);
	comboUp+=1;
	nowMyCoinsTemp+=100;
	//console.log(100);
}

function bananaDown(ban, act){
	ban.animations.play('fallD', 35, false);
	showCoin.push(game.add.sprite(ban.x-15, ban.y+85, 'coin100'));	
	showCoin[showCoin.length-1].anchor.setTo(0.5,0.5);
	showCoin[showCoin.length-1].animations.add('sc');
	showCoin[showCoin.length-1].animations.play('sc', 30, false);
	comboDown+=1;
	nowMyCoinsTemp+=100;
	if(ban.x==-300){
		showCoin[showCoin.length-1].x=-300;
		console.log(90);
		nowMyCoinsTemp-=100;
		if(comboDown>1){
			comboDown-=1;
		}
	}
}

//ВРАЩЕНИЕ В МАССИВЕ
function rotateItem(it){
	var rr = inv2[it][0];
	var rr1 = inv2[it][1];
	var rr2 = inv2[it][2];
	var rr3 = inv2[it][3];
	inv2[it][0]=rr3;
	inv2[it][1]=rr;
	inv2[it][2]=rr1;
	inv2[it][3]=rr2;
}

//ПОИСК ПУТИ 

function findPath0(){

	if(inv2[0][0]==1){
		path0.push(0);
		nTest.push(0);

	} else {
		path0.length=0;
	}
}
function findPath1(){

	if(inv2[1][0]==1){
		path1.push(1);
		nTest.push(1);

	} else {
		path1.length=0;
	}
}
function findPath2(){

	if(inv2[2][0]==1){
		path2.push(2);
		nTest.push(2);

	} else {
		path2.length=0;
	}
}
function findPath3(){

	if(inv2[3][0]==1){
		path3.push(3);
		nTest.push(3);

	} else {
		path3.length=0;
	}
}
function findPath4(){

	if(inv2[4][0]==1){
		path4.push(4);
		nTest.push(4);

	} else {
		path4.length=0;
	}
}

function findPath0a(mass){
	if(mass[0]==0){
		for(var i=0; i<nTest.length; i++){
			if(nTest[i]!=null){
				var ln=mass.length;
				testPathDown(mass, nTest[i]);
				testPathRight(mass, nTest[i]);
				testPathLeft(mass, nTest[i]);
				testPathUp(mass, nTest[i]);
				nTest[i]=null;
				/*if(ln==mass.length){
					
					return;
				}*/
			}
		}
	}
}
function findPath1a(mass){
	if(mass[0]==1){
		for(var i=0; i<nTest.length; i++){
			if(nTest[i]!=null){
				var ln=mass.length;
				testPathDown(mass, nTest[i]);
				testPathRight(mass, nTest[i]);
				testPathLeft(mass, nTest[i]);
				testPathUp(mass, nTest[i]);
				nTest[i]=null;
				/*if(ln==mass.length){
					
					return;
				}*/
			}
		}
	}
}
function findPath2a(mass){
	if(mass[0]==2){
		for(var i=0; i<nTest.length; i++){
			if(nTest[i]!=null){
				var ln=mass.length;
				testPathDown(mass, nTest[i]);
				testPathRight(mass, nTest[i]);
				testPathLeft(mass, nTest[i]);
				testPathUp(mass, nTest[i]);
				nTest[i]=null;
				/*if(ln==mass.length){
					
					return;
				}*/
			}
		}
	}
}
function findPath3a(mass){
	if(mass[0]==3){
		for(var i=0; i<nTest.length; i++){
			if(nTest[i]!=null){
				var ln=mass.length;
				testPathDown(mass, nTest[i]);
				testPathRight(mass, nTest[i]);
				testPathLeft(mass, nTest[i]);
				testPathUp(mass, nTest[i]);
				nTest[i]=null;
				/*if(ln==mass.length){
					
					return;
				}*/
			}
		}
	}
}
function findPath4a(mass){
	if(mass[0]==4){
		for(var i=0; i<nTest.length; i++){
			if(nTest[i]!=null){
				var ln=mass.length;
				testPathDown(mass, nTest[i]);
				testPathRight(mass, nTest[i]);
				testPathLeft(mass, nTest[i]);
				testPathUp(mass, nTest[i]);
				nTest[i]=null;
				/*if(ln==mass.length){
					
					return;
				}*/
			}
		}
	}
}


function testPathUp(mass, p){
	if(inv2[p][0]==0){
		return;
	}
	if(p-5>=0){
		for(var i=0; i<mass.length; i++){
			if(mass[i]==p-5){
				return;
			}
		}

		if(inv2[p-5][2]==0){
			return;
		} else if(inv2[p-5][2]==1){
			mass.push(p-5);
			nTest.push(p-5);
		}
	}
}

function testPathRight(mass, p){
	if(inv2[p][1]==0){
		return;
	}
	if(p==4 || p==9 || p==14 || p==19 || p==24){
		return;
	}
	//if(p-5>=0){
		for(var i=0; i<mass.length; i++){
			if(mass[i]==p+1){
				return;
			}
		}

		if(inv2[p+1][3]==0){
			return;
		} else if(inv2[p+1][3]==1){
			mass.push(p+1);
			nTest.push(p+1);
		}
	//}
}

function testPathDown(mass, p){
	if(inv2[p][2]==0){
		return;
	}
	if(p==20 || p==21 || p==22 || p==23 || p==24){
		//поиск успешно завершен, но не до конца?
		if(inv2[p][2]==1){
			if(mass[0]==0){
				path0End=1;
			}
			if(mass[0]==1){
				path1End=1;
			}
			if(mass[0]==2){
				path2End=1;
			}
			if(mass[0]==3){
				path3End=1;
			}
			if(mass[0]==4){
				path4End=1;
			}
		}
		return;
	}
	if(p+5<=24){
		for(var i=0; i<mass.length; i++){
			if(mass[i]==p+5){
				return;
			}
		}

		if(inv2[p+5][0]==0){
			return;
		} else if(inv2[p+5][0]==1){
			mass.push(p+5);
			nTest.push(p+5);
		}
	}
}

function testPathLeft(mass, p){
	if(inv2[p][3]==0){
		return;
	}
	if(p==0 || p==5 || p==10 || p==15 || p==20){
		return;
	}
	//if(p-5>=0){
		for(var i=0; i<mass.length; i++){
			if(mass[i]==p-1){
				return;
			}
		}

		if(inv2[p-1][1]==0){
			return;
		} else if(inv2[p-1][1]==1){
			mass.push(p-1);
			nTest.push(p-1);
		}
	//}
}