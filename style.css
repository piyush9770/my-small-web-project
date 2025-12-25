function markAttendance(){
  let studentId = document.getElementById("studentId").value;

  fetch("http://localhost:3000/attendance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ studentId })
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById("msg").innerText = data;
  });
}
