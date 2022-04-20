// Define Pac-Man images to be used.
const PacMan_Array = [
   ['Images/pacman1.png', 'Images/pacman2.png'],
   ['Images/pacman3.png', 'Images/pacman4.png']
];

// Define variables.
let Time = 100;
let Position = 0;
var Velocity = 10;
let Direction = 0;
let Chomp_Option = 0;

// Define button functions.
function Increase_Velocity(x) {
   if(Velocity > 0) {
      Velocity += x;
   }
   else if(Velocity < 0) {
      Velocity -=x;
   }
   else if(Velocity === 0) {
      if(Direction === 0) {
         Velocity += x;
      }
      if(Direction === 1) {
         Velocity -= x;
      }
   }
   return Velocity, Direction;
}

function Decrease_Velocity(x) {
   if(Velocity > 0) {
      if(Velocity - x >= 0) {
         Velocity -= x;
      }
      if(Velocity - x < 0) {
         Velocity = 0;
      }
   }
   if(Velocity < 0) {
      if(Velocity + x <= 0) {
         Velocity += x;
      }
      if(Velocity + x > 0) {
         Velocity = 0;
      }
   }
   return Velocity;
}

function Stop() {
   Velocity = 0;
   return Velocity;
}

function Change_Velocity() {
   Velocity = -Velocity;
   if(Direction === 0) {
      Direction = 1;
   }
   else {
      Direction = 0;
   }
   return Velocity, Direction;
}

function Change_View() {
   if (Direction === 0) {
      Direction = 1;
   }
   else {
      Direction = 0;
   }
   return Direction;
}

// Determine if within range and if velocity needs to be changed.
function Edge_Detection() {
   var PacMan = document.getElementById('Pac-Man');
   let Image_Width = PacMan.style.width;
   let Page_Width = window.innerWidth;
   if(Position < 0 || Position + Image_Width >= Page_Width) {
      Velocity = -Velocity;
      Direction = (Direction + 1) % 2;
   }
   return Direction;
}

// Define how to move Pac-Man.
function Move_PacMan() {
   var PacMan = document.getElementById('Pac-Man');
   Direction = Edge_Detection(Direction);
   Chomp_Option = (Chomp_Option + 1) % 2;
   PacMan.src = PacMan_Array[Direction][Chomp_Option];
   Position = Position + Velocity;
   PacMan.style.left = Position + 'px';
}

// Main function.
function Main_Function() {
      Move_PacMan();
}

// Move Pac-Man at set interval.
setInterval(Main_Function, Time);
