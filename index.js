

fetch("https://lit-fortress-6467.herokuapp.com/object")
.then(function(response){
  return response.json()
  let bin = document.getElementById("bin")
  let tracks = document.getElementById("album_track")

})
.then(function(album){
  let albumContent = album.results;
  for(let i = 0; i < albumContent.length; i++){
  let currentPic = albumContent[i].cover_art
let albumPic = document.createElement("img")
albumPic.src= `/Users/ricowoods/Q1Assesment/playlist/images/${currentPic}`;
album_track.appendChild(albumPic)

  let name = albumContent[i].artist
  let title = albumContent[i].title


     albumPic.addEventListener("click", function(event) {
       let newDiv = document.createElement("div")
         newDiv.textContent = `${name}:${title}`
       bin.appendChild(newDiv)


       })
            let clear = document.getElementById("clearButton")
       clear.addEventListener("click", function() {
         bin.innerHTML = ""
     })

    }

})
