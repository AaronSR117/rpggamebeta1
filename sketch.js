var gamestate = "inicio";
var player, playerIMG;
var nivel1, nivel2, nivel3, nivel4, nivel5, nivel6;
var enemigo;
var musica;

var martillo, martilloIMG, salto, saltoIMG;


function preload(){
    playerIMG = loadImage("Juegito/Normal.png");
    musica = loadSound("Juegito/Musica.mp3");
    saltoIMG = loadImage("Juegito/Salto.PNG");
    martilloIMG = loadImage("Juegito/martillo.PNG")
}

function setup(){
    Canvas = createCanvas(windowWidth-20,windowHeight-20);
    edges = createEdgeSprites();    
    lives = 3;

    player = createSprite(550,500,80,80);
    player.shapeColor = "green";
    player.visible = false;

    nivel1 = createSprite(200,100,70,70);
    nivel1.visible = false;
    nivel2 = createSprite(100,500,70,70);
    nivel2.visible = false;
    nivel3 = createSprite(40,70,70,70);
    nivel3.visible = false;
    nivel4 = createSprite(800,900,70,70);
    nivel4.visible = false;
    nivel5 = createSprite(1000,100,70,70);
    nivel5.visible = false;
    nivel6 = createSprite(1500,500,70,70);
    nivel6.visible = false;
    enemigo = createSprite(canvas.width-400,canvas.height/2,150,150);
    enemigo.visible = false;

    martillo = createSprite(300,180,50,50);
    martillo.visible = false;
    martillo.addImage("poderMartillo",martilloIMG);

    salto = createSprite(500,180,50,50);
    salto.visible = false;
    salto.addImage("poderSalto",saltoIMG);
    
    barra_martillo = createSprite(150,100,30,30);
    barra_martillo.visible = false;

    barra_martillo2 = createSprite(180,100,30,30);
    barra_martillo2.visible = false;

    barra_martillo3 = createSprite(210,100,30,30);
    barra_martillo3.visible = false;

    barra_martillo4 = createSprite(240,100,30,30);
    barra_martillo4.visible = false;

    barra_martillo5 = createSprite(270,100,30,30);
    barra_martillo5.visible = false;
}

function draw(){
    background("white");
    
    if(gamestate === "inicio"){
        strokeWeight(5);
        stroke("black");
        textSize(80);
        textAlign(CENTER);
        fill("white");
        text("*ColorGuyAdventure*", canvas.width / 2, canvas.height -150);
        textSize(50);
        text("Presiona la tecla de espacio para iniciar", canvas.width / 2, canvas.height -50);
        if(keyDown("SPACE")){
           gamestate = "instrucciones";  
        }       
    }

    if(gamestate === "instrucciones"){
        strokeWeight(4);
        stroke("black");
        textSize(40);
        fill("white");
        textAlign(CENTER);
        text("En cada batalla, tendras que rellenar de color a los enemigos", canvas.width/2, 100);
        text("si te quitan el color habras perdido", canvas.width/2, 150);
        textSize(30);
        textAlign(LEFT);
        text("-Con las flechas mueve al personaje debajo que la accion que quieras hacer y presiona espacio para ejecutarlo",50 ,250);
        text("-Al ejecutar el martillo espera 5 segundos para presionar espacio",50,300)
        text("-Al ejecutar el salto, presiena espacio cuando toques al enemigo",50,350)
        textSize(50);
        textAlign(CENTER);
        text("Presiona *i* para iniciar",canvas.width/2,500)
        if(keyDown("i")){
            gamestate = "mapa"; 
        }
    }

    if(gamestate === "mapa"){
        player.visible = true;
        nivel1.visible = true;
        nivel2.visible = true;
        nivel3.visible = true;
        nivel4.visible = true;
        nivel5.visible = true;
        nivel6.visible = true;

        if(keyDown("LEFT_ARROW")){ 
            player.x= player.x -5; 
        }
        if(keyDown("RIGHT_ARROW")){ 
            player.x= player.x +5; 
        }
        if(keyDown("UP_ARROW")){ 
            player.y= player.y -5; 
        }
        if(keyDown("DOWN_ARROW")){ 
            player.y= player.y +5; 
        }

        if(player.collide(nivel4)){
            gamestate = "batalla4";
        }
        if(player.collide(nivel1)){
            gamestate = "batalla1";
        }
        if(player.collide(nivel2)){
            gamestate = "batalla2";
        }
        if(player.collide(nivel3)){
            gamestate = "batalla3";
        }
        if(player.collide(nivel5)){
            gamestate = "batalla5";
        }
        if(player.collide(nivel6)){
            gamestate = "batalla6";
        }
    }  


    if(gamestate === "batalla4"){
        //musica.play();
        player.visible = true;
        enemigo.visible = true;
        salto.visible = true;
        martillo.visible = true;
        martillo.debug = true

        player.addImage("PlayerColor",playerIMG);
        player.scale = 0.8;
        //player.x = 500;
        //player.y = canvas.height/2;

        player.debug = true;
        player.setCollider("rectangle",-100,0,200,550);
        if(keyDown("LEFT_ARROW")){ 
            player.x= player.x -5; 
        }
        if(keyDown("RIGHT_ARROW")){ 
            player.x= player.x +5; 
        }
        if(keyDown("UP_ARROW")){ 
            player.y= player.y -5; 
        }
        if(keyDown("DOWN_ARROW")){ 
            player.y= player.y +5; 
        }

        nivel1.visible = false;
        nivel2.visible = false;
        nivel3.visible = false;
        nivel4.visible = false;
        nivel5.visible = false;
        nivel6.visible = false;
        if(player.isTouching(martillo)){ 
            batallaMartillo();
        }
    }

    
    player.bounce(edges[0]);
    player.bounce(edges[1]);
    player.bounce(edges[2]);
    player.bounce(edges[3]);
    
    drawSprites();
}

function batallaMartillo(){
    salto.visible = false;

            barra_martillo.visible = true;
            frameRate(1);

            barra_martillo2.visible = true;
            frameRate(1);
            
            barra_martillo3.visible = true;
            frameRate(1);
            
            barra_martillo4.visible = true;
            frameRate(1);
            
            barra_martillo5.visible = true;
            
            
        
   
}

function batallaSalto(){
    
}