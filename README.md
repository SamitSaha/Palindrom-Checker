# Palindrom-Checker

Creating Palindrom-Checker by using Javascript and css code,

// Regular expression to match alphanumeric characters, spaces, and punctuation marks

const regex = /^[a-zA-Z0-9\s,:/\\|()\-._'!]+$/g;

// repalce the input text into lowercase and replace into only alaphabats.

const cleanInput = inputText.toLowerCase().replace(/[^a-z0-9]/g, "");
