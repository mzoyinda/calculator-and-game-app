let lightTheme = "styles/light.css";
let darkTheme = "styles/dark.css";
let buttons = document.querySelectorAll('.btn');
let screen = document.getElementById("result");
let jerry = document.getElementById("jerry");
let equal = document.querySelector('.btn-equal');
let submitted = false;


// Clears the screen on click of C button.
function clearScreen() {
  document.getElementById("result").value = "";
}


// Displays entered value on screen.
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
   
      let value = e.target.value;
     
      screen.value += value;
      
  })
});




equal.addEventListener('click', function (e) {
  e.preventDefault()
  let root = screen.value.includes('√');
  let power = screen.value.includes('^2');

  if(screen.value === ''){
    screen.placeholder = 'Please Enter a Value';
  } else if (root) {
    console.log(true)
    let newStr = screen.value.replace('√', '');
    let answer = eval(Math.sqrt(newStr));
    screen.value = answer;
    
  } else if (power) {
    console.log(true)
    let newStr = screen.value.replace('^2', '');
    let answer = eval(Math.pow(newStr, 2));
    screen.value = answer;
    
  }else {
    let answer = eval(screen.value);
    screen.value = answer;
  
  }
 
})



// Swaps the style sheet in order to  achieve dark mode.
function changeTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == lightTheme) {
    theme.href = darkTheme;
    darkMode.innerHTML = "Light Mode 🌞";
  } else {
    theme.href = lightTheme;
    darkMode.innerHTML = "Dark Mode 🌙";
  }
}

