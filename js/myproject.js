

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



    selisih(startdate, enddate);


    if(projectname === ""){
        alert("Nama project tidak boleh kosong");
        return;
    }else if(startdate === "" || enddate === ""){
        alert("Isi Tanggal Mulainya dan Akhir Projek Terlebih Dahulu");
        return;
    }else if( description === ""){
        alert("Isi Deskripsi Anda terlebih dahulu")
        return;
    }else if( images === 0){
        alert("Isi Gambar Anda terlebih dahulu")
        return;
    }


    let blog = {
        projectname: projectname,
        startdate: startdate,
        enddate: enddate,
        description: description,
        checkboxes: {}, // Inisialisasi objek untuk menyimpan nilai checkbox
        images: URL.createObjectURL(images), // Mengubah file input menjadi URL
        duration: selisih(startdate, enddate), 
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

        <div class="card" id="contents">  
            <img class="project-pict" src="${dataBlog[i].images}" >
            <h3><a href="detail-project.html">${dataBlog[i].projectname}</a></h3>
            <p>${dataBlog[i].duration}</p>


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
        
       
        `;
    };
};


function selisih(startdate, enddate) {
    let date1 = new Date(startdate); 
    let date2 = new Date(enddate); 
      
    let Difference_In_Time = date2.getTime() - date1.getTime(); 
      
  
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

    let hasal = Difference_In_Days;
    
    let hasil = `Durasi : ${hasal} hari`;
    return hasil; 
}

// function getFullTime(){
//     let time = new Date();
//     // console.log(time);

//     let monthName = [
//         "January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December"
//     ];
//     // console.log(monthName[2]);

//     let daying = [
//         "Sunday",
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday",
//     ];

//     // console.log(daying[0]);

//     let day = time.getDay();
//     // console.log(day);

//     let hari = daying[day];
//     // console.log(hari);

   
   

//     let date = time.getDate();
//     // console.log(date);

//     let monthIndex = time.getMonth();
//     // console.log(monthIndex +1);

//     let bulanInih = monthName[monthIndex];
//     // console.log(bulanInih);



// }

