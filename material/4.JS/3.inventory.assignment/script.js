function search(){
    var search = document.getElementById("searchProduct");
    //var table = document.getElementById("table");
    var items  = document.getElementsByTagName("span");
    var tr = document.querySelectorAll(".tr")

    var filter = search.value.toUpperCase();
    

    for (var i=0; i <= items.length; i++){
        var a = items[i].innerHTML;
        if(a.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display = ""
            //items[i].style.display = "";
        } else{
            tr[i].style.display = "none";
            //items[i].style.display = "none";
        }
    }

    

    
}

function calculate(){
    var tbody = document.getElementById("tbody");
    var productName = document.getElementById("productName");
    var unitPrice = document.getElementById("unitPrice");
    var saleQty = document.getElementById("saleQty");
    var amount = document.getElementById("amount");


    if(productName.value == ""){    //checking if its empty
        alert("Enter data first...");   //checking if its empty
    } else if(unitPrice.value == ""){   //checking if its empty
        alert("Enter data first...");   //checking if its empty
    } else if(saleQty.value == ""){     //checking if its empty
        alert("Enter data first...");   
    } else{                             //working on actual code
        var total = (saleQty.value) * (unitPrice.value);
        amount.value = total;

        var tr = document.createElement("tr");  //creating tr
        
        var td1 = document.createElement("td"); //creating td
        var td2 = document.createElement("td"); //creating td
        var td3 = document.createElement("td"); // ,, ,,  ,,
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        var span = document.createElement("span");
        
        td1.appendChild(document.createTextNode("P-982987"));   //appending created elements with values
        td2.appendChild(document.createTextNode(productName.value));
        td3.appendChild(document.createTextNode(unitPrice.value));
        td4.appendChild(document.createTextNode(saleQty.value));
        span.appendChild(document.createTextNode(total));
        td5.appendChild(span)

        span.classList.add("span")  //adding class span to span

        tr.appendChild(td1);    //appending parents with childs
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        tbody.appendChild(tr);  //appending main tbody with tr

        productName.value = "";  //clearing text fields
        unitPrice.value = "";
        saleQty.value = "";
        amount.value = "";

        console.log(document.getElementsByClassName("span")[0])
    }
}

function calculatingWhile(){
    var unitPrice = document.getElementById("unitPrice");
    var saleQty = document.getElementById("saleQty");
    var amount = document.getElementById("amount");

    var total = (saleQty.value) * (unitPrice.value);
    amount.value = total;
}

function bigTotal(){
    var unitPrice = document.getElementById("unitPrice");
    var saleQty = document.getElementById("saleQty");
    var amount = document.getElementById("amount");
    var tbody = document.getElementById("tbody");
    var tr = tbody.getElementsByTagName("tr");
    var td =[]
    

    if(tr.length == 0){
        alert("Fill the cart first...")    
    } else {
        var span = document.querySelectorAll(".span");
        var sum = 0;

        for(var j=0; j<span.length; j++){
            td.push(span[j].childNodes[0].nodeValue);
            sum += parseInt(span[j].childNodes[0].nodeValue);
        }

        var subTotal = document.getElementById("subTotal");
        subTotal.value = sum;
    }
    


}


function grandTotal(){
    
    
    var sum = document.getElementById("subTotal");
    var taxes = document.getElementById("taxes");
    var discount = document.getElementById("discount");
    var grandTotal = document.getElementById("grandTotal");
    var totalPayment = document.getElementById("totalPayment");


    if(sum.value == ""){
        alert("Done order first");
    } else {
        var taxPercent = parseInt((sum.value * taxes.value)/ 100);
        document.getElementById("taxPercent").value = (taxPercent);
        var discountPercent = parseInt((sum.value * discount.value)/ 100);
        document.getElementById("discountPercent").value = (discountPercent);   
        var bigTotal, discountedTotal;
        //var total = (parseInt(sum.value) + taxPercent - discountPercent);
        grandTotal.value = (parseInt(sum.value) + taxPercent)
        totalPayment.value = (parseInt(sum.value) + taxPercent - discountPercent);

        
        
    }

    

}

