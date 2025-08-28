 PART 1: VARIABLES AND CONDITIONALS


// Variable declarations
let userName = "Guest";
const WELCOME_MESSAGE = "Welcome to our demo!";
var userAge; // Using var for demonstration (not recommended in modern JS)

// Function to check age based on user input
function checkAge() {
    // Get value from input field
    const ageInput = document.getElementById('ageInput');
    const outputElement = document.getElementById('ageOutput');
    
    // Check if input is valid
    if (!ageInput.value) {
        outputElement.innerHTML = "Please enter your age.";
        return;
    }
    
    // Convert input to number
    userAge = parseInt(ageInput.value);
    
    // Conditional statements
    if (userAge < 0) {
        outputElement.innerHTML = "Age cannot be negative!";
    } else if (userAge < 13) {
        outputElement.innerHTML = "You are a child.";
    } else if (userAge < 20) {
        outputElement.innerHTML = "You are a teenager.";
    } else if (userAge < 65) {
        outputElement.innerHTML = "You are an adult.";
    } else {
        outputElement.innerHTML = "You are a senior.";
    }
}

 PART 2: FUNCTIONS


// Custom function 1: Basic arithmetic
function addNumbers(a, b) {
    return a + b;
}

// Custom function 2: String formatting
function formatResult(operation, a, b, result) {
    return `${a} ${operation} ${b} = <span class="highlight">${result}</span>`;
}

// Function to handle calculation
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const outputElement = document.getElementById('functionOutput');
    
    if (isNaN(num1) || isNaN(num2)) {
        outputElement.innerHTML = "Please enter valid numbers.";
        return;
    }
    
    // Using our custom functions
    const sum = addNumbers(num1, num2);
    outputElement.innerHTML = formatResult("+", num1, num2, sum);
}

// PART 3: LOOPS


// Function to demonstrate loops
function runLoops() {
    const outputElement = document.getElementById('loopOutput');
    let outputHTML = "<h3>Loop Examples:</h3>";
    
    // Example 1: For loop
    outputHTML += "<p><strong>For Loop (counting 1-5):</strong> ";
    for (let i = 1; i <= 5; i++) {
        outputHTML += i + " ";
    }
    
    // Example 2: While loop
    outputHTML += "</p><p><strong>While Loop (counting even numbers 2-10):</strong> ";
    let j = 2;
    while (j <= 10) {
        outputHTML += j + " ";
        j += 2;
    }
    
    // Example 3: For...of loop with array
    outputHTML += "</p><p><strong>For...of Loop (iterating array):</strong> ";
    const fruits = ["Apple", "Banana", "Cherry", "Date"];
    for (const fruit of fruits) {
        outputHTML += fruit + " ";
    }
    
    outputElement.innerHTML = outputHTML;
}

// PART 4: DOM INTERACTIONS


// DOM Interaction 1: Change background color
function changeBackground() {
    const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffccff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
}

// DOM Interaction 2: Add item to list
function addItem() {
    const list = document.getElementById('demoList');
    const newItem = document.createElement('li');
    newItem.textContent = `New item ${list.children.length + 1}`;
    list.appendChild(newItem);
}

// DOM Interaction 3: Toggle highlight
function toggleHighlight() {
    const headers = document.querySelectorAll('h2');
    headers.forEach(header => {
        header.classList.toggle('highlight');
    });
}
