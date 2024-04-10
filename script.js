function handleSubmit(e){
    e.preventDefault();

    const fullName = document.getElementById("exampleInputName").value;
    const nameError = document.getElementById("nameError");

    if(fullName.length < 3){
        nameError.innerHTML = 'Full name should contain minimum 3 letters.'
        nameError.style.color = 'red';
    }

    const message1 = document.getElementById("InputMessage").value;
    const messageError1 = document.getElementById("messageError");

    if(message1.length < 5){
        messageError1.innerHTML = 'Message should be more than 5 letters.'
        messageError1.style.color = 'red';
    }

    console.log('Form Submitted');
}