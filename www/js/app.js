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
async function x1(i){
    alert('x ' + i)
}
async function login(mobileNo,password){
    let requestUrl="http://api.labas.ly//user/login?phone="+mobileNo+"&password="+password;
    let settings = {
        "url": requestUrl,
        "method": "POST",
        "timeout": 0,
    };

 await   $.ajax(settings).done(function (response) {
     // variable to store response result
     res = null;
       if (response.status==="success"){
           localStorage.token = response.data.token;
           localStorage.userDetails = response.data;
            res =true;
       }else {
           localStorage.token=null;
           res =false;
       }
    }).catch(function (e) {
        res= false
    });
    return res;
}
async function logout(){
    try {
        localStorage.token = null;
        localStorage.userDetails = null;
        return true;
    }catch (e) {
        return false
    }
}
async function getUserInfo(){
    let requestUrl="http://api.labas.ly/user/info?token="+localStorage.token;
    let settings = {
        "url": requestUrl,
        "method": "GET",
        "timeout": 0,
    };
    await   $.ajax(settings).done(function (response) {
        // variable to store response result
        res = null;
        if (response.status==="success"){
            res =response.info;
        }else {
            localStorage.token=null;
            res =false;
        }
    }).catch(function (e) {
        res= false
    });
    return res;
}
async function hasToken(){
    localStorage.token=null;
    // alert(localStorage.token)
    // if (localStorage.token==null) {
    //     // localStorage.token = localStorage.token;
    //     return false
    // }
    if (!localStorage.token){
        alert("no token")
        return "false"
    }
}
async function getAllClinics(page){
    let requestUrl="http://api.labas.ly//clinics?token="+localStorage.token;
    // let requestUrl="http://46.101.133.122//user/login?phone=0927099916&password=test123121";
    let settings = {
        "url": requestUrl,
        "method": "GET",
        "timeout": 0,
    };

    await   $.ajax(settings).done(function (response) {
        // variable to store response result
        res = null;
        if (response.status==="success"){
            res =response.clinics.data;
        }else {
            localStorage.token=null;
            res =false;
        }
    }).catch(function (e) {
        res= false
    });
    return res;
}
async function getSpeciality(clinicId){
    let requestUrl="http://api.labas.ly/clinics/"+clinicId+"/specialties?token="+localStorage.token;
    // let requestUrl="http://46.101.133.122//user/login?phone=0927099916&password=test123121";
    let settings = {
        "url": requestUrl,
        "method": "GET",
        "timeout": 0,
    };

    await   $.ajax(settings).done(function (response) {
        // variable to store response result
        res = null;
        if (response.status==="success"){
            res =response.specialties;
        }else {
            res =false;
        }
    }).catch(function (e) {
        res= false
    });
    return res;
}
async function getSpecialityDoctors(specialtyId,clinicId){
    let requestUrl="http://api.labas.ly/clinics/"+clinicId+"/specialties/"+specialtyId+"/doctors?token="+localStorage.token;
    let settings = {
        "url": requestUrl,
        "method": "GET",
        "timeout": 0,
    };
    await   $.ajax(settings).done(function (response) {
        // variable to store response result
        res = null;
        if (response.status==="success"){
            res =response.doctors;
        }else {
            res =false;
        }
    }).catch(function (e) {
        res= false
    });
    return res;
}
async function getDoctorRoutes(clinicId,doctorId){
    console.log('getDoctorRoutes clinic: '+ clinicId);
    console.log(' getDoctorRoutes doctor: '+ doctorId);
    let requestUrl="http://api.labas.ly/clinics/"+clinicId+"/doctors/"+doctorId+"/routes?token="+localStorage.token;
    let settings = {
        "url": requestUrl,
        "method": "GET",
        "timeout": 0,
    };
    await   $.ajax(settings).done(function (response) {
        // variable to store response result
        res = null;
        if (response.status==="success"){
            res =response.routes;
        }else {
            res =false;
        }
    }).catch(function (e) {
        res= false
    });
    return res;
}
async function showSelectSpecialityPage(clinicId){
        document.querySelector('#myNavigator').pushPage('pages/selectSpeciality.html',{data: {clinic: clinicId}});
}
async function showSelectDoctorPage(specialtyId,clinicId){
    document.querySelector('#myNavigator').pushPage('pages/selectDoctor.html',{data: {specialty: specialtyId,clinic: clinicId}});
}
async function showSelectRoutePage(clinicId,specialtyId,doctorId)  {
           document.querySelector('#myNavigator').pushPage('pages/selectRoutes.html',{data: {specialty: specialtyId,clinic:clinicId , doctor:doctorId}});
}
async  function getCustomerBalance(){
    let requestUrl="http://api.labas.ly/user/balance?token="+localStorage.token;
    let settings = {
        "url": requestUrl,
        "method": "GET",
        "timeout": 0,
    };

    await   $.ajax(settings).done(function (response) {
        // variable to store response result
        res = null;
        if (response.status==="success"){
            res =response.balance;
        }else {
            res =false;
        }
    }).catch(function (e) {
        res= false
    });
    return res;
}
async function balanceTopup(pinCode){
    let requestUrl="http://api.labas.ly/user/balance/topup?token="+localStorage.token+"&vocher="+pinCode;
    let settings = {
        "url": requestUrl,
        "method": "POST",
        "timeout": 0,
    };
    await   $.ajax(settings).done(function (response) {
        // variable to store response result
        res = null;
        if (response.status==="success"){
            res =response;
        }else {
            res =response;
        }
    }).catch(function (e) {
        res= e
    });
    return res;
}
async function showTopupPopover(respones){

}



document.addEventListener('init', async function(event) {

    let page = event.target;
    // lock Screen Orientation
    // window.screen.orientation.lock('portrait');
    screen.orientation.lock('portrait').catch(function(error) {
        // whatever
    });
    document.addEventListener("backbutton", onBackKeyPress, false);
    function onBackKeyPress() {
        /* If the current page is the login page, disable the button completely (aka do nothing) */
        if ($.mobile.activePage.attr('id') == 'login') {
        }

        /* Else, execute log off code */
        else {
            if (confirm("Are you sure you want to logout?")) {
                /* Here is where my AJAX code for logging off goes */
            }
            else {
                return false;
            }
        }
    }


    if (page.id === 'homex.html') {
        // let tokenStatus = await hasToken();
// alert(localStorage.token)
        if (!localStorage.token){
            alert("you need to login")
        }else {
            alert("you are free to go, token: " + tokenStatus)
        }
    }

    if (page.id === 'login') {
        page.onload = hasToken();
        page.querySelector('#login-button').onclick = async function () {
            //consume api
            try {
                document.querySelector('#loginLoadingToast').toggle();
                let username = document.querySelector('#usernameInput').value;
                let password = document.querySelector('#passwordInput').value;
                if ( await login(username, password)==true) {
                    document.querySelector('#loginLoadingToast').hide();

                    document.querySelector('#myNavigator').pushPage('pages/homex.html');
               }else{
                    let options ={
                        message:"nabil",
                        timeout: 60000,
                        class:"title",
                        messageHTML:"<div>pla pla</div>",
                    }
                    ons.notification.toast( options);
                    document.querySelector('#loginLoadingToast').hide();
                    document.querySelector('#usernameInput').value="";
                    document.querySelector('#passwordInput').value="";
               }

            } catch (e) {
                let options ={
                    timeout: 2000,
                    class:"title",
                    messageHTML:"<div>pla pla</div>",
                }
                ons.notification.toast('Toast!', options);
            }
            // document.querySelector('#myNavigator').pushPage('main.html', {data: {title: 'Page 2'}});
        };
        page.querySelector('#register-button').onclick= async function () {
            document.querySelector('#myNavigator').pushPage('pages/register.html');
        }
    }

    if (page.id === 'page2') {
    ons.ready(async function() {
        var modal = page.querySelector('#loadHospitalModal');
        modal.show();

        var infiniteList = document.getElementById('infinite-list');
        clinics= await getAllClinics(0);
        infiniteList.delegate = {
            createItemContent: function (i) {
                let x = clinics[i].id
                return ons.createElement('<ons-list-item  onclick=showSelectSpecialityPage('+clinics[i].id+') tappable> ' +
                                                    '<div class="right">' +
                                                        '   <ons-icon icon="chevron-right" class="list-item__icon"></ons-icon><' +
                                                    '/div>' + clinics[i].name +
                                                '</ons-list-item>');
            },
            countItems: function () {
                return clinics.length;
            }
        };
        modal.hide();


        infiniteList.refresh();
    });
    // center title
        document.addEventListener('prechange', function(event) {
            document.querySelector('ons-toolbar .center')
                .innerHTML = event.tabItem.getAttribute('label');
        });
    }

    if (page.id === 'selectSpeciality') {
        //load list items
        ons.ready(async function() {
            var modal = page.querySelector('#loadSpecialityModal');
            modal.show();
            var infiniteList = document.getElementById('selectSpeciality-infinite-list');

            let specialties = await getSpeciality(page.data.clinic);
            console.log(specialties);
            console.log(page.data.clinic);
            infiniteList.delegate = {
                createItemContent: function(i) {
                    return ons.createElement('<ons-list-item id="Select-Doctor-Button" tappable onclick="showSelectDoctorPage('+specialties[i].id+','+page.data.clinic+')"> <div class="right"><ons-icon icon="chevron-left" class="list-item__icon"></ons-icon></div>' + specialties[i].name_ar + '  </ons-list-item>');
                },
                countItems: function() {
                    return specialties.length;
                }
            };
            modal.hide();
            infiniteList.refresh();
        });
        // center title
        document.addEventListener('prechange', function(event) {
            document.querySelector('ons-toolbar .center')
                .innerHTML = event.tabItem.getAttribute('label');
        });
    }

    if (page.id === 'selectDoctor') {
        //load list items
        ons.ready(async function() {
            var modal = page.querySelector('#loadSpecialityDoctorsModal');
            modal.show();
            var infiniteList = document.getElementById('selectDoctor-infinite-list');
            console.log('selectDoctor page / request got here!');
            console.log(page.data.specialty);
            let doctors = await getSpecialityDoctors(page.data.specialty,page.data.clinic);
            infiniteList.delegate = {
                createItemContent: function(i) {
                    return ons.createElement('<ons-list-item id="Confirm-Appointment-Button" onclick="showSelectRoutePage('+page.data.clinic+','+page.data.specialty+','+ doctors[i].id+')" tappable> <div class="right"><ons-icon icon="chevron-left" class="list-item__icon"></ons-icon></div>' + doctors[i].name + '  </ons-list-item>');
                },
                countItems: function() {
                    return doctors.length;
                }
            };
            modal.hide();
            infiniteList.refresh();
        });
        // center title
        document.addEventListener('prechange', function(event) {
            document.querySelector('ons-toolbar .center')
                .innerHTML = event.tabItem.getAttribute('label');
        });

    //    confirm appointment button functionality.
    //     page.querySelector('#Confirm-Appointment-Button').onclick= async function () {
    //         document.querySelector('#myNavigator').pushPage('pages/confirmAppointment.html');
    //     }


    }

    if (page.id === 'selectRoute') {
        //load list items
        ons.ready(async function() {
            var modal = page.querySelector('#loadRoutesModal');
            modal.show();
            var infiniteList = document.getElementById('selectRoutes-infinite-list');

            console.log('clinic: '+page.data.clinic);
            console.log('doctor: '+ page.data.doctor);
            let Routes = await getDoctorRoutes(page.data.clinic,page.data.doctor);
            console.log(Routes)
            infiniteList.delegate = {
                createItemContent: function(i) {
                    return ons.createElement('<ons-list-item id="Confirm-Appointment-Button" onclick="alert(123)" tappable> <div class="right"><ons-icon icon="chevron-left" class="list-item__icon"></ons-icon></div>' + Routes[i].week_day +' - '+ Routes[i].time_from +'  </ons-list-item>');
                },
                countItems: function() {
                    return Routes.length;
                }
            };
            modal.hide();
            infiniteList.refresh();
        });
        // center title
        document.addEventListener('prechange', function(event) {
            document.querySelector('ons-toolbar .center')
                .innerHTML = event.tabItem.getAttribute('label');
        });

        //    confirm appointment button functionality.
        //     page.querySelector('#Confirm-Appointment-Button').onclick= async function () {
        //         document.querySelector('#myNavigator').pushPage('pages/confirmAppointment.html');
        //     }


    }

    if (page.id === 'myAppointments') {
        //load list items
        ons.ready(function() {
            var infiniteList = document.getElementById('myAppointments-infinite-list');
            function z(){
                alert('z');
            }
            infiniteList.delegate = {
                createItemContent: function(i) {
                    // return ons.createElement('<ons-list-item onclick="x1('+i+')" id="Cancel-Appointment-Button" tappable> <div class="right"><ons-icon icon="chevron-left" class="list-item__icon"></ons-icon></div> موعد رقم ' + i + ' مع الطبيب / 12-12-2019  </ons-list-item>');
                    return ons.createElement('<ons-list-item  id="Cancel-Appointment-Button" tappable> <div class="right"><ons-icon icon="chevron-left" class="list-item__icon"></ons-icon></div> موعد رقم ' + i + ' مع الطبيب / 12-12-2019  </ons-list-item>');
                },
                countItems: function() {
                    return 100;
                }
            };

            infiniteList.refresh();
            $('#ons-list-item').onclick= async function (){
                alert('sdf')
            }
        });
        // center title
        document.addEventListener('prechange', function(event) {
            document.querySelector('ons-toolbar .center')
                .innerHTML = event.tabItem.getAttribute('label');
        });

        //    confirm appointment button functionality.

        page.querySelector('ons-list-item').onclick= async function () {
            document.querySelector('#myNavigator').pushPage('pages/cancelAppointment.html');
        }


    }

    if (page.id === 'sessions') {
        //load list items
        ons.ready(function() {
            var infiniteList = document.getElementById('sessions-infinite-list');

            infiniteList.delegate = {
                createItemContent: function(i) {
                    return ons.createElement('<ons-list-item  expandable><div class="center"><span>10/10/2019</span></div><div class="center"><span class="list-item__title">10/10/2019</span><div class="list-item__subtitle"><span>الامراض الجلدية</span></div> </div><div class="expandable-content"><span>الطبيب: د.عبدالباسط الغرياني</span><br><span>التخصص: أمراض جلدية</span><br><span>التوقيت: 08:30</span><br><span><ons-button id="showSessionInfoButton" modifier="large--quiet">عرض التفاصيل</ons-button></span></div></ons-list-item>')
                    // return ons.createElement('<ons-list-item id="Select-Doctor-Button" tappable> <div class="right"><ons-icon icon="chevron-left" class="list-item__icon"></ons-icon></div> العيادة رقم ' + i + '  </ons-list-item>');
                },
                countItems: function() {
                    return 30;
                }
            };

            infiniteList.refresh();
        });
        // center title
        document.addEventListener('prechange', function(event) {
            document.querySelector('ons-toolbar .center')
                .innerHTML = event.tabItem.getAttribute('label');
        });

        //   list button function
        page.querySelector('#showSessionInfoButton').onclick= async function () {
            document.querySelector('#myNavigator').pushPage('pages/sessionInfo.html');
        }

    }

    if (page.id === 'myOperations') {
        //load list items
        ons.ready(function() {
            var infiniteList = document.getElementById('myOperations-infinite-list');

            infiniteList.delegate = {
                createItemContent: function(i) {
                    return ons.createElement('<ons-list-item  expandable><div class="center"><span>عملية إزالة مرارة</span></div><div class="center"><span class="list-item__title">عملية إزالة مرارة</span><div class="list-item__subtitle"><span>11/12/2019</span></div> </div><div class="expandable-content"><span>الطبيب: د.عبدالباسط الغرياني</span><br><span>التخصص: أمراض جلدية</span><br><span>العملية: إزالة الزايدة الدودية</span></div></ons-list-item>')
                    // return ons.createElement('<ons-list-item id="Select-Doctor-Button" tappable> <div class="right"><ons-icon icon="chevron-left" class="list-item__icon"></ons-icon></div> العيادة رقم ' + i + '  </ons-list-item>');
                },
                countItems: function() {
                    return 30;
                }
            };

            infiniteList.refresh();
        });
        // center title
        document.addEventListener('prechange', function(event) {
            document.querySelector('ons-toolbar .center')
                .innerHTML = event.tabItem.getAttribute('label');
        });

        //   list button function
        page.querySelector('#showSessionInfoButton').onclick= async function () {
            document.querySelector('#myNavigator').pushPage('pages/sessionInfo.html');
        }

    }

    if (page.id === 'Tab1') {
        // document.addEventListener('prechange', function(event) {
        //     document.querySelector('ons-toolbar .center')
        //         .innerHTML = event.tabItem.getAttribute('label');
        // });
        page.querySelector('#book-appointment-button').onclick= async function () {
            document.querySelector('#myNavigator').pushPage('pages/selectHospital.html');
        }
        page.querySelector('#cancel-appointment-button').onclick= async function () {
            document.querySelector('#myNavigator').pushPage('pages/myAppointments.html');
        }
        page.querySelector('#balance-button').onclick= async function () {
            document.querySelector('#myNavigator').pushPage('pages/balance.html');
        }
        page.querySelector('#medical-file-button').onclick= async function () {
            document.querySelector('#myNavigator').pushPage('pages/medicalFile.html');
        }
        page.querySelector('#personal-file-button').onclick= async function () {
            document.querySelector('#myNavigator').pushPage('pages/personalFile.html');
        }
        page.querySelector('#sign-out-button').onclick= async function () {
            var logoutStatus = await logout();
            if (logoutStatus===ture){

            }
            document.querySelector('#myNavigator').pushPage('pages/personalFile.html');
        }
    }

    if (page.id === 'medicalFile') {
        // document.addEventListener('prechange', function(event) {
        //     document.querySelector('ons-toolbar .center')
        //         .innerHTML = event.tabItem.getAttribute('label');
        // });
        page.querySelector('#sessions-button').onclick= async function () {
            document.querySelector('#myNavigator').pushPage('pages/sessions.html');
        }
        page.querySelector('#diseases-button').onclick= async function () {
            document.querySelector('#myNavigator').pushPage('pages/diseases.html');
        }
        page.querySelector('#medicalHistory-button').onclick= async function () {
            document.querySelector('#myNavigator').pushPage('pages/medicalHistory.html');
        }
        page.querySelector('#myOperations-button').onclick= async function () {
            document.querySelector('#myNavigator').pushPage('pages/myOperations.html');
        }
        page.querySelector('#medicalDocuments-button').onclick= async function () {
            document.querySelector('#myNavigator').pushPage('pages/medicalDocuments.html');
        }
        // page.querySelector('#balance-button').onclick= async function () {
        //     document.querySelector('#myNavigator').pushPage('pages/balance.html');
        // }
        // page.querySelector('#medical-file-button').onclick= async function () {
        //     document.querySelector('#myNavigator').pushPage('pages/medicalFile.html');
        // }
        // page.querySelector('#personal-file-button').onclick= async function () {
        //     document.querySelector('#myNavigator').pushPage('pages/personalFile.html');
        // }
    }

    if (page.id === 'diseases') {
        //load list items
        ons.ready(function() {
            var infiniteList = document.getElementById('diseases-infinite-list');
            infiniteList.delegate = {
                createItemContent: function(i) {
                    // return ons.createElement('<ons-list-item onclick="x1('+i+')" id="Cancel-Appointment-Button" tappable> <div class="right"><ons-icon icon="chevron-left" class="list-item__icon"></ons-icon></div> موعد رقم ' + i + ' مع الطبيب / 12-12-2019  </ons-list-item>');
                    return ons.createElement('<ons-list-item >  إلتهاب الجيوب الانفية </ons-list-item>');
                },
                countItems: function() {
                    return 100;
                }
            };

            infiniteList.refresh();
            $('#ons-list-item').onclick= async function (){
                alert('sdf')
            }
        });
        // center title
        document.addEventListener('prechange', function(event) {
            document.querySelector('ons-toolbar .center')
                .innerHTML = event.tabItem.getAttribute('label');
        });

        //    confirm appointment button functionality.

        page.querySelector('ons-list-item').onclick= async function () {
            document.querySelector('#myNavigator').pushPage('pages/cancelAppointment.html');
        }


    }
    if (page.id === 'balance') {
        //load list items
        ons.ready(async function() {
            let modal = page.querySelector('#loadBalanceModal');
            modal.show();
            let balance=await  getCustomerBalance();
            let balanceLabel = document.getElementById('balanceLabel');
            balanceLabel.innerText=balance;
            modal.hide();
            page.querySelector('#topupButton').onclick= async function () {
                modal.show();
                let pinCode = document.querySelector('#topupPinCode').value;
                let topupButton = document.querySelector('#topupButton');
                let myToast = document.querySelector('#myToast');
                if (pinCode==""){
                    let popover = page.querySelector('#failPopover');
                    page.querySelector('#errorMessage').innerHTML="الرجاء إدخال رقم البطاقة";
                    popover.show(topupButton);
                    page.querySelector('#topupPinCode').value="";
                }else {
                    try {
                        //API call
                        let topupStatus = await balanceTopup(pinCode);


                        if (topupStatus.status== "success"){
                            let popover = page.querySelector('#successPopover');
                            popover.show(topupButton);
                            page.querySelector('#topupPinCode').value="";
                            page.querySelector('#successMessage').innerHTML=topupStatus.message;
                            page.querySelector('#balanceLabel').innerHTML=topupStatus.balance;
                        }

                        if (topupStatus.status== "fail"){
                            let popover = page.querySelector('#failPopover');
                            page.querySelector('#errorMessage').innerHTML=topupStatus.message;
                            popover.show(topupButton);
                            page.querySelector('#topupPinCode').value="";
                        }
                    }catch (e) {
                        alert(e)
                    }
                }



            }
        });




    }

    if (page.id === 'personal-file') {
        //load list items
        ons.ready(async function() {
            var modal = page.querySelector('#loadPersonalFileModal');
            modal.show();
            let userInfo = await getUserInfo();
            document.querySelector('#fullName').value = userInfo.name;
            document.querySelector('#phone').value = userInfo.phone;
            document.querySelector('#dob').value = userInfo.dob;
            document.querySelector('#email').value = userInfo.email;

            modal.hide();
            infiniteList.refresh();
        });
        // center title
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


