$(document).ready(function(){
	/*$("i[title]").qtip({
		position: {
			corner: {
				target: "bottomLeft",
				tooltip: "topRight"
			}
		},

		style: {
			name: 'dark',
			padding: "7px 13px",
			width: {
				max: 200,
				min: 0
			}, 
			tip: true
		}
	});*/

	$('#slider').flicker();
});

$(document).scroll(function() {
	window.pageYOffset!=0?$('#head').css('background-color', 'black'):$('#head').css('background-color', 'rgba(0, 0, 0, 0.5)');
});