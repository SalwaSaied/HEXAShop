    var allProducts = document.querySelectorAll(".item h4")
    var div1 = document.querySelector("#cart")
    var btn1 = document.querySelector("#showPrice")
   
    var totalPrice = 0

    allProducts.forEach(function (item) {
        item.onclick = function (){
            totalPrice +=  +(item.getAttribute("price"))
            div1.innerHTML += item.textContent + "/ " 

            if (div1.innerHTML != ""){
                btn1.style.display = "block"
                btn1.style.width = "200px"
                btn1.style.height = "35px"
                btn1.style.backgroundColor = "#343a40"
                btn1.style.color = "white"
                btn1.style.fontSize = "20px"
            }
   
        }
    })

    

    btn1.onclick=function()
    {
        div1.innerHTML += (totalPrice)
    }