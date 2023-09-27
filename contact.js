function submitData() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let number = document.getElementById("input-number").value;
    let Subject = document.getElementById("input-subject").value;
    let text = document.getElementById("input-text").value;

    if(name == ""){
        return alert("name must be filled");
    }else if(email == ""){
        return alert("email must be filled");
    }else if(number == ""){
        return alert("number must be filled");
    }else if(subject == ""){
        return alert("subject must be filled");
    }else if(text == ""){
        return alert("text must be filled");
    };

    let emailReceiver = "ffznrr@gmail.com";

    let a = document.createElement('a');
    a.href = `mailto: ${emailReceiver}?subject=${subject}`;

    let message = {
        name: name,
        email: email,
        number: number,
        subject: Subject,
        text: text,
    };

    let messageString = JSON.stringify(message, null, 2); // Ubah objek menjadi string JSON dengan format yang lebih baik
    alert(messageString);
}
