// Asynchronous JavaScript

console.log('1');

setTimeout(() => {
  console.log('2');
}, 3000);

console.log('3');

// Callbacks (old)

const phoneBook = [
  { name: 'Cameron', number: '0635776445' },
  { name: 'Michelle', number: '0635776332' },
  { name: 'Mitchel', number: '0635776332' },
];

function getPhoneNumbers() {
  setTimeout(() => {
    let output = '<ol>';

    for (let i = 0; i < phoneBook.length; i++) {
      let contact = phoneBook[i];
      output += '<li>' + contact.name + ' ' + contact.number + '</li>';
    }

    output += '</ol>';
    document.body.innerHTML = output;
  }, 1000);
}

getPhoneNumbers();

function saveContact(contact, callback) {
  setTimeout(() => {
    phoneBook.push(contact);

    alert('Contact Added');

    callback();
  }, 3000);
}

saveContact({ name: 'Jerry', number: '0742335664' }, getPhoneNumbers);

// Promises (old)

function saveContact(contact) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // const err = true;
      const err = false;

      if (!err) {
        console.log('Success!');
        resolve();
      } else {
        reject('Err: Something went wrong!');
      }
    }, 3000);
  });
}

saveContact({ name: 'Jim', number: '0832265342' })
  .then(getPhoneNumbers)
  .catch((err) => {
    console.log(err);
  });

// Async Await (new standard)

async function init() {
  await saveContact({ name: 'Gregg', number: '0987654466' });
  console.log('Contact added!');
}

// init();

async function start() {
  try {
    await saveContact({ name: 'Cam', number: '0745336322' });
    getPhoneNumbers();
    console.log('Here we are in async await land');
  } catch (err) {
    console.log(err);
  }
}

start();
