//import {SMSdata} from "../sms.js";
//var SMSdata = require()
//localStorage.getItem("sms");

export class TestDrawer {
	dataFromFile: string ;

	setData (data : string) {
		this.dataFromFile = data;
	}

	draw() {
		const body = $('body');

		const mustaView = { "SMSData": 	[
			{"ID":3,"Name":"alphasms.ua","Ico":"/img/sms/alphasms.png"},
			{"ID":25,"Name":"aramba.ru","Ico":"/img/sms/aramba.png"},
			{"ID":21,"Name":"atompark.com","Ico":"/img/sms/atompark.png"}
		]};

		/*
		const mustaView = fetch("./js/sms.js")
			.then(function (resp) {
				return resp.json();
			});
         */
		/*
		let SMSData:  [{ Name: string , Ico: string }];
		$.getJSON('sms.js', function (json) {
			for (var key in json) {
				if (json.hasOwnProperty(key)) {
					var item = json[key];
					SMSData.push({
						Name: item.Name,
						Ico: item.Ico
					});
				}
			}
		});
		const mustaView = {"SMSData": SMSData};
		console.log(mustaView);
		*/
        this.loadData();
		console.log("dataFromFile =" + this.dataFromFile);
		body.append($.mustache(window.TemplateJS.test, mustaView));
	}

	loadData() {

		$.ajax({url: "./js/sms.js", dataType: "json", success: function(result){
				console.log(result);
				//return result;
			}
		});

		//let vData: string  = $.ajax({url: "./js/sms.js", dataType: "json",async: false}).response;
		//console.log("vData="+vData);
		//this.dataFromFile = vData;

	}
}