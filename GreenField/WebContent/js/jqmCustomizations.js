/*
 * This JS is loaded before JQM.
 * */
$(document).bind('mobileinit', function(){
	console.log('JQM Customizations...');
	//Configure JQM defaults here
	$.mobile.loadingMessage="Loading...";
	
	/*Disable page transitions */
	$.mobile.defaultPageTransition='none';
	
//	$.event.special.swipe.horizontalDistanceThreshold = 130;
	
	$.mobile.fixedtoolbar.prototype.options.supportBlacklist = function () {
		var w = window, 
		ua = navigator.userAgent, 
		platform = navigator.platform, 
		wkmatch = ua.match(/AppleWebKit\/([0-9]+)/), 
		wkversion = !!wkmatch && wkmatch[1], ffmatch = ua.match(/Fennec\/([0-9]+)/), 
		ffversion = !!ffmatch && ffmatch[1], 
		operammobilematch = ua.match(/Opera Mobi\/([0-9]+)/), 
		omversion = !!operammobilematch && operammobilematch[1];
		if (((platform.indexOf("iPhone") > - 1 || 
			platform.indexOf("iPad") > - 1 || platform.indexOf("iPod") > - 1) 
					&& 
			wkversion && wkversion < 534 || w.operamini && {}.toString.call(w.operamini) === "[object OperaMini]" 
			|| operammobilematch && omversion < 7458 || ua.indexOf("Android") > - 1 
			&& wkversion && wkversion < 533 || ffversion && ffversion < 6 
			|| "palmGetResource" in window && wkversion && wkversion < 534 ||
			ua.indexOf("MeeGo") > - 1 && ua.indexOf("NokiaBrowser/8.5.0") > - 1)|| 
			((ua.match(/Blackberry/i))&&(ua.match(/Version\/6.0.0/i)) ) )
		{return true;
		}
		return false;
		}

});