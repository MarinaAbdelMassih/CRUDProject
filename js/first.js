






 var productContainer ;

 if(localStorage.getItem("productData") == null)
 {
     productContainer=[];
 }
 else
 {
         productContainer =JSON.parse (localStorage.getItem("productData"));
         displayproduct();
    }

    var productName = document.getElementById("productNameInp");
 var inps =document.getElementsByClassName("form-control");
 function addProduct()
 {
    
    var productPrice = document.getElementById("productPriceInp").value;
   var productCatagore = document.getElementById("productCatagoryInp").value;   
    var productDecs   = document.getElementById("productDecsInp").value;
   
    
    
     var productCode =document.getElementById("productCodeInp").value;
    var makeneldash = productCode.search("-");
     var npro   = productCode.slice(0 ,makeneldash )
     var model   = productCode.slice(makeneldash+1 , productCode.lenght)
    
     var product =
     {
         name:productName.value,
         price:productPrice,
         catagore:productCatagore,
         decs:productDecs
        
     }
    //  if(upbutton == "addProduct")
    //  {
    //      productContainer.push(product);
    //  }
    //  else
    //  {
    //      productContainer[inps]=document.getElementById("productNameInp").name ;
    //  }
    productContainer.push(product); 
    localStorage.setItem("productData" ,JSON.stringify (productContainer));
     
     displayproduct();
     clearform();
  
 }

 function displayproduct()
 {
     var temp="";
     for(var i=0 ; i < productContainer.length  ; i++)
     {
         temp +=`<tr><td>`+productContainer[i].name+`</td><td>`+productContainer[i].price+`</td><td>`+productContainer[i].catagore+`</td><td>`+productContainer[i].decs+`</td></tr>
        
         <button onclick="deleteProduct(`+i+`)" class="btn btn-danger">delete</button>
         <button onclick="updataProduct(`+i+`)" class="btn btn-info">updata</button>
         `;

     }

     document.getElementById("tableBody").innerHTML = temp;

 }

function clearform()
 {
      for(var i=0 ; i<inps.length ; i++)
      {
     inps[i].value="";
 }
     document.getElementById("productNameInp").value="";
 }


 function searchproduct(term)
 {
     var temp="";
     for(var i=0 ; i<productContainer.length ; i++)
     {
         if(productContainer[i].name.toLowerCase().includes(term.toLowerCase()))
         {
             temp +=`<tr><td>`+productContainer[i].name+`</td><td>`+productContainer[i].price+`</td><td>`+productContainer[i].catagore+`</td><td>`+productContainer[i].decs+`</td></tr>`;


         }



     }

     document.getElementById("tableBody").innerHTML = temp;

 }
 function deleteProduct(inps)
 {
   var deleet =  productContainer.splice(inps , 1);
   localStorage.setItem("productData" ,JSON.stringify (productContainer));
   displayproduct();
 }

// function updataProduct(inps)
// {
 
//      var ko = productContainer[inps].name;
//    document.getElementById("productNameInp").value =ko
 

//  document.getElementById("upbutton").innerHTML ="updata product"
//  productContainer[inps]= document.getElementById("productNameInp").value 
// }


 function updataProduct(inps) 
 {
   

   
   productName.value=productContainer[inps].name;
   
    document.getElementById("upbutton").innerHTML ="updata product";
    // alert(
    //     productContainer[inps].name)

    document.getElementById("upbutton").onclick=function(){
        productContainer[inps].name= document.getElementById("productNameInp").value;
        localStorage.setItem("productData" ,JSON.stringify (productContainer));
     displayproduct();
     document.getElementById("upbutton").innerHTML ="add product";

     
    document.getElementById("upbutton").onclick=function (){
        addProduct();
    
    

    }
}
 }