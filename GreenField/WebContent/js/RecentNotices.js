function showRecentNotice() {
    console.log("inside showRecent");
    $('.recentNotice').css('display', 'block');
    $('.SearchResultDiv').css('display', 'none');
    recentNoticeSearch();
}

function showAllNotice() {
    console.log("inside showAllNotice");
    $('.recentNotice').css('display', 'none');
    $('.SearchResultDiv').css('display', 'block');
}

/* Ajax call for search user */

function recentNoticeSearch() {
    $("#loadingdemo").hide();

    var servicePath = "/GreenField/gfs/services/getAllNotices.do";
    console.log("servicePath: " + servicePath);
    //var inputJSONString = $.toJSON(inputData);
    //console.log("inputJSONString: " + inputJSONString);

    /*AjaxErrorMsg.searchAjax =*/
    $.ajax({
        url: servicePath,
        type: "Get",
        contentType: "application/json",
        //	data : inputJSONString,
        dataType: "json",
        success: function (
            result) {

            /*	var response = $.toJSON( result );
					console.log("response :- " + response.SearchUserList);*/
            if (result.STATUS.status == "SUCCESS") {
                console.log("result.STATUS.status :- " + result.STATUS.status);
                //$('#resultFound').text(result.SearchUserList.length+" matching results found for your search '"+inputVal+"':");
                console.log("---------------->" + result);
                populateRowsRecentPage(result);

            } else {
                /*$('#resultFound').text(result.STATUS.errorMessage);*/
                /*No data found msg commented*/
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

function populateRowsRecentPage(dataResponse) {

    dataResponse = {
        "STATUS": {
            "errorMessage": "",
            "exceptionMessage": "",
            "status": "SUCCESS"
        },
        "notices": [{
                "id": 3,
                "noticeName": "1-222-1213",
                "publishedBy": "shreeansth",
                "category": "Infotainment",
                "dateAdded": "2012-12-12",
                "image": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBhIQERAQExAUFREOEB0ZEBQXGRQZGBAWHxAhFh8c" + "Eh4jJygfGhkvGRQSKy8gJDMpOC4sFx4xOjAqNSYrOCkBCQoKDQwNFA0PGSkkFBgpKSkpKSkpKSkp" + "KSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKf/AABEIAFAAfAMBIgACEQED" + "EQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAMEBwgGAgH/xABDEAABAwECBwwIBAUFAAAAAAABAAID" + "BAURBhITFCEykQcxNUFSU3FydJOy0VFUYYKxs8LhFRYjwSIkkqHwMzRigdL/xAAWAQEBAQAAAAAA" + "AAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAARES/9oADAMBAAIRAxEAPwC56amYWMOI" + "3SwX6ByU7mrOQ3YEqXUZ1B4U6gazVnIbsChzSsY5wyIuBAxv0wDe2/jIRFVZu9cHt7dH8hyDv86j" + "5lu2D/0vmdR8y3bD5rI6Slq41xnUfMt2w+aWdR8y3bD5rI6QU2mNcZ1HzLdsPmlnUfMt2w+ayOkm" + "0xrjOo+Zbth816FQw3AQDTvaYdPRpWRUewC4Us7tbPirqY1JTRMe0OyQF/EWtvGkjTd0J7NWchuw" + "LzR6vvO8ZT6oazVnIbsCD2xEA8AMbdiegco+xHUGtjXHU+ooClLqM6g8KdTVLqM6g8KdQJVZu9cH" + "t7fH8hytNVZu9cHt7fH8hylWKFSSSUV8Uqigxsro1IHv2Yov/uo3+f2XS0NBcJ9G/YRl2uag5o/5" + "svSU62qbJyNbdv08Tv6oGu/dQUCR7AHhSzu1s+KAo9gDwpZ3a2fFSjU9Hq+87xlSFHo9X3neMqQt" + "sEg1sa46n1FGUGtjXHU+ooopS6jOoPCnU1S6jOoPCnUCVWbvXB7e3x/IcrTVWbvXB7e3x/IcpVih" + "V8SU6jsh0gxy+KKPnJXhjT1Rpc7/AKCioJO/0KxWUn6b3Xb+CIJ6cqB+y5uOgs1n+rXVMp4xTwAN" + "GjidKR8F0zsPbNLcTNK0j8NzK8vgBMONjY13Lv40HN4dw4tRB/ys6lI9v8oFzq7W37asqvfG9zq6" + "ndFTsib/AAQStLY24oLrnBxN2/cgcuD8bv8AbVsE/oY7Ggl/pfc0noJQBkewB4Us7tbPigUkZaS1" + "wIcN8HQR0o7gFwpZ3a2fFSjU9Hq+87xlSFHo9X3neMqQtsEg1sa46n1FGUGtjXHU+ooopS6jOoPC" + "nU1S6jOoPCnUCVWbvXB7e3x/IcrTVWbvXB7e3x/IcpVig3nQehW7amClBLPUULaB0LobPE7a1jpC" + "GvEIfdKD/Di3qonDQehd3ui4dTVErqeCsc6iMEQLGXBrnZIYwcbgTp4lFGrJwboZGWRTOsxz3WlS" + "B81XG+RroHXkFztBbcLr9PpXL1Vgwx2TVThodPDa2RbN6Yww73Fcbr101BuhRRQ2dRPnJo5bOyNa" + "IyQ6lkLzc9pAxrwLrwL9C5yuqIIbJqqBlTHLILVD48W/9WIQXY7d7oPtQHLThsmmFn089nn+boYp" + "JKmKVwkjc8XF2LvEXi/9lEsHBKGntG0qapibUx0FFJLGHEtEtwa5hN28S113SVLtT8Lqvw6ontIB" + "tJQxRy00cb3SSOYMYtB3hpN168YK4bxyWtaFdLM2lzqleyBzwXCI3tDAQN8gNvIQcbhDa0FQ5hgo" + "m0oYy5zRI+THvN4JLtI0XaFJwC4Us7tbPipOH1UZp4pXWjHXPMWKXxxmMRgO0NI9t7tPtUbAHhSz" + "u1s+KlGp6PV953jKkKPR6vvO8ZUhbYJBrY1x1PqKMoNbGuOp9RRRSl1GdQeFOqLTVTAxgL234g4x" + "yU7nbOW3aEDqrLdxopJqENjje9wroyQxrnG7IHTcOLSFZGds5bdoUWVkbnF2VILt/FkuG9cgyeMH" + "qv1Sp7mTyXr8v1XqlT3MnktXZKPnnd590slHz7u8+6zi6yj+X6r1Sp7mTyS/L9V6pU9zJ5LV2Sj5" + "93efdLJR8+7vPunK9MonB+q9Uqe5k8l5/L1X6pU9zJ5LWGSj593efdLJR887vPunJ0yf+Xqv1Sp7" + "mTyR3AawqllpUD3UtQ1raphc4xSAAX750aAtJ5KPnnd590snHz7u8VkS3Uij1fed4yn1FgkjY0ND" + "23D0uBO/fpKdztnLbtCqHUGtjXHU+oopnbOW3aEJtaUF4IIIxfSPSUH/2Q=="
            }, {
                "id": 2,
                "noticeName": "4-Awing-All",
                "publishedBy": "rajkumar",
                "category": "Infotainment",
                "dateAdded": "2012-11-12"
            }, {
                "id": 1,
                "noticeName": "1-23-123",
                "publishedBy": "Mukunf",
                "category": "Infotainment",
                "dateAdded": "2012-12-12"

            }
        ]
    };
    console.log("populateRowsSearchPage Response" + dataResponse);

    var len = dataResponse.notices.length;
    console.log("populateRows Length" + len + ":::::::::::" + dataResponse.notices[0].noticeName);

    var data = new Array();
    if (len > 10) {
        for (var i = 0; i < 10; i++) {
            data[i] = {
                "id": dataResponse.notices[i].id,
                "noticeName": dataResponse.notices[i].noticeName,
                "publishedBy": dataResponse.notices[i].publishedBy,
                "category": dataResponse.notices[i].category,
                "dateAdded": dataResponse.notices[i].dateAdded
            };
        }
        updateRecentNotices(data);

        setTimeout(function () {
            var data1 = new Array();
            for (var j = 0, i = 10; i < len; j++, i++) {
                /* data1[j] = {"ppid":dataResponse.SearchUserList[i].ppid,"userName":dataResponse.SearchUserList[i].userName,"businessArea":dataResponse.SearchUserList[i].businessArea,"officeLocation":dataResponse.SearchUserList[i].officeLocation,
           		           	"officePhone":dataResponse.SearchUserList[i].officePhone,"grade":dataResponse.SearchUserList[i].grade};*/
                data1[j] = {
                    "id": dataResponse.notices[i].id,
                    "noticeName": dataResponse.notices[i].noticeName,
                    "publishedBy": dataResponse.notices[i].publishedBy,
                    "category": dataResponse.notices[i].category,
                    "dateAdded": dataResponse.notices[i].dateAdded
                };
            }

            updateRecentNotices(data1);
            $("#loadinggif").hide();
        }, 1);
    } else {
        for (var i = 0; i < len; i++) {
            data[i] = {
                "id": dataResponse.notices[i].id,
                "noticeName": dataResponse.notices[i].noticeName,
                "publishedBy": dataResponse.notices[i].publishedBy,
                "category": dataResponse.notices[i].category,
                "dateAdded": dataResponse.notices[i].dateAdded
            };
        }
        updateRecentNotices(data);

    }
}

function getMarkUpRecentNotice() {
    var Searchlist = null;

    Searchlist = "<li onclick=\"changePageReq_ShowNoticeContent(${id})\" id=\"searchLi\"  value=\"${id}\"><a>" +
        "<h6 >Title: ${noticeName}</h6>" +
        "<div class=\"idlabel\">Published By:${publishedBy}</div><div class=\"idlabel_h\" >Notice date : ${dateAdded} </div >" +
        "</a></li>";

    return Searchlist;
}

/*adds tax area returned markup to dom*/
updateRecentNotices = function (result) {
    //console.log(result+"inside Searchupdate"+getMarkUpSearch());
    var parent = document.getElementById("recentList");
    parent.innerHTML = "";
    $.template("Searchtemplate", getMarkUpRecentNotice());
    $.tmpl("Searchtemplate", result).appendTo(parent);
    $('#recentList').listview('refresh');
};
