function isPalindrome(str) {
   
    str = str.toLowerCase().replace(/\s/g, '');
  
    
    const len = str.length;

    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
}
  
    const str = "racecar";
const isPalindromeResult = isPalindrome(str);
console.log(isPalindromeResult); // Output: true



let age = 20;

if (age >= 18) {
  console.log("You are old enough to vote.");
} else {
  console.log("You are not old enough to vote.");
}


let grade = 85;

switch (grade) {
    case 90:
  
    console.log("You got an A.");
    break;
  case 80:
  case 81:
  case 82:
  case 83:
  case 84:
  case 85:
  case 86:
  case 87:
  case 88:
  case 89:
    console.log("You got a B.");
    break;
  case 70:
  case 71:
  case 72:
  case 73:
  case 74:
  case 75:
  case 76:
  case 77:
  case 78:
  case 79:
    console.log("You got a C.");
    break;
  default:
    console.log("You got a D or F.");
}
