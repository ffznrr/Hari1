

// let dataPersonal = [

// {
//     nama: "nama",
//     alamat: "benhil",
//     umur: 92,
// },
// {
//     nama: "dadang",
//     alamat: "Bengkal",
//     umur: 23,
// },
// {
//     nama: "nama",
//     alamat: "dudung",
//     umur: 10,
// },
// ];

// console.log(dataPersonal[0].nama);

// let data = [];
// e.preventDefault();

// function addData(e) {
//     let person = {
//         name: "samsul",
//         addres: "Jakarta",
//     };
//     data.push(person);
//     console.log(data);
// }


// let data = [];

// function addData(e){
//     e.preventDefault();

//     let blog = {
//         title: document.getElementById("input-blog-title").value,
//         content: document.getElementById("input-blog-content").value,
//     };

//     data.push(blog);
//     for(let i = 0; i < data.length; i++){
//         console.log(data[i]);
//     }
// }

let dataBlog = [];

function addBlog(event){
    event.preventDefault();

    let title = document.getElementById('input-blog-title').value;
    let content = document.getElementById('input-blog-content').value;
    let image = document.getElementById('input-blog-image').value;

    // membuat url gambar, agar img ditampilkan
    image = URL.createObjectURL(image[0])
    // console.log(image);

    let blog = {
        title: title,
        content: content,
        image: image,
        postAt: "29 Sept 2023",
        author: "Fauzan"
    };
    dataBlog.push()
    
}
