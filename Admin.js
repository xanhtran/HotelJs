      class Room {
          constructor(id, name, img, price, description, facilities) {
              this.id = id;
              this.name = name;
              this.img = img;
              this.price = price;
              this.description = description;
              this.facilities = facilities;
          }

          static addProduct() {
              console.log(room.length);
              var added = new Room(("R" + parseInt(room.length + 1)), document.getElementById('name').value, document.getElementById('img').value, document.getElementById('price').value, document.getElementById('description').value, document.getElementById('facilities').value);
              room.push(added);
              localStorage.setItem('listProduct', JSON.stringify(room));
              save();
              window.location.reload();
          }

          static updateProduct(i) {

              var k = room[i];
              document.getElementById('idd').value = k.id;
              document.getElementById('named').value = k.name;
              document.getElementById('imgd').value = k.img;
              document.getElementById('priced').value = k.price;
              document.getElementById('descrip').value = k.description;
              document.getElementById('facili').value = k.facilities;

              document.getElementById('idd').setAttribute("disabled", "disabled");
              document.getElementById('submitUpdate').innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="Room.submitUpdate(' + i + ')"> Đồng ý </button>';

          }

          static submitUpdate(i) {
              var k = room[i];

              k.name = document.getElementById('named').value;
              k.img = document.getElementById('imgd').value;
              k.price = document.getElementById('priced').value;
              k.description = document.getElementById('descrip').value;
              k.facilities = document.getElementById('facili').value;
              localStorage.setItem('listProduct', JSON.stringify(room));
              window.location.reload();

          }
          static deleteProduct(i) {
              room.splice(i, 1);
              localStorage.setItem('listProduct', JSON.stringify(room));
              window.location.reload();
          }


      }

      function productAdmin() {
          var listProduct = "";
          for (const i in room) {
              var data = room[i];
              listProduct += `
            <tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td> <img src=" ${data.img}" style="width: 150px; "></td>
            <td> ${data.price}$ </td>
            <td> ${data.description} </td>
            <td> ${data.facilities} </td>
            <td> <button onclick="Room.updateProduct(${i})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct"> <i class="fas fa-cogs"> </i></button>
                <button onclick="Room.deleteProduct(${i})" class="btn btn-out-warning"> <i class="fas fa-trash"> </i></button>
            </td>
            
        </tr>   `;

          }
          document.getElementById("product_admin").innerHTML = listProduct;


      }



      function save() {

          localStorage.setItem('listProduct', JSON.stringify(room));

      }

      var room = [
          (new Room("R1", "SUPERIOR GARDEN VIEW", "Image/super.jpg", 58, "Diện tích phòng 24m2 có ban công nhỏ nhìn ra khu vườn trong khuôn viên sPhòng được trang bị đầy đủ tiện nghi như TV màn hình phẳng, tủ lạnh mini, máy sấy tóc, quạt, phòng tắm với góc tắm vòi sen mở và đồ vệ sinh cá nhân miễn phí. Phòng Superior là sự lựa chọn kinh tế và thoải mái cho các cặp vợ chồng trẻ và các bạn đi du lịch *Sức chứa: 2 người lớn + 1 trẻ em *Hướng nhìn: Hướng vườn Giường: 1 Giường đôi hoặc 2 Giường đơn", "Máy pha trà/ cà phê ,Minibar ,Tủ lạnh ,Ấm đun nước điện ,Dịch vụ đánh thức / Đồng hồ báo thức  ,Bồn nước nóng ,Khu vực chỗ ngồ,Két an toàn ,Cách âm ,Quạt,TV ,Điện thoại,Tủ quần áo hoặc tủ quần áo")),
          (new Room("R2", "DELUXE GARDEN VIEW", "Image/deluxe.jpg", 60, "Phòng có không gian thoải mái rộng 25 m2, được trang bị đầy đủ tiện nghi cao cấp như TV thông minh, tủ lạnh mini, tủ quần áo, máy sấy tóc, góc tắm vòi sen mở đầy đủ chức năng, két an toàn, bàn làm việc và gương trang điểm. Phòng là một lựa chọn yên tĩnh và thoáng mát hơn từ Phòng Superior.**Sức chứa: 2 người lớn + 1 trẻ em *Hướng nhìn: Hướng vườn *Giường: 1 Giường đôi hoặc 2 Giường đơn", "Máy pha trà/ cà phê ,Minibar ,Tủ lạnh ,Ấm đun nước điện ,Dịch vụ đánh thức / Đồng hồ báo thức  ,Bồn nước nóng ,Khu vực chỗ ngồ,Két an toàn ,Cách âm ,Quạt,TV ,Điện thoại,Tủ quần áo hoặc tủ quần áo")),
          (new Room("R3", "PREMIUM DELUXE GARDEN VIEW", "Image/prerium.jpg", 64, "Phòng có ban công nhìn ra vườn hoa, nơi du khách có thể thưởng thức tách trà ngon giữa không gian xanh tươi mát. Căn phòng cũng có 2 cửa sổ trung tâm mua sắm để cung cấp ánh sáng tự nhiên và căn phòng luôn đẹp và sạch sẽ. Căn phòng rộng rãi có thể kê thêm giường phụ cho người lớn thứ 3, đây sẽ là lựa chọn kinh tế cho nhóm bạn và gia đình nhỏ.*Diện tích phòng: 30 m2 * sức chứa: 3 người lớn + 1 trẻ em *Hướng nhìn: Hướng vườn *Giường: 1 Giường đôi hoặc 2 Giường đơn ", "Máy pha trà/ cà phê ,Minibar ,Tủ lạnh ,Ấm đun nước điện ,Dịch vụ đánh thức / Đồng hồ báo thức  ,Bồn nước nóng ,Khu vực chỗ ngồ,Két an toàn ,Cách âm ,Quạt,TV ,Điện thoại,Tủ quần áo hoặc tủ quần áo")),
          (new Room("R4", "SUITE GARDEN VIEW", "Image/h1.jpg", 58, "Suite Garden View là chỗ ở riêng tư xinh xắn cho những ai yêu thích một chút kiến ​​trúc phương Tây truyền thống. Phòng được thiết kế đẹp mắt để du khách có thể ngắm nhìn toàn cảnh vườn hoa rực rỡ sắc màu trong khuôn viên *Diện tích phòng: Tối đa 42 m2 *Sức chứa: 3 người lớn + 1 trẻ em *Hướng nhìn: Hướng vườn *Bộ đồ giường: 1 giường King hoặc 2 giường đơn", "Máy pha trà/ cà phê ,Minibar ,Tủ lạnh ,Ấm đun nước điện ,Dịch vụ đánh thức / Đồng hồ báo thức  ,Bồn nước nóng ,Khu vực chỗ ngồ,Két an toàn ,Cách âm ,Quạt,TV ,Điện thoại,Tủ quần áo hoặc tủ quần áo")),


      ];

      function load() {
          room = JSON.parse(localStorage.getItem('listProduct'));
          productAdmin();
      }
      if (localStorage.getItem('listProduct') != null) {
          load();
      }