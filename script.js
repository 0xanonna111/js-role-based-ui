function changeRole() {
  const role = document.getElementById("role").value;

  document.getElementById("adminPanel").style.display = "none";
  document.getElementById("userPanel").style.display = "none";

  if (role === "admin") {
    document.getElementById("adminPanel").style.display = "block";
  } else if (role === "user") {
    document.getElementById("userPanel").style.display = "block";
  }
}
