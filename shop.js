 //  Render the button
 let mybutton = document.getElementById("MyButton");

 // when the user clicks on the button,it will scroll to the top of the document
 function functionTop() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome,Firefox, IE and Opera
 }

 function getSelectedValue(selectList) {
     return selectList[selectList.selectedIndex].value;
 }

 // This function give the user an option to edit the order form by displaying the form and hide the receipt
 document.getElementById("editForm").onclick = function() {
     // At position 0, remove all the elements of the array to overcome the code duplication      
     newAllProductQuantity.splice(0, newAllProductQuantity.length);
     newlabelArray.splice(0, newlabelArray.length);
     newsubTotalArray.splice(0, newsubTotalArray.length);


     document.getElementById("myform").style.display = "block";
     document.getElementById("invoice").style.display = "none";

 }


 // This function automatically provide the total price of the bill as products are selected by the user
 function quantityAndProductValue() {

     noOfBerryRedTop = getSelectedValue(document.getElementById("top"));
     let berryRedTopCost = parseInt(noOfBerryRedTop) * 15;
     document.getElementById("totalTopPrice").value = berryRedTopCost;

     noOfAnimalLegging = getSelectedValue(document.getElementById("legging"));
     let animalLeggingCost = parseInt(noOfAnimalLegging) * 15;
     document.getElementById("totalLeggingPrice").value = animalLeggingCost;

     noOfBlackActiveTrainer = getSelectedValue(document.getElementById("womenTrainer"));
     let blackActiveTrainerCost = parseInt(noOfBlackActiveTrainer) * 50;
     document.getElementById("totalWomenTrainerPrice").value = blackActiveTrainerCost;

     noOfNavySlimJogger = getSelectedValue(document.getElementById("jogger"));
     let navySlimJoggerCost = parseInt(noOfNavySlimJogger) * 20;
     document.getElementById("totalJoggerPrice").value = navySlimJoggerCost;

     noOfBlackSlimJogger = getSelectedValue(document.getElementById("slimJogger"));
     let blackSlimJoggerCost = parseInt(noOfBlackSlimJogger) * 20;
     document.getElementById("totalSlimJoggerPrice").value = blackSlimJoggerCost;

     noOfActiveRunningTrainer = getSelectedValue(document.getElementById("menTrainer"));
     let activeRunningTrainerCost = parseInt(noOfActiveRunningTrainer) * 40;
     document.getElementById("totalMenTrainerPrice").value = activeRunningTrainerCost;

     //Array of all the product quantities selected by user
     AllProductQuantity = [noOfBerryRedTop, noOfAnimalLegging, noOfBlackActiveTrainer, noOfNavySlimJogger, noOfBlackSlimJogger, noOfActiveRunningTrainer];

     sumOfQuantity = 0;
     for (let i = 0; i < AllProductQuantity.length; i++) {
         sumOfQuantity += parseInt(AllProductQuantity[i]);
     }
     document.getElementById("totalQuantity").value = sumOfQuantity;


     // An array of all the prices of the products when user select quantities    
     subTotalArray = [berryRedTopCost, animalLeggingCost, blackActiveTrainerCost, navySlimJoggerCost, blackSlimJoggerCost, activeRunningTrainerCost];

     total = 0;
     for (let i = 0; i < subTotalArray.length; i++) {
         total += subTotalArray[i];
     }
     document.getElementById("additionOfPrices").value = total;

 }
 // This function give the user an option to place their order by displaying the form as hidden and the receipt as visible and also does the validation of username,email,product and quantitiy
 document.getElementById("placeOrderButton").onclick = function invoice() {


     let userName = document.getElementById("name").value;
     document.getElementById("nameOnInvoice").innerHTML = userName;

     let emailAddress = document.getElementById("email").value;
     document.getElementById("emailOnInvoice").innerHTML = emailAddress;

     let berrytopLabel = document.getElementById("berry").textContent;
     let animalLeggingLabel = document.getElementById("animal").textContent;
     let blackActiveTrainerLabel = document.getElementById("womenActiveTrainer").textContent;
     let navySlimJoggerLabel = document.getElementById("navy").textContent;
     let blackSlimJoggerLabel = document.getElementById("black").textContent;
     let activeRunningTrainerLabel = document.getElementById("v-liteTrainer").textContent;

     // Product names array
     labelArray = [berrytopLabel, animalLeggingLabel, blackActiveTrainerLabel, navySlimJoggerLabel, blackSlimJoggerLabel, activeRunningTrainerLabel];


     // validating User Name
     if (userName == "") {
         alert("Please enter your name");
     }

     //validating Email
     else if (emailAddress == "") {
         alert("Please enter your email address");
     }

     // validating product and quantity
     else if (sumOfQuantity == undefined) {
         alert("You have not chosen any product or quantity yet! ");

     } else {
         let x = AllProductQuantity.length;

         for (let i = 0; i < x; i++) {
             if (AllProductQuantity[i] > 0) {
                 newAllProductQuantity.push(AllProductQuantity[i]);
                 newlabelArray.push(labelArray[i]);
                 newsubTotalArray.push(subTotalArray[i]);
             }
         }

         let products = document.getElementById("productsOnInvoice");
         const productDetails = [];

         for (let i = 0; i < newAllProductQuantity.length; i++) {
             productDetails.push('<p id = "pName"> Product: ' +
                 newlabelArray[i] +
                 '</p>' +
                 '<p id = "qutyName"> Quantity : ' +
                 newAllProductQuantity[i] +
                 '</p>' +
                 '<p id = "ProductPrice">  Price: £' +
                 newsubTotalArray[i] +
                 '</p>');

         }
         products.innerHTML = productDetails.join("---------------------------------------------");
         document.getElementById("totalBillOnInvoice").innerHTML = total;

         document.getElementById("myform").style.display = "none";
         document.getElementById("invoice").style.display = "block";

     }

 }



 let noOfBerryRedTop;
 let noOfAnimalLegging;
 let noOfBlackActiveTrainer;
 let noOfNavySlimJogger;
 let noOfBlackSlimJogger;
 let noOfActiveRunningTrainer;

 let AllProductQuantity = [];
 let subTotalArray = [];

 let newAllProductQuantity = [];
 let newlabelArray = [];
 let newsubTotalArray = [];
 let sumOfQuantity;
 let total;