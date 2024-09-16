function addSubCategories() {
    document.getElementById("addSubCategory").classList.toggle("show");
}
function addCategories() {
    document.getElementById("addCategory").classList.toggle("show");
}
fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(users => console.log(galery));
  const newUser = { name: 'New User', email: 'newuser@example.com' };

fetch('http://localhost:3000/galery', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newUser),
})
.then(response => response.json())
.then(user => console.log(user));