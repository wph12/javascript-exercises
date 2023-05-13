const findTheOldest = function(people) {
    let oldest = people[0];
    let oldestAge;
    if(oldest.yearOfDeath){
        oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    }
    else{
        oldestAge = new Date().getFullYear() - oldest.yearOfBirth;
    }

    for(let person of people){
        let yearOfDeath;
        if(person.yearOfDeath){
            yearOfDeath = person.yearOfDeath;
        }
        else{
            yearOfDeath = new Date().getFullYear()
        }
        let personAge = yearOfDeath - person.yearOfBirth;
        if(personAge > oldestAge){
            oldest = person;
            oldestAge = personAge;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
