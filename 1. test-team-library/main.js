function addSubCategories() {
    document.getElementById("addSubCategory").classList.toggle("show");
}
function addCategories() {
    document.getElementById("addCategory").classList.toggle("show");
}
const categories = document.getElementById("categories")
fetch("http://localhost:3000/galery")
.then(res => res.json())
.then(data => {
    if (Object.keys(data).length != categories.length) {
        categories.innerHTML = "";
        Object.keys(data).forEach(function(key, index) {
            let category = document.createElement("div")
            category.className = "category"
    
            let image = document.createElement("img")
            image.src = data[key].image
    
            let text = document.createElement('p')
            text.textContent = data[key].name
    
            category.append(image, text)
    
            categories.appendChild(category)
        });
    }
    
})

let loginForm = document.getElementById("myForms");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let code = document.getElementById("code");
  let price = document.getElementById("price");

  if (code.value == "" || price.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    let product = {
        "code": code,
        "price": price
    }
    // fetch('http://localhost:3000/galery', {
    //     method: 'POST',
    //     header: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(product)
    // }).then(response => response.json())
    code.value = "";
    price.value = "";
  }
});
// const form = document.querySelector("#myForms");

// async function sendData() {
//   // Associate the FormData object with the form element
//   const formData = new FormData(form);

//   try {
//     const response = await fetch("http://localhost:3000/post", {
//       method: "POST",
//       // Set the FormData instance as the request body
//       body: formData,
//     });
//     console.log(await response.json());
//   } catch (e) {
//     console.error(e);
//   }
// }

// // Take over form submission
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   sendData();
// });
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