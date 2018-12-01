fetch("https://lit-fortress-6467.herokuapp.com/object")
.then(function(response) {
  return response.json()
})
.then(function(stuff) {
  let generated = stuff.results;

  for(let i = 0; i < 5; i++) {
    let newGen = generated[i].cover_art
  }
})
