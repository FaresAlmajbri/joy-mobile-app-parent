/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
ons.ready(function() {
  var pullHook = document.getElementById('pull-hook');

  pullHook.addEventListener('changestate', function(event) {
    var message = '';

    switch (event.state) {
      case 'initial':
        message = 'Pull to refresh';
        break;
      case 'preaction':
        message = 'Release';
        break;
      case 'action':
        message = 'Loading...';
        break;
    }

    pullHook.innerHTML = message;
  });

  pullHook.onAction = function(done) {
    setTimeout(done, 1000);
  };
});

window.fn={}
window.fn.exit= function () {
    navigator.app.exitApp();
}
let app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        //  Screen Orientation lock code.
        window.screen.orientation.lock('portrait');
        //disable back button.
        document.addEventListener("backbutton", function(e){
            if($.mobile.activePage.is('#login_page')){
                e.preventDefault();
            }
            else {
                if (confirm("Are you sure you want to logout?")) {
                    /* Here is where my AJAX code for logging off goes */
                }
                else {
                    return false;
                }
            }
        }, false);

        // document.getElementById("login").onclick = function() {alert('ees'); login()};
        // page.querySelector('#preReceiveButton').onclick = showTemplateDialog();

        // document.getElementById("testMeta").onclick = function() {


        // };



    },

    // Update DOM on a Received Event
    // receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');
        //
        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);


//         document.getElementById("getTokenButton").addEventListener("click",          function getToken () {
//             FCMPlugin.getToken(function(token){
//                 alert(token);
//                 // document.getElementById(tokenText).innerHTML = token;
//                 document.getElementById("tokenText").value = token;
//             });
//
//         });
//
//         document.getElementById("getQrCodeButton").addEventListener("click", function ScanQR(){
//             try{
//
//                 // cordova.plugins.barcodeScanner.scan(
//                 //     function (result) {
//                 //         alert("We got a barcode\n" +
//                 //             "Result: " + result.text + "\n" +
//                 //             "Format: " + result.format + "\n" +
//                 //             "Cancelled: " + result.cancelled);
//                 //     },
//                 //     function (error) {
//                 //         alert("Scanning failed: " + error);
//                 //     },
//                 //     {
//                 //         preferFrontCamera : true, // iOS and Android
//                 //         showFlipCameraButton : true, // iOS and Android
//                 //         showTorchButton : true, // iOS and Android
//                 //         torchOn: true, // Android, launch with the torch switched on (if available)
//                 //         saveHistory: true, // Android, save scan history (default false)
//                 //         prompt : "Place a barcode inside the scan area", // Android
//                 //         resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
//                 //         formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
//                 //         orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
//                 //         disableAnimations : true, // iOS
//                 //         disableSuccessBeep: false // iOS and Android
//                 //     }
//                 // );
//
//                 QRScanner.scan(displayContents);
//
//                 function displayContents(err, text){
//                     if(err){
//                         // an error occurred, or the scan was canceled (error code `6`)
//                     } else {
//                         // The scan completed, display the contents of the QR code:
//                         alert(text);
//                     }
//                 }
//
// // Make the webview transparent so the video preview is visible behind it.
//                 QRScanner.show();
//
//             }catch (e) {
//                 alert(e)
//             }
//
//
//         });
//
//         document.getElementById("showScanQr").addEventListener("click", QRScanner.show());
//     }
};

function login(){
    try{
        let ifConnected = window.navigator.onLine;
        if (ifConnected) {
            // alert('Connection available');
            // ons.notification.toast('Hi there!', { timeout: 1000, animation: 'fall' })
        } else {
            // alert('Connection not available');
            ons.notification.toast('لا يوجد إتصال بالنترنت!', { timeout: 6000, animation: 'ascend' })

        }
    }catch (e) {
        alert(e);
        console.log(e);
    }
}

app.initialize();