// 1. Function + conditional: greeting by time of day
function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  else if (h < 18) return "Good afternoon";
  else return "Good evening";
}

// 2. Dynamic content: intro box with a button that changes text
const main = document.querySelector("main");
const box = document.createElement("div");
box.id = "intro-box";
box.innerHTML = '<h3 id="greeting"></h3><p id="fact-text">I am an IT student at Africa International University.</p><button id="fact-btn">Show Another Fact</button>';
main.prepend(box);
document.getElementById("greeting").textContent = getGreeting() + ", welcome to my portfolio!";

const facts = [
  "I am an IT student at Africa International University.",
  "I am a student entertainer and MC known as MC Gakush.",
  "I enjoy building websites with HTML, CSS and JavaScript.",
  "I work as a Sales Representative while studying."
];
let i = 0;
document.getElementById("fact-btn").addEventListener("click", function () {
  i = (i + 1) % facts.length;
  document.getElementById("fact-text").textContent = facts[i];
});

// 3. Hamburger menu (uses your nav if you have one, builds one if not)
let nav = document.querySelector("nav");
if (!nav) {
  nav = document.createElement("nav");
  const list = document.createElement("ul");
  document.querySelectorAll("main section[id]").forEach(function (s) {
    const li = document.createElement("li");
    li.innerHTML = '<a href="#' + s.id + '">' + s.id.charAt(0).toUpperCase() + s.id.slice(1) + "</a>";
    list.appendChild(li);
  });
  nav.appendChild(list);
  document.body.prepend(nav);
}
const menuList = nav.querySelector("ul");
const toggle = document.createElement("button");
toggle.id = "menu-toggle";
toggle.innerHTML = "&#9776;";
nav.prepend(toggle);
toggle.addEventListener("click", function () {
  menuList.classList.toggle("show");
});
menuList.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", function () {
    menuList.classList.remove("show");
  });
});

// 4. Contact form validation
function validEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}
function setError(id, msg) {
  document.getElementById(id).textContent = msg;
}
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("message").value.trim();
  let ok = true;
  setError("name-error", ""); setError("email-error", ""); setError("message-error", "");
  document.getElementById("form-success").textContent = "";

  if (name === "") { setError("name-error", "Please enter your name."); ok = false; }
  if (email === "") { setError("email-error", "Please enter your email."); ok = false; }
  else if (!validEmail(email)) { setError("email-error", "Enter a valid email."); ok = false; }
  if (msg.length < 10) { setError("message-error", "Message must be at least 10 characters."); ok = false; }

  if (ok) {
    document.getElementById("form-success").textContent = "Thank you, " + name + "! Message sent.";
    this.reset();
  }
});

// 5. Dynamic footer year
const yr = document.querySelector(".site-footer p");
if (yr) yr.innerHTML = "&copy; " + new Date().getFullYear() + " Sophia Gakundi";