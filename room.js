class Device {
    constructor(id, name, img, price) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;


    }

    static addDevice() {
        console.log(device.length);
        var added = new Device("D" + parseInt(device.length + 1), document.getElementById('name').value, document.getElementById('img').value, document.getElementById('price').value);
        device.push(added);
        localStorage.setItem('listDevice', JSON.stringify(device));
        save();
        window.location.reload();
    }

    static updateDevice(i) {

        var k = device[i];
        document.getElementById('idd').value = k.id;
        document.getElementById('named').value = k.name;
        document.getElementById('imgd').value = k.img;
        document.getElementById('priced').value = k.price;


        document.getElementById('idd').setAttribute("disabled", "disabled");
        document.getElementById('submitUpdate1').innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="Device.submitUpdate(' + i + ')"> Đồng ý </button>';

    }

    static submitUpdate(i) {
        var k = device[i];

        k.name = document.getElementById('named').value;
        k.img = document.getElementById('imgd').value;
        k.price = document.getElementById('priced').value;

        localStorage.setItem('listDevice', JSON.stringify(device));
        window.location.reload();

    }
    static deleteDevice(i) {
        device.splice(i, 1);
        localStorage.setItem('listDevice', JSON.stringify(device));
        window.location.reload();
    }


}

function deviceAdmin() {
    var listDevice = "";
    for (const i in device) {
        var data = device[i];
        listDevice += `
      <tr>
      <td>${data.id}</td>
      <td>${data.name}</td>
      <td> <img src=" ${data.img}" style="width: 150px; "></td>
      <td> ${data.price}$ </td>
    
      <td> <button onclick="Device.updateDevice(${i})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateDevice"> <i class="fas fa-cogs"> </i></button>
          <button onclick="Device.deleteDevice(${i})" class="btn btn-out-warning"> <i class="fas fa-trash"> </i></button>
      </td>
      
  </tr>   `;

    }
    document.getElementById("device_admin").innerHTML = listDevice;


}



function save() {

    localStorage.setItem('listDevice', JSON.stringify(device));

}

var device = [

    (new Device("D1", "TV-LG", "Image/TV-LG-3D-1.jpg", 25)),
    (new Device("D2", "Máy sấy tóc", "Image/may-say-toc.jpg", 6)),
    (new Device("D3", "Khăn tắm", "Image/khantam.jpg", 5))
];


function load() {
    device = JSON.parse(localStorage.getItem('listDevice'));
    deviceAdmin();
}
if (localStorage.getItem('listDevice') != null) {
    load();
}