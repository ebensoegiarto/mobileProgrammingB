
fetch("https://jsonplaceholder.typicode.com/users")
.then(function (response) {
    return response.json();
  })
  .then(function (user) {
    console.log(user);
  });

function ambilDataUser() {

}
ambilDataUser()     
