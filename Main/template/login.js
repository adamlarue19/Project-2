// let tablebody;

// let array = [1,2,3]

// for(i=0; i < array.length; i++){
//     tablebody.textContent = "";
//     let li = `<td>${species} </td> <td>${length} </td>`
//     tablebody.appendChild(li);
// }
let signupContainer = document.getElementById("signup-form-container");
let loginContainer = document.getElementById("login-form-container");

let loginSpanClick = document.querySelector(".login-here-span");
let signupSpanClick = document.querySelector(".signup-here-span");

function displayLoginForm (){
    loginContainer.classList.remove("hide");
    signupContainer.classList.add("hide")
};

function displaySignUpForm () {
    loginContainer.classList.add("hide");
    signupContainer.classList.remove("hide")
}
loginSpanClick.addEventListener("click", displayLoginForm);
signupSpanClick.addEventListener("click", displaySignUpForm);