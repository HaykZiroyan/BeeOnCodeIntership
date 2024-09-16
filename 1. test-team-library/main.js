function addSubCategories() {
    document.getElementById("addSubCategory").classList.toggle("show");
}
function addCategories() {
    document.getElementById("addCategory").classList.toggle("show");
}
// fetch("http://localhost:3000/galery")
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('imageFile');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select an image!');
        return;
    }

    const formData = new FormData();
    formData.append('image', file);

    // Upload image to a mock server endpoint
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const imageUrl = data.url;
        } else {
            document.getElementById('result').innerHTML = '<p>Error uploading image: ' + data.message + '</p>';
        }
    })
    .catch(error => {
        document.getElementById('result').innerHTML = '<p>An error occurred: ' + error.message + '</p>';
    });
});