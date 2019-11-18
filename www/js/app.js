// async function isLogedIn() {
//     if (sessionStorage.clickcount) {
//         sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
//     } else {
//         sessionStorage.clickcount = 1;
//     }
//     document.getElementById("result").innerHTML = "You have clicked the button " +
//         sessionStorage.clickcount + " time(s) in this session.";
// }

// function clickCounter() {
//     try{
//         if (typeof(Storage) !== "undefined") {
//             if (sessionStorage.clickcount) {
//                 sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
//             } else {
//                 sessionStorage.clickcount = 1;
//             }
//             document.getElementById("result").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.";
//         } else {
//             document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
//         }
//     }catch (e) {
//         alert(e)
//     }
//
// }
//
// async function showModal(modalId) {
//     let modal = document.querySelector(modalId);
//     modal.show();
//     // setTimeout(function() {
//     //     modal.hide();
//     // });
// }
// async function hideModal(modalId) {
//     let modal = document.querySelector(modalId);
//     modal.hide();
// }
// async function showPinDialog() {
//     let dialog = document.getElementById('pin-dialog');
//
//     if (dialog) {
//         dialog.show();
//     } else {
//         ons.createElement('pin-dialog.html', { append: true })
//             .then(function(dialog) {
//                 dialog.show();
//             });
//     }
// };
// async function hidePinxDialog() {
//     let dialog = document.getElementById('pin-dialog');
//     if (dialog) {
//         dialog.hide();
//     }
// };
// async  function getLastFiveTransitions (MobileToken){
//     let settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://api.bazi.ly/v1/getlastfive",
//         "method": "POST",
//         "headers": {
//             "Content-Type": "application/json",
//             "User-Agent": "PostmanRuntime/7.16.3",
//             "Accept": "*/*",
//             "Cache-Control": "no-cache",
//             "Postman-Token": "bc3fb591-98f8-4d2c-b84b-c98ec8621648,d60f6d8b-4e9c-4170-b0d3-c9a0d5ef5f88",
//             "Host": "api.bazi.ly",
//             "Accept-Encoding": "gzip, deflate",
//             "Content-Length": "182",
//             "Cookie": "__cfduid=de1df76fdedc00541fa2a784f97fd8ff91567963962",
//             "Connection": "keep-alive",
//             "cache-control": "no-cache"
//         },
//         "processData": false,
//         "data": `{ "api_token": ${MobileToken} }`
//     }
//    return await $.ajax(settings);
// }
// // get QR code picture object from the backend
// async  function getQrCode (MobileToken){
//     let settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://api.bazi.ly/v1/qr",
//         "method": "POST",
//         "headers": {
//             "Content-Type": "application/json",
//             "User-Agent": "PostmanRuntime/7.16.3",
//             "Accept": "*/*",
//             "Cache-Control": "no-cache",
//             "Postman-Token": "bc3fb591-98f8-4d2c-b84b-c98ec8621648,d60f6d8b-4e9c-4170-b0d3-c9a0d5ef5f88",
//             "Host": "api.bazi.ly",
//             "Accept-Encoding": "gzip, deflate",
//             "Content-Length": "182",
//             "Cookie": "__cfduid=de1df76fdedc00541fa2a784f97fd8ff91567963962",
//             "Connection": "keep-alive",
//             "cache-control": "no-cache"
//         },
//         "processData": false,
//         "data": `{ "api_token": ${MobileToken} }`
//     }
//     return await $.ajax(settings);
// }
// let showTemplateDialog = async function() {
//     var dialog = document.getElementById('preReceive-dialog');
//
//     if (dialog) {
//         dialog.show();
//     } else {
//         ons.createElement('dialog.html', { append: true })
//             .then(function(dialog) {
//                 dialog.show();
//             });
//     }
// };
//
// let hideDialog = function(id) {
//     let dialog = document.getElementById(id);
//     dialog.hide();
//     //TODO show button again
//     // document
//     //     .getElementById(id)
//     //     .hide();
// };

// let hideDialog = function(id) {
//     let dialog = document.getElementById(id);
//     dialog.hide();
//     //TODO show button again
//     // document
//     //     .getElementById(id)
//     //     .hide();
// };

// async function clearInput(){
//     document.getElementById("username").value="";
//     document.getElementById("password").value="";
// }
// async function checkConnection (){
//     try{
//         let ifConnected = window.navigator.onLine;
//         if (ifConnected) {
//             // await alert(ifConnected);
//
//             return ifConnected // there is internet connection.
//
//         } else {
//             await alert(ifConnected);
//
//             return ifConnected // there is NO internet connection.
//         }
//     }catch (e) {
//       // await  alert(e);
//         console.log(e);
//     }
// }
// async function validateInputs (){
//
//      if (document.getElementById("username").value.trim() === ""){
//         ons.notification.toast('الرجاء التأكد من اسم المستخدم', { timeout: 2000, animation: 'ascend' })
//          $('#username').focus();
//          return false
//      }
//     if (document.getElementById("password").value.trim()===""){
//         ons.notification.toast('الرجاء التأكد من كلمة المرور', { timeout: 2000, animation: 'ascend' })
//         return false
//     }
//
// }
// async function login(){
//     if (await validateInputs()===false){
//         return null;
//     }
//     let username = document.getElementById("username").value.trim();
//     let password = document.getElementById("password").value.trim();
//     //setting api call details
//     showModal('#loginModal');
//
//     let settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://api.bazi.ly/v1/login",
//         "method": "POST",
//         "headers": {
//             "Content-Type": "application/json",
//             "User-Agent": "PostmanRuntime/7.15.2",
//             "Accept": "*/*",
//             "Cache-Control": "no-cache",
//             "Postman-Token": "aeea82b9-0a1c-4ff8-b20f-4f94ac4cbe42,9c8e6ef0-2d92-430a-b860-0dab7e900777",
//             "Host": "api.bazi.ly",
//             "Cookie": "__cfduid=d271285ad9e30900689d2e924afb8c5371564354829",
//             "Accept-Encoding": "gzip, deflate",
//             "Content-Length": "74",
//             "Connection": "keep-alive",
//             "cache-control": "no-cache"
//         },
//         "processData": false,
//         // "data": "{\n    \"username\": \"nabil\",\n    \"password\": \"123123\",\n    \"src\": \"mobile\"\n}"
//         "data": `{"username":"${username}", "password":"${password}","src":"mobile"}`
//     }
//     // alert(settings.data);
//     let response =  await  $.ajax(settings).done(function (response) {
//     // alert(JSON.stringify(response) )
//     });
//     switch (response.status) {
//         case "success":
//             hideModal('#loginModal');
//             //storing respones meta data to local storage
//             localStorage.setItem("meta", JSON.stringify(response.user) );
//             window.sessionStorage.token = JSON.stringify(response.user.mobile_token);
//             window.sessionStorage.token = JSON.stringify(response.user.mobile_token);
//             document.querySelector('#myNavigator').pushPage('pages/main.html', {data: {title: 'Page 2'}});
//             return  true;
//         case "fail":
//             hideModal('#loginModal');
//             ons.notification.toast('الرجاء التأكد من اسم المستخدم او كلمة المرور', { timeout: 2000, animation: 'ascend' })
//             clearInput();
//             return false;
//
//
//         default:
//             // 0 mean unable to connect
//             return 0
//     }
// }
// async function pay(pin,to,amount){
//
//
//     let settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://api.bazi.ly/v1/transfer",
//         "method": "POST",
//         "headers": {
//             "Content-Type": "application/json",
//             "User-Agent": "PostmanRuntime/7.15.2",
//             "Accept": "*/*",
//             "Cache-Control": "no-cache",
//             "Postman-Token": "aeea82b9-0a1c-4ff8-b20f-4f94ac4cbe42,9c8e6ef0-2d92-430a-b860-0dab7e900777",
//             "Host": "api.bazi.ly",
//             "Cookie": "__cfduid=d271285ad9e30900689d2e924afb8c5371564354829",
//             "Accept-Encoding": "gzip, deflate",
//             "Content-Length": "74",
//             "Connection": "keep-alive",
//             "cache-control": "no-cache"
//         },
//         "processData": false,
//         // "data": "{\n    \"username\": \"nabil\",\n    \"password\": \"123123\",\n    \"src\": \"mobile\"\n}"
//         "data": `{"api_token":"${window.sessionStorage.token}", "pin":${pin},"to":${to},"amount":${amount},"type":1,"lat":0,"lng":0 "}`
//     };
//     // alert(settings.data);
//     let response =  await  $.ajax(settings).done(function (response) {
//         alert(JSON.stringify(response) )
//     });
//     switch (response.status) {
//         case "success":
//             // hideModal('#loginModal');
//             document.querySelector('#myNavigator').pushPage('paymentDone.html');
//             return  true;
//         case "fail":
//             // hideModal('#loginModal');
//             ons.notification.toast('error', { timeout: 2000, animation: 'ascend' });
//             return false;
//         default:
//             // 0 mean unable to connect
//             return 0
//     }
// }
// async function generateTransactionSlot(amount,type,date){
//     let slot = $(` <ons-list-item modifier="longdivider"><div class="right"><img id="thumbnail" class="list-item__thumbnail" src="/images/receive.svg"></div><div class="center"><span id="amount" class="list-item__title " style="text-align: right;">200</span> <span id="type" class="list-item__subtitle" style="text-align: right;">حركة تحويل</span></div><div class="left"><span id="date" class="list-item__title " style="text-align: left;">19/10/2019</span></divclas></ons-list-item></ons-row>`)
//     slot.find('#amount').html(`${amount}`);
//     if(type==="send"){
//         slot.find('#type').html(`عملية دقع`);
//         slot.find("#thumbnail").attr("src","/images/pay.svg");
//     }else{
//         slot.find('#type').html(`عملية قبض`);
//         slot.find("#thumbnail").attr("src","/images/receive.svg");
//     }
//     slot.find('#date').html(`${date}`);
//     // slot.$(#amount).text("we");
//     return slot
// }
// async function changePIN(){
//     try {
//
//     }catch (e) {
//         alert(e);
//
//     }
// }

// let setValueOfDialogAmountEntry = async function() {
//     let x =  await $('#dialogAmountInput').val();
//     if (x===""){
//         // alert('الرجاء إدخال القيمة')
//         ons.notification.toast('الرجاء إدخال القيمة!', {
//             timeout: 3000
//         });
//     }else {
//         $('#qrEncodeButton').show();
//
//         await $('#dialogAmountInput').val('');
//         $('#amountInput').val(x);
//
//         // alert(x)
//
//         // document.getElementById('xxxsd').value="fares";
//         // document.querySelectorAll('#xxxsd').innerText="rrr"
//         // amountx.value="3232"
//
//         // await alert(x)
//         hideDialog('dialogAmountEntry');
//
//
//     }
//
// };

document.addEventListener('init', async function(event) {
    let page = event.target;
    // lock Screen Orientation
    // window.screen.orientation.lock('portrait');
    screen.orientation.lock('portrait').catch(function(error) {
        // whatever
        console.log('line 326 app.js');
    });
    if (page.id === 'login') {

        page.querySelector('#login-button').onclick = async function () {
            //consume api
            try {

                // var myNavigator = document.getElementById('myNavigator');
                // myNavigator.pushPage('pages/home.html');
                // alert('hello')
                // x = await login();
                // alert( x);
                // alert('hi');
                document.querySelector('#myNavigator').pushPage('pages/homex.html');
                // document.querySelector('#myNavigator').pushPage('pages/home.html', {data: {title: 'Home'}});
            } catch (e) {
                alert(JSON.stringify(e))
            }
            // document.querySelector('#myNavigator').pushPage('main.html', {data: {title: 'Page 2'}});
        };

        page.querySelector('#register-button').onclick= async function () {
            document.querySelector('#myNavigator').pushPage('pages/register.html');
        }
    }


    if (page.id === 'page2') {
    ons.ready(function () {
        var infiniteList = document.getElementById('infinite-list');

        infiniteList.delegate = {
            createItemContent: function (i) {
                return ons.createElement('<ons-list-item tappable> <div class="right"><ons-icon icon="chevron-left" class="list-item__icon"></ons-icon></div> المستشفي رقم ' + i + '  </ons-list-item>');
            },
            countItems: function () {
                return 10000;
            }
        };

        infiniteList.refresh();
    });
    }

    if (page.id === 'page2') {
        document.addEventListener('prechange', function(event) {
            document.querySelector('ons-toolbar .center')
                .innerHTML = event.tabItem.getAttribute('label');
        });
    }
});


    // if (page.id === 'pay') {
    //
    //     page.querySelector('#prePayButton').onclick = async function() {
    //
    //         // await pay(123,7623,123);
    //         // await showPinDialog();
    //         // await alert(window.sessionStorage.pin);
    //         // if (window.sessionStorage.pin ==null) {
    //         //     hidePinDialog();
    //         //     ons.notification.toast('تم إلغاء العملية!', {
    //         //         timeout: 2000
    //         //     });
    //         // }
    //         //qr scan code
    //         cordova.plugins.barcodeScanner.scan(
    //             function (result) {
    //                 // alert("We got a barcode\n" +
    //                 //     "Result: " + result.text + "\n" +
    //                 //     "Format: " + result.format + "\n" +
    //                 //     "Cancelled: " + result.cancelled);
    //
    //                 window.sessionStorage.PayString = result.text;
    //                 if(result.cancelled==true){
    //                     onclick="ons.notification.toast('تم إلغاء العملية', { timeout: 2000, animation: 'ascend' })"
    //                 }else {
    //
    //                     document.querySelector('#myNavigator').pushPage('PrepaymentPage.html', {data: {title: 'Page 2'}});
    //
    //
    //                 }
    //
    //                 // alert(window.sessionStorage.PayString);
    //
    //
    //             }, // in fail
    //             function (error) {
    //                 alert("Scanning failed: " + error);
    //             },
    //             {
    //                 preferFrontCamera : false, // iOS and Android
    //                 showFlipCameraButton : false, // iOS and Android
    //                 showTorchButton : true, // iOS and Android
    //                 torchOn: false, // Android, launch with the torch switched on (if available)
    //                 saveHistory: false  , // Android, save scan history (default false)
    //                 // prompt : "Place a barcode inside the scan area", // Android
    //                 resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
    //                 formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
    //                 orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
    //                 disableAnimations : true, // iOS
    //                 disableSuccessBeep: true // iOS and Android
    //             }
    //         );
    //     //    end of qr scan code.
    //     }
    // }
    // //add function to pay page
    // if (page.id === 'receivePage') {
    //
    //     page.querySelector('#amountInput').onclick= async function(){
    //         let dialog = document.getElementById('dialogAmountEntry');
    //         $('#qrEncodeButton').hide();
    //
    //         if (dialog) {
    //             dialog.show();
    //             $('#dialogAmountInput').focus();
    //
    //         } else {
    //             ons.createElement('dialogAmountEntry.html', { append: true })
    //                 .then(function(dialog) {
    //                     dialog.show();
    //                     $('#dialogAmountInput').focus();
    //
    //                 });
    //         }
    //     }
    //
    //     page.querySelector('#qrEncodeButton').onclick = async function() {
    //         document.querySelector('#myNavigator').pushPage('qrCodePage.html', {data: {title: 'Page 2'}});
    //
    //         window.sessionStorage.amount  = $.trim($("#amountInput").val());
    //         window.sessionStorage.details =  $.trim($("#detailsInput").val());
    //     }
    // }
    // selectHospital Page

        // page.querySelector('#amountInput').onclick= async function(){
        //     let dialog = document.getElementById('dialogAmountEntry');
        //     $('#qrEncodeButton').hide();
        //
        //     if (dialog) {
        //         dialog.show();
        //         $('#dialogAmountInput').focus();
        //
        //     } else {
        //         ons.createElement('dialogAmountEntry.html', { append: true })
        //             .then(function(dialog) {
        //                 dialog.show();
        //                 $('#dialogAmountInput').focus();
        //
        //             });
        //     }
        // }
        //
        // page.querySelector('#qrEncodeButton').onclick = async function() {
        //     document.querySelector('#myNavigator').pushPage('qrCodePage.html', {data: {title: 'Page 2'}});
        //
        //     window.sessionStorage.amount  = $.trim($("#amountInput").val());
        //     window.sessionStorage.details =  $.trim($("#detailsInput").val());
        // }
    // }

    // if (page.id === 'qrCodePage') {
    //     let user = JSON.parse(localStorage.getItem('meta')) ;
    //
    //     let qrcode = new QRCode(page.querySelector('#qrcode'), {
    //         width : ( window.screen.width * window.devicePixelRatio)/4,
    //         height : ( window.screen.width * window.devicePixelRatio)/4,
    //         correctLevel : QRCode.CorrectLevel.H,
    //     });
    //     qrCodeString= `{amount: ${ window.sessionStorage.amount },details: ${window.sessionStorage.details},receiverAccount: 9987,receiverName:"test name" }`
    //     qrcode.makeCode(qrCodeString);
    // }
    // if (event.target.matches('#main')) {
    //
    //         try {
    //             let user = JSON.parse(localStorage.getItem('meta')) ;
    //
    //
    //
    //             // $('#qrCodePlaceHolder').appendChild(qrCodeImage);
    //
    //             let y = await getLastFiveTransitions(window.sessionStorage.token)
    //             console.table(y.transactions);
    //             $( "#transactionsListPlaceHolder" ).empty();
    //             $("#transactionsListPlaceHolder").append(`<div class="right"><ons-list id="transactionsList"></ons-list></div>`);
    //             for(i=0;i<=y.transactions.length-1;i++) {
    //                 console.log('request got here!'+ y.transactions.amount);
    //                 console.table(y.transactions[i].amount)
    //                 $("#transactionsList").append(await generateTransactionSlot(y.transactions[i].amount, y.transactions[i].type, y.transactions[i].date));
    //
    //             }
    //
    //         }catch (e) {
    //             console.log(e)
    //         }
    //
    //             // Set up content...
    //
    //    // functionality of close button
    //     page.querySelector('#closeButton').onclick = async function() {
    //         alert('hi');
    //         try {
    //             navigator.app.exitApp();
    //
    //         }catch (e) {
    //             alert(e)
    //         }
    //     }
    //     // functionality of refresh button
    //     page.querySelector('#refreshButton').onclick = async function() {
    //         try {
    //             // clean section from current content
    //             $( "#transactionsListPlaceHolder" ).empty();
    //             // append loading animation
    //             $("#transactionsListPlaceHolder").append(`<center style="padding-top: 22.2vh"><ons-progress-circular indeterminate></ons-progress-circular></center>`);
    //         //    reloading code
    //             let y = await getLastFiveTransitions(window.sessionStorage.token)
    //             console.table(y.transactions);
    //             $( "#transactionsListPlaceHolder" ).empty();
    //             $("#transactionsListPlaceHolder").append(`<div class="right"><ons-list id="transactionsList"></ons-list></div>`);
    //             for(i=0;i<=y.transactions.length-1;i++) {
    //                 console.table(y.transactions[i].amount)
    //                 $("#transactionsList").append(await generateTransactionSlot(y.transactions[i].amount, y.transactions[i].type, y.transactions[i].date));
    //
    //             }
    //
    //         }catch (e) {
    //             alert(e)
    //         }
    //     }
    //
    //
    // }
    //
    // if (page.id === 'home'){
    //     let user = JSON.parse(localStorage.getItem('meta')) ;
    //     page.querySelector('#accountNumber').innerHTML=user.id;
    //     page.querySelector('#accountName').innerHTML=user.arabic_name;
    //     page.querySelector('#accountBalance').innerHTML=user.balance;
    //
    //     await  $( "#qrCodePlaceHolder" ).empty();
    //
    //     let qrcode = new QRCode(page.querySelector('#qrCodePlaceHolder'), {
    //         width : ( window.screen.width * window.devicePixelRatio)/8,
    //         height : ( window.screen.width * window.devicePixelRatio)/8,
    //         correctLevel : QRCode.CorrectLevel.H,
    //     });
    //     qrCodeString= `{receiverAccount:${user.id},receiverName:${user.arabic_name} }`
    //     qrcode.makeCode(qrCodeString);
    // }//end of home page condition
// }, false);


