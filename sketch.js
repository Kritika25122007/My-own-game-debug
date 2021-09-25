var database;
var canvas;
var player,form,game;

var  playerCount = 0;
function preload(){

}

function setup() {
  canvas = createCanvas(1000,600);
  database = firebase.database();
  form = new Form();
  form.display();

  var myProjectDatabase = database.ref('playerCount');
           myProjectDatabase.on("value",readheight,showError)
}

function draw() {
 background('blue')
 
 function updateDatabase(){
   database.ref('playerCount').set({
     playerCount: 1
   })
 }
 function showError(){
   console.log('error in writing database')
 }
}
