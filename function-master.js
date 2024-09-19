//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // code
    return Object.values(object)
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I:an object
O:a string each separated with a space
C:
E:
*/
function valuesToString(object) {
    return Object.values(object).filter(function(item){
        return typeof item === 'string' || typeof item === 'number' // Filter for valid types
    }).join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array';
    } else if (typeof collection === 'object' && collection !== null) {
        return 'object';
    } else {
        return 'neither';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var words = string.split(' ');
    var capitalizedWords = [];

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        // Capitalize the first letter and concatenate with the rest
        var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizedWords.push(capitalizedWord); // Add the capitalized word to the array
    }

    return capitalizedWords.join(' '); // Join the capitalized words with a space
} 

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    const name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    return `Welcome ${name}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    const name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    const species = object.species.charAt(0).toUpperCase() + object.species.slice(1);

    return `${name} is a ${species}`
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
 // Check if the object has a noises property and it's an array with elements
 if (Array.isArray(object.noises) && object.noises.length > 0) {
    return object.noises.join(" "); // Join noises with a space
} else {
    return "there are no noises"; // Default message if no noises
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var words = string.split(' ')
    return words.includes(word)
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name)
return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


/*
I: takes in a name and object
O:returns a boolean value
C:
E:
*/
function isFriend(name, object) {
    return Array.isArray(object.friends) && object.friends.includes(name);
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
 // Find the user's friends list
 var currentUser = null;
    
 for (var i = 0; i < array.length; i++) {
     if (array[i].name === name) {
         currentUser = array[i];
        
     }
 }

 // If the user is not found, return all names
 if (!currentUser) {
     var allNames = [];
     for (var j = 0; j < array.length; j++) {
         allNames.push(array[j].name);
     }
     return allNames;
 }

 // Get the friends' names
 var friendsList = currentUser.friends;
 var nonFriendsList = [];

 // Find non-friends
 for (var k = 0; k < array.length; k++) {
     var person = array[k];
     if (person.name !== name && friendsList.indexOf(person.name) === -1) {
         nonFriendsList.push(person.name);
     }
 }

 return nonFriendsList;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value
return object
}5  

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++) {
        var prop = array[i];
        // Use the delete operator to remove the property if it exists
        if (object.hasOwnProperty(prop)) {
            delete object[prop];
        }
    }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var uniqueArray = [];

    for (var i = 0; i < array.length; i++) {
        // Check if the value is not already in the uniqueArray
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }

    return uniqueArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}