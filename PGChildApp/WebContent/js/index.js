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
 var handleOpenURL = function(url) {
            alert("RECEIVED URL: " + url);
            checkCall(url)
        };
function checkPassedParams(){


		    window.plugins.launchmyapp.getLastIntent(function(url) {
		    	alert("url:"+url)
		      if (url.indexOf('myjobschild://' > -1)) {
		    	  xx=url.split("?")
		    	  xxx=xx[1].split("=")
		    	  if(xxx[0]=="MYJOBS")
		    	  	{
		    		  location.href("GoogleMapsGetLocation.html?caller=myjobs")
		    		  }
		    	  else{
		    		  alert("received url: " + xxx[0]+"---"+xxx[1]); 
		    	  	}
		    	  
		    	  
		       
		      } else {
		    	  alert("ignore intent: " + url);
		      }
		    }, function(error) {
		    	alert("no intent received");
		    });
		   


}
function checkCall(url){


   
    	alert("ckurl:"+url)
      if (url.indexOf('myjobschild://' > -1)) {
    	  xx=url.split("?")
    	  xxx=xx[1].split("=")
    	  if(xxx[0]=="MYJOBS")
    	  	{
    		  location.href("GoogleMapsGetLocation.html?caller=myjobs")
    		  }
    	  else{
    		  alert("ckreceived url: " + xxx[0]+"---"+xxx[1]); 
    	  	}
    	  
    	  
       
      } else {
    	  alert("ckignore intent: " + url);
      }
    }  


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
    	
        document.addEventListener('deviceready', this.onDeviceReady, false);
        
    }, 
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
    	
        app.receivedEvent('deviceready');
       
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    	alert("received"+id)
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
       
    }
};
function openMap(){
	checkPassedParams();
	location.href='GoogleMapsGetLocation.html'
}