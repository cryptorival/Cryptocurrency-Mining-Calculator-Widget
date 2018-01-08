function showCalc(calc, width, autosize, borderwidth, bordercolor, calcButtonColor, backButtonColor, dailyColor, weeklyColor, monthlyColor, yearlyColor, backColor, addonColor, dev) {
	calcButtonColor = typeof calcButtonColor  === 'undefined' ? 'ff7f24' : calcButtonColor;
	backButtonColor = typeof backButtonColor  === 'undefined' ? 'ff7f24' : backButtonColor;
	dailyColor = typeof dailyColor  === 'undefined' ? '4e9f15' : dailyColor;
	weeklyColor = typeof weeklyColor  === 'undefined' ? '09c' : weeklyColor;
	monthlyColor = typeof monthlyColor  === 'undefined' ? 'f0ad4e' : monthlyColor;
	yearlyColor = typeof yearlyColor  === 'undefined' ? 'd9534f' : yearlyColor;
	backColor = typeof backColor  === 'undefined' ? 'f5f5f5' : backColor;
	addonColor = typeof addonColor  === 'undefined' ? 'eee' : addonColor;
	dev = typeof dev  === 'undefined' ? false : dev;

	var copyright = document.getElementById("cr-copyright");
	if (copyright) {
		copyright.parentNode.removeChild(copyright);
	}

	var height = 495;
	var minWidth = 320;
	var borderpadding = 10;
	var linkheight = 15;
	var outerwidth = 0;
	var outerheight = 0;
	var outerwidthStr = '';
	var widthStr = '';
	var paddingStr = '';

	//AUTOSIZE
	if (autosize == true) {
		outerwidthStr = '100%';
		widthStr = '100%';
	} else {
		outerwidth = Number(width);
		outerwidthStr = outerwidth.toString() + 'px; ';
		widthStr = width.toString() + 'px; ';
	}

	//HEIGHT
	outerheight = height;
	outerheight += linkheight;
	if (Number(width) < 415) {
		height += linkheight;
		outerheight += linkheight;
	}

	if (document.body.clientWidth < 415) {
		height=510;
		outerwidthStr = '100%';
		widthStr = '100%';
	}

	if (borderwidth > 0)
	{
		paddingStr = ' padding:' + borderpadding + 'px; ';
	}

	var iURL = '';
	if(dev == true){
		iURL = '//' + location.hostname;
	} else {
		iURL = 'https://cryptorival.com';
	}

	var embed_widget = '' +
	'<div style="min-width:' + minWidth + 'px; width:' + outerwidthStr + '; min-height:' + outerheight + 'px; height:' + outerheight + 'px; max-height:' + outerheight + 'px;' + paddingStr + 'border:' + borderwidth + 'px solid #' + bordercolor + ';' + 'display:inline-block; box-sizing:unset;">' +
		'<iframe src="' + iURL + '/widget/calcs/' + calc + '?calcButtonColor=' + calcButtonColor + '&backButtonColor=' + backButtonColor + '&dailyColor=' + dailyColor + '&weeklyColor=' + weeklyColor + '&monthlyColor=' + monthlyColor + '&yearlyColor=' + yearlyColor +'&backColor=' + backColor + '&addonColor=' + addonColor + '" allowtransparency="false" scrolling="no" frameborder="0" border="0" cellspacing="0" style="height:' + height + 'px; width:' + widthStr + '; min-width:' + minWidth + 'px; min-height:' + height + 'px; max-height:' + height + 'px;"></iframe>' +
		'<div style="text-align:right; padding: 0 5px 0px 0;">' +
			'<a href="https://cryptorival.com/" target="_blank" rel="nofollow" style="font: 11px verdana; text-decoration:none; font-weight:normal; color:#999; vertical-align:top; margin:0 0 10px -10px; ">Powered by CryptoRival</a>' +
		'</div>' +
	'</div>';
	document.write(embed_widget);
}
