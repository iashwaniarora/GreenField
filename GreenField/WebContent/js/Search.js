
	/* Swipe Gestures */
	//.ui-content does not fill the page vertically. So bind to entire page.
	$(document).delegate('#gfHomePage', 'swiperight', changePageContactUs);
	$(document).delegate('#gfSearch', 'swiperight', changePageHome);
	$(document).delegate('#gfFacilitiesPage', 'swiperight', changePageSearch);
	$(document).delegate('#gfAboutUs', 'swiperight', changePageFacilities);
	$(document).delegate('#gfContactUs', 'swiperight', changePageAboutUs);

	$(document).delegate('#gfHomePage', 'swipeleft', changePageSearch);
	$(document).delegate('#gfSearch', 'swipeleft', changePageFacilities);
	$(document).delegate('#gfFacilitiesPage', 'swipeleft', changePageAboutUs);
	$(document).delegate('#gfAboutUs', 'swipeleft', changePageContactUs);
	$(document).delegate('#gfContactUs', 'swipeleft', changePageHome);
	
	
	function changePageHome(){
	console.log("gfHomePage ");
	$.mobile.changePage("#gfHomePage");
	}
	function changePageFacilities(){
	console.log("changePageFacilities");
	$.mobile.changePage("#gfFacilitiesPage");
	}
	
	function changePageAboutUs(){
	console.log("changePageAboutUs");
	$.mobile.changePage("#gfAboutUs");
	}
	function changePageContactUs(){
	console.log("changePageContactUs");
	$.mobile.changePage("#gfContactUs");
	}
	
	function changePageSearch(){
		console.log("changeNotices Page");
		$.mobile.changePage("#gfSearch");
		}
/* Ajax call for search user */
function pfSearch(){
	
	 $("#loadingdemo").hide();

	var servicePath ="/GreenField/gfs/services/getAllNotices.do";
	console.log("servicePath: " + servicePath);
	//var inputJSONString = $.toJSON(inputData);
	//console.log("inputJSONString: " + inputJSONString);
	
	/*AjaxErrorMsg.searchAjax =*/ $.ajax({
				url : servicePath,
				type : "Get",
				contentType : "application/json",
			//	data : inputJSONString,
			    dataType : "json",
				success : function(
						result) {
					
				/*	var response = $.toJSON( result );
					console.log("response :- " + response.SearchUserList);*/
					if (result.STATUS.status == "SUCCESS") {
						console.log("result.STATUS.status :- " + result.STATUS.status);
						//$('#resultFound').text(result.SearchUserList.length+" matching results found for your search '"+inputVal+"':");
						console.log("---------------->"+result);
						populateRowsSearchPage(result);
						
					} else {
						/*$('#resultFound').text(result.STATUS.errorMessage);*//*No data found msg commented*/
						console.log("Search.STATUS.errorMessage :- " + result.STATUS.errorMessage);
						AjaxErrorMsg.SearchError = true;
						alert(msgTexts.searchResult);
					}
				}
				/*error : function(data) {
					console.log("Error occurred in searchUser Service.");
				}*/
			  
			});
	
}
//function populateRowsSearchPage(dataResponse)
function populateRowsSearchPage(dataResponse)
{ 
/*
 * dataResponse={"STATUS":{"errorMessage":"","exceptionMessage":"","status":"SUCCESS"},"SearchUserList":[{"userName":"Sanidas, Kelly C","ppid":"1000161165","businessArea":"US - IFS/Global PwC IT","category":"United States of America/Tampa/3109 West Dr ML King, Jr Blvd","dateAdded":"(813) 348-7304","grade":"Manager I IT Systems"}
,{"userName":"Sanidas, Thomas C","ppid":"1000175980","businessArea":"US - IFS/US IT Svcs/CTO","category":"United States of America/Tampa/3109 West Dr ML King, Jr Blvd","dateAdded":"(813) 348-7277","grade":"Manager II IT System Arc"}]}

 */
	
dataResponse={"STATUS":{"errorMessage":"","exceptionMessage":"","status":"SUCCESS"},
"notices":[{"id":3,"noticeName":"1-222-1213","publishedBy":"shreeansth","category":"Infotainment","dateAdded":"2012-12-12"},{"id":2,"noticeName":"4-Awing-All","publishedBy":"rajkumar","category":"Infotainment","dateAdded":"2012-11-12"},{"id":1,"noticeName":"1-23-123","publishedBy":"Mukunf","category":"Infotainment","dateAdded":"2012-12-12"}]};

console.log("populateRowsSearchPage Response"+dataResponse);

            var len= dataResponse.notices.length;
             console.log("populateRows Length"+len+":::::::::::"+dataResponse.notices[0].noticeName);
                
             var data=new Array();  
             if(len > 10){
	           	 for(var i=0;i<10;i++){
	           		 data[i] = {"id":dataResponse.notices[i].id,"noticeName":dataResponse.notices[i].noticeName,"publishedBy":dataResponse.notices[i].publishedBy,
	           				 "category":dataResponse.notices[i].category,"dateAdded":dataResponse.notices[i].dateAdded};
	               }
	              SearchlistUpdateWBS(data);
           		         
           		setTimeout(function(){  
           		  	var data1=new Array();
           		    for(var j=0, i=10; i<len; j++, i++){
           		           /* data1[j] = {"ppid":dataResponse.SearchUserList[i].ppid,"noticeName":dataResponse.SearchUserList[i].noticeName,"publishedBy":dataResponse.SearchUserList[i].publishedBy,"category":dataResponse.SearchUserList[i].category,
           		           	"dateAdded":dataResponse.SearchUserList[i].dateAdded,"grade":dataResponse.SearchUserList[i].grade};*/
           		         data1[j] = {"id":dataResponse.notices[i].id,"noticeName":dataResponse.notices[i].noticeName,"publishedBy":dataResponse.notices[i].publishedBy,
    	           				 "category":dataResponse.notices[i].category,"dateAdded":dataResponse.notices[i].dateAdded};
    	               }
           		      
           		    SearchlistUpdateWBS(data1);
           		    $("#loadinggif").hide();
           		  }, 1);    
               }else {
                   for(var i=0;i<len;i++){
                	   data[i] = {"id":dataResponse.notices[i].id,"noticeName":dataResponse.notices[i].noticeName,"publishedBy":dataResponse.notices[i].publishedBy,
  	           				 "category":dataResponse.notices[i].category,"dateAdded":dataResponse.notices[i].dateAdded};
  	               }
           		      SearchlistUpdateWBS(data);
           		   
                }
} 
$(document).delegate("#gfSearch", "pagebeforeshow", function() {
	
	pfSearch();
	
});

function getMarkUpSearch()
{ 
var Searchlist=null;

 Searchlist="<li onclick=\"changePageReq_ShowNoticeContent(${id})\" id=\"searchLi\"  value=\"${id}\"><a>"+
"<h6 class=\"heading6\">Title: ${noticeName}</h6>"+

"<div class=\"idlabel\">Published By : ${publishedBy}</div><div class=\"idlabel_h\" >Notice date : ${dateAdded} </div >"+
/*"<h6 onclick=\"changePageReq_Profile(${ppid})\" ><label class=\"searchlabel_h\">Office location : </label><a  class=\"searchlabel\">${category}</a></h6>"+
"<h4 ><label class=\"searchlabel_h\">Office Phone :  </label><a href=\"tel:${dateAdded}\"  class=\"searchlabel\">${dateAdded}</a></h4>"+
*/
/*"<h6 ><label class=\"searchlabel_h\">Office Phone :  </label><a href=\"tel:${dateAdded}\" onclick=\"stopProp(event)\" class=\"searchlabel\">${dateAdded}</a></h6>"+*/
/*"<h6 ><label class=\"searchlabel_h\">Office Phone :  </label><a href=\"\"  class=\"searchlabel\">${dateAdded}</a></h6>"+*/

/*"<h6 onclick=\"changePageReq_Profile(${ppid})\"><label class=\"searchlabel_h\">Grade :  </label><a class=\"searchlabel\">${grade}</a></h6>"+*/
"</a></li>";

      return Searchlist;
}

/*adds tax area returned markup to dom*/
SearchlistUpdateWBS = function(result)
{	
	//console.log(result+"inside Searchupdate"+getMarkUpSearch());
	var parent = document.getElementById("searchList");
	parent.innerHTML = "";
	$.template("Searchtemplate", getMarkUpSearch());
	$.tmpl( "Searchtemplate",result).appendTo( parent );
	
	$('#searchList').listview('refresh'); 
	 
	/*if(0 == result.length)
		$('#taxarea_add_btn').addClass('ui-disabled');
	else
		$('#taxarea_add_btn').removeClass('ui-disabled');*/
	
	
		
	//Mark selected value
	/*var index = TimeSheetList.ItemListener.getSelectedItemIndex();
	var val= TimeSheetList.DATA[index].data.workTaxArea;
	$('[name="taxarearadio"][value^="'+ val +'"]').attr('checked', true);*/
};