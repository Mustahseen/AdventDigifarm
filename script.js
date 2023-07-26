const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
const button = document.querySelector(".btn");

const signUpButton = document.querySelector("#sign-up-button");
const signUpEmail = document.querySelector("#reg_email");
const signUpPassword = document.querySelector("#reg_password");
const signUpUsername = document.querySelector("#reg_user_name");

const signInButton = document.querySelector("#sign-in-button");
const signInEmail = document.querySelector("#login_email");
const signInPassword = document.querySelector("#login_password");

const signoutButton = document.querySelector("#signout-button");

// Scroll Sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      //active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      // active sections for animation on scroll
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });

  // Sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // Animation of FOOTER on scroll
  let footer = document.querySelector("footer");

  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};

signInPassword.addEventListener("input", checkSignInButton);
signUpPassword.addEventListener("input", checkSignUpButton);
signInEmail.addEventListener("input", checkSignInButton);
signUpEmail.addEventListener("input", checkSignUpButton);
signUpUsername.addEventListener("input", checkSignUpButton);

function checkSignInButton() {
  if (signInPassword.value.length >= 6 && signInEmail.value != "") {
    signInButton.style.backgroundColor = "#162938";
  } else {
    signInButton.style.backgroundColor = "#bcdffc";
  }
}

function checkSignUpButton() {
  if (
    signUpPassword.value.length >= 6 &&
    signUpEmail.value != "" &&
    signUpUsername.value != ""
  ) {
    signUpButton.style.backgroundColor = "#162938";
  } else {
    signUpButton.style.backgroundColor = "#bcdffc";
  }
}
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDgRsmIY9e97dM2bzVHdJ-eOZJcCSqtc-4",
  authDomain: "auth-with-html-css.firebaseapp.com",
  databaseURL: "https://auth-with-html-css-default-rtdb.firebaseio.com",
  projectId: "auth-with-html-css",
  storageBucket: "auth-with-html-css.appspot.com",
  messagingSenderId: "457694633664",
  appId: "1:457694633664:web:14f946b9b61c98e10d1725",
};

firebase.initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
// const database = firebase.database();

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

button.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

// Sign up Button Press
signUpButton.addEventListener("click", function () {
  
  console.log(signUpUsername.value);
  console.log(signUpEmail.value);
  console.log(signUpPassword.value);
  signUpButton.innerText = "Loading...";
  auth
    .createUserWithEmailAndPassword(signUpEmail.value, signUpPassword.value)
    .then((userCredential) => {
      signUpButton.innerText = "Sign Up";
      // var user = userCredential.user;
      var currentUser = auth.currentUser;
      alert('User Created!')
      currentUser.updateProfile({
        displayName: signUpUsername.value,
      });
      console.log(user);
    })
    .catch((e) => {
      signUpButton.innerText = "Loading...";
      console.log(e.message);
    });
});

// Sign In Button Press
signInButton.addEventListener("click", function () {
  
  signInButton.innerText = "Loading...";
  auth
    .signInWithEmailAndPassword(signInEmail.value, signInPassword.value)
    .then((e) => {
      signInButton.innerText = "Login";
    })
    .catch((e) => {
      console.log(e.message);
      signInButton.innerText = "Login";
    });
});


auth.onAuthStateChanged((user) => {
  wrapper.style.top = "0";
  signInPassword.value = "";
  signInEmail.value = "";
  signUpPassword.value = "";
  signUpEmail.value = "";

  if (user) {
    console.log("logged-in");
    location.replace("home.html")
    // btnPopup.innerText = "Log Out";

    // wrapper.style.display = "none";
  } else {
    console.log("logged-out");
    // btnPopup.innerText = "Login";
    // wrapper.style.display = "block";
  }
});
