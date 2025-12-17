const findTheOldest = function(people) {
  const year_now = new Date().getFullYear();
  const sorted = people.sort((a, b) => {
    if(a.yearOfDeath === undefined)
      a.yearOfDeath = year_now;

    if(b.yearOfDeath === undefined)
      b.yearOfDeath = year_now;

    const a_age = a.yearOfDeath - a.yearOfBirth;
    const b_age = b.yearOfDeath - b.yearOfBirth;
    if (a_age > b_age)
      return 1;
    if (a_age < b_age)
      return -1;
    return 0;
  });
  return sorted.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
