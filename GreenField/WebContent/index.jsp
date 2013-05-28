<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

<meta name="viewport"
	content="target-densitydpi=device-dpi, width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1" />
<title>Green Field</title>
<!--StartAppCSSFiles-->
<link rel="stylesheet" type="text/css"
	href="css/jquery.mobile-1.3.1.min.css">
<link rel="stylesheet" type="text/css" href="css/style.css">

<!--EndAppCSSFiles-->
<!--StartAppJSFiles-->
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jqmCustomizations.js"></script>
<script type='text/javascript' src="js/jquery.mobile-1.3.1.js"></script>
<script type="text/javascript" src="js/jquery.tmpl.min.js"></script>
<script type="text/javascript" src="js/jquery.on-2.3.min.js"></script>
<script type="text/javascript" src="js/Appointment.js"></script>
<script type="text/javascript" src="js/Search.js"></script>
<script type="text/javascript" src="js/RecentNotices.js"></script>
<script type="text/javascript" src="js/showNotice.js"></script>
<!--EndAppJSFiles-->
<script type="text/javascript">
	
</script>
</head>
<body>


	<!--  GreenField Home page  -->

	<div data-role="page" id="gfHomePage">
		<div data-role="header" data-tap-toggle="true" id="gfHomePageHeader">
			<a href="#" class="info_iconblank" data-corners="false"></a>
			<!--  <h1>Special Offers</h1>-->
			<a data-corners="false" class="info_icon"></a>

		</div>

		<div data-role="content" class="gfHomePageContent">
			<div class="paddingHeader">
				<h1 class="contentHeading centreText">Green Field</h1>
				<h4 class="contentSubHeading centreText">Your comfort is our
					priority</h4>
			</div>

			<div class="centreText paddingHeight">
				<img alt="loading Start..."
					src="images/drawable-mdpi/start_btn_unpressed.png"	onclick="changePageSearch()">
			</div>

		</div>
		<!-- content ends -->

		<div data-role="footer" data-position="fixed">

			<div data-role="navbar">
				<ul>
					<li><a href="#gfHomePage" class="navTitle">Home</a></li>
					<li><a href="#gfSearch" class="navTitle">Notices</a></li>
					<li><a href="#gfFacilitiesPage" class="navTitle">Facilites</a></li>
					<li><a href="#gfAboutUs" class="navTitle">About Us</a></li>
					<li><a href="#gfContactUs" class="navTitle">Contact US</a></li>

				</ul>
			</div>
			<!-- /navbar -->
		</div>
		<!-- /footer -->
	</div>
	<!--  End of GreenField Home page -->


	<!--  GreenField Home page  -->

	<div data-role="page" id="gfSearch">
		<div data-role="header" data-tap-toggle="true" id="gfSearchPageHeader"
			class="ui-pages-header">
			<a href="#" class="info_iconblank" data-corners="false"></a>
			<h1>Notices</h1>
			<a href="#" class="info_iconblank" data-corners="false"></a>

		</div>

		<div data-role="content" class="gfSearchPageContent">
			<div data-role="navbar">
				<ul>
					<li><a href="#" class="navTitle Search"
						onclick="showAllNotice()">Search</a></li>
					<li><a href="#" class="navTitle Recent"
						onclick="showRecentNotice()">Recent</a></li>

				</ul>
			</div>
			<!-- /navbar -->

			<div class="SearchResultDiv">
				<ul data-role="listview" data-filter="true"
					data-filter-placeholder="Search ..." id="searchList">
				</ul>
			</div>


			<div class="recentNotice">
				<ul data-role="listview" data-filter="true"
					data-filter-placeholder="Search ..." id="recentList">


				</ul>
			</div>


		</div>
		<!-- content ends -->

		<div data-role="footer" data-position="fixed">

			<div data-role="navbar">
				<ul>
					<li><a href="#gfHomePage" class="navTitle">Home</a></li>
					<li><a href="#gfSearch" class="navTitle">Notices</a></li>
					<li><a href="#gfFacilitiesPage" class="navTitle">Facilites</a></li>
					<li><a href="#gfAboutUs" class="navTitle">About Us</a></li>
					<li><a href="#gfContactUs" class="navTitle">Contact US</a></li>

				</ul>
			</div>
			<!-- /navbar -->
		</div>
		<!-- /footer -->
	</div>
	<!--  End of GreenField Home page -->

<!-- Starting of Facilities Page -->

	<div data-role="page" id="gfFacilitiesPage">
	<div data-role="header" data-tap-toggle="true"   id="gfFacilitiesPageHeader" >
		  <a href="#" class="info_iconblank" data-corners="false"></a>  
		  <a href="#" class="info_iconblank" data-corners="false"></a>
			 <h1>Facilities and Contact Information</h1>		
	</div>
	
	<div data-role="content" class="gfFacilitiesPage">
						
<div data-role="collapsible-set">

	<div data-role="collapsible" data-collapsed="true" >
	<h3>Electricians</h3>
	<img src="images/drawable-mdpi/elec.jpg" alt="Electrician Image" width="100" height="100">
	<p>Contact : Mr. Swapnil Gawde<br><a class="ui-link-inherit" href="tel:+91-9678886257">Phone Number : +91-9678886257</a><br>Contact Timing : 9:00AM to 6:00PM</p>
	</div>
	
	<div data-role="collapsible" data-collapsed="true" >
	<h3>Plumbers</h3>
	<img src="images/drawable-mdpi/plum.jpg" alt="Plumber Image" width="100" height="100">
	<p>Contact : Mr. Aditya Gote<br><a class="ui-link-inherit" href="tel:+91-7878766257">Phone Number : +91-7878766257</a><br>Contact Timing : 9:00AM to 6:00PM</p>
	</div>
	
	<div data-role="collapsible" data-collapsed="true">
	<h3>Maid</h3>
	<img src="images/drawable-mdpi/maid.jpg" alt="Maid Image" width="100" height="100">
	<p>Contact : Mr. Ramesh Adiga<br>Nick Name - Jhulalal<br><a class="ui-link-inherit" href="tel:+91-9828764457">Phone Number : +91-9887765456</a><br>Contact Timing : 24*7<br>Work Time : Works only at night></p>
	</div>
	
	<div data-role="collapsible" data-collapsed="true" >
	<h3>Sweepers</h3>
	<img src="images/drawable-mdpi/car.jpg" alt="Sweepers Image" width="100" height="100">
	<p>Contact : Mr. Rajkishor Jha<br><a class="ui-link-inherit" href="tel:+91-9887765456">Phone Number : +91-9887765456</a><br>Contact Timing : 9:00AM to 6:00PM</p>
	</div>
	
	<div data-role="collapsible" data-collapsed="true" >
	<h3>Carpenters</h3>\
	<img src="images/drawable-mdpi/carp.jpg" alt="Carpenters Image" width="100" height="100">
	<p>Contact : Mr. Nikhil Deolikar<br><a class="ui-link-inherit" href="tel:+91-9656745324">Phone Number : +91-9656745324</a><br>Contact Timing : 9:00AM to 6:00PM</p>
	</div>
	
</div>

<div data-role="footer" data-position="fixed">

			<div data-role="navbar">
				<ul>
					<li><a href="#gfHomePage" class="navTitle">Home</a></li>
					<li><a href="#gfSearch" class="navTitle">Notices</a></li>
					<li><a href="#gfFacilitiesPage" class="navTitle">Facilites</a></li>
					<li><a href="#gfAboutUs" class="navTitle">About Us</a></li>
					<li><a href="#gfContactUs" class="navTitle">Contact US</a></li>

				</ul>
			</div>
			<!-- /navbar -->
		</div>
		<!-- /footer -->	
	</div><!-- content ends -->
	</div>
	<!--End of Facilities Page -->


	<!--  GreenField gfContactUs Page  -->

	<div data-role="page" id="gfContactUs" data-title="Contact Us">
		<div data-role="header" data-tap-toggle="true" id="gfAboutPageHeader">
			<a href="#" class="info_iconblank" data-corners="false"></a>
			<h1>Contact Us</h1>
			<a data-corners="false" class="info_icon"></a>

		</div>

		<div data-role="content" class="gfAboutPageContent">
			<div class="ui-grid-a">
				<div class="ui-block-a">
					<img alt="could not load image" id=gf_Map>
				</div>
				<div class="ui-block-b">
					<div id=aboutAddressText>
						Address : A - 804 , Pride Green Fields, Pimple Nilakh, Vishal
						Nagar, Pune 411027, <br> <a href="tel:+918600491424"><h3>Call
								Us</h3></a><br> <a href="mailto:mail@gmail.com"><h3>Mail Us</h3></a>
					</div>

				</div>
			</div>
			<div id="contactUsText">Pride Housing new residential project
				Pride Green Fields located at Pimple Saudagar Pune. Pride Green
				Fields offers luxurious apartments with all modern amenities. Pride
				Housing was set up with the vision to turn out to be one of the most
				respected realtors. The developer believes in the idea of delivering
				value through innovation. It is the most respected and widely
				recognized realtors delivering value through innovation. Pride
				Housing & Construction Pvt. Ltd is committed to design, develop,
				construct and market residential and commercial complexes</div>
			<div id="dottedLine"></div>
			<img alt="Couldnt load image" src="images/drawable-mdpi/prideGroupLogo.png"
				id="prideGroupLoogo">
			<div id="contactUsDeveloperDetails">The Pride Group a world
				class property development conglomerate that is changing the
				cityscapes of Pune, Mumbai and Bangalore with its bold new designs,
				high engineering and ethical standards and professional outlook.
				Established in 1993, the group is presently headed by Mr. Arvind
				Jain. Under his able guidance the group has built and delivered over
				1 million sq ft of constructed area and have an ambitious target of
				over 5 million sq ft by 2012. The group follows formalized
				techniques of construction management and a continuous feedback
				system that make it one of the most efficient in the construction
				industry. It is no wonder that Pride Housing is a preferred partner
				for local and international corporates, IT and ITES companies,
				business owners and home buyers.</div>

		</div>
		<!-- content ends -->

		<div data-role="footer" data-position="fixed">

			<div data-role="navbar">
				<ul>
					<li><a href="#gfHomePage" class="navTitle">Home</a></li>
					<li><a href="#gfSearch" class="navTitle">Notices</a></li>
					<li><a href="#gfFacilitiesPage" class="navTitle">Facilites</a></li>
					<li><a href="#gfAboutUs" class="navTitle">About Us</a></li>
					<li><a href="#gfContactUs" class="navTitle">Contact US</a></li>

				</ul>
			</div>
			<!-- /navbar -->
		</div>
		<!-- /footer -->
	</div>
	<!--  End of GreenField gfContactUs -->
	
	<!--  GreenField previewNotice Page  -->

	<div data-role="page" id="gfPreviewNotice" data-title="Preview Notice">
		<div data-role="header" data-tap-toggle="true" id="gfAboutPageHeader">
			<a href="#" class="info_iconblank" data-corners="false"></a>
			<h1>Notice</h1>
			<a data-corners="false" class="info_icon"></a>

		</div>

		<div data-role="content" class="gfAboutPageContent">
			<div id="showNoticeDiv" >
			<img alt="" src="" id="noticeContent">
			</div>
			

		</div>
		<!-- content ends -->

		<div data-role="footer" data-position="fixed">

			<div data-role="navbar">
				<ul>
					<li><a href="#gfHomePage" class="navTitle">Home</a></li>
					<li><a href="#gfSearch" class="navTitle">Notices</a></li>
					<li><a href="#gfFacilitiesPage" class="navTitle">Facilites</a></li>
					<li><a href="#gfAboutUs" class="navTitle">About Us</a></li>
					<li><a href="#gfContactUs" class="navTitle">Contact US</a></li>

				</ul>
			</div>
			<!-- /navbar -->
		</div>
		<!-- /footer -->
	</div>
	<!--  End of GreenField previewNotice -->

<!-- Start of GreenField About Us Page -->
	<div data-role="page" id="gfAboutUs">
	<!-- HEADER -->
		<div data-role="header" data-tap-toggle="true" id="gfAboutUsHeader" class="ui-pages-header">
		<h1>About Us</h1>
		</div>
		<!-- CONTENT -->
		<div>
			<!-- Above the Line -->
			<div data-role="content" align="justify">
			<img  class="myimage" src="images/drawable-mdpi/gfLogo.png">
			Green Field Application version v1.0. 
			<p>This application is currently the sole proprietary of "RAAH", a well known name in the field of application creation.
			The founder of the company is Ashwani Arora (B.E./B.Tech, Jaypee University of Engineering and Technology). The other stake holders of the company are Rahul Dubey(B.Tech, CSE, JUET), Arjun Gupta(B.Tech, CS, Hindustan  Ltd.), Harshit Chaudhary(B.Tech, CSE, JUET) Chairman of the company is Priyanka Tiwari.
			<p>Green Field  project is currently underRAAH supervision who is a well known Engineer and has provided his crucial help in projects of  as an consultant.  
			</div> <!-- /Above the Line -->
			
			<!-- Line -->
			<hr class="mydev"  style="" >
			<!-- /line -->
			<!-- copyright -->
			<div>
			© RAAH Application Ltd.
			</div><!-- /copyright -->
		</div><!-- /content -->
		<div data-role="footer" data-position="fixed">

			<div data-role="navbar">
				<ul>
					<li><a href="#gfHomePage" class="navTitle">Home</a></li>
					<li><a href="#gfSearch" class="navTitle">Notices</a></li>
					<li><a href="#gfFacilitiesPage" class="navTitle">Facilites</a></li>
					<li><a href="#gfAboutUs" class="navTitle">About Us</a></li>
					<li><a href="#gfContactUs" class="navTitle">Contact US</a></li>

				</ul>
			</div>
			<!-- /navbar -->
		</div>
		<!-- /footer -->
	</div>

	<div data-role="page" id="zAppointment">
		<div data-role="header" data-tap-toggle="true" data-position="fixed"
			data-theme="a" id="zAppointmentHeader" class="ui-pages-header">
			<a data-rel="back" data-corners="false" class="info_iconback"></a>
			<h1>Green Field</h1>
			<!-- <a href="#" class="info_iconblank" data-corners="false"></a> -->
		</div>

		<div data-role="content" class="zAppointmentContent">

			<form>
				<label class="label_H">Fill out the form below and we will
					contact you to confirm your appointement.</label>
				<div data-role="navbar" data-inline="true" class="navbarHead">
					<div class="ui-grid-b">
						<div class="ui-block-a">
							<img class="logo" alt="loading.." src="images/land_trns.png" "/>
						</div>
						<div class="ui-block-b">
							<h4>Required Information</h4>
						</div>
						<div class="ui-block-c"></div>
					</div>
					<!-- /grid-b -->
				</div>
				<!-- /navbar -->
				<div id="zAppname_div" class="ui-grid-a">
					<div class="ui-block-a">
						<label data-mini="true" class="zAppname_label"
							for="zAppname_input">Name:</label>
					</div>
					<div class="ui-block-b">
						<input data-mini="true" type="text" name="zAppname_input"
							id="zAppname_input" value="" />
					</div>
				</div>
				<div id="zAppemail_div" class="ui-grid-a">
					<div class="ui-block-a">
						<label data-mini="true" class="zAppemail_label"
							for="zAppemail_input">Email:</label>
					</div>
					<div class="ui-block-b">
						<input data-mini="true" id="zAppemail_input"
							class="zAppemail_input" type="email" value=""
							name="zAppemail_input">
					</div>
				</div>
				<div id="zAppphone_div" class="ui-grid-a">
					<div class="ui-block-a">
						<label data-mini="true" class=""
							zAppphone_label" for="zAppphone_input">Phone:</label>
					</div>
					<div class="ui-block-b">
						<input data-mini="true" id="zAppphone_input"
							class="zAppphone_input" type="number"
							placeholder="Please enter the phone number." value=""
							pattern="[0-9]*" name="zAppphone_input">
					</div>
				</div>
				<div id="zAppdate_div" class="ui-grid-a">
					<div class="ui-block-a">
						<label data-mini="true" class="zAppdate_label"
							for="zAppdate_input">Date:</label>
					</div>
					<div class="ui-block-b">
						<input data-mini="true" id="zAppdate_input" class="zAppdate_input"
							type="date" value="" name="zAppdate_input">
					</div>
				</div>
				<label class="label_H">Please select a time between 8.00
					A.M. to 2.00 P.M.</label>
				<div id="zAppshuttle_div" class="ui-grid-a">
					<div class="ui-block-a">
						<label data-mini="true" class="zAppshuttle_label"
							for="zAppshuttle_input">Shuttle:</label>
					</div>
					<div class="ui-block-b">
						<input data-mini="true" type="text" name="zAppshuttle_input"
							id="zAppshuttle_input" value="" />
					</div>
				</div>
				<hr align="center" width="100%">
				<h4 class="heading">Optional Information</h4>
				<div id="zAppmake_div" class="ui-grid-a">
					<div class="ui-block-a">
						<label data-mini="true" class="zAppmake_label"
							for="zAppmake_input">Make:</label>
					</div>
					<div class="ui-block-b">
						<input data-mini="true" type="text" name="zAppmake_input"
							id="zAppmake_input" value="" />
					</div>
				</div>
				<a href="#" data-role="button" class="submit_btn"
					onclick="sendMail(); return false;">Submit</a>
			</form>


			<!-- Facebbok integration-->
			<iframe
				src="https://www.facebook.com/plugins/like.php?href=6YOUR_URL"
				scrolling="no" frameborder="0" style="border: none; height: 80px"></iframe>



		</div>
		<!-- content ends -->
		<div data-role="footer" data-position="fixed">
			<div data-role="navbar">
				<ul>
					<li><a href="#gfHomePage" class="navTitle">Home</a></li>
					<li><a href="#gfSearch" class="navTitle">Notices</a></li>
					<li><a href="#gfHomePage" class="navTitle">Coupons</a></li>
					<li><a href="#zLocation" class="navTitle">Location</a></li>
					<li><a href="#zContact" class="navTitle">Contact US</a></li>

				</ul>
			</div>
			<!-- /navbar -->
		</div>
		<!-- /footer -->

	</div>
	<!--  End of GreenField Home Page -->



	<!--  GreenField About page  -->
	<div data-role="page" id="zAbout">
		<div data-role="header" data-tap-toggle="true" data-position="fixed"
			data-theme="a" id="zAboutHeader" class="ui-pages-header">
			<a data-rel="back" data-corners="false" class="info_iconback"></a>
			<h1>About Us</h1>
			<!-- <a href="#" class="info_iconblank" data-corners="false"></a> -->
		</div>

		<div data-role="content" class="zAboutContent">
			<!--<div class="ui-grid-solo"></div>-->
			<!--<img class="logoImage" src="images/logo.png" width="300px;"  height="84px;"/>
			
			-->

			<div class="ui-grid-a">
				<div class="ui-block-a">
					<img class="logo" src="images/land_trns.png" width="91px;"
						height="83px;" />
				</div>
				<div class="ui-block-b">
					<strong class="heading">ZOLMAN TIRE</strong> <strong
						class="subheading">COMPLETE AUTO SERVICE CENTERS</strong>
				</div>
			</div>
			<div class="ui-grid-solo">
				<div class="ui-block-a"></div>
			</div>
			<P class="textjustify">Here are just some of the organizations
				Zolman Tire supports to make our community a better place.</P>
			<div class="listContainer">
				<ul data-role="listview">
					<li><a href="#" class="abtTitle">Queen of Peace</a></li>
					<li><a href="#" class="abtTitle">WNIT - Public Television</a></li>
					<li><a href="#" class="abtTitle">Youth Service Bureau</a></li>
					<li><a href="#" class="abtTitle">Summer In The City - Car
							Show</a></li>
					<li><a href="#" class="abtTitle">Studebaker National
							Museum</a></li>
					<li><a href="#" class="abtTitle">Salvation Army-Bell
							Ringing</a></li>
					<li><a href="#" class="abtTitle">College Football Hall of
							Fame</a></li>
					<li><a href="#" class="abtTitle">Youth Leadership - South
							Bend / Mishawaka</a></li>
					<li><a href="#" class="abtTitle">Corvilla</a></li>
					<li><a href="#" class="abtTitle">Bethel College</a></li>
					<li><a href="#" class="abtTitle">Police - FOP</a></li>
					<li><a href="#" class="abtTitle">Firefighters</a></li>
					<li><a href="#" class="abtTitle">Homeless Shelter</a></li>

				</ul>
			</div>
			<!-- /Listview -->

		</div>
	</div>
	<!--  End of About Page -->



	<!-- Location page starts -->
	<div data-role="page" id="zLocation">
		<div data-role="header" data-tap-toggle="true" data-position="fixed"
			data-theme="a" id="zLocationHeader" class="ui-pages-header">
			<a data-rel="back" data-corners="false" class="info_iconback"></a>
			<h1>Our Location</h1>
			<!-- <a href="#" class="info_iconblank" data-corners="false"></a> -->
		</div>

		<div data-role="content">
			<img alt="Loading Map ..."
				src="https://maps.googleapis.com/maps/api/staticmap?center=1901 South 11th Niles, MI 49120&amp;zoom=14&amp;size=480x480&amp;markers=1901 South 11th Niles, MI 49120&amp;sensor=false" />
			<!-- width="320px;" height="400px;" -->
		</div>
	</div>
	
	
	
	
	
	<!-- Contact us page start -->
	<div data-role="page" id="zContact">
		<div data-role="header" data-tap-toggle="true" data-position="fixed"
			data-theme="a" id="zContactHeader" class="ui-pages-header">
			<a data-rel="back" data-corners="false" class="info_iconback"></a>
			<h1>Contact Us</h1>
			<!-- <a href="#" class="info_iconblank" data-corners="false"></a> -->
		</div>

		<div data-role="content">
			<img src="images/img_1.png" alt="loading contact image"
				class="contact_img" />
			<div>
				<h3 style="margin-top: 5px; margin-bottom: 2px; text-align: center">Zolman
					Tires</h3>
				<h5 style="margin-top: 2px; margin-bottom: 5px; text-align: center">
					1901 South 11th Niles,MI 49120 269-683-6465</h5>
				<hr align="center" width="100%">

				<h4 class="hrsHeading">Hours of Operation</h4>
				<div class="time_div">Monday - Friday: 7:00 a.m. - 6 p.m.</div>
				<div class="time_div">Saturday: 7:30 a.m. - 4 p.m.</div>
				<div class="time_div">Sunday: Closed</div>
				<hr align="center" width="100%">
				<div class="ui-grid-a">
					<div class="ui-block-a">
						<a href="#" data-role="button" data-inline="true">Phone</a>
					</div>
					<div class="ui-block-b">
						<a href="#" data-role="button" data-inline="true">Email</a>
					</div>

				</div>
				<!-- /grid-a -->





			</div>
		</div>




		<!-- Loading Overlay/glass Added -->
		<div id="loadingdemo" align="center"
			style="z-index: 10012; font-size: 24px; width: 100%; color: white; height: 100%; background: black; opacity: 0.7; top: 0; left: 0; position: fixed; vertical-align: middle; display: none; bottom: 0px;"
			onclick="onOverlayclick(event)">
			<img alt="" src="css/images/ajax-loader.gif" align="middle"
				style="top: 45%; left: 45%; position: fixed;">
			<!-- <label style="font-size:24px;text-align:center;color:white; top:50%;position: fixed;">Please Wait...</label> -->

		</div>
</body>
</html>