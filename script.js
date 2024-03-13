document.getElementById("check-btn").addEventListener("click", function () {
  // when the check button will be clicked the function start working.
  const inputText = document.getElementById("text-input").value.trim(); // from the text box it takes the text input and store into inputText variable.
  const resultElement = document.getElementById("result"); // it gives the result in the display.

  // Regular expression to match alphanumeric characters, spaces, and punctuation marks
  const regex = /^[a-zA-Z0-9\s,:/\\|()\-._'!]+$/g;

  if (inputText === "") {
    alert("Please input a value"); // if the input text is empty this alert message will be shown.
    return;
  }

  if (!regex.test(inputText)) {
    // comparing the reges with the input text.
    resultElement.textContent = "Invalid input"; // if it doesnot matches it returns the invalid input.
    return;
  } else {
    const cleanInput = inputText.toLowerCase().replace(/[^a-z0-9]/g, ""); // repalce the input text into lowercase and replace into only alaphabats.
    const reversedText = cleanInput.split("").reverse().join(""); // split the text into alphabets and store into array , reverse the array and join it into  stringtext.
    const isPalindrome = cleanInput === reversedText; // giving boolean value by checking between 2 string. 121 === 121 , eye === eye

    if (isPalindrome) {
      resultElement.textContent = `${inputText} is a palindrome`; // if it is true, print.
    } else {
      resultElement.textContent = `${inputText} is not a palindrome`; // if it is false, print.
    }
    return;
  }
});

// Additional checks for specific conditions

// const testCases = {
//     'A': 'A is a palindrome',
//     'eye': 'eye is a palindrome',
//     '_eye': '_eye is a palindrome',
//     'racecar': 'race car is a palindrome',
//     'notapalindrome': 'not a palindrome is not a palindrome',
//     'amanaplanacanalpanama': 'A man, a plan, a canal. Panama is a palindrome',
//     'neveroddoreven': 'never odd or even is a palindrome',
//     'myageis00siegaym': 'My age is 0, 0 si ega ym. is a palindrome',
//     '1eyeforof1eye': '1 eye for of 1 eye. is not a palindrome',
//     '0000': '0_0 (: /-\ :) 0-0 is a palindrome',
//     'fivefour': 'five|\_/|four is not a palindrome'
//   };
