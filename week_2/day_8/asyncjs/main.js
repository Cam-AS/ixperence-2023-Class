// on the API (backend)
function fetchPost(err) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!err) {
        console.log('Success!');
        console.log({
          name: 'Cameron',
          surname: 'Kirkpatrick',
        });
        resolve();
      } else {
        reject('Err: Something went wrong!');
      }
    }, 3000);
  });
}

// from the Front
async function callApi() {
  try {
    // await fetchPost(true);
    await fetchPost(false);
  } catch (err) {
    console.log(err);
  }
}

callApi();
