window.onload = function() {
    const numberElement = document.getElementById('number');
    let currentNumber = 0;
    const duration = 3000; // 3 seconds
    const targetNumber = 10;
    const interval = duration / targetNumber; // Time between each increment

    function incrementNumber() {
        currentNumber++;
        numberElement.textContent = currentNumber + "+";
        if (currentNumber < targetNumber) {
            setTimeout(incrementNumber, interval);
        }
    }

    incrementNumber();
}

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const dropdownMenu = document.getElementById('dropdownMenu');
  
    menuButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('show');
    });
  
    document.addEventListener('click', (event) => {
      if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show');
      }
    });
  
    dropdownMenu.addEventListener('mouseleave', () => {
      dropdownMenu.classList.remove('show');
    });
  });


console.log("Let's write JavaScript");

async function main(){
  let a = await fetch("http://127.0.0.1:5500/review/");
  let response = await a.text();
  console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
}
