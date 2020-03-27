//import {SMSdata} from "../sms.js";
//var SMSdata = require()
//localStorage.getItem("sms");

export class TestDrawer {
	dataFromFile: any ;

	draw() {
		const body = $('body');
		/*
		const mustaView = { "SMSData": 	[
			{"ID":3,"Name":"alphasms.ua","Ico":"/img/sms/alphasms.png"},
			{"ID":25,"Name":"aramba.ru","Ico":"/img/sms/aramba.png"},
			{"ID":21,"Name":"atompark.com","Ico":"/img/sms/atompark.png"}
		]};

		 */

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
//        this.dataFromFile =
    	this.loadData();
		//console.log("this.dataFromFile2");
		//console.log(this.dataFromFile);
		//body.append($.mustache(window.TemplateJS.test, mustaView));
		const mustaView = {"SMSData": this.dataFromFile};
		//console.log("mustaView2");
		//console.log(mustaView2);
		body.append($.mustache(window.TemplateJS.test, mustaView));

		$(document).ready(function(){
			TestDrawer.PopUpHide();
		});
	}

	static PopUpShow(){
		$("#popup1").show();
	}

	static PopUpHide(){
		$("#popup1").hide();
	}

	loadData() {
		//this.dataFromFile
		let vData = $.ajax({url: "./js/sms.js", dataType: "json",async: false}).responseText;

				//context: document.body,
				//dataFilter(data, dataType) {},
				   //success: function(result){
				  //     console.log("Inside = "+result);
					//   console.log(result);
					//   this.
				//return result;
			//}
		//const mustaView2 = { "SMSData": 	vData};
		//var mustaView2 = JSON.parse(vData);
		//console.log("mustaView2="+mustaView2);
		//console.log(mustaView2);
		this.dataFromFile = JSON.parse(vData);
		//console.log("this.dataFromFile1");
		//console.log(this.dataFromFile);
				//let vData: string  = $.ajax({url: "./js/sms.js", dataType: "json",async: false}).response;
		//console.log("vData="+vData);
		//this.dataFromFile = vData;

	}
}