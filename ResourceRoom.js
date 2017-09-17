//get the date: day, month, date, year
//global scope
var d = new Date();
var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
'Friday', 'Saturday'];
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
'August', 'September', 'November', 'December']
document.querySelector('#day').innerHTML = daysOfTheWeek[d.getDay()] + ', ' 
	+ month[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();

var day = daysOfTheWeek[d.getDay()];

//start the clock
function startTime(){
	var timeNow = new Date();
	var h = timeNow.getHours();
	var m = timeNow.getMinutes();
	var s = timeNow.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.querySelector('#time').innerHTML = h + ':' + m + ':' + s;
	var t = setTimeout(function(){startTime() }, 500);
	
	//generate a random backround color
	var colors = ['#e27fef', '#f4d558', '#57f462', '#57f4f4', '#579df4', 
	'#f45757', '#5d6496', '#965d5d', '#5d9691', '#820101', '#203f70', '#702065', 
	'#702020', '#724747', '#47724c', '#a07d7d', '#827554', '#82536f', '#c64141', 
	'#c3c641', '#41c65d', '#41c6a4', '#417ac6', '#c64141', '#c66641'];

	var newColor = document.querySelector('#color');
	//write the names of students who need to go to Resource Room inside div #schedule
	//change background color when a new group of kids goes
	
	//catch all statements to get when school is not in session
	if (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday' && h >= 15){
		document.querySelector('#schedule').innerHTML = 'No one needs to go at this time. Have a great day!';
	} else if (day == 'Saturday' || day == 'Sunday'){
		document.querySelector('#schedule').innerHTML = 'Have a great weekend!';
		newColor.style.background = colors[12];

	//MONDAY
	} else if (day == 'Monday' && h == 08 && m < 54){
		document.querySelector('#schedule').innerHTML = 'Giselle and Valentina go at 8:55am';
		newColor.style.background = colors[24]
	} else if (day == 'Monday' && h == 08 && m >= 54 || h == 09 && m < 24){
		document.querySelector('#schedule').innerHTML = '<li>8:55am: Giselle and Valentina, time to go!</li>' + '<br>' + 
		'<li>Up Next: Giselle and <b>Jessica</b> at 9:25am</li>';
		newColor.style.background = colors[0];
	} else if (day == 'Monday' && h == 09 && m >= 24 && m < 54){
		document.querySelector('#schedule').innerHTML = '<li>9:25am: Giselle and <b>Jessica</b>, time to go!</li>' + '<br>' + 
		'<li>Up Next: Giselle, <b>Raul</b>, Jessica at 9:55am</li>';
		newColor.style.background = colors[1];
	} else if (day == 'Monday' && h == 09 && m >= 54 || h == 10 && m < 40){
		document.querySelector('#schedule').innerHTML = '<li>9:55am: Giselle, <b>Raul</b>, and Jessica, time to go!</li>' + '<br>' + 
		'<li>Up Next: Giselle, Jessica, and Valentina at 12:40pm</li>';
		newColor.style.background = colors[2];
	} else if (day == 'Monday' && h == 12 && m >= 39 || h == 13 && m < 09){
		document.querySelector('#schedule').innerHTML = '<li>12:40pm: Giselle, Jessica, and Valentina, time to go!</li>' + '<br>' +  
		'<li>Up Next: Raul at 1:10pm</li>';
		newColor.style.background = colors[3];
	} else if (day == 'Monday' && h == 13 && m >= 09 || h == 2 && m < 30){
		document.querySelector('#schedule').innerHTML = '<li>1:10pm Raul, time to go!</li>';
		newColor.style.background = colors[4];

	//TUESDAY
	} else if (day == 'Tuesday' && h == 08 && m < 54){
		document.querySelector('#schedule').innerHTML = 'Giselle, Jessica, Valentina, and Raul go at 8:55am';
		newColor.style.background = colors[5];
	} else if (day == 'Tuesday' && h == 08 && m >= 54 || h == 09 && m < 24){
		document.querySelector('#schedule').innerHTML = '<li>8:55am: Giselle, Jessica, Valentina, and Raul time to go!</li>' + '<br>' + 
		'<li>Up Next: Giselle and Jessica at 9:25am</li>';
		newColor.style.background = colors[6];
	} else if (day == 'Tuesday' && h == 09 && m >= 24 && m < 59){
		document.querySelector('#schedule').innerHTML = '<li>9:25am: Giselle and Jessica should already be there.</li>' + '<br>' + 
		'<li>Up Next: Giselle, Valentina, and Raul at 1:10pm</li>';
		newColor.style.background = colors[7];
	} else if (day == 'Tuesday' && h == 12 && m >= 40 || h == 13 && m < 10){
		document.querySelector('#schedule').innerHTML = '<li>12:40pm: Valentina, and Raul time to go!</li>' + '<br>' + 
		'<li>Up Next: Giselle and Raul at 1:40pm</li>';
		newColor.style.background = colors[20];
	} else if (day == 'Tuesday' && h == 13 && m >= 09 && m < 39){
		document.querySelector('#schedule').innerHTML = '<li>1:10pm: Giselle, Valentina, and Raul time to go!</li>' + '<br>' + 
		'<li>Up Next: Giselle and Raul at 1:40pm</li>';
		newColor.style.background = colors[8];
	} else if (day == 'Tuesday' && h == 13 && m >= 39 || h == 14 && m < 09){
		document.querySelector('#schedule').innerHTML = '<li>1:40pm: Giselle and Raul should already be there.</li>' + '<br>' + 
		'<li>Up Next: Giselle, <b>Jessica</b>, and <b>Valentina</b> at 2:10pm</li>';
		newColor.style.background = colors[9];
	} else if (day == 'Tuesday' && h == 14 && m >= 09 && m < 40){
		document.querySelector('#schedule').innerHTML = '<li>2:10pm: Giselle, <b>Jessica</b>, and <b>Valentina</b> time to go!</li>';
		newColor.style.background = colors[10];

	//Wednesday
	} else if (day == 'Wednesday' && h == 08 && m < 54){
		document.querySelector('#schedule').innerHTML = 'Giselle, Jessica, and Valentina go at 8:55am';
		newColor.style.background = colors[11];
	} else if (day == 'Wendesday' && h == 08 && m >= 54 || h == 09 && m < 24){
		document.querySelector('#schedule').innerHTML = '<li>8:55am: Giselle, Jessica, and Valentina time to go!</li>' + '<br>' + 
		'<li>Up Next: Giselle and Jessica at 9:25am</li>';
		newColor.style.background = colors[12];
	} else if (day == 'Wendesday' && h == 09 && m >= 24 && m < 54){
		document.querySelector('#schedule').innerHTML = '<li>9:25am: Giselle and Jessica should already be there.</li>' + '<br>' + 
		'<li>Up Next: Giselle and <b>Raul</b> at 9:55am</li>';
		newColor.style.background = colors[13];
	} else if (day == 'Wendesday' && h == 09 && m >= 54 || h == 10 && m < 24){
		document.querySelector('#schedule').innerHTML = '<li>9:55am: Giselle and <b>Raul</b> time to go!</li>' + '<br>' + 
		'<li>Up Next: Raul at 10:25am</li>';
		newColor.style.background = colors[14];
	} else if (day == 'Wendesday' && h == 10 && m >= 24 && m < 59){
		document.querySelector('#schedule').innerHTML = '<li>10:25am: Raul should already be there.</li>' + '<br>' + 
		'<li>Up Next: Giselle and Valentina at 12:40pm</li>';
		newColor.style.background = colors[15];
	} else if (day == 'Wendesday' && h == 12 && m >= 39 || h == 13 && m < 10){
		document.querySelector('#schedule').innerHTML = '<li>12:40pm: Giselle and Valentina time to go!</li>' + '<br>' + 
		'<li>Up Next: <b>Jessica, Rual,</b> Giselle and Valentina at 1:10pm</li>';
		newColor.style.background = colors[16];
	} else if (day == 'Wendesday' && h == 13 && m >= 10 || h == 13 && m < 39){
		document.querySelector('#schedule').innerHTML = '<li>1:10pm: Giselle, <b>Jessica</b>, Valentina, and <b>Raul</b> time to go!</li>' + '<br>' + 
		'<li>Up Next: <b>Jessica, Rual,</b> Giselle and Valentina at 1:10pm</li>';
		newColor.style.background = colors[16];
	} else if (day == 'Wendesday' && h == 13 && m >= 39 && m < 59){
		document.querySelector('#schedule').innerHTML = '<li>1:40pm: Valentina should already be there.</li>';
		newColor.style.background = colors[17];
		
	//Thursday
	} else if (day == 'Thursday' && h == 08 && m < 54){
		document.querySelector('#schedule').innerHTML = 'Giselle, Jessica, and Valentina go at 8:55am';
		newColor.style.background = colors[18];
	} else if (day == 'Thursday' && h == 08 && m >= 54 || h == 09 && m < 24){
		document.querySelector('#schedule').innerHTML = '<li>8:55am: Giselle, Jessica, and Valentina time to go!</li>' + '<br>' + 
		'<li>Up Next: Giselle and Jessica 9:25am</li>';
		newColor.style.background = colors[19];
	} else if (day == 'Thursday' && h == 09 && m >= 24 && m < 54){
		document.querySelector('#schedule').innerHTML = '<li>9:25am: Giselle and Jessica should already be there.</li>' + '<br>' + 
		'<li>Up Next: Raul at 9:55am</li>';
		newColor.style.background = colors[20];
	} else if (day == 'Thursday' && h == 09 && m >= 54 || h == 10 && m < 24){
		document.querySelector('#schedule').innerHTML = '<li>9:55am: Raul, time to go!.</li>' + '<br>' + 
		'<li>Up Next: Raul at 10:25am</li>';
		newColor.style.background = colors[21];
	} else if (day == 'Thursday' && h == 10 && m >= 24 && m < 59){
		document.querySelector('#schedule').innerHTML = '<li>10:25am: Raul should already be there.</li>' + '<br>' + 
		'<li>Up Next: Giselle, Valentina, and Raul at 12:40pm</li>';
		newColor.style.background = colors[22];
	} else if (day == 'Thursday' && h == 12 && m >= 39 || h == 13 && m < 09){
		document.querySelector('#schedule').innerHTML = '<li>12:40pm: Giselle, Valentina, and Raul time to go!.</li>' + '<br>' + 
		'<li>Up Next: <b>Jessica</b>, Giselle, Valentina, and Raul at 1:10pm</li>';
		newColor.style.background = colors[23];
	} else if (day == 'Thursday' && h == 13 && m >= 09 && m < 39){
		document.querySelector('#schedule').innerHTML = '<li>1:10pm: <b>Jessica</b>, Giselle, Valentina, and Raul time to go!</li>' + '<br>' + 
		'<li>Up Next: Valentina at 1:40pm</li>';
		newColor.style.background = colors[24];
	} else if (day == 'Thursday' && h == 13 && m >= 39 && m < 59){
		document.querySelector('#schedule').innerHTML = '<li>1:40pm: Valentina should already be there.</li>'; 
		newColor.style.background = colors[3];
	
	//Friday
	} else if (day == 'Friday' && h == 08 && m < 54){
		document.querySelector('#schedule').innerHTML = 'Giselle, Jessica, and Valentina go at 8:55am';
		newColor.style.background = colors[9];
	}else if (day == 'Friday' && h == 08 && m >= 54 || h == 09 && m < 24){
		document.querySelector('#schedule').innerHTML = '<li>8:55am: Giselle, Jessica, and Valentina time to go!</li>' + '<br>' + 
		'<li>Up Next: Giselle and Jessica 9:25am</li>';
		newColor.style.background = colors[2];
	} else if (day == 'Friday' && h == 09 && m >= 24 && m < 54){
		document.querySelector('#schedule').innerHTML = '<li>9:25am: Giselle and Jessica should already be there.</li>' + '<br>' + 
		'<li>Up Next: <b>Raul</b> and Giselle at 9:55am</li>';
		newColor.style.background = colors[8];
	} else if (day == 'Friday' && h == 09 && m >= 54 || h ==10 && m < 24){
		document.querySelector('#schedule').innerHTML = '<li>9:55am: <b>Raul</b>, and Giselle time to go!.</li>' + '<br>' + 
		'<li>Up Next: <b>Valentina</b> and Raul at 10:25am</li>';
		newColor.style.background = colors[12];
	} else if (day == 'Friday' && h == 10 && m >= 24 && m < 59){
		document.querySelector('#schedule').innerHTML = '<li>10:25am: <b>Valentina</b> and Raul time to go!</li>' + '<br>' + 
		'<li>Up Next: Jessica, Valentina, and Raul at 1:10pm</li>';
		newColor.style.background = colors[22];
	}  else if (day == 'Friday' && h == 13 && m >= 09 && m < 39){
		document.querySelector('#schedule').innerHTML = '<li>1:10pm: Jessica, Valentina, and Raul time to go!</li>' + '<br>' + 
		'<li>Up Next: Valentina at 1:40pm</li>';
		newColor.style.background = colors[14];
	} else if (day == 'Friday' && h == 13 && m >= 39 && m < 59){
		document.querySelector('#schedule').innerHTML = '<li>1:40pm: Valentina should already be there.</li>';
		newColor.style.background = colors[16];
	} else {
		document.querySelector('#schedule').innerHTML = 'No one needs to go at this time.';
		newColor.style.background = colors[5];
	}
}

function checkTime(i){
	if (i < 10){
		i = '0' + i;
	}
	return i;
}

//new function that plays a sound when it's time for a student to leave
//add an alert with the kids who need to go
function alertSound(){
	var timeNow = new Date();
	var h = timeNow.getHours();
	var m = timeNow.getMinutes();
	var s = timeNow.getSeconds();
	var t = setTimeout(function(){alertSound() }, 500);

	var audio = document.querySelector('#notification');
	//Monday
	if (day == 'Monday' && h == 08 && m == 54){
		audio.play();
		//alert('Giselle and Valentina <br> Please click OK to continue.');
	} else if (day == 'Monday' && h == 09 && m == 24 && s == 00){
		audio.play();
		//alert('Giselle and Jessica <br> Please click OK to continue.');
	} else if (day == 'Monday' && h == 09 && m == 54 && s == 00){
		audio.play();
		//alert('Giselle, Raul, and Jessica <br> Please click OK to continue.');
	} else if (day == 'Monday' && h == 12 && m == 39 && s == 00){
		audio.play();
		//alert('Giselle, Jessica and Valentina <br> Please click OK to continue.');
	} else if (day == 'Monday' && h == 13 && m == 39 && s == 00){
		audio.play();
		//alert('Giselle and Jessica <br> Please click OK to continue.');

	//Tuesday
	} else if (day == 'Tuesday' && h == 08 && m == 54 && s == 00){
		audio.play();
		//alert('Giselle, Jessica, Valentina, and Raul <br> Please click OK to continue.');
	} else if (day == 'Tuesday' && h == 09 && m == 24 && s == 00){
		audio.play();
		//alert('Giselle and Jessica <br> Please click OK to continue.');
	} else if (day == 'Tuesday' && h == 12 && m == 39 && s == 00){
		audio.play();
		//alert('Valentina, and Raul <br> Please click OK to continue.');
	} else if (day == 'Tuesday' && h == 13 && m == 09 && s == 00){
		audio.play();
		//alert('Giselle, Valentina, and Raul <br> Please click OK to continue.');
	} else if (day == 'Tuesday' && h == 13 && m == 39 && s == 00){
		audio.play();
		//alert('Giselle and Raul <br> Please click OK to continue.');
	} else if (day == 'Tuesday' && h == 14 && m == 09 && s == 00){
		audio.play();
		//alert('Giselle, Jessica, and Valentina <br> Please click OK to continue.');

	//Wednesday
	} else if (day == 'Wednesday' && h == 08 && m == 54 && s == 00){
		audio.play();
		//alert('Giselle, Jessica, and Valentina <br> Please click OK to continue.');
	} else if (day == 'Wednesday' && h == 09 && m == 24 && s == 00){
		audio.play();
		//alert('Giselle and Jessica <br> Please click OK to continue.');
	} else if (day == 'Wednesday' && h == 09 && m == 54 && s == 00){
		audio.play();
		//alert('Giselle and Raul <br> Please click OK to continue.');
	} else if (day == 'Wednesday' && h == 10 && m == 24 && s == 00){
		audio.play();
		//alert('Raul <br> Please click OK to continue.');
	} else if (day == 'Wednesday' && h == 12 && m == 39 && s == 00){
		audio.play();
		//alert('Giselle, and Valentina <br> Please click OK to continue.');
	} else if (day == 'Wednesday' && h == 13 && m == 09 && s == 00){
		audio.play();
		//alert('Giselle, Jessica, Valentina, and Raul <br> Please click OK to continue.');
	} else if (day == 'Wednesday' && h == 13 && m == 39 && s == 00){
		audio.play();
		//alert('Valentina <br> Please click OK to continue.');

	//Thursday
	} else if (day == 'Thursday' && h == 08 && m == 54 && s == 00){
		audio.play();
		//alert('Giselle, Jessica, and Valentina <br> Please click OK to continue.');
	} else if (day == 'Thursday' && h == 09 && m == 24 && s == 00){
		audio.play();
		//alert('Giselle and Jessica <br> Please click OK to continue.');
	} else if (day == 'Thursday' && h == 09 && m == 54 && s == 00){
		audio.play();
		//alert('Raul <br> Please click OK to continue.');
	} else if (day == 'Thursday' && h == 10 && m == 24 && s == 00){
		audio.play();
		//alert('Raul <br> Please click OK to continue.');
	} else if (day == 'Thursday' && h == 12 && m == 39 && s == 00){
		audio.play();
		//alert('Giselle, Valentina, and Raul <br> Please click OK to continue.');
	} else if (day == 'Thursday' && h == 13 && m == 09 && s == 00){
		audio.play();
		//alert('Giselle, Jessica, Valentina, and Raul <br> Please click OK to continue.');
	} else if (day == 'Thursday' && h == 13 && m == 39 && s == 00){
		audio.play();
		//alert('Valentina <br> Please click OK to continue.');

	//Friday
	} else if (day == 'Friday' && h == 08 && m == 54 && s == 00){
		audio.play();
		//alert('Giselle, Jessica, and Valentina <br> Please click OK to continue.');
	} else if (day == 'Friday' && h == 09 && m == 24 && s == 00){
		audio.play();
		//alert('Giselle and Jessica <br> Please click OK to continue.');
	} else if (day == 'Friday' && h == 09 && m == 54 && s == 00){
		audio.play();
		//alert('Giselle and Raul <br> Please click OK to continue.');
	} else if (day == 'Friday' && h == 10 && m == 24 && s == 00){
		audio.play();
		//alert('Raul and Valentina <br> Please click OK to continue.');
	} else if (day == 'Friday' && h == 13 && m == 09 && s == 00){
		audio.play();
		//alert('Jessica, Valentina, and Raul <br> Please click OK to continue.');
	} else if (day == 'Friday' && h == 13 && m == 39 && s == 00){
		audio.play();
		//alert('Valentina <br> Please click to OK continue.');
	} 
}

function calendar(){
	if (day == 'Monday'){
		$('#monday').show();
	} else if (day == 'Tuesday'){
		$('#tuesday').show();
	} else if (day == 'Wednesday'){
		$('#wednesday').show();
	} else if (day == 'Thursday'){
		$('#thursday').show();
	} else if (day == 'Friday'){
		$('#friday').show();
	} else if (day == 'Saturday' || day == 'Sunday'){
		$('#monday').show();
	}
}

window.onload = startTime(), calendar(), alertSound();

