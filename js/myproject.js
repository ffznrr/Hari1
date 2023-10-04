

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

function addData(event) {
    event.preventDefault();

    let projectname = document.getElementById("input-project-name").value;
    let startdate = document.getElementById("input-start-date").value;
    let enddate = document.getElementById("input-end-date").value;
    let description = document.getElementById("input-description").value;
    let images = document.getElementById("input-blog-image").files[0]; // Mengambil file pertama

    let blog = {
        projectname: projectname,
        startdate: startdate,
        enddate: enddate,
        description: description,
        checkboxes: {}, // Inisialisasi objek untuk menyimpan nilai checkbox
        images: URL.createObjectURL(images), // Mengubah file input menjadi URL
    };

    let checkboxes = document.querySelectorAll(".checkboxes");
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            let checkboxValue = checkboxes[i].value;
            blog.checkboxes[checkboxValue] = true; // Menambahkan nilai checkbox yang dicentang ke objek blog
        }
    }

    dataBlog.push(blog);
    console.log(dataBlog);

    renderBlog();
}

function renderBlog() {

    document.getElementById("contents").innerHTML = " ";

    for (let i = 0; i < dataBlog.length; i++) {
        console.log(dataBlog[i]);

        document.getElementById("contents").innerHTML += `
        <div class="card-box" style="border-radius: 10px;
        display: grid;
        grid-template-columns: 30% 30% 30%;
        grid-template-rows: repeat(2, auto);
        border: 2px solid #ccc;">

        <div class="card" id="contents">  
            <img class="project-pict" src="${dataBlog[i].images}" >
            <h3><a href="detail-project.html">${dataBlog[i].projectname}</a></h3>
            <p>durasi: 3 bulan</p>

            <p style="text-align: justify; margin-top: 5px;">${dataBlog[i].description}</p>
            <div class="framework-logo">
                <img src="./img/android.svg" width="15px" height="auto">
                <img src="./img/node-js.svg" width="15px" height="auto">
                <img src="./img/react.svg" width="15px" height="auto">
            </div>
            <div class="btn-card">
                <button class="btn-edit">edit</button>
                <button class="btn-delete">delete</button>
            </div> 
        </div>
        
       
        
</div>
        `;
    };
};


    
