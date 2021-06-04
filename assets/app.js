const users = [];

document.getElementById("btn").addEventListener("click", registerUser);

function registerUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;
  const cep = document.getElementById("cep").value;
  const street = document.getElementById("street").value;
  const houseNumber = document.getElementById("number").value;
  const comp = document.getElementById("comp").value;
  const neighbourhood = document.getElementById("neighbourhood").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  const user = {
    name,
    email,
    tel,
    cep,
    street,
    houseNumber,
    comp,
    neighbourhood,
    city,
    state,
    data: new Date().toDateString(),
  };

  /** Form Validation */
  let warn = "";
  if (name === "") {
    warn += "Preencha o nome. \r\n";
  }
  if (email === "") {
    warn += "Preencha o email. \r\n";
  }
  if (tel === "") {
    warn += "Preencha o tel. \r\n";
  }
  if (cep === "") {
    warn += "Preencha o cep. \r\n";
  }
  if (street === "") {
    warn += "Preencha a rua. \r\n";
  }
  if (houseNumber === "") {
    warn += "Preencha o número. \r\n";
  }
  if (neighbourhood === "") {
    warn += "Preencha o bairro. \r\n";
  }
  if (city === "") {
    warn += "Preencha a cidade. \r\n";
  }
  if (state === "") {
    warn += "Preencha o estado. \r\n";
  }

  if (warn !== "") {
    alert(warn);
  } else {
    users.push(user);
    render();
    document.getElementById("myForm").reset();
  }
}

function render() {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  for (let user of users) {      
    const pos = users.indexOf(user)
    
    const html = `<tr>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.tel}</td>
      <td>${user.cep}</td>
      <td>${user.street}</td>
      <td>${user.houseNumber}</td>
      <td>${user.comp}</td>
      <td>${user.neighbourhood}</td>
      <td>${user.city}</td>
      <td>${user.state} <a onclick="deleteUser(${pos})"> <img src="./assets/img/delete.png"></a></td>
    </tr>`;
    tbody.innerHTML += html;
  }
}

function deleteUser(pos) {
  users.splice(pos, 1)
  render()
}

document.querySelectorAll(".isNumber").forEach((el) => {
  el.addEventListener("input", function (e) {
    if (isNaN(parseInt(e.data))) {
      const fieldValue = e.target.value;
      const value = fieldValue.substr(0, fieldValue.length - 1);
      e.target.value = value;
    }
  });
});
