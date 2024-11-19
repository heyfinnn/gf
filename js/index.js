document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Ganti dengan password yang diinginkan
  const correctPassword = "ara_radit";

  if (password === correctPassword) {
      window.location.href = "flower.html"; // Halaman tujuan
  } else {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Incorrect password. Please try again.";
  }
});
