class User {
    constructor(id, name, username, sdt, email, address, role) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.sdt = sdt;
        this.email = email;
        this.address = address;
        this.role = role;

    }

    static addUser() {
        console.log(user.length);
        var added = new User("R" + parseInt(user.length + 1), document.getElementById('name').value, document.getElementById('username').value, document.getElementById('sdt').value, document.getElementById('email').value, document.getElementById('address').value, document.getElementById('role').value);
        user.push(added);
        localStorage.setItem('listUser', JSON.stringify(user));
        save();
        window.location.reload();
    }

    static updateUser(i) {

        var k = user[i];
        document.getElementById('idd').value = k.id;
        document.getElementById('named').value = k.name;
        document.getElementById('usernamed').value = k.username;
        document.getElementById('sdted').value = k.sdt;
        document.getElementById('emailed').value = k.email;
        document.getElementById('addressed').value = k.address;
        document.getElementById('roled').value = k.role;

        document.getElementById('idd').setAttribute("disabled", "disabled");
        document.getElementById('submitUpdate').innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="User.submitUpdate(' + i + ')"> Đồng ý </button>';

    }

    static submitUpdate(i) {
        var k = user[i];

        k.name = document.getElementById('named').value;
        k.username = document.getElementById('usernamed').value;
        k.sdt = document.getElementById('sdted').value;
        k.email = document.getElementById('emailed').value;
        k.address = document.getElementById('addressed').value;
        k.role = document.getElementById('roled').value;
        localStorage.setItem('listUser', JSON.stringify(user));
        window.location.reload();

    }
    static deleteUser(i) {
        user.splice(i, 1);
        localStorage.setItem('listUser', JSON.stringify(user));
        window.location.reload();
    }


}

function userAdmin() {
    var listUser = "";
    for (const i in user) {
        var data = user[i];
        listUser += `
      <tr>
      <td>${data.id}</td>
      <td>${data.name}</td>
      <td>${data.username}</td>
     
      <td> ${data.sdt}</td>
      <td> ${data.email} <span style="width: 150px; "></span> </td>
      <td> ${data.address} <span style="width: 150px; "></span> </td>
      <td> ${data.role} </td>
      <td> <button onclick="User.updateUser(${i})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateUser"> <i class="fas fa-cogs"> </i></button>
          <button onclick="User.deleteUser(${i})" class="btn btn-out-warning"> <i class="fas fa-trash"> </i></button>
      </td>
      
  </tr>   `;

    }
    document.getElementById("user_admin").innerHTML = listUser;


}



function save() {

    localStorage.setItem('listUser', JSON.stringify(user));

}

var user = [
    (new User("U1", "Dương", "ADuong", "093435647686", "duong.a@gmail.com", "Kon Tum", "user")),
    (new User("U2", "Hươu", "Hươu Hồ", "0983257485", "hothihuou2k1@gmail.com", "Quang tri", "admin")),
    (new User("U3", "Xanh", "Xanh Trần", "0983256335", "tranthixanh@gmail.com", "Binh Dinh", "admin"))
];

function load() {
    user = JSON.parse(localStorage.getItem('listUser'));
    userAdmin();
}
if (localStorage.getItem('listUser') != null) {
    load();
}