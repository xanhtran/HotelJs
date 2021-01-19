(function() {

    var index = 1;
    
    $('.btn-choose').on('click', choose);
    $('#bill-table').on('change keyup paste', '.bill-quantity', changeValue);
    
    function choose() {
        var self = this,
            bill = $('#bill-table'),
            data = getDataMenu($(self).parent().parent()),
            html = createRow(data);
    
        if (bill.find('.empty').length) {
            bill.empty();
        }
    
        bill.append(html);
    }
    
    function changeValue() {
        var self = this,
            row = $(self).parent().parent(),
            data = getDataBill(row);
    
        row.find('.bill-total').html(calculate(data.price, data.quantity));
    }
    
    function getDataMenu(row) {
        var id = $(row.find('.col-id')).html(),
            name = $(row.find('.col-name')).html(),
            price = $(row.find('.col-price')).html();
    
        var data = {
            id: id,
            name: name,
            price: price
        }
    
        return data;
    }
    
    function getDataBill(row) {
        var price = $(row.find('.bill-price')).html(),
            quantity = $(row.find('.bill-quantity')).val();
    
        var data = {
            price: price,
            quantity: quantity
        }
    
        return data;
    }
    
    function createRow(data) {
        var html = '<tr>';
    
        html += '<td>' + index++ + '</td>';
        html += '<td>' + data.id + '</td>';
        html += '<td>' + data.name + '</td>';
        html += '<td class="bill-price">' + data.price + '</td>';
        html += '<td><input type="text" value="1" class="bill-quantity" /></td>';
        html += '<td class="bill-total">' + calculate(data.price, 1) + '</td>';
        html += '<td></td>';
        html += '<td></td>';
        html += '</tr>';
    
        return html;
    }
    
    function calculate(price, quantity) {
        return price * quantity;
    }
    
    })();
    