var contacts = {};

function add(contact) {
  var arrContact = contact.split('').reverse();
  var arr2 = [];
  function addContact(arr, result) {
    if (arr.length === 0) {
      return;
    }

    var arrLastEl = arr[arr.length - 1];
    if (!result.hasOwnProperty(arrLastEl)) {
      result[arrLastEl] = {};
      result[arrLastEl].count = 1;
    } else if (arr.length === 1 && result.hasOwnProperty(arrLastEl)) {
      var result2 = contacts;
      removeContact(arr2, result2);

      function removeContact(arr2, result2) {
        if (arr2.length === 0) {
          return;
        }
        result2[arr2[0]].count = --result2[arr2[0]].count;
        result2 = result2[arr2[0]];
        arr2.shift();
        removeContact(arr2, result2);
      }
    } else {
      result[arrLastEl].count = ++result[arrLastEl].count;
    }
    result = result[arrLastEl];
    var c = arr.pop();
    arr2.push(c);
    addContact(arrContact, result);
  }

  addContact(arrContact, contacts);
}

function find(contact) {
  var arrContact = contact.split('').reverse();
  const count = 0;
  var result = contacts;

  if (!result[arrContact[arrContact.length - 1]]) {
    console.log(count);
  } else {
    findContact(arrContact, result);
  }

  function findContact(arr, result) {
    var length = arr.length;
    var arrContLastEl = arrContact[arr.length - 1];

    if (length === 1) {
      if (result[arrContLastEl]) {
        console.log(result[arrContLastEl].count);
      } else {
        console.log(count);
      }
    } else if (length > 1) {
      if (result[arrContLastEl]) {
        result = result[arrContLastEl];
        arr.pop();
        findContact(arr, result);
      } else {
        console.log(count);
      }
    } else {
      console.log(count);
    }
  }
}
