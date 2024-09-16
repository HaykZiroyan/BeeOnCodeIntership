function addSubCategories() {
    document.getElementById("addSubCategory").classList.toggle("show");
}
function addCategories() {
    document.getElementById("addCategory").classList.toggle("show");
}
// const form = document.getElementById('myForms');

// form.addEventListener('submit', (e) => {
//   e.preventDefault(); // prevent default form submission

//   const formData = new FormData(form);
//   // or
// //   const formData = {};
//   for (const element of form.elements) {
//     if (element.name) {
//       formData[element.name] = element.value;
//     }
//   }

//   // do something with the form data, e.g., send it to a server
//   console.log(formData.length);
// });

// fetch("http://localhost:3000/galery")
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })
// document.getElementById('itemForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const itemName = document.getElementById('itemName').value;

//     if (!itemName) {
//         alert('Please enter an item name!');
//         return;
//     }

//     // Post item to JSON Server
//     fetch('http://localhost:3000/items', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name: itemName })
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('result').innerHTML = '<p>Item added: ' + JSON.stringify(data) + '</p>';
//     })
//     .catch(error => {
//         document.getElementById('result').innerHTML = '<p>An error occurred: ' + error.message + '</p>';
//     });
// });
// document.getElementById('imageFile').addEventListener('change', function(event) {
//     event.preventDefault();

//     const fileInput = document.getElementById('imageFile');
//     const file = fileInput.files[0];

//     if (!file) {
//         alert('Please select an image!');
//         return;
//     }

//     const formData = new FormData();
//     formData.append('image', file);
//     // // Upload image to a mock server endpoint
//     fetch('http://localhost:3001/upload', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             const imageUrl = data.url;
//         } else {
//             document.getElementById('result').innerHTML = '<p>Error uploading image: ' + data.message + '</p>';
//         }
//     })
//     .catch(error => {
//         document.getElementById('result').innerHTML = '<p>An error occurred: ' + error.message + '</p>';
//     });
// });


// document.getElementById('fileInput').addEventListener('change', function(event) {
//     var file = event.target.files[0];
//     var fileInfo = `
//       <p>File Name: ${file.name}</p>
//       <p>File Size: ${file.size} bytes</p>
//       <p>File Type: ${file.type}</p>
      
//     `;
//     console.log(file)
//   });