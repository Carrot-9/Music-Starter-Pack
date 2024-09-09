 //Initial Question
 function Genre() {
   const GenreQuestion = prompt("What genre of music do you want to choose from? Type 'All' to randomize without genre filters.");
   if (GenreQuestion.toLowerCase() == "rock") {
   var userChoice = 'Data/RockAlbums.json';
   } else if (GenreQuestion.toLowerCase() == "hip hop" || GenreQuestion.toLowerCase() == "hip-hop" || GenreQuestion.toLowerCase() == "rap") {
   var userChoice = 'Data/HipHopAlbums.json';
   } else if (GenreQuestion.toLowerCase() == "pop") {
   var userChoice = 'Data/PopAlbums.json';
   } else {
      alert("That is not a valid answer. Please try again.")
      return Genre();
   }

   AlbumRandomizer();

      // Randomizers
   async function AlbumRandomizer() {
   try {
   const response = await fetch(userChoice);
   const Data = await response.json();
   const Albums = Data.Albums;
   const RANDOM = Albums[Math.floor(Math.random() * Albums.length)];
   alert(RANDOM.name);
   document.getElementById('album-image').src = RANDOM.image;
   document.getElementById('album-title').innerText = RANDOM.name;
   } catch(error) {
   console.log("An error has occured:", error.message)
      }
   }
 }


   
   