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
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    alert('device is now ready');
}


$('.btn').click(function(){

    // onSuccess Callback
    // This method accepts a JSON object, which contains the
    // message response

    alert('clicked');
    
    var onSuccess = function(data) {
        alert('message: ' + data.message);
    };

    // onError Callback receives a json object
    //
    function onError(error) {
        alert('message: ' + error.message);
    }

    window.cordova.plugins.FileOpener.openFile("http://kreaserv-tech.com/mahindra_admin/mahindra.ppxs", onSuccess, onError);

})