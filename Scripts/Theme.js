// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const header = document.querySelector('header');
    const button = document.querySelector('#btn');
    const word = document.querySelector('#All');

    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
    word.classList.toggle('dark-mode');
    
    // Store the user's preference in local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
}

// Check user's preference from local storage
const storedTheme = localStorage.getItem('dark-mode');
if (storedTheme === 'enabled') {
    toggleDarkMode();
}

// Add click event listener to the theme toggle button
document.querySelector('#btn').addEventListener('click', toggleDarkMode);
let superheroes = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman',
    'Black Canary',
    'Black Panther',
    'Captain America',
    'Captain Marvel',
    'Catwoman',
    'Conan the Barbarian',
    'Daredevil',
    'The Defenders',
    'Doc Savage',
    'Doctor Strange',
    'Elektra',
    'Fantastic Four',
    'Ghost Rider',
    'Green Arrow',
    'Green Lantern',
    'Guardians of the Galaxy',
    'Hawkeye',
    'Hellboy',
    'Incredible Hulk',
    'Iron Fist',
    'Iron Man',
    'Marvelman',
    'Robin',
    'The Rocketeer',
    'The Shadow',
    'Spider-Man',
    'Sub-Mariner',
    'Supergirl',
    'Superman',
    'Teenage Mutant Ninja Turtles',
    'Thor',
    'The Wasp',
    'Watchmen',
    'Wolverine',
    'Wonder Woman',
    'X-Men',
    'Zatanna',
    'Zatara'
  ];
  
  ul = document.getElementById("users-list");
  
  let render_lists = function(lists){
    let li = "";
    for(index in lists){
      li += "<li>" + lists[index] + "</li>";
    }
    ul.innerHTML = li;
  }
  
  input = document.getElementById('filter_users');
  let filterUsers = function(event){
    keyword = input.value.toLowerCase();
    if(keyword.length!=0){
      ul.style.display = "block";
      filtered_users = superheroes.filter(function(user){
          user = user.toLowerCase();
         return user.indexOf(keyword) > -1; 
    });
    render_lists(filtered_users);
    }else{
      ul.style.display = "none";
    }
   
  }
  
  input.addEventListener('keyup', filterUsers);
  