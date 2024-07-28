//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
  // code
  var box = []
  for (var key in object) {
    box.push(object[key])

  }
  return box
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
  var box = [];
  for (var key in object) {
    // push key into the box array  
    box.push(key)
      ;
  }
  //need to join and create whitespace 
  return box.join(' ')

}
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
  var box = []
  // use typeOf to determine what datatype 
  for (var key in object) {
    if (typeof object[key] === 'string') {
      box.push(object[key]);
    }
  }
  //check if object is string and if it is push the value
  return box.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: one argument
O:return 'array' if its an array and 'object' if its an object"
C:
E:
*/
function arrayOrObject(collection) {
  //check if collection is array 
  if (Array.isArray(collection)) {
    return 'array';
    //check if collection is object and if collection is not equla to null
  } else if (typeof collection === 'object' && collection !== null) {
    return 'object';
  }
  return 'neither';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I:Should take a string of one word
O:return the word with its first letter capitalized"
C:
E:
*/
function capitalizeWord(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 *I: Should take a string of words
 *O:return a string with all the words capitalized
 *C:
 *E:
 */


function capitalizeAllWords(string) {
  var words = string.split(' ')

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(' ');


}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: Should take an object with a name property
O:return 'Welcome <Name>!'"
C:
E:
*/
function welcomeMessage(object) {
  var cap = object['name'].charAt(0).toUpperCase() + object["name"].slice(1);

  return 'Welcome ' + cap + '!';



}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 *I:Should take an object with a name an a species
 *O:return '<Name> is a <Species>'"
 *C:
 *E: 
 */
function profileInfo(object) {
  var n = object['name'].charAt(0).toUpperCase() + object["name"].slice(1);
  var s = object['species'].charAt(0).toUpperCase() + object["species"].slice(1);

  return n + ' is a ' + s;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I:Should take an object
 * O:if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'"
 * C:
 * E:
 */
function maybeNoises(object) {

  // Check if the object has a noises property and if it's an array
  if (Array.isArray(object.noises) && object.noises.length > 0) {
    // Join the noises array into a string separated by spaces
    return object.noises.join(' ');
    // Return the message if there are no noises
  } else {
    return 'there are no noises';
  }


}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
  // Use a regular expression to search for the whole word in the string
  const has = new RegExp('\\b' + word + '\\b', 'i');
  return has.test(string);


}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
  // Check if the object has a 'friends' property
  if (object.friends && Array.isArray(object.friends)) {
    // Add the new friend to the friends array
    object.friends.push(name);
  } else {
    // If the 'friends' property doesn't exist, create it and add the new friend
    object.friends = [name];
  }
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
  // Check if the object has a 'friends' property and if it is an array
  if (object.friends && Array.isArray(object.friends)) {
    // Check if the name is in the friends array
    return object.friends.indexOf(name) !== -1;
  }
  // If the 'friends' property doesn't exist or is not an array, return false
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
  var person = null;
  var allNames = [];

  // Find the person object with the given name and collect all names in the array
  for (var i = 0; i < array.length; i++) {
    if (array[i].name === name) {
      person = array[i];
    }
    allNames.push(array[i].name);
  }

  // If the person is not found, return an empty array
  if (!person) {
    return [];
  }

  // Collect names that are not in the person's friends list
  var nonFriends = [];
  for (var j = 0; j < allNames.length; j++) {
    if (allNames[j] !== name && person.friends.indexOf(allNames[j]) === -1) {
      nonFriends.push(allNames[j]);
    }
  }

  return nonFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  // Update the property value or add the property if it doesn't exist
  object[key] = value;
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  for (var i = 0; i < array.length; i++) {
    var key = array[i];
    if (object.hasOwnProperty(key)) {
      delete object[key];
    }
  }
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // Initialize an empty array to store unique values
  var uniqueArray = [];
    // Iterate through each element in the input array
  for (var i = 0; i < array.length; i++) {
       // Check if the current element is already in the uniqueArray
    if (uniqueArray.indexOf(array[i]) === -1) {
           // If the element is not in the uniqueArray, add it
      uniqueArray.push(array[i]);
    }
  }
  // Return the array containing only unique values
  return uniqueArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
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