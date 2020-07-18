let pokeArray = [
  {name: 'bulbasaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
  {name: 'ivysaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
  {name: 'charmander', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
  {name: 'charizard', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
  {name: 'squirtle', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},

];
let index = 0;

let button = document.getElementById('clickme');
let image1 = document.getElementById('image1');
let paragraph1 = document.getElementById('p1');
let image2 = document.getElementById('image2');
let paragraph2 = document.getElementById('p2');
button.addEventListener('click', roger);

function roger() {
  if (index > pokeArray.length - 1) {
    index = 0;
  }
  if (index == 0) {
    image1.src = pokeArray[index].image;
    paragraph1.innerHTML = pokeArray[index].name;
    image2.src = '';
    paragraph2.innerHTML = '';
    
  } else {
    image1.src = pokeArray[index].image;
    paragraph1.innerHTML = pokeArray[index].name;
    image2.src = pokeArray[index -1].image;
    paragraph2.innerHTML = pokeArray[index -1].name;
   
  }

  index++;
}