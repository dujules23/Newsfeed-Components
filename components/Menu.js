// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

const menu = document.querySelector('.header')
console.log(menu)

function menuMaker(menuItems){

  const mainMdiv = document.createElement('div')
  const ul = document.createElement('ul')
  

  
  mainMdiv.appendChild(ul)

  

  console.log(mainMdiv)

  mainMdiv.classList.add('menu')


  menuItems.forEach( menuDatum =>{
    const li = document.createElement('li')
    console.log(li)
    li.push(menuDatum)
    ul.appendChild(li)
  })


  const menuButton = document.querySelector('.menu-button')

  menuButton.addEventListener('click', () => {

    menuButton.classList.toggle('.menu--open')
  })
  console.log(menuButton)


  return mainMdiv
}

console.log(menuMaker(menu[0]))
/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
