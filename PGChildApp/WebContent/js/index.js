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
         alert("openurl"+url+"::::"+localStorage.getItem('myCat') )  
            checkCall(url)
        };
var caller=""
function closeTheApp(){
	window.plugins.copy("This is the Child")
	if (navigator.app) {
		navigator.app.exitApp();
		}
		else if (navigator.device) {
		  navigator.device.exitApp();
		}
		else {
		          window.close();
		}
}
function checkPassedParams(){


		    window.plugins.launchmyapp.getLastIntent(function(url) {
		    	alert("url:"+url)
		      if (url.indexOf('myjobschild://' > -1)) {
		    	  xx=url.split("?")
		    	  xxx=xx[1].split("=")
		    	  if(xxx[0]=="MYJOBS")
		    	  	{
		    		 caller="MYJOBS"
		    		  
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
    	  alert("1")
    	  xx=url.split("?")
    	  xxx=xx[1].split("=")
    	  alert(xxx[0])
    	  if(xxx[0]=="MYJOBS")
    	  	{
    		  alert("call is Host App")
    		  caller="MYJOBS"
    		  }
    	  else{
    		  alert("ckreceived url: " + xxx[0]+"---"+xxx[1]); 
    	  	}
    	  
    	  
       
      } else {
    	  alert("ckignore intent: " + url);
      }
    }  



function openMap(){
	checkPassedParams();
	location.href='GoogleMapsGetLocation.html'
}