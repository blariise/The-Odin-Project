const palindromes = function (palindrome) {
  const regex = /[a-z0-9]/g;
  const filtered = palindrome.toLowerCase().match(regex).join("");
  const rev = filtered.split("").reverse().join("");
  return filtered === rev;
};

// Do not edit below this line
module.exports = palindromes;
