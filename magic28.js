$(function() {
	//Minimum number of shakes
	var minShakes = 5;

	//Maximum number of shakes
	var maxShakes = 10;

	//Time for each shake (milliseconds)
	var timePerShake = 100;

	//Maximum offset for each shake in x and y (pixels)
	var shakeRange = 10;

	//Get a random integer between the two numbers (inclusive)
	function randomInt(min, max) {
		return min + Math.floor(Math.random() * (max - min + 1));
	}

	//Hide the die
	function hideDie(next) {
		$('#magic28 .ball-die').fadeOut(0);
		next();
	}

	//Shake the ball
	function shakeBall(next) {
		shake($('#magic28 .ball'), next);
	}

	//Shake the DOM element a random number of times,
	//then call the "complete" callback
	function shake(element, complete) {
		var shakes = randomInt(minShakes, maxShakes);
		var x, y;
		var totalX = 0, totalY = 0;
		//Shake
		for(var i = 0; i < shakes; i++) {
			x = randomInt(-shakeRange, shakeRange);
			y = randomInt(-shakeRange, shakeRange);
			totalX += x;
			totalY += y;
			$(element).animate({
				left: '+=' + x +'px',
				top: '+=' + y + 'px'
			}, timePerShake, 'linear');
		}
		//Return to original position
		$(element).animate({
			left: '-=' + totalX + 'px',
			top: '-=' + totalY + 'px'
		}, timePerShake, 'linear');
		$(element).queue(function(next) {
			complete();
			next();
		});
	}

	//Set the answer on the die
	function setAnswer(next) {
		var answer = makeAnswer();
		var options = {
			folder: '2/72x72',
			attributes: function(rawText, iconId) {
				return { 'title': emojiNames[rawText] };
			}
		};
		var parsedAnswer = twemoji.parse(answer, options);
		$('#magic28 .ball-die-answer').html(parsedAnswer);
		next();
	}

	//Get a random emoji as a raw string
	function getEmoji() {
		return emojiList[randomInt(0, emojiList.length - 1)];
	}

	//Make an emoji answer (raw characters)
	function makeAnswer() {
		var count = randomInt(1, 3);
		var str = '';
		for(var i = 0; i < count; i++) {
			str += getEmoji();
		}
		return str;
	}

	//Fade in the die
	function fadeInDie(next) {
		$('#magic28 .ball-die').fadeIn(next);
	}

	//Emoji character strings
	var emojiList = [
		'\uD83D\uDE45', '\uD83D\uDE46', '\uD83D\uDE47', '\uD83D\uDE4B',
		'\uD83D\uDE4C', '\uD83D\uDE4D', '\uD83D\uDE4E', '\uD83D\uDE4F',
		'\u2702', '\u2708', '\u2709', '\u270A',
		'\u270B', '\u270C', '\u270F', '\u2744',
		'\u2764', '\uD83D\uDE80', '\uD83D\uDE83', '\uD83D\uDE84',
		'\uD83D\uDE85', '\uD83D\uDE87', '\uD83D\uDE89', '\uD83D\uDE8C',
		'\uD83D\uDE8F', '\uD83D\uDE91', '\uD83D\uDE92', '\uD83D\uDE93',
		'\uD83D\uDE95', '\uD83D\uDE97', '\uD83D\uDE99', '\uD83D\uDE9A',
		'\uD83D\uDEA2', '\uD83D\uDEA4', '\uD83D\uDEA5', '\uD83D\uDEA7',
		'\uD83D\uDEA8', '\uD83D\uDEA9', '\uD83D\uDEAA', '\uD83D\uDEAB',
		'\uD83D\uDEAC', '\uD83D\uDEB2', '\uD83D\uDEB6', '\uD83D\uDEBD',
		'\uD83D\uDEC0', '\u231A', '\u231B', '\u23F0',
		'\u23F3', '\u2601', '\u260E', '\u2614',
		'\u2615', '\u2668', '\u267B', '\u267F',
		'\u2693', '\u26A1', '\u26BD', '\u26BE',
		'\u26C4', '\u26C5', '\u26EA', '\u26F2',
		'\u26F3', '\u26F5', '\u26FA', '\u2B50',
		'\u26FD', '\uD83C\uDCCF', '\uD83C\uDF00', '\uD83C\uDF01',
		'\uD83C\uDF02', '\uD83C\uDF03', '\uD83C\uDF04', '\uD83C\uDF05',
		'\uD83C\uDF06', '\uD83C\uDF07', '\uD83C\uDF08', '\uD83C\uDF09',
		'\uD83C\uDF0A', '\uD83C\uDF0B', '\uD83C\uDF0F', '\uD83C\uDF19',
		'\uD83C\uDF1B', '\uD83C\uDF1F', '\uD83C\uDF20', '\uD83C\uDF30',
		'\uD83C\uDF31', '\uD83C\uDF34', '\uD83C\uDF35', '\uD83C\uDF37',
		'\uD83C\uDF38', '\uD83C\uDF39', '\uD83C\uDF3A', '\uD83C\uDF3B',
		'\uD83C\uDF3C', '\uD83C\uDF3D', '\uD83C\uDF3E', '\uD83C\uDF3F',
		'\uD83C\uDF40', '\uD83C\uDF41', '\uD83C\uDF42', '\uD83C\uDF43',
		'\uD83C\uDF44', '\uD83C\uDF45', '\uD83C\uDF46', '\uD83C\uDF47',
		'\uD83C\uDF48', '\uD83C\uDF49', '\uD83C\uDF4A', '\uD83C\uDF4C',
		'\uD83C\uDF4D', '\uD83C\uDF4E', '\uD83C\uDF4F', '\uD83C\uDF51',
		'\uD83C\uDF52', '\uD83C\uDF53', '\uD83C\uDF54', '\uD83C\uDF55',
		'\uD83C\uDF56', '\uD83C\uDF57', '\uD83C\uDF58', '\uD83C\uDF59',
		'\uD83C\uDF5A', '\uD83C\uDF5B', '\uD83C\uDF5C', '\uD83C\uDF5D',
		'\uD83C\uDF5E', '\uD83C\uDF5F', '\uD83C\uDF60', '\uD83C\uDF61',
		'\uD83C\uDF62', '\uD83C\uDF63', '\uD83C\uDF64', '\uD83C\uDF65',
		'\uD83C\uDF66', '\uD83C\uDF67', '\uD83C\uDF68', '\uD83C\uDF69',
		'\uD83C\uDF6A', '\uD83C\uDF6B', '\uD83C\uDF6C', '\uD83C\uDF6D',
		'\uD83C\uDF6E', '\uD83C\uDF6F', '\uD83C\uDF70', '\uD83C\uDF71',
		'\uD83C\uDF72', '\uD83C\uDF73', '\uD83C\uDF74', '\uD83C\uDF75',
		'\uD83C\uDF76', '\uD83C\uDF77', '\uD83C\uDF78', '\uD83C\uDF79',
		'\uD83C\uDF7A', '\uD83C\uDF7B', '\uD83C\uDF80', '\uD83C\uDF81',
		'\uD83C\uDF82', '\uD83C\uDF83', '\uD83C\uDF84', '\uD83C\uDF85',
		'\uD83C\uDF86', '\uD83C\uDF87', '\uD83C\uDF88', '\uD83C\uDF89',
		'\uD83C\uDF8A', '\uD83C\uDF8B', '\uD83C\uDF8C', '\uD83C\uDF8D',
		'\uD83C\uDF8E', '\uD83C\uDF8F', '\uD83C\uDF90', '\uD83C\uDF91',
		'\uD83C\uDF92', '\uD83C\uDF93', '\uD83C\uDFA0', '\uD83C\uDFA1',
		'\uD83C\uDFA2', '\uD83C\uDFA3', '\uD83C\uDFA4', '\uD83C\uDFA5',
		'\uD83C\uDFA6', '\uD83C\uDFA7', '\uD83C\uDFA8', '\uD83C\uDFA9',
		'\uD83C\uDFAA', '\uD83C\uDFAB', '\uD83C\uDFAC', '\uD83C\uDFAD',
		'\uD83C\uDFAE', '\uD83C\uDFAF', '\uD83C\uDFB0', '\uD83C\uDFB1',
		'\uD83C\uDFB2', '\uD83C\uDFB3', '\uD83C\uDFB4', '\uD83C\uDFB5',
		'\uD83C\uDFB6', '\uD83C\uDFB7', '\uD83C\uDFB8', '\uD83C\uDFB9',
		'\uD83C\uDFBA', '\uD83C\uDFBB', '\uD83C\uDFBD', '\uD83C\uDFBE',
		'\uD83C\uDFBF', '\uD83C\uDFC0', '\uD83C\uDFC1', '\uD83C\uDFC2',
		'\uD83C\uDFC3', '\uD83C\uDFC4', '\uD83C\uDFC6', '\uD83C\uDFC8',
		'\uD83C\uDFCA', '\uD83C\uDFE0', '\uD83C\uDFE1', '\uD83C\uDFE2',
		'\uD83C\uDFE3', '\uD83C\uDFE5', '\uD83C\uDFE6', '\uD83C\uDFE7',
		'\uD83C\uDFE8', '\uD83C\uDFE9', '\uD83C\uDFEA', '\uD83C\uDFEB',
		'\uD83C\uDFEC', '\uD83C\uDFED', '\uD83C\uDFEE', '\uD83C\uDFEF',
		'\uD83C\uDFF0', '\uD83D\uDC0C', '\uD83D\uDC0D', '\uD83D\uDC0E',
		'\uD83D\uDC11', '\uD83D\uDC12', '\uD83D\uDC14', '\uD83D\uDC17',
		'\uD83D\uDC18', '\uD83D\uDC19', '\uD83D\uDC1A', '\uD83D\uDC1B',
		'\uD83D\uDC1C', '\uD83D\uDC1D', '\uD83D\uDC1E', '\uD83D\uDC1F',
		'\uD83D\uDC20', '\uD83D\uDC21', '\uD83D\uDC22', '\uD83D\uDC23',
		'\uD83D\uDC24', '\uD83D\uDC25', '\uD83D\uDC26', '\uD83D\uDC27',
		'\uD83D\uDC28', '\uD83D\uDC29', '\uD83D\uDC2B', '\uD83D\uDC2C',
		'\uD83D\uDC2D', '\uD83D\uDC2E', '\uD83D\uDC2F', '\uD83D\uDC30',
		'\uD83D\uDC31', '\uD83D\uDC32', '\uD83D\uDC33', '\uD83D\uDC34',
		'\uD83D\uDC35', '\uD83D\uDC36', '\uD83D\uDC37', '\uD83D\uDC38',
		'\uD83D\uDC39', '\uD83D\uDC3A', '\uD83D\uDC3B', '\uD83D\uDC3C',
		'\uD83D\uDC3D', '\uD83D\uDC3E', '\uD83D\uDC40', '\uD83D\uDC42',
		'\uD83D\uDC43', '\uD83D\uDC44', '\uD83D\uDC45', '\uD83D\uDC46',
		'\uD83D\uDC47', '\uD83D\uDC48', '\uD83D\uDC49', '\uD83D\uDC4A',
		'\uD83D\uDC4B', '\uD83D\uDC4C', '\uD83D\uDC4D', '\uD83D\uDC4E',
		'\uD83D\uDC4F', '\uD83D\uDC50', '\uD83D\uDC51', '\uD83D\uDC52',
		'\uD83D\uDC53', '\uD83D\uDC54', '\uD83D\uDC55', '\uD83D\uDC56',
		'\uD83D\uDC57', '\uD83D\uDC58', '\uD83D\uDC59', '\uD83D\uDC5A',
		'\uD83D\uDC5B', '\uD83D\uDC5C', '\uD83D\uDC5D', '\uD83D\uDC5E',
		'\uD83D\uDC5F', '\uD83D\uDC60', '\uD83D\uDC61', '\uD83D\uDC62',
		'\uD83D\uDC63', '\uD83D\uDC64', '\uD83D\uDC66', '\uD83D\uDC67',
		'\uD83D\uDC68', '\uD83D\uDC69', '\uD83D\uDC6A', '\uD83D\uDC6B',
		'\uD83D\uDC6E', '\uD83D\uDC6F', '\uD83D\uDC70', '\uD83D\uDC71',
		'\uD83D\uDC74', '\uD83D\uDC76', '\uD83D\uDC77', '\uD83D\uDC78',
		'\uD83D\uDC79', '\uD83D\uDC7A', '\uD83D\uDC7B', '\uD83D\uDC7C',
		'\uD83D\uDC7D', '\uD83D\uDC7E', '\uD83D\uDC7F', '\uD83D\uDC80',
		'\uD83D\uDC81', '\uD83D\uDC82', '\uD83D\uDC83', '\uD83D\uDC84',
		'\uD83D\uDC85', '\uD83D\uDC86', '\uD83D\uDC87', '\uD83D\uDC88',
		'\uD83D\uDC89', '\uD83D\uDC8A', '\uD83D\uDC8B', '\uD83D\uDC8C',
		'\uD83D\uDC8D', '\uD83D\uDC8E', '\uD83D\uDC8F', '\uD83D\uDC90',
		'\uD83D\uDC91', '\uD83D\uDC92', '\uD83D\uDC93', '\uD83D\uDC94',
		'\uD83D\uDC95', '\uD83D\uDC96', '\uD83D\uDC97', '\uD83D\uDC98',
		'\uD83D\uDC99', '\uD83D\uDC9A', '\uD83D\uDC9B', '\uD83D\uDC9C',
		'\uD83D\uDC9D', '\uD83D\uDC9E', '\uD83D\uDC9F', '\uD83D\uDCA0',
		'\uD83D\uDCA1', '\uD83D\uDCA2', '\uD83D\uDCA3', '\uD83D\uDCA4',
		'\uD83D\uDCA5', '\uD83D\uDCA6', '\uD83D\uDCA7', '\uD83D\uDCA8',
		'\uD83D\uDCA9', '\uD83D\uDCAA', '\uD83D\uDCAB', '\uD83D\uDCAC',
		'\uD83D\uDCAE', '\uD83D\uDCAF', '\uD83D\uDCB0', '\uD83D\uDCB2',
		'\uD83D\uDCB3', '\uD83D\uDCB5', '\uD83D\uDCB8', '\uD83D\uDCBA',
		'\uD83D\uDCBB', '\uD83D\uDCBC', '\uD83D\uDCBD', '\uD83D\uDCBE',
		'\uD83D\uDCBF', '\uD83D\uDCC0', '\uD83D\uDCC3', '\uD83D\uDCC5',
		'\uD83D\uDCC6', '\uD83D\uDCC8', '\uD83D\uDCC9', '\uD83D\uDCCC',
		'\uD83D\uDCCD', '\uD83D\uDCCE', '\uD83D\uDCD3', '\uD83D\uDCD4',
		'\uD83D\uDCD5', '\uD83D\uDCD6', '\uD83D\uDCDE', '\uD83D\uDCDF',
		'\uD83D\uDCE0', '\uD83D\uDCE1', '\uD83D\uDCE3', '\uD83D\uDCE6',
		'\uD83D\uDCE7', '\uD83D\uDCEB', '\uD83D\uDCF0', '\uD83D\uDCF1',
		'\uD83D\uDCF7', '\uD83D\uDCF9', '\uD83D\uDCFA', '\uD83D\uDCFB',
		'\uD83D\uDCFC', '\uD83D\uDD0A', '\uD83D\uDD0B', '\uD83D\uDD0C',
		'\uD83D\uDD0E', '\uD83D\uDD10', '\uD83D\uDD11', '\uD83D\uDD12',
		'\uD83D\uDD13', '\uD83D\uDD14', '\uD83D\uDD1C', '\uD83D\uDD25',
		'\uD83D\uDD26', '\uD83D\uDD27', '\uD83D\uDD28', '\uD83D\uDD29',
		'\uD83D\uDD2A', '\uD83D\uDD2B', '\uD83D\uDD2E', '\uD83D\uDDFB',
		'\uD83D\uDDFC', '\uD83D\uDDFD', '\uD83D\uDDFE', '\uD83D\uDDFF',
		'\uD83D\uDE34', '\uD83D\uDE81', '\uD83D\uDE82', '\uD83D\uDE86',
		'\uD83D\uDE88', '\uD83D\uDE8A', '\uD83D\uDE8D', '\uD83D\uDE8E',
		'\uD83D\uDE90', '\uD83D\uDE94', '\uD83D\uDE96', '\uD83D\uDE98',
		'\uD83D\uDE9B', '\uD83D\uDE9C', '\uD83D\uDE9D', '\uD83D\uDE9E',
		'\uD83D\uDE9F', '\uD83D\uDEA0', '\uD83D\uDEA1', '\uD83D\uDEA3',
		'\uD83D\uDEA6', '\uD83D\uDEAE', '\uD83D\uDEB5', '\uD83D\uDEBF',
		'\uD83D\uDEC1', '\uD83C\uDF0D', '\uD83C\uDF0E', '\uD83C\uDF1C',
		'\uD83C\uDF1D', '\uD83C\uDF1E', '\uD83C\uDF32', '\uD83C\uDF33',
		'\uD83C\uDF4B', '\uD83C\uDF50', '\uD83C\uDF7C', '\uD83C\uDFC7',
		'\uD83C\uDFC9', '\uD83C\uDFE4', '\uD83D\uDC00', '\uD83D\uDC01',
		'\uD83D\uDC02', '\uD83D\uDC03', '\uD83D\uDC04', '\uD83D\uDC05',
		'\uD83D\uDC06', '\uD83D\uDC07', '\uD83D\uDC08', '\uD83D\uDC09',
		'\uD83D\uDC0A', '\uD83D\uDC0B', '\uD83D\uDC0F', '\uD83D\uDC10',
		'\uD83D\uDC13', '\uD83D\uDC15', '\uD83D\uDC16', '\uD83D\uDC2A',
		'\uD83D\uDC6C', '\uD83D\uDC6D', '\uD83D\uDCEC', '\uD83D\uDCED',
		'\uD83D\uDCEF', '\uD83D\uDD2C', '\uD83D\uDD2D'
	];

	//Emoji names
	var emojiNames = {
		'\uD83D\uDE45': 'Face with no good gesture',
		'\uD83D\uDE46': 'Face with OK gesture',
		'\uD83D\uDE47': 'Person bowing deeply',
		'\uD83D\uDE4B': 'Happy person raising one hand',
		'\uD83D\uDE4C': 'Person raising both hands in celebration',
		'\uD83D\uDE4D': 'Person frowning',
		'\uD83D\uDE4E': 'Person with pouting face',
		'\uD83D\uDE4F': 'Person with folded hands',
		'\u2702': 'Black scissors',
		'\u2708': 'Airplane',
		'\u2709': 'Envelope',
		'\u270A': 'Raised fist',
		'\u270B': 'Raised hand',
		'\u270C': 'Victory hand',
		'\u270F': 'Pencil',
		'\u2744': 'Snowflake',
		'\u2764': 'Heavy black heart',
		'\uD83D\uDE80': 'Rocket',
		'\uD83D\uDE83': 'Railway car',
		'\uD83D\uDE84': 'High-speed train',
		'\uD83D\uDE85': 'High-speed train with bullet nose',
		'\uD83D\uDE87': 'Metro',
		'\uD83D\uDE89': 'Station',
		'\uD83D\uDE8C': 'Bus',
		'\uD83D\uDE8F': 'Bus stop',
		'\uD83D\uDE91': 'Ambulance',
		'\uD83D\uDE92': 'Fire engine',
		'\uD83D\uDE93': 'Police car',
		'\uD83D\uDE95': 'Taxi',
		'\uD83D\uDE97': 'Automobile',
		'\uD83D\uDE99': 'Recreational vehicle',
		'\uD83D\uDE9A': 'Delivery truck',
		'\uD83D\uDEA2': 'Ship',
		'\uD83D\uDEA4': 'Speedboat',
		'\uD83D\uDEA5': 'Horizontal traffic light',
		'\uD83D\uDEA7': 'Construction sign',
		'\uD83D\uDEA8': 'Police cars revolving light',
		'\uD83D\uDEA9': 'Triangular flag on post',
		'\uD83D\uDEAA': 'Door',
		'\uD83D\uDEAB': 'No entry sign',
		'\uD83D\uDEAC': 'Smoking symbol',
		'\uD83D\uDEB2': 'Bicycle',
		'\uD83D\uDEB6': 'Pedestrian',
		'\uD83D\uDEBD': 'Toilet',
		'\uD83D\uDEC0': 'Bath',
		'\u231A': 'Watch',
		'\u231B': 'Hourglass',
		'\u23F0': 'Alarm clock',
		'\u23F3': 'Hourglass with flowing sand',
		'\u2601': 'Cloud',
		'\u260E': 'Black telephone',
		'\u2614': 'Umbrella with rain drops',
		'\u2615': 'Hot beverage',
		'\u2668': 'Hot springs',
		'\u267B': 'Black universal recycling symbol',
		'\u267F': 'Wheelchair symbol',
		'\u2693': 'Anchor',
		'\u26A1': 'High voltage sign',
		'\u26BD': 'Soccer ball',
		'\u26BE': 'Baseball',
		'\u26C4': 'Snowman without snow',
		'\u26C5': 'Sun behind cloud',
		'\u26EA': 'Church',
		'\u26F2': 'Fountain',
		'\u26F3': 'Flag in hole',
		'\u26F5': 'Sailboat',
		'\u26FA': 'Tent',
		'\u2B50': 'White medium star',
		'\u26FD': 'Fuel pump',
		'\uD83C\uDCCF': 'Playing card black joker',
		'\uD83C\uDF00': 'Cyclone',
		'\uD83C\uDF01': 'Foggy',
		'\uD83C\uDF02': 'Closed umbrella',
		'\uD83C\uDF03': 'Night with stars',
		'\uD83C\uDF04': 'Sunrise over mountains',
		'\uD83C\uDF05': 'Sunrise',
		'\uD83C\uDF06': 'Cityscape at dusk',
		'\uD83C\uDF07': 'Sunset over buildings',
		'\uD83C\uDF08': 'Rainbow',
		'\uD83C\uDF09': 'Bridge at night',
		'\uD83C\uDF0A': 'Water wave',
		'\uD83C\uDF0B': 'Volcano',
		'\uD83C\uDF0F': 'Earth globe Asia-Australia',
		'\uD83C\uDF19': 'Crescent moon',
		'\uD83C\uDF1B': 'First quarter moon with face',
		'\uD83C\uDF1F': 'Glowing star',
		'\uD83C\uDF20': 'Shooting star',
		'\uD83C\uDF30': 'Chestnut',
		'\uD83C\uDF31': 'Seedling',
		'\uD83C\uDF34': 'Palm tree',
		'\uD83C\uDF35': 'Cactus',
		'\uD83C\uDF37': 'Tulip',
		'\uD83C\uDF38': 'Cherry blossom',
		'\uD83C\uDF39': 'Rose',
		'\uD83C\uDF3A': 'Hibiscus',
		'\uD83C\uDF3B': 'Sunflower',
		'\uD83C\uDF3C': 'Blossom',
		'\uD83C\uDF3D': 'Ear of maize',
		'\uD83C\uDF3E': 'Ear of rice',
		'\uD83C\uDF3F': 'Herb',
		'\uD83C\uDF40': 'Four leaf clover',
		'\uD83C\uDF41': 'Maple leaf',
		'\uD83C\uDF42': 'Fallen leaf',
		'\uD83C\uDF43': 'Leaf fluttering in wind',
		'\uD83C\uDF44': 'Mushroom',
		'\uD83C\uDF45': 'Tomato',
		'\uD83C\uDF46': 'Aubergine',
		'\uD83C\uDF47': 'Grapes',
		'\uD83C\uDF48': 'Melon',
		'\uD83C\uDF49': 'Watermelon',
		'\uD83C\uDF4A': 'Tangerine',
		'\uD83C\uDF4C': 'Banana',
		'\uD83C\uDF4D': 'Pineapple',
		'\uD83C\uDF4E': 'Red apple',
		'\uD83C\uDF4F': 'Green apple',
		'\uD83C\uDF51': 'Peach',
		'\uD83C\uDF52': 'Cherries',
		'\uD83C\uDF53': 'Strawberry',
		'\uD83C\uDF54': 'Hamburger',
		'\uD83C\uDF55': 'Slice of pizza',
		'\uD83C\uDF56': 'Meat on bone',
		'\uD83C\uDF57': 'Poultry leg',
		'\uD83C\uDF58': 'Rice cracker',
		'\uD83C\uDF59': 'Rice ball',
		'\uD83C\uDF5A': 'Cooked rice',
		'\uD83C\uDF5B': 'Curry and rice',
		'\uD83C\uDF5C': 'Steaming bowl',
		'\uD83C\uDF5D': 'Spaghetti',
		'\uD83C\uDF5E': 'Bread',
		'\uD83C\uDF5F': 'French fries',
		'\uD83C\uDF60': 'Roasted sweet potato',
		'\uD83C\uDF61': 'Dango',
		'\uD83C\uDF62': 'Oden',
		'\uD83C\uDF63': 'Sushi',
		'\uD83C\uDF64': 'Fried shrimp',
		'\uD83C\uDF65': 'Fish cake with swirl design',
		'\uD83C\uDF66': 'Soft ice cream',
		'\uD83C\uDF67': 'Shaved ice',
		'\uD83C\uDF68': 'Ice cream',
		'\uD83C\uDF69': 'Doughnut',
		'\uD83C\uDF6A': 'Cookie',
		'\uD83C\uDF6B': 'Chocolate bar',
		'\uD83C\uDF6C': 'Candy',
		'\uD83C\uDF6D': 'Lollipop',
		'\uD83C\uDF6E': 'Custard',
		'\uD83C\uDF6F': 'Honey pot',
		'\uD83C\uDF70': 'Shortcake',
		'\uD83C\uDF71': 'Bento box',
		'\uD83C\uDF72': 'Pot of food',
		'\uD83C\uDF73': 'Cooking',
		'\uD83C\uDF74': 'Fork and knife',
		'\uD83C\uDF75': 'Teacup without handle',
		'\uD83C\uDF76': 'Sake bottle and cup',
		'\uD83C\uDF77': 'Wine glass',
		'\uD83C\uDF78': 'Cocktail glass',
		'\uD83C\uDF79': 'Tropical drink',
		'\uD83C\uDF7A': 'Beer mug',
		'\uD83C\uDF7B': 'Clinking beer mugs',
		'\uD83C\uDF80': 'Ribbon',
		'\uD83C\uDF81': 'Wrapped present',
		'\uD83C\uDF82': 'Birthday cake',
		'\uD83C\uDF83': 'Jack-o-lantern',
		'\uD83C\uDF84': 'Christmas tree',
		'\uD83C\uDF85': 'Father Christmas',
		'\uD83C\uDF86': 'Fireworks',
		'\uD83C\uDF87': 'Firework sparkler',
		'\uD83C\uDF88': 'Balloon',
		'\uD83C\uDF89': 'Party popper',
		'\uD83C\uDF8A': 'Confetti ball',
		'\uD83C\uDF8B': 'Tanabata tree',
		'\uD83C\uDF8C': 'Crossed flags',
		'\uD83C\uDF8D': 'Pine decoration',
		'\uD83C\uDF8E': 'Japanese dolls',
		'\uD83C\uDF8F': 'Carp streamer',
		'\uD83C\uDF90': 'Wind chime',
		'\uD83C\uDF91': 'Moon viewing ceremony',
		'\uD83C\uDF92': 'School satchel',
		'\uD83C\uDF93': 'Graduation cap',
		'\uD83C\uDFA0': 'Carousel horse',
		'\uD83C\uDFA1': 'Ferris wheel',
		'\uD83C\uDFA2': 'Roller coaster',
		'\uD83C\uDFA3': 'Fishing pole and fish',
		'\uD83C\uDFA4': 'Microphone',
		'\uD83C\uDFA5': 'Movie camera',
		'\uD83C\uDFA6': 'Cinema',
		'\uD83C\uDFA7': 'Headphone',
		'\uD83C\uDFA8': 'Artist palette',
		'\uD83C\uDFA9': 'Top hat',
		'\uD83C\uDFAA': 'Circus tent',
		'\uD83C\uDFAB': 'Ticket',
		'\uD83C\uDFAC': 'Clapper board',
		'\uD83C\uDFAD': 'Performing arts',
		'\uD83C\uDFAE': 'Video game',
		'\uD83C\uDFAF': 'Direct hit',
		'\uD83C\uDFB0': 'Slot machine',
		'\uD83C\uDFB1': 'Billiards',
		'\uD83C\uDFB2': 'Game die',
		'\uD83C\uDFB3': 'Bowling',
		'\uD83C\uDFB4': 'Flower playing cards',
		'\uD83C\uDFB5': 'Musical note',
		'\uD83C\uDFB6': 'Multiple musical notes',
		'\uD83C\uDFB7': 'Saxophone',
		'\uD83C\uDFB8': 'Guitar',
		'\uD83C\uDFB9': 'Musical keyboard',
		'\uD83C\uDFBA': 'Trumpet',
		'\uD83C\uDFBB': 'Violin',
		'\uD83C\uDFBD': 'Running shirt with sash',
		'\uD83C\uDFBE': 'Tennis racquet and ball',
		'\uD83C\uDFBF': 'Ski and ski boot',
		'\uD83C\uDFC0': 'Basketball and hoop',
		'\uD83C\uDFC1': 'Chequered flag',
		'\uD83C\uDFC2': 'Snowboarder',
		'\uD83C\uDFC3': 'Runner',
		'\uD83C\uDFC4': 'Surfer',
		'\uD83C\uDFC6': 'Trophy',
		'\uD83C\uDFC8': 'American football',
		'\uD83C\uDFCA': 'Swimmer',
		'\uD83C\uDFE0': 'House building',
		'\uD83C\uDFE1': 'House with garden',
		'\uD83C\uDFE2': 'Office building',
		'\uD83C\uDFE3': 'Japanese post office',
		'\uD83C\uDFE5': 'Hospital',
		'\uD83C\uDFE6': 'Bank',
		'\uD83C\uDFE7': 'Automated teller machine',
		'\uD83C\uDFE8': 'Hotel',
		'\uD83C\uDFE9': 'Love hotel',
		'\uD83C\uDFEA': 'Convenience store',
		'\uD83C\uDFEB': 'School',
		'\uD83C\uDFEC': 'Department store',
		'\uD83C\uDFED': 'Factory',
		'\uD83C\uDFEE': 'Izakaya lantern',
		'\uD83C\uDFEF': 'Japanese castle',
		'\uD83C\uDFF0': 'European castle',
		'\uD83D\uDC0C': 'Snail',
		'\uD83D\uDC0D': 'Snake',
		'\uD83D\uDC0E': 'Horse',
		'\uD83D\uDC11': 'Sheep',
		'\uD83D\uDC12': 'Monkey',
		'\uD83D\uDC14': 'Chicken',
		'\uD83D\uDC17': 'Boar',
		'\uD83D\uDC18': 'Elephant',
		'\uD83D\uDC19': 'Octopus',
		'\uD83D\uDC1A': 'Spiral shell',
		'\uD83D\uDC1B': 'Bug',
		'\uD83D\uDC1C': 'Ant',
		'\uD83D\uDC1D': 'Honeybee',
		'\uD83D\uDC1E': 'Lady beetle',
		'\uD83D\uDC1F': 'Fish',
		'\uD83D\uDC20': 'Tropical fish',
		'\uD83D\uDC21': 'Blowfish',
		'\uD83D\uDC22': 'Turtle',
		'\uD83D\uDC23': 'Hatching chick',
		'\uD83D\uDC24': 'Baby chick',
		'\uD83D\uDC25': 'Front-facing baby chick',
		'\uD83D\uDC26': 'Bird',
		'\uD83D\uDC27': 'Penguin',
		'\uD83D\uDC28': 'Koala',
		'\uD83D\uDC29': 'Poodle',
		'\uD83D\uDC2B': 'Bactrian camel',
		'\uD83D\uDC2C': 'Dolphin',
		'\uD83D\uDC2D': 'Mouse face',
		'\uD83D\uDC2E': 'Cow face',
		'\uD83D\uDC2F': 'Tiger face',
		'\uD83D\uDC30': 'Rabbit face',
		'\uD83D\uDC31': 'Cat face',
		'\uD83D\uDC32': 'Dragon face',
		'\uD83D\uDC33': 'Spouting whale',
		'\uD83D\uDC34': 'Horse face',
		'\uD83D\uDC35': 'Monkey face',
		'\uD83D\uDC36': 'Dog face',
		'\uD83D\uDC37': 'Pig face',
		'\uD83D\uDC38': 'Frog face',
		'\uD83D\uDC39': 'Hamster face',
		'\uD83D\uDC3A': 'Wolf face',
		'\uD83D\uDC3B': 'Bear face',
		'\uD83D\uDC3C': 'Panda face',
		'\uD83D\uDC3D': 'Pig nose',
		'\uD83D\uDC3E': 'Paw prints',
		'\uD83D\uDC40': 'Eyes',
		'\uD83D\uDC42': 'Ear',
		'\uD83D\uDC43': 'Nose',
		'\uD83D\uDC44': 'Mouth',
		'\uD83D\uDC45': 'Tongue',
		'\uD83D\uDC46': 'White up pointing backhand index',
		'\uD83D\uDC47': 'White down pointing backhand index',
		'\uD83D\uDC48': 'White left pointing backhand index',
		'\uD83D\uDC49': 'White right pointing backhand index',
		'\uD83D\uDC4A': 'Fisted hand sign',
		'\uD83D\uDC4B': 'Waving hand sign',
		'\uD83D\uDC4C': 'Ok hand sign',
		'\uD83D\uDC4D': 'Thumbs up sign',
		'\uD83D\uDC4E': 'Thumbs down sign',
		'\uD83D\uDC4F': 'Clapping hands sign',
		'\uD83D\uDC50': 'Open hands sign',
		'\uD83D\uDC51': 'Crown',
		'\uD83D\uDC52': 'Woman\'s hat',
		'\uD83D\uDC53': 'Eyeglasses',
		'\uD83D\uDC54': 'Necktie',
		'\uD83D\uDC55': 'T-shirt',
		'\uD83D\uDC56': 'Jeans',
		'\uD83D\uDC57': 'Dress',
		'\uD83D\uDC58': 'Kimono',
		'\uD83D\uDC59': 'Bikini',
		'\uD83D\uDC5A': 'Woman\'s clothes',
		'\uD83D\uDC5B': 'Purse',
		'\uD83D\uDC5C': 'Handbag',
		'\uD83D\uDC5D': 'Pouch',
		'\uD83D\uDC5E': 'Man\'s shoe',
		'\uD83D\uDC5F': 'Athletic shoe',
		'\uD83D\uDC60': 'High-heeled shoe',
		'\uD83D\uDC61': 'Woman\'s sandal',
		'\uD83D\uDC62': 'Woman\'s boots',
		'\uD83D\uDC63': 'Footprints',
		'\uD83D\uDC64': 'Bust in silhouette',
		'\uD83D\uDC66': 'Boy',
		'\uD83D\uDC67': 'Girl',
		'\uD83D\uDC68': 'Man',
		'\uD83D\uDC69': 'Woman',
		'\uD83D\uDC6A': 'Family',
		'\uD83D\uDC6B': 'Man and woman holding hands',
		'\uD83D\uDC6E': 'Police officer',
		'\uD83D\uDC6F': 'Woman with bunny ears',
		'\uD83D\uDC70': 'Bride with veil',
		'\uD83D\uDC71': 'Person with blond hair',
		'\uD83D\uDC74': 'Older man',
		'\uD83D\uDC76': 'Baby',
		'\uD83D\uDC77': 'Construction worker',
		'\uD83D\uDC78': 'Princess',
		'\uD83D\uDC79': 'Japanese ogre',
		'\uD83D\uDC7A': 'Japanese goblin',
		'\uD83D\uDC7B': 'Ghost',
		'\uD83D\uDC7C': 'Baby angel',
		'\uD83D\uDC7D': 'Extraterrestrial alien',
		'\uD83D\uDC7E': 'Alien monster',
		'\uD83D\uDC7F': 'Imp',
		'\uD83D\uDC80': 'Skull',
		'\uD83D\uDC81': 'Information desk person',
		'\uD83D\uDC82': 'Guardsman',
		'\uD83D\uDC83': 'Dancer',
		'\uD83D\uDC84': 'Lipstick',
		'\uD83D\uDC85': 'Nail polish',
		'\uD83D\uDC86': 'Face massage',
		'\uD83D\uDC87': 'Haircut',
		'\uD83D\uDC88': 'Barber pole',
		'\uD83D\uDC89': 'Syringe',
		'\uD83D\uDC8A': 'Pill',
		'\uD83D\uDC8B': 'Kiss mark',
		'\uD83D\uDC8C': 'Love letter',
		'\uD83D\uDC8D': 'Ring',
		'\uD83D\uDC8E': 'Gem stone',
		'\uD83D\uDC8F': 'Kiss',
		'\uD83D\uDC90': 'Bouquet',
		'\uD83D\uDC91': 'Couple with heart',
		'\uD83D\uDC92': 'Wedding',
		'\uD83D\uDC93': 'Beating heart',
		'\uD83D\uDC94': 'Broken heart',
		'\uD83D\uDC95': 'Two hearts',
		'\uD83D\uDC96': 'Sparkling heart',
		'\uD83D\uDC97': 'Growing heart',
		'\uD83D\uDC98': 'Heart with arrow',
		'\uD83D\uDC99': 'Blue heart',
		'\uD83D\uDC9A': 'Green heart',
		'\uD83D\uDC9B': 'Yellow heart',
		'\uD83D\uDC9C': 'Purple heart',
		'\uD83D\uDC9D': 'Heart with ribbon',
		'\uD83D\uDC9E': 'Revolving hearts',
		'\uD83D\uDC9F': 'Heart decoration',
		'\uD83D\uDCA0': 'Diamond shape with a dot inside',
		'\uD83D\uDCA1': 'Electric light bulb',
		'\uD83D\uDCA2': 'Anger symbol',
		'\uD83D\uDCA3': 'Bomb',
		'\uD83D\uDCA4': 'Sleeping symbol',
		'\uD83D\uDCA5': 'Collision symbol',
		'\uD83D\uDCA6': 'Splashing sweat symbol',
		'\uD83D\uDCA7': 'Droplet',
		'\uD83D\uDCA8': 'Dash symbol',
		'\uD83D\uDCA9': 'Pile of poo',
		'\uD83D\uDCAA': 'Flexed biceps',
		'\uD83D\uDCAB': 'Dizzy symbol',
		'\uD83D\uDCAC': 'Speech balloon',
		'\uD83D\uDCAE': 'White flower',
		'\uD83D\uDCAF': 'Hundred points symbol',
		'\uD83D\uDCB0': 'Money bag',
		'\uD83D\uDCB2': 'Heavy dollar sign',
		'\uD83D\uDCB3': 'Credit card',
		'\uD83D\uDCB5': 'Banknote with dollar sign',
		'\uD83D\uDCB8': 'Money with wings',
		'\uD83D\uDCBA': 'Seat',
		'\uD83D\uDCBB': 'Personal computer',
		'\uD83D\uDCBC': 'Briefcase',
		'\uD83D\uDCBD': 'Minidisc',
		'\uD83D\uDCBE': 'Floppy disk',
		'\uD83D\uDCBF': 'Optical disc',
		'\uD83D\uDCC0': 'DVD',
		'\uD83D\uDCC3': 'Page with curl',
		'\uD83D\uDCC5': 'Calendar',
		'\uD83D\uDCC6': 'Tear-off calendar',
		'\uD83D\uDCC8': 'Chart with upwards trend',
		'\uD83D\uDCC9': 'Chart with downwards trend',
		'\uD83D\uDCCC': 'Pushpin',
		'\uD83D\uDCCD': 'Round pushpin',
		'\uD83D\uDCCE': 'Paperclip',
		'\uD83D\uDCD3': 'Notebook',
		'\uD83D\uDCD4': 'Notebook with decorative cover',
		'\uD83D\uDCD5': 'Closed book',
		'\uD83D\uDCD6': 'Open book',
		'\uD83D\uDCDE': 'Telephone receiver',
		'\uD83D\uDCDF': 'Pager',
		'\uD83D\uDCE0': 'Fax machine',
		'\uD83D\uDCE1': 'Satellite antenna',
		'\uD83D\uDCE3': 'Cheering megaphone',
		'\uD83D\uDCE6': 'Package',
		'\uD83D\uDCE7': 'E-mail symbol',
		'\uD83D\uDCEB': 'Closed mailbox with raised flag',
		'\uD83D\uDCF0': 'Newspaper',
		'\uD83D\uDCF1': 'Mobile phone',
		'\uD83D\uDCF7': 'Camera',
		'\uD83D\uDCF9': 'Video camera',
		'\uD83D\uDCFA': 'Television',
		'\uD83D\uDCFB': 'Radio',
		'\uD83D\uDCFC': 'Videocassette',
		'\uD83D\uDD0A': 'Speaker with three sound waves',
		'\uD83D\uDD0B': 'Battery',
		'\uD83D\uDD0C': 'Electric plug',
		'\uD83D\uDD0E': 'Right-pointing magnifying glass',
		'\uD83D\uDD10': 'Closed lock with key',
		'\uD83D\uDD11': 'Key',
		'\uD83D\uDD12': 'Lock',
		'\uD83D\uDD13': 'Open lock',
		'\uD83D\uDD14': 'Bell',
		'\uD83D\uDD1C': 'Soon with rightwards arrow above',
		'\uD83D\uDD25': 'Fire',
		'\uD83D\uDD26': 'Electric torch',
		'\uD83D\uDD27': 'Wrench',
		'\uD83D\uDD28': 'Hammer',
		'\uD83D\uDD29': 'Nut and bolt',
		'\uD83D\uDD2A': 'Hocho',
		'\uD83D\uDD2B': 'Pistol',
		'\uD83D\uDD2E': 'Crystal ball',
		'\uD83D\uDDFB': 'Mount Fuji',
		'\uD83D\uDDFC': 'Tokyo Tower',
		'\uD83D\uDDFD': 'Statue of Liberty',
		'\uD83D\uDDFE': 'Silhouette of Japan',
		'\uD83D\uDDFF': 'Moyai',
		'\uD83D\uDE34': 'Sleeping face',
		'\uD83D\uDE81': 'Helicopter',
		'\uD83D\uDE82': 'Steam locomotive',
		'\uD83D\uDE86': 'Train',
		'\uD83D\uDE88': 'Light rail',
		'\uD83D\uDE8A': 'Tram',
		'\uD83D\uDE8D': 'Oncoming bus',
		'\uD83D\uDE8E': 'Trolleybus',
		'\uD83D\uDE90': 'Minibus',
		'\uD83D\uDE94': 'Oncoming police car',
		'\uD83D\uDE96': 'Oncoming taxi',
		'\uD83D\uDE98': 'Oncoming automobile',
		'\uD83D\uDE9B': 'Articulated lorry',
		'\uD83D\uDE9C': 'Tractor',
		'\uD83D\uDE9D': 'Monorail',
		'\uD83D\uDE9E': 'Mountain railway',
		'\uD83D\uDE9F': 'Suspension railway',
		'\uD83D\uDEA0': 'Mountain cableway',
		'\uD83D\uDEA1': 'Aerial tramway',
		'\uD83D\uDEA3': 'Rowboat',
		'\uD83D\uDEA6': 'Vertical traffic light',
		'\uD83D\uDEAE': 'Put litter in its place symbol',
		'\uD83D\uDEB5': 'Mountain bicyclist',
		'\uD83D\uDEBF': 'Shower',
		'\uD83D\uDEC1': 'Bathtub',
		'\uD83C\uDF0D': 'Earth globe Europe-Africa',
		'\uD83C\uDF0E': 'Earth globe Americas',
		'\uD83C\uDF1C': 'Last quarter moon with face',
		'\uD83C\uDF1D': 'Full moon with face',
		'\uD83C\uDF1E': 'Sun with face',
		'\uD83C\uDF32': 'Evergreen tree',
		'\uD83C\uDF33': 'Deciduous tree',
		'\uD83C\uDF4B': 'Lemon',
		'\uD83C\uDF50': 'Pear',
		'\uD83C\uDF7C': 'Baby bottle',
		'\uD83C\uDFC7': 'Horse racing',
		'\uD83C\uDFC9': 'Rugby football',
		'\uD83C\uDFE4': 'European post office',
		'\uD83D\uDC00': 'Rat',
		'\uD83D\uDC01': 'Mouse',
		'\uD83D\uDC02': 'Ox',
		'\uD83D\uDC03': 'Water buffalo',
		'\uD83D\uDC04': 'Cow',
		'\uD83D\uDC05': 'Tiger',
		'\uD83D\uDC06': 'Leopard',
		'\uD83D\uDC07': 'Rabbit',
		'\uD83D\uDC08': 'Cat',
		'\uD83D\uDC09': 'Dragon',
		'\uD83D\uDC0A': 'Crocodile',
		'\uD83D\uDC0B': 'Whale',
		'\uD83D\uDC0F': 'Ram',
		'\uD83D\uDC10': 'Goat',
		'\uD83D\uDC13': 'Rooster',
		'\uD83D\uDC15': 'Dog',
		'\uD83D\uDC16': 'Pig',
		'\uD83D\uDC2A': 'Dromedary camel',
		'\uD83D\uDC6C': 'Two men holding hands',
		'\uD83D\uDC6D': 'Two women holding hands',
		'\uD83D\uDCEC': 'Open mailbox with raised flag',
		'\uD83D\uDCED': 'Open mailbox with lowered flag',
		'\uD83D\uDCEF': 'Postal horn',
		'\uD83D\uDD2C': 'Microscope',
		'\uD83D\uDD2D': 'Telescope'
	};

	//Die should not be visible initially
	hideDie(function(){});
	//Sequence of events upon asking
	$('#magic28 .ask').click(function(event) {
		$('body')
			.queue(hideDie)
			.queue(shakeBall)
			.queue(setAnswer)
			.queue(fadeInDie)
		;
		event.preventDefault();
	});
});