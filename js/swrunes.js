// General Data and empty objects
var localDataName = "swrunes_saveddata";
var allSets = { 
"Energy": [2, "HP%", 15], //0
"Fatal":[4, "ATK%", 35], //1
"Blade":[2, "CRate",12], //2
"Rage":[4, "CDmg", 40], //3
"Swift":[4, "SPD%", 25], //4
"Focus":[2, "ACC", 20], //5
"Guard":[2, "DEF%", 15], //6
"Endure":[2, "RES", 20], //7
"Violent":[4, "", ""], //8
"Will":[2, "", ""], //9
"Nemesis":[2, "", ""], //10
"Shield":[2, "", ""], //11
"Revenge":[2, "", ""], //12
"Despair":[4, "", ""], //13
"Vampire":[4, "", ""]}; //14

var allStatsMax = {
"SPD":{ "g1":18, "g2":19, "g3":25, "g4":30, "g5":39, "g6":42},
"ATK flat":{ "g1":54, "g2":74, "g3":93, "g4":113, "g5":135, "g6":160},
"ATK%":{ "g1":18, "g2":20, "g3":38, "g4":43, "g5":51, "g6":63},
"HP%":{ "g1":18, "g2":20, "g3":38, "g4":43, "g5":51, "g6":63},
"HP flat":{ "g1":804, "g2":1092, "g3":1380, "g4":1704, "g5":2088, "g6":2448},
"DEF%":{ "g1":18, "g2":20, "g3":38, "g4":43, "g5":51, "g6":63},
"DEF flat":{ "g1":54, "g2":74, "g3":93, "g4":113, "g5":136, "g6":160},
"CRate":{ "g1":18, "g2":20, "g3":37, "g4":41, "g5":47, "g6":58},
"CDmg":{ "g1":20, "g2":37, "g3":43, "g4":58, "g5":65, "g6":80},
"RES":{ "g1":18, "g2":20, "g3":38, "g4":44, "g5":51, "g6":64},
"ACC":{ "g1":18, "g2":20, "g3":38, "g4":44, "g5":51, "g6":64}
};

var allRunesStats = {
"SPD":{ "g3":[3,4,5,6,8,9,10,12,13,14,16,17,18,19,21,25], "g4":[4,5,7,8,10,11,13,14,16,17,19,20,22,23,25,30], "g5":[5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,39], "g6":[7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,42]},
"ATK flat":{ "g3":[7,12,17,22,27,32,37,42,47,52,57,62,67,72,77,92], "g4":[10,16,22,28,34,40,46,52,58,64,70,76,82,88,94,112], "g5":[15,22,29,36,43,50,57,64,71,78,85,92,99,106,113,135], "g6":[22,30,38,46,54,62,70,78,86,94,102,110,118,126,134,160]},
"ATK%":{ "g3":[4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,38], "g4":[5,7,9,11,13,16,18,20,22,24,27,29,31,33,36,43], "g5":[8,10,12,15,17,20,22,24,27,29,32,34,37,40,43,51], "g6":[11,14,17,20,23,26,29,32,35,38,41,44,47,50,53,63]},
"HP%":{ "g3":[4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,38], "g4":[5,7,9,11,13,16,18,20,22,24,27,29,31,33,36,43], "g5":[8,10,12,15,17,20,22,24,27,29,32,34,37,40,43,51], "g6":[11,14,17,20,23,26,29,32,35,38,41,44,47,50,53,63]},
"HP flat":{ "g3":[100,175,250,325,400,475,550,625,700,775,850,925,1000,1075,1150,1380], "g4":[160,250,340,430,520,610,700,790,880,970,1060,1150,1240,1330,1420,1704], "g5":[270,375,480,585,690,795,900,1005,1110,1215,1320,1425,1530,1635,1740,2088], "g6":[360,480,600,720,840,960,1080,1200,1320,1440,1560,1680,1800,1920,2040,2448]},
"DEF%":{ "g3":[4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,38], "g4":[5,7,9,11,13,16,18,20,22,24,27,29,31,33,36,43], "g5":[8,10,12,15,17,20,22,24,27,29,32,34,37,40,43,51], "g6":[11,14,17,20,23,26,29,32,35,38,41,44,47,50,53,63]},
"DEF flat":{ "g3":[7,12,17,22,27,32,37,42,47,52,57,62,67,72,77,92], "g4":[10,16,22,28,34,40,46,52,58,64,70,76,82,88,94,112], "g5":[15,22,29,36,43,50,57,64,71,78,85,92,99,106,113,135], "g6":[22,30,38,46,54,62,70,78,86,94,102,110,118,126,134,160]},
"CRate":{ "g3":[3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,37], "g4":[4,6,8,11,13,15,17,19,22,24,26,28,30,33,35,41], "g5":[5,7,10,12,15,17,19,22,24,27,29,31,34,36,39,47], "g6":[7,10,13,16,19,22,25,28,31,34,37,40,43,46,49,58]},
"CDmg":{ "g3":[4,6,9,11,13,16,18,20,22,25,27,29,32,34,36,43], "g4":[6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,57], "g5":[8,11,15,18,21,25,28,31,34,38,41,44,48,51,54,65], "g6":[11,15,19,23,27,31,35,39,43,47,51,55,59,63,67,80]},
"RES":{ "g3":[4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,38], "g4":[6,8,10,13,15,17,19,21,24,26,28,30,32,35,37,44], "g5":[9,11,14,16,19,21,23,26,28,31,33,35,38,40,43,51], "g6":[12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,64]},
"ACC":{ "g3":[4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,38], "g4":[6,8,10,13,15,17,19,21,24,26,28,30,32,35,37,44], "g5":[9,11,14,16,19,21,23,26,28,31,33,35,38,40,43,51], "g6":[12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,64]}
};



// do not modify thos in the code! Used only for display
var emptySetCounter = {"Energy": 0,"Fatal":0,"Blade":0,"Rage":0,"Swift":0,"Focus":0,"Guard":0,"Endure":0,"Violent":0,"Will":0,"Nemesis":0,"Shield":0,"Revenge":0,"Despair":0,"Vampire":0};
var emptyRune = {"id": "", "monster":"", "monster_n":"", "set":"", "slot":"", "grade":"", "level":"", "m_t":"", "m_v":"", "i_t":"", "i_v":"", "s1_t":"", "s1_v":"", "s2_t":"", "s2_v":"", "s3_t":"", "s3_v":"", "s4_t":"", "s4_v":""};
var emptyMonster = {"id":"", "name":"", "level":"", "b_hp":"", "b_atk":"", "b_def":"", "b_spd":"", "b_crate":"", "b_cdmg":"", "b_res":"", "b_acc":""};

var focusRuneSlotCount = 7;
var gridOpt = null;
var asyncProcess;
// Structure for objects rune and monster and extended monster
//rune = {"id": 1, "monster":"", "monster_n":"", "set":"5", "slot":"2", "grade":"2", "level":"12", "m_t":"SPD", "m_v":"13", "i_t":"", "i_v":"", "s1_t":"ATK%", "s1_v":"4", "s2_t":"DEF", "s2_v":"18", "s3_t":"DEF%", "s3_v":"3", "s4_t":"", "s4_v":""}

// monster = {"id":"1", "name":"Teshar", "level":"40", "b_hp":"7410", "b_atk":"1098", "b_def":"549", "b_spd":"109", "b_crate":"15", "b_cdmg":"50", "b_res":"0", "b_acc":"0"};

// monster_extended = {id="1","name":"Teshar","level":"40","b_hp":"7410","b_atk":"1098","b_def":"549","b_spd":"109","b_crate":"15","b_cdmg":"50","b_res":"0","b_acc":"0",
//"a_hp":"7410","a_atk":"1098","a_def":"549","a_spd":"109","a_crate":"15","a_cdmg":"50","a_res":"0","a_acc":"0",
//"m_hp":"7410","m_atk":"1098","m_def":"549","m_spd":"109","m_crate":"15","m_cdmg":"50","m_res":"0","m_acc":"0",
// "o_hp_p":"50", "o_hp":"1200","o_atk_p":"40","o_atk":"120","o_def_p":"13","o_def":"78","o_spd":"4","o_crate":"37","o_cdmg":"12","o_res":"22","o_acc":"34",
// "om_hp_p":"50", "om_hp":"1200","om_atk_p":"40","om_atk":"120","om_def_p":"13","om_def":"78","om_spd":"4","om_crate":"37","om_cdmg":"12","om_res":"22","om_acc":"34",
//"substat_skillups":"4", "rune_ids":[3,56,2,8,9,70], "sets":"Focus,Fatal", "slots246":"SPD,CRate,ATK%"};
// b_<stat> = base stat; a_<stat> = actual stat with equipped runes; m_<stat> = stat with equipped runes at +15; 
// o_<stat> = runes bonuses; om_<stat> = rune bonuses at +15
// sec_stat_skillups = not accounted secondary stat increases when making equipped runes to +15
// rune_ids = equipped runes ids in slot order <slot1>,<slot2>,...,<slot6>

// ----------------------------- FILTER PLUGIN FUNCTION FOR DATATABLES
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
			// check if table is not for Optimizer results
			if ( settings.nTable != document.getElementById( 'grid_opt' )) {
				return true;
			}
			var type = $("#filter_type_div input[type='radio']:checked").val();
			var offset = 2;
			if(type == "m")
				offset = 10;
			var stats = ["hp","atk","def","spd","crate","cdmg","res","acc"];
		
			for(var i=0; i<8; i++) {
				var min = parseInt( $('#filter_min_' + stats[i]).val(), 10 );
				var max = parseInt( $('#filter_max_' + stats[i]).val(), 10 );
				var stat = data[offset + i]; // use data for the stat column

				if( ( isNaN( min ) && isNaN( max ) ) ||
						 ( isNaN( min ) && stat <= max ) ||
						 ( min <= stat && isNaN( max ) ) ||
						 ( min <= stat && stat <= max ) )
					continue;
				else
					return false;
			}
			
			return true;
    }
);


// ----------------------------- HELPER FUNCTIONS
function removeObjectFromArrayByProperty(data, prop, value) {
	for(var i = data.length - 1; i >= 0; i--) {
    if(data[i][prop] === value) {
       data.splice(i, 1);
			 break;
    }
	}
	return data;
}

// removes duplicated runes from array
function arrayOfRunesUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i]["id"] === a[j]["id"])
                a.splice(j--, 1);
        }
    }

    return a;
};

// ----------------------------- DATATABLES FUNCTIONS
function initRunesTable(dataSet) {
	var data1 = [];
	if(dataSet !== null && dataSet.length>0)
		data1 = dataSet;
	return $('#grid_runes').DataTable( {
		"bDestroy": 		true,
		"lengthMenu": 	[[10,20,-1], [10,20,"All"]],
		"data": 				data1,
    "order": 				[[ 0, "asc" ]],
		'bAutoWidth': 	false,
		"deferRender":  true,
		"columns": 			[
			{ "data": "id" },
			{ "data": "monster_n" },
			{ "data": "set" },
			{ "data": "slot" },
			{ "data": "grade" },
			{ "data": "level" },
			{ "data": "m_t" },
			{ "data": "m_v" },
			{ "data": "i_t" },
			{ "data": "i_v" },
			{ "data": null},
			{ "data": "locked", "visible": false},
		],
		"columnDefs": 	[
			{	"render": function ( data, type, row ) {
						if(row.locked == 1)
							return '<a href="#" class="del_row">delete</a> / <a href="#" data-locked="1" class="lockRune"><img src="images/Locked.png" height="15px" title"Lock rune" ></a>';
						else 
							return '<a href="#" class="del_row">delete</a> / <a href="#" data-locked="0" class="lockRune"><img src="images/UnLocked.png" height="15px" title"Unlock rune"></a>';
				},
				"targets": 10 },
			{
				"orderData": [ 11 ],
				"targets": [ 10 ]
			}
		]
	});
	/*{
		"bDestroy": 			true,
		"scrollY": 				"350px",
		"deferRender":    true,
		"scrollCollapse": true,
		"aaData": 				data1,
		"paging":         false,
		"columns": 				[
			{ "data": "id" },
			{ "data": "monster_n" },
			{ "data": "set" },
			{ "data": "slot" },
			{ "data": "grade" },
			{ "data": "level" },
			{ "data": "m_t" },
			{ "data": "m_v" },
			{ "data": "i_t" },
			{ "data": "i_v" },
			{ "data": null, "defaultContent": '<a href="#" class="del_row">delete</>'}
		]
	}*/
}

function initMonstersTable(dataSet) {
	var data1 = [];
	if(dataSet !== null && dataSet.length>0)
		data1 = dataSet;
	return $('#grid_monsters').DataTable( {
		"bDestroy": 		true,
		"lengthMenu": 	[[10,20,-1], [10,20,"All"]],
		"data": 				data1,
    "order": 				[[ 0, "asc" ]],
		'bAutoWidth': 	false,
		"deferRender":  true,
		"columns": 			[
			{ "data": "id" },
			{ "data": "name" },
			{ "data": "level" },
			{ "data": "b_hp" },
			{ "data": "b_atk" },
			{ "data": "b_def" },
			{ "data": "b_spd" },
			{ "data": "b_crate" },
			{ "data": "b_cdmg" },
			{ "data": "b_res" },
			{ "data": "b_acc" },
			{ "data": null, "defaultContent": '<a href="#" class="del_row">delete</a>'}
		]
	});
}

function initOpt1Table(dataSet) {
	var data1 = [];
	if(dataSet !== null && dataSet.length>0)
		data1 = dataSet;
	return $('#grid_opt_actual').DataTable( {
		"bDestroy": 		true,
		"lengthMenu": 	[[10,20], [10,20]],
		"data": 				data1,
    "order": 				[[ 0, "asc" ]],
		'bAutoWidth': 	false,
		"deferRender":  true,
		"columns": 			[
			{ "data": "rune_ids", "width": "14%" },
			{ "data": "sets", "width": "16%" },
			{ "data": "a_hp", "width": "6%" },
			{ "data": "a_atk", "width": "6%" },
			{ "data": "a_def", "width": "6%" },
			{ "data": "a_spd", "width": "6%" },
			{ "data": "a_crate", "width": "6%" },
			{ "data": "a_cdmg", "width": "6%" },
			{ "data": "a_res", "width": "6%" },
			{ "data": "a_acc", "width": "6%" },
			{ "data": "slots246", "width": "16%" },
			{ "data": "substat_skillups", "width": "6%" }
		],
		"columnDefs": 	[
			{	"render": function ( data, type, row ) {
						return '<a href="#" class="previewBuild" data-id="' + data +'">' + data +'</a>';
				},
				"targets": 0 }
		]
	});
}

function initOpt2Table(dataSet) {
	var data1 = [];
	if(dataSet !== null && dataSet.length>0)
		data1 = dataSet;
	return $('#grid_opt_max').DataTable( {
		"bDestroy": 		true,
		"lengthMenu": 	[[10,20], [10,20]],
		"data": 				data1,
    "order": 				[[ 0, "asc" ]],
		'bAutoWidth': 	false,
		"deferRender":	true,
		"columns": 			[
			{ "data": "rune_ids", "width": "14%" },
			{ "data": "sets", "width": "16%" },
			{ "data": "m_hp", "width": "6%" },
			{ "data": "m_atk", "width": "6%" },
			{ "data": "m_def", "width": "6%" },
			{ "data": "m_spd", "width": "6%" },
			{ "data": "m_crate", "width": "6%" },
			{ "data": "m_cdmg", "width": "6%" },
			{ "data": "m_res", "width": "6%" },
			{ "data": "m_acc", "width": "6%" },
			{ "data": "slots246", "width": "16%" },
			{ "data": "substat_skillups", "width": "6%" }
		],
		"columnDefs": 	[
			{	"render": function ( data, type, row ) {
						return '<a href="#" class="previewBuild" data-id="' + data +'">' + data +'</a>';
				},
				"targets": 0 }
		]
	});
	/*{
		"bDestroy": 			true,
		"scrollY": 				"250px",
		"deferRender":    true,
		"scrollCollapse": true,
		"aaData": 				data1,
		"paging":         false,
		'bAutoWidth': 		false ,
		"order": 					[[ 0, "asc" ]],
		"columns": 				[
			{ "data": "rune_ids", "width": "14%" },
			{ "data": "sets", "width": "16%" },
			{ "data": "m_hp", "width": "6%" },
			{ "data": "m_atk", "width": "6%" },
			{ "data": "m_def", "width": "6%" },
			{ "data": "m_spd", "width": "6%" },
			{ "data": "m_crate", "width": "6%" },
			{ "data": "m_cdmg", "width": "6%" },
			{ "data": "m_res", "width": "6%" },
			{ "data": "m_acc", "width": "6%" },
			{ "data": "slots246", "width": "16%" },
			{ "data": "substat_skillups", "width": "6%" }
		],
		"columnDefs": 		[
			{	"render": function ( data, type, row ) {
						return '<a href="#" class="previewBuild" data-id="' + data +'">' + data +'</a>';
				},
				"targets": 0 }
		]		
	}*/
}

function initOptTable(dataSet) {
	$('#optStatHeader').html('<center><strong style="font-size: x-large;">Actual stats </strong> / <a href="#" id="showPlus15"> +15 stats </a></center>');
	var data1 = [];
	if(dataSet !== null && dataSet.length>0)
		data1 = dataSet;
	return $('#grid_opt').DataTable( {
		"bDestroy": 		true,
		"lengthMenu": 	[[10,20], [10,20]],
		"data": 				data1,
    "order": 				[[ 0, "asc" ]],
		'bAutoWidth': 	false,
		"deferRender":  true,
		"columns": 			[
			{ "data": "rune_ids", "width": "14%" },
			{ "data": "sets", "width": "16%" },
			{ "data": "a_hp", "width": "6%", "orderSequence": [ "desc", "asc"] },
			{ "data": "a_atk", "width": "6%", "orderSequence": [ "desc", "asc"] },
			{ "data": "a_def", "width": "6%", "orderSequence": [ "desc", "asc"] },
			{ "data": "a_spd", "width": "6%", "orderSequence": [ "desc", "asc"] },
			{ "data": "a_crate", "width": "6%", "orderSequence": [ "desc", "asc"] },
			{ "data": "a_cdmg", "width": "6%", "orderSequence": [ "desc", "asc"] },
			{ "data": "a_res", "width": "6%", "orderSequence": [ "desc", "asc"] },
			{ "data": "a_acc", "width": "6%", "orderSequence": [ "desc", "asc"] },
			{ "data": "m_hp", "width": "6%", "orderSequence": [ "desc", "asc"], "visible": false },
			{ "data": "m_atk", "width": "6%", "orderSequence": [ "desc", "asc"], "visible": false },
			{ "data": "m_def", "width": "6%", "orderSequence": [ "desc", "asc"], "visible": false },
			{ "data": "m_spd", "width": "6%", "orderSequence": [ "desc", "asc"], "visible": false },
			{ "data": "m_crate", "width": "6%", "orderSequence": [ "desc", "asc"], "visible": false },
			{ "data": "m_cdmg", "width": "6%", "orderSequence": [ "desc", "asc"], "visible": false },
			{ "data": "m_res", "width": "6%", "orderSequence": [ "desc", "asc"], "visible": false },
			{ "data": "m_acc", "width": "6%", "orderSequence": [ "desc", "asc"], "visible": false },
			{ "data": "slots246", "width": "16%" },
			{ "data": "substat_skillups", "width": "6%", "orderSequence": [ "desc", "asc"] }
		],
		"columnDefs": 	[
			{	"render": function ( data, type, row ) {
						return '<a href="#" class="previewBuild" data-id="' + data +'" title="Preview">' + data +'</a>';
				},
				"targets": 0 }
		]
	});
}

// get raw row data from a table by id
function getRowDataById(table, wantedId) {
	var rowData = null;
	table.data().each( function (d) {
    if(d.id == wantedId ) {
			rowData = d;
		}
	});

	return JSON.parse(JSON.stringify(rowData));
}

// gets array of runes from a table by monster id
function getRunesWithMons(table, monsterId) {
	var rowsData = [];
	table.data().each( function (d) {
    if(d.monster == monsterId ) {
			rowsData.push( JSON.parse(JSON.stringify(d)) );
		}
	});
		
	return rowsData;
}

// ----------------------------- Rune management functions
function populateRuneMainStat() {
	var val = 0;
	if($("#rune_grade").val() == "1" || $("#rune_grade").val() == "2") {
		$("#rune_mainvalue").val(val);
		return true;
	}
	if( $("#rune_grade").val() != "" && $("#rune_level").val() != "" && $("#rune_maintype").val() != "") {
		val = allRunesStats[$("#rune_maintype").val()]["g"+$("#rune_grade").val()][Number($("#rune_level").val())];
	}
	if( typeof val === "undefined") {
		val = 0;
	}
	$("#rune_mainvalue").val(val);
}

// display rune in "Rune details" panel
function displayRune(rune) {
	$("#rune_id").val(rune.id);
	$("#rune_monster").val(rune.monster);
	$("#rune_set").val(rune.set);
	$("#rune_slot").val(rune.slot);
	$("#rune_grade").val(rune.grade);
	$("#rune_level").val(rune.level);
	$("#rune_maintype").val(rune.m_t);
	$("#rune_mainvalue").val(rune.m_v);
	$("#rune_innatetype").val(rune.i_t);
	$("#rune_innatevalue").val(rune.i_v);
	$("#rune_stat1type").val(rune.s1_t);
	$("#rune_stat1value").val(rune.s1_v);
	$("#rune_stat2type").val(rune.s2_t);
	$("#rune_stat2value").val(rune.s2_v);
	$("#rune_stat3type").val(rune.s3_t);
	$("#rune_stat3value").val(rune.s3_v);
	$("#rune_stat4type").val(rune.s4_t);
	$("#rune_stat4value").val(rune.s4_v);
}

// create a rune in table with data from "Rune details" panel
function createRune(table, lastRuneId) {
	lastRuneId ++;
	var newRune = {"id": lastRuneId, "monster":Number($("#rune_monster").val()), "monster_n":$( "#rune_monster option:selected" ).text(), "set": $("#rune_set").val(), "slot":Number($("#rune_slot").val()), "grade":Number($("#rune_grade").val()), "level":Number($("#rune_level").val()), "m_t":$("#rune_maintype").val(), "m_v":Number($("#rune_mainvalue").val()), "i_t":$("#rune_innatetype").val(), "i_v":Number($("#rune_innatevalue").val()), "s1_t":$("#rune_stat1type").val(), "s1_v":Number($("#rune_stat1value").val()), "s2_t":$("#rune_stat2type").val(), "s2_v":Number($("#rune_stat2value").val()), "s3_t":$("#rune_stat3type").val(), "s3_v":Number($("#rune_stat3value").val()), "s4_t":$("#rune_stat4type").val(), "s4_v":Number($("#rune_stat4value").val()), "locked":0};
	
	table.row.add( newRune ).draw();
	return lastRuneId;
}

// update a rune in table with data from "Rune details" panel
function updateRune(table) {
	table.data().each( function (d) {
    if(d.id == Number($("#rune_id").val()) ) {
			d.monster = Number($("#rune_monster").val());
			d.monster_n = $( "#rune_monster option:selected" ).text();
			d.set = $("#rune_set").val();
			d.slot = Number($("#rune_slot").val());
			d.grade = Number($("#rune_grade").val());
			d.level = Number($("#rune_level").val());
			d.m_t = $("#rune_maintype").val();
			d.m_v = Number($("#rune_mainvalue").val());
			d.i_t = $("#rune_innatetype").val();
			d.i_v = Number($("#rune_innatevalue").val());
			d.s1_t = $("#rune_stat1type").val();
			d.s1_v = Number($("#rune_stat1value").val());
			d.s2_t = $("#rune_stat2type").val();
			d.s2_v = Number($("#rune_stat2value").val());
			d.s3_t = $("#rune_stat3type").val();
			d.s3_v = Number($("#rune_stat3value").val());
			d.s4_t = $("#rune_stat4type").val();
			d.s4_v = Number($("#rune_stat4value").val());
			displayRuneSlot("rune_preview", d, d.slot, false);
		}
	});

	table.rows().invalidate().draw();
}

// ----------------------------- Monster management functions
// display monster in "Monster details" panel
function displayMonster(monster) {
	$("#monster_id").val(monster.id);
	$("#monster_name").val(monster.name);
	$("#monster_level").val(monster.level);
	$("#monster_hp").val(monster.b_hp);
	$("#monster_atk").val(monster.b_atk);
	$("#monster_def").val(monster.b_def);
	$("#monster_spd").val(monster.b_spd);
	$("#monster_crate").val(monster.b_crate);
	$("#monster_cdmg").val(monster.b_cdmg);
	$("#monster_res").val(monster.b_res);
	$("#monster_acc").val(monster.b_acc);
}

// display monster in "Optimizer -> 1.Monster and base stats" panel
function displayMonsterOpt(monster) {
	$("#o1_1").html(monster.b_hp || "0");
	$("#o1_2").html(monster.b_atk || "0");
	$("#o1_3").html(monster.b_def || "0");
	$("#o1_4").html(monster.b_spd || "0");
	$("#o1_5").html(monster.b_crate || "0");
	$("#o1_6").html(monster.b_cdmg || "0");
	$("#o1_7").html(monster.b_res || "0");
	$("#o1_8").html(monster.b_acc || "0");
}

// display monster set bonuses in "Total set bonuses" panel
function displayMonsterSetBonuses(elementId, monster) {
	var newHtml ='<div class="row">\
		<div class="col-md-4"><strong>Bonus</strong></div>\
		<div class="col-md-4"><strong>Actual</strong></div>\
		<div class="col-md-4"><strong>+15</strong></div>\
	</div>\
	\
	<div class="row">\
		<div class="col-md-4">HP%</div>\
		<div class="col-md-4" id="b1_1">'+monster.o_hp_p+'</div>\
		<div class="col-md-4" id="b1_2">'+monster.om_hp_p+'</div>\
	</div>\
	<div class="row">\
		<div class="col-md-4">ATK%</div>\
		<div class="col-md-4" id="b2_1">'+monster.o_atk_p+'</div>\
		<div class="col-md-4" id="b2_2">'+monster.om_atk_p+'</div>\
	</div>\
	<div class="row">\
		<div class="col-md-4">DEF%</div>\
		<div class="col-md-4" id="b3_1">'+monster.o_def_p+'</div>\
		<div class="col-md-4" id="b3_2">'+monster.om_def_p+'</div>\
	</div>\
	<div class="row">\
		<div class="col-md-4">SPD</div>\
		<div class="col-md-4" id="b4_1">'+monster.o_spd+'</div>\
		<div class="col-md-4" id="b4_2">'+monster.om_spd+'</div>\
	</div>\
	\
	<br/>\
	<div class="row">\
		<div class="col-md-4">HP flat</div>\
		<div class="col-md-4" id="b5_1">'+monster.o_hp+'</div>\
		<div class="col-md-4" id="b5_2">'+monster.om_hp+'</div>\
	</div>\
	<div class="row">\
		<div class="col-md-4">ATK flat</div>\
		<div class="col-md-4" id="b6_1">'+monster.o_atk+'</div>\
		<div class="col-md-4" id="b6_2">'+monster.om_atk+'</div>\
	</div>\
	<div class="row">\
		<div class="col-md-4">DEF flat</div>\
		<div class="col-md-4" id="b7_1">'+monster.o_def+'</div>\
		<div class="col-md-4" id="b7_2">'+monster.om_def+'</div>\
	</div>\
	\
	<br/>\
	<div class="row">\
		<div class="col-md-4">CRate</div>\
		<div class="col-md-4" id="b8_1">'+monster.o_crate+'</div>\
		<div class="col-md-4" id="b8_2">'+monster.om_crate+'</div>\
	</div>\
	<div class="row">\
		<div class="col-md-4">CDmg</div>\
		<div class="col-md-4" id="b9_1">'+monster.o_cdmg+'</div>\
		<div class="col-md-4" id="b9_2">'+monster.om_cdmg+'</div>\
	</div>\
	<div class="row">\
		<div class="col-md-4">RES</div>\
		<div class="col-md-4" id="b10_1">'+monster.o_res+'</div>\
		<div class="col-md-4" id="b10_2">'+monster.om_res+'</div>\
	</div>\
	<div class="row">\
		<div class="col-md-4">ACC</div>\
		<div class="col-md-4" id="b11_1">'+monster.o_acc+'</div>\
		<div class="col-md-4" id="b11_2">'+monster.om_acc+'</div>\
	</div>\
	\
	<br/>\
	<div class="row" style="color:red;">\
		<div class="col-md-4">substat levelups</div>\
		<div class="col-md-4" id="b12_1">-</div>\
		<div class="col-md-4" id="b12_2">'+monster.substat_skillups+'</div>\
	</div>';
	$('#'+elementId).html(newHtml);
}

function displayMonsterActualStats(elementId, monster) {
	var newHtml = '<div class="row">\
		<div class="col-md-4">\
		<strong>Sets: </strong>\
		</div>\
		<div class="col-md-8">\
		<strong>'+monster.sets+'</strong>\
		</div>\
	</div>\
	<div class="row">\
		<div class="col-md-3"><strong>Type</strong></div>\
		<div class="col-md-3"><strong>Base</strong></div>\
		<div class="col-md-3"><strong>Actual</strong></div>\
		<div class="col-md-3"><strong>+15</strong></div>\
	</div>\
	\
	<br/>\
	<div class="row">\
		<div class="col-md-3">HP</div>\
		<div class="col-md-3">'+monster.b_hp+'</div>\
		<div class="col-md-3">'+monster.a_hp+'</div>\
		<div class="col-md-3">'+monster.m_hp+'</div>\
	</div>\
	<div class="row">\
		<div class="col-md-3">ATK</div>\
		<div class="col-md-3">'+monster.b_atk+'</div>\
		<div class="col-md-3">'+monster.a_atk+'</div>\
		<div class="col-md-3">'+monster.m_atk+'</div>\
	</div>\
	<div class="row">\
		<div class="col-md-3">DEF</div>\
		<div class="col-md-3">'+monster.b_def+'</div>\
		<div class="col-md-3">'+monster.a_def+'</div>\
		<div class="col-md-3">'+monster.m_def+'</div>\
	</div>\
	<div class="row">\
		<div class="col-md-3">SPD</div>\
		<div class="col-md-3">'+monster.b_spd+'</div>\
		<div class="col-md-3">'+monster.a_spd+'</div>\
		<div class="col-md-3">'+monster.m_spd+'</div>\
	</div>\
	\
	<br/>\
	<div class="row">\
		<div class="col-md-3">CRate</div>\
		<div class="col-md-3">'+monster.b_crate+'</div>\
		<div class="col-md-3">'+monster.a_crate+'</div>\
		<div class="col-md-3">'+monster.m_crate+'</div>\
	</div>\
	<div class="row">\
		<div class="col-md-3">CDmg</div>\
		<div class="col-md-3">'+monster.b_cdmg+'</div>\
		<div class="col-md-3">'+monster.a_cdmg+'</div>\
		<div class="col-md-3">'+monster.m_cdmg+'</div>\
	</div>\
	<div class="row">\
		<div class="col-md-3">RES</div>\
		<div class="col-md-3">'+monster.b_res+'</div>\
		<div class="col-md-3">'+monster.a_res+'</div>\
		<div class="col-md-3">'+monster.m_res+'</div>\
	</div>\
	<div class="row">\
		<div class="col-md-3">ACC</div>\
		<div class="col-md-3">'+monster.b_acc+'</div>\
		<div class="col-md-3">'+monster.a_acc+'</div>\
		<div class="col-md-3">'+monster.m_acc+'</div>\
	</div>\
	\
	<br/>\
	<div class="row" style="color:red;">\
		<div class="col-md-3">substat levelups</div>\
		<div class="col-md-3">-</div>\
		<div class="col-md-3">-</div>\
		<div class="col-md-3">'+monster.substat_skillups+'</div>\
	</div>';
	$('#'+elementId).html(newHtml);
}

function displayRuneSlot(elementId, rune, slot, displayMax) {
	var newHtml = '';
	if(rune) {
		var stars = "";
		for(var i=0;i<rune.grade;i++) {
			stars += "*";
		}
		newHtml = '<div class="row">\
		<strong><center>'+stars+'\
		<br/>+'+rune.level+' '+rune.set+' ('+rune.slot+')\
		</center></strong>\
	</div>\
	<div class="row">\
		<div class="col-md-7">&nbsp;&nbsp;'+rune.m_t+'</div>\
		<div class="col-md-5">+'+rune.m_v+'</div>\
	</div>';
		if(rune.i_t) {
			newHtml += '<div class="row"><div class="col-md-7">&nbsp;&nbsp;'+rune.i_t+'</div>\
		<div class="col-md-5">+'+rune.i_v+'</div></div>';
		}
		if(rune.s1_t) {
			newHtml += '<div class="row"><div class="col-md-7">&nbsp;&nbsp;'+rune.s1_t+'</div>\
		<div class="col-md-5">+'+rune.s1_v+'</div></div>';
		}
		if(rune.s2_t) {
			newHtml += '<div class="row"><div class="col-md-7">&nbsp;&nbsp;'+rune.s2_t+'</div>\
		<div class="col-md-5">+'+rune.s2_v+'</div></div>';
		}
		if(rune.s3_t) {
			newHtml += '<div class="row"><div class="col-md-7">&nbsp;&nbsp;'+rune.s3_t+'</div>\
		<div class="col-md-5">+'+rune.s3_v+'</div></div>';
		}
		if(rune.s4_t) {
			newHtml += '<div class="row"><div class="col-md-7">&nbsp;&nbsp;'+rune.s4_t+'</div>\
		<div class="col-md-5">+'+rune.s4_v+'</div></div>';
		}
		newHtml += '<div class="row">\
			<div class="col-md-12" style="color:gray;"><center>id:'+rune.id+';&nbsp;location:'+(rune.monster_n || '-')+'</center></div>\
		</div>';
		newHtml += '</div>';
	}
	else {
		newHtml = '<div class="row">\
		<strong><center>\
		<br/>Empty slot ('+slot+')\
		</center></strong>\
	</div>';
	}
	$('#'+elementId).html(newHtml);
	$('#'+elementId).addClass("runeSlot");
}

// create a monster in table with data from "Monster details" panel
function createMonster(table, lastMonsterId) {
	lastMonsterId ++;
	var newMonster = {"id": lastMonsterId, "name":$("#monster_name").val(), "level": Number($("#monster_level").val()), "b_hp":Number($("#monster_hp").val()), "b_atk":Number($("#monster_atk").val()), "b_def":Number($("#monster_def").val()), "b_spd":Number($("#monster_spd").val()), "b_crate":Number($("#monster_crate").val()), "b_cdmg":Number($("#monster_cdmg").val()), "b_res":Number($("#monster_res").val()), "b_acc":Number($("#monster_acc").val())};
	
	table.row.add( newMonster ).draw();
	return lastMonsterId;
}

// update a monster in table with data from "Monster details" panel
function updateMonster(table) {
	table.data().each( function (d) {
    if(d.id == Number($("#monster_id").val()) ) {
			d.name = $("#monster_name").val();
			d.level = Number($("#monster_level").val());
			d.b_hp = Number($("#monster_hp").val());
			d.b_atk = Number($("#monster_atk").val());
			d.b_def = Number($("#monster_def").val());
			d.b_spd = Number($("#monster_spd").val());
			d.b_crate = Number($("#monster_crate").val());
			d.b_cdmg = Number($("#monster_cdmg").val());
			d.b_res = Number($("#monster_res").val());
			d.b_acc = Number($("#monster_acc").val());
		}
	});

	table.rows().invalidate().draw();
}

function replaceMonstersInSelect(elementId, table, leaveFirstOption) {
	var $el = $('#'+elementId);
	var oldValue = $el.val();
	if(leaveFirstOption)
		$('#'+elementId+' option:gt(0)').remove();
	else
		$el.empty(); // remove old options
	table.data().each( function (d) {
    $el.append($("<option></option>")
     .attr("value", d.id).text(d.name));
	});
	$el.val(oldValue);
}

// ----------------------------- CALCULATE MONSTER ACTUAL STATS FUNCTIONS
// extend a basic monster with 0 valies
function emptyExtend(monster) {
	return $.extend( monster, {"a_hp":0,"a_atk":0,"a_def":0,"a_spd":0,"a_crate":0,"a_cdmg":0,"a_res":0,"a_acc":0,
"m_hp":0,"m_atk":0,"m_def":0,"m_spd":0,"m_crate":0,"m_cdmg":0,"m_res":0,"m_acc":0,
"o_hp_p":0, "o_hp":0,"o_atk_p":0,"o_atk":0,"o_def_p":0,"o_def":0,"o_spd":0,"o_crate":0,"o_cdmg":0,"o_res":0,"o_acc":0,
"om_hp_p":0, "om_hp":0,"om_atk_p":0,"om_atk":0,"om_def_p":0,"om_def":0,"om_spd":0,"om_crate":0,"om_cdmg":0,"om_res":0,"om_acc":0,
"substat_skillups":0, "rune_ids":["-","-","-","-","-","-"],"sets":"","slots246":""} );
}

// order the runes by slot ascending
function orderBySlots(runes) {
	var new_runes = [];
	for(i=1; i<=6;i++) {
		for(j=0;j<runes.length;j++) {
			if(runes[j].slot == i) {
				new_runes.push(runes[j]);
				break;
			}
		}
	}
	return new_runes;
}

// add the stat to monsters rune bonus stats
function addStat(monster, type, value, add_max, grade){
	if(type != "" || value != "") {
		switch (type) {
			case "SPD":
				monster.o_spd += value;
				if(add_max)
					monster.om_spd += allStatsMax[type]["g"+grade];
				else
					monster.om_spd += value;
				break;
			case "SPD%":
				monster.o_spd += Math.ceil( monster.b_spd * value / 100);
				monster.om_spd += Math.ceil( monster.b_spd * value / 100);
				break;
			case "HP%":
				monster.o_hp_p += value;
				if(add_max)
					monster.om_hp_p += allStatsMax[type]["g"+grade];
				else
					monster.om_hp_p += value;
				break;
			case "HP flat":
				monster.o_hp += value;
				if(add_max)
					monster.om_hp += allStatsMax[type]["g"+grade];
				else
					monster.om_hp += value;
				break;
			case "ATK%":
				monster.o_atk_p += value;
				if(add_max)
					monster.om_atk_p += allStatsMax[type]["g"+grade];
				else
					monster.om_atk_p += value;
				break;
			case "ATK flat":
				monster.o_atk += value;
				if(add_max)
					monster.om_atk += allStatsMax[type]["g"+grade];
				else
					monster.om_atk += value;
				break;
			case "DEF%":
				monster.o_def_p += value;
				if(add_max)
					monster.om_def_p += allStatsMax[type]["g"+grade];
				else
					monster.om_def_p += value;
				break;
			case "DEF flat":
				monster.o_def += value;
				if(add_max)
					monster.om_def += allStatsMax[type]["g"+grade];
				else
					monster.om_def += value;
				break;
			case "CRate":
				monster.o_crate += value;
				if(add_max)
					monster.om_crate += allStatsMax[type]["g"+grade];
				else
					monster.om_crate += value;
				break;
			case "CDmg":
				monster.o_cdmg += value;
				if(add_max)
					monster.om_cdmg += allStatsMax[type]["g"+grade];
				else
					monster.om_cdmg += value;
				break;
			case "RES":
				monster.o_res += value;
				if(add_max)
					monster.om_res += allStatsMax[type]["g"+grade];
				else
					monster.om_res += value;
				break;
			case "ACC":
				monster.o_acc += value;
				if(add_max)
					monster.om_acc += allStatsMax[type]["g"+grade];
				else
					monster.om_acc += value;
				break;
			default:
				alert("Unkown stat type: " + type);
		}
	}
	return monster;
}

// add all rune stat to monsters rune bonus stats
function equipRune(monster, rune) {
	monster = addStat(monster, rune.m_t, rune.m_v, true, rune.grade);
	monster = addStat(monster, rune.i_t, rune.i_v, false, rune.grade);
	monster = addStat(monster, rune.s1_t, rune.s1_v, false, null);
	monster = addStat(monster, rune.s2_t, rune.s2_v, false, null);
	monster = addStat(monster, rune.s3_t, rune.s3_v, false, null);
	monster = addStat(monster, rune.s4_t, rune.s4_v, false, null);
	if(rune.level < 12)
		monster.substat_skillups +=  parseInt((14 - rune.level) / 3, 10);

	monster.rune_ids[rune.slot-1] = rune.id;
	// fill slot 2,4 and 6 main stats
	if(rune.slot == 2 || rune.slot == 4 || rune.slot == 6) {
		if(rune.slot == 4 || rune.slot == 6)
			monster.slots246 += ", ";
		monster.slots246 += rune.m_t;
	}
		
	return monster;
}

// calculates actual monster stats and +15 stats based on base stats and rune bonus stats
function calculateActualAndMax(monster) {
	// actual
	monster.a_hp = monster.b_hp + Math.ceil(( monster.b_hp * monster.o_hp_p) / 100) + monster.o_hp;
	monster.a_atk = monster.b_atk + Math.ceil(( monster.b_atk * monster.o_atk_p) / 100) + monster.o_atk;
	monster.a_def = monster.b_def + Math.ceil(( monster.b_def * monster.o_def_p) / 100) + monster.o_def;
	monster.a_spd = monster.b_spd + monster.o_spd;
	monster.a_crate = monster.b_crate + monster.o_crate;
	monster.a_cdmg = monster.b_cdmg + monster.o_cdmg;
	monster.a_res = monster.b_res + monster.o_res;
	monster.a_acc = monster.b_acc + monster.o_acc;
	// max
	monster.m_hp = monster.b_hp + Math.ceil(( monster.b_hp * monster.om_hp_p) / 100) + monster.om_hp;
	monster.m_atk = monster.b_atk + Math.ceil(( monster.b_atk * monster.om_atk_p) / 100) + monster.om_atk;
	monster.m_def = monster.b_def + Math.ceil(( monster.b_def * monster.om_def_p) / 100) + monster.om_def;
	monster.m_spd = monster.b_spd + monster.om_spd;
	monster.m_crate = monster.b_crate + monster.om_crate;
	monster.m_cdmg = monster.b_cdmg + monster.om_cdmg;
	monster.m_res = monster.b_res + monster.om_res;
	monster.m_acc = monster.b_acc + monster.om_acc;
	
	return monster;
}

// determines rune set bonuses and adds them into rune bonus stats
function determineCompleteSetsAndEffects(monster, runes){
	var setCounter = {"Energy": 0,"Fatal":0,"Blade":0,"Rage":0,"Swift":0,"Focus":0,"Guard":0,"Endure":0,"Violent":0,"Will":0,"Nemesis":0,"Shield":0,"Revenge":0,"Despair":0,"Vampire":0};
	for(i=0; i<runes.length; i++) {
		setCounter[runes[i].set]++;
	}
	for (var setName in setCounter) {
		while( setCounter[setName] >= allSets[setName][0]) {
			if(monster.sets != "")
				monster.sets += ",";
			monster.sets += setName;
			monster = addStat(monster, allSets[setName][1], allSets[setName][2], false, null);
			setCounter[setName] -= allSets[setName][0];
		}
	}
	return monster;
}

// calculates all rune bonuses over a monster and returns monster_extended object
function extendMonster(monster, runes) {
		var monster_x = emptyExtend(monster);
		var new_runes = orderBySlots(runes);
		
		for(i=0; i<new_runes.length; i++) {
			monster_x = equipRune(monster_x, new_runes[i]);
		}
		monster_x = determineCompleteSetsAndEffects(monster_x, new_runes);
		
		monster_x = calculateActualAndMax(monster_x);
		return monster_x;
}

// ----------------------------- Import and Export functions
function fixImportRunes(runes) {
	for(var i=0; i<runes.length; i++) {
		if(!runes[i].locked || ( runes[i].locked != 0 && runes[i].locked != 1) ) {
			runes[i].locked=0;
		}
		if(runes[i].monster == 0) {
		    runes[i].monster_n="Inventory";
		}
	}
	return runes;
}

function exportData(gridRunes, gridMons){
	var runes = [];
	var mons = [];
	var savedBuilds = [];
	
	gridRunes.data().each( function (d) {
    runes.push(d);
	});
	gridMons.data().each( function (d) {
    mons.push(d);
	});
	savedBuilds = JSON.parse($('#savedBuilds').val());
	
	var allData = {"runes":runes, "mons":mons, "savedBuilds":savedBuilds};
	return JSON.stringify(allData);
}

// find the last object id
function findMaxId(data) {
	var maxId=0;
	// do it from end to start because most lakily the biggest is at the end 
	for(i=data.length-1; i>=0;i--){
		if(data[i].id > maxId)
			maxId = data[i].id;
	}
	return maxId;
}

// ----------------------------- Optimizer functions
function totalRunes(data) {
	var count = 0;
	for(var id in data) {
		if(data[id])
			count += data[id];
	}
	return count;
}

// valuate if a rune is focus worthy
function isRuneFocusWorthy(d, focus1, focus2, focus3) {
	// judge slots 2,4 and 6 by mainstat, if the mainstat for the slot is not selected
	if( (d.slot == 2 && $("#opt_slot2").val() == "") || (d.slot == 4 && $("#opt_slot4").val() == "") || (d.slot == 6 && $("#opt_slot6").val() == "") ) {
		if( d.m_t.indexOf(focus1) > -1 || d.m_t.indexOf(focus2) > -1 || d.m_t.indexOf(focus3) > -1 )
			return true;
	}

	// judge slots 1,3 and 5 by substats only
	if( d.i_t != "" && ( d.i_t.indexOf(focus1) > -1 || d.i_t.indexOf(focus2) > -1 || d.i_t.indexOf(focus3) > -1) )
		return true;
	if( d.s1_t != "" && ( d.s1_t.indexOf(focus1) > -1 || d.s1_t.indexOf(focus2) > -1 || d.s1_t.indexOf(focus3) > -1) )
		return true;
	if( d.s2_t != "" && ( d.s2_t.indexOf(focus1) > -1 || d.s2_t.indexOf(focus2) > -1 || d.s2_t.indexOf(focus3) > -1) )
		return true;
	if( d.s3_t != "" && ( d.s3_t.indexOf(focus1) > -1 || d.s3_t.indexOf(focus2) > -1 || d.s3_t.indexOf(focus3) > -1) )
		return true;
	if( d.s4_t != "" && ( d.s4_t.indexOf(focus1) > -1 || d.s4_t.indexOf(focus2) > -1 || d.s4_t.indexOf(focus3) > -1) )
		return true;

		// if everything failed, check if the rune set bonus equals any focus
	if( allSets[d.set][1].indexOf(focus1) > -1 || allSets[d.set][1].indexOf(focus2) > -1 || allSets[d.set][1].indexOf(focus3) > -1)
		return true;
		
	return false;
}

// get percentage and flat bonuses of type
function getRuneBonuses(rune, stat) {
	var result = [0,0];
	if(stat != null && stat != "") {
		if( rune.m_t != "" && rune.m_t.indexOf(stat) > -1) {
			if( rune.m_t.indexOf("%") > -1 || stat == "ACC" || stat == "RES"  || stat == "SPD" || stat == "CRate" || stat == "CDmg")
				result[0] += allStatsMax[rune.m_t]["g"+rune.grade];
			else
				result[1] += allStatsMax[rune.m_t]["g"+rune.grade];
		}
		if( rune.i_t != "" && rune.i_t.indexOf(stat) > -1) {
			if( rune.i_t.indexOf("%") > -1 || stat == "ACC" || stat == "RES"  || stat == "SPD"  || stat == "CRate" || stat == "CDmg")
				result[0] += rune.i_v;
			else
				result[1] += rune.i_v;
		}
		if( rune.s1_t != "" && rune.s1_t.indexOf(stat) > -1) {
			if( rune.s1_t.indexOf("%") > -1 || stat == "ACC" || stat == "RES"  || stat == "SPD"  || stat == "CRate" || stat == "CDmg")
				result[0] += rune.s1_v;
			else
				result[1] += rune.s1_v;
		}
		if( rune.s2_t != "" && rune.s2_t.indexOf(stat) > -1) {
			if( rune.s2_t.indexOf("%") > -1 || stat == "ACC" || stat == "RES"  || stat == "SPD"  || stat == "CRate" || stat == "CDmg")
				result[0] += rune.s2_v;
			else
				result[1] += rune.s2_v;
		}
		if( rune.s3_t != "" && rune.s3_t.indexOf(stat) > -1) {
			if( rune.s3_t.indexOf("%") > -1 || stat == "ACC" || stat == "RES"  || stat == "SPD"  || stat == "CRate" || stat == "CDmg")
				result[0] += rune.s3_v;
			else
				result[1] += rune.s3_v;
		}
		if( rune.s4_t != "" && rune.s4_t.indexOf(stat) > -1) {
			if( rune.s4_t.indexOf("%") > -1 || stat == "ACC" || stat == "RES"  || stat == "SPD"  || stat == "CRate" || stat == "CDmg")
				result[0] += rune.s4_v;
			else
				result[1] += rune.s4_v;
		}
	}
	if(stat == "SPD") 
		result[0] = result[0] * 1.5;
	return result;
}

// valuate which of 2 runes is better regarding focuses
function compare2RunesByFocus(rune1, rune2, focus1, focus2, focus3) {
	var bonuses1 = [];
	var bonuses2 = [];
	bonuses1.push( getRuneBonuses(rune1, focus1) );
	bonuses1.push( getRuneBonuses(rune1, focus2) );
	bonuses1.push( getRuneBonuses(rune1, focus3) );
	bonuses2.push( getRuneBonuses(rune2, focus1) );
	bonuses2.push( getRuneBonuses(rune2, focus2) );
	bonuses2.push( getRuneBonuses(rune2, focus3) );
	
	var totalBonuses1 = [ bonuses1[0][0] + bonuses1[1][0] + bonuses1[2][0] , bonuses1[0][1] + bonuses1[1][1] + bonuses1[2][1] ];
	var totalBonuses2 = [ bonuses2[0][0] + bonuses2[1][0] + bonuses2[2][0] , bonuses2[0][1] + bonuses2[1][1] + bonuses2[2][1] ];
	if( totalBonuses1[0] > totalBonuses2[0]) {
		return -1;
	}
	else if( totalBonuses1[0] == totalBonuses2[0]) {
		if( totalBonuses1[1] > totalBonuses2[1])
			return -1;
		else
			return 1
	}
	else {
		return 1;
	}
	
}

// picks candidate runes based on requested set types and filled preferences
function pickCandidateRunes(gridRunes, requestedSetTypes, monsterId, focusSelected) {
	// create 6 empty sets
	var resultSets = [ [],[],[],[],[],[] ];
	
	var requestedSetNumber = totalRunes(requestedSetTypes);
	var notWantedRuneIds = [];
	var wantedRuneIds = [];
	var wantedRuneSlots = [];
	if($('#opt_use_runes').val() != "") {
		wantedRuneIds = $('#opt_use_runes').val().split(",");
		for(var i=0; i<wantedRuneIds.length; i++) {
			wantedRuneIds[i] = Number(wantedRuneIds[i]);
			var wantedRune = getRowDataById(gridRunes, wantedRuneIds[i]);
			wantedRuneSlots.push(wantedRune.slot);
		}
	}
	if($('#opt_not_use_runes').val() != "") {
		notWantedRuneIds = $('#opt_not_use_runes').val().split(",");
		for(var i=0; i<notWantedRuneIds.length; i++) {
			notWantedRuneIds[i] = Number(notWantedRuneIds[i]);
		}
	}
	
	//focuses
	var resultSetsFromRequestSets = [
		[ [],[],[],[],[],[] ], 
		[ [],[],[],[],[],[] ] , 
		[ [],[],[],[],[],[] ] 
	];
	var focus1 = $("#opt_focus1").val(); if(focus1 == "") focus1 = null;
	var focus2 = $("#opt_focus2").val(); if(focus2 == "") focus2 = null;
	var focus3 = $("#opt_focus3").val(); if(focus3 == "") focus3 = null;
	var setLimit = focusRuneSlotCount / 2;
	var generalLimit = focusRuneSlotCount;
	if( requestedSetNumber >0 )
		generalLimit = focusRuneSlotCount / 2;
	
	gridRunes.data().each( function (d) {
	
		// check if rune is requested by id and add it
		if( jQuery.inArray( d.id, wantedRuneIds ) >= 0) {
			resultSets[d.slot-1].push( JSON.parse(JSON.stringify(d)) );
			return;
		}
		// check if rune is not requested by id and there is requested rune for that slot
		else {
			if(jQuery.inArray( d.slot, wantedRuneSlots ) >= 0) {
				return;
			}
		}
		
		// check if rune is requested by id to not be used
		if( jQuery.inArray( d.id, notWantedRuneIds ) >= 0) {
			return;
		}
	
		// check if rune is locked
		if(d.locked == 1 && !$("#opt_use_locked").is(':checked') ) {
			if(d.monster != monsterId)
				return;
		}
	
    // check if rune is equipped by monster
		if(d.monster != "" && $("#opt_only_unequipped").is(':checked') ) {
			// pick the ones already equipped on the monster
			if(d.monster != monsterId)
				return;
		}
		// if the requested set types slots sum up to 6 (energy + vampire = 6; energy + focus = 4) reject runes not from those sets
		if(requestedSetNumber == 6 && requestedSetTypes[d.set] == 0) {
			return;
		}
		// if slot is 2, 4 or 6 and there are preferences for it, refuse 
		if( (d.slot == 2 && $("#opt_slot2").val() != "" && $("#opt_slot2").val() !== d.m_t) ||
				(d.slot == 4 && $("#opt_slot4").val() != "" && $("#opt_slot4").val() !== d.m_t) ||
				(d.slot == 6 && $("#opt_slot6").val() != "" && $("#opt_slot6").val() !== d.m_t)) {
			return;
		}
		if( $("#opt_only_6star").is(':checked') && d.grade != 6 && (d.slot == 2 || d.slot == 4 || d.slot == 6 )) {
			return;
		}
		if( $("#opt_only_56star").is(':checked') && d.grade != 6 && d.grade != 5 ) {
			return;
		}
		
		if(!focusSelected) {
			resultSets[d.slot-1].push( JSON.parse(JSON.stringify(d)) );
		}
		else {
			// if tehre are no runes, push the first one
			if( resultSets[d.slot-1].length == 0)
				resultSets[d.slot-1].push( JSON.parse(JSON.stringify(d)) );
			else {
				// if there are more runes than the limit check if rune is worthy to consider based on focus
				if( resultSets[d.slot-1].length >= generalLimit && !isRuneFocusWorthy(d, focus1, focus2, focus3))
					return;
				// evaluate the place for the new rune based on focuses	
				for(var i = resultSets[d.slot-1].length-1; i>=0 ; i--) {
					var lastRune = resultSets[d.slot-1][i];
					var compareResult = compare2RunesByFocus(lastRune, d, focus1, focus2, focus3);
					// if new rune is better than the compared
					if(compareResult == 1) {
						if(i == 0) {
							resultSets[d.slot-1].splice(0, 0, d); 
							if( resultSets[d.slot-1].length > generalLimit)
								resultSets[d.slot-1].splice(resultSets[d.slot-1].length-1, 1); 
						}
						else
							continue;
					}
					else if(compareResult == 0) {
						resultSets[d.slot-1].splice(i, 0, d);
						if( resultSets[d.slot-1].length > generalLimit)
								resultSets[d.slot-1].splice(resultSets[d.slot-1].length-1, 1);
					}
					else {
						if(i == resultSets[d.slot-1].length-1) {
						}
						else {
							resultSets[d.slot-1].splice(i+1, 0, d); 
							if( resultSets[d.slot-1].length > generalLimit)
								resultSets[d.slot-1].splice(resultSets[d.slot-1].length-1, 1); 
						}
					}
					break;
				}
			}
			
			// do the same for every requested set, and join the results
			var s = 0;
			for(var j in requestedSetTypes) {
				if(requestedSetTypes[j] > 0) {
					if(d.set == j) {
						// if tehre are no runes, push the first one
						if( resultSetsFromRequestSets[s][d.slot-1].length == 0)
							resultSetsFromRequestSets[s][d.slot-1].push( JSON.parse(JSON.stringify(d)) );
						else {
							// if there are more runes than the limit check if rune is worthy to consider based on focus
							if( resultSetsFromRequestSets[s][d.slot-1].length >= setLimit && !isRuneFocusWorthy(d, focus1, focus2, focus3))
								continue;
							// evaluate the place for the new rune based on focuses	
							for(var i = resultSetsFromRequestSets[s][d.slot-1].length-1; i>=0 ; i--) {
								var lastRune = resultSetsFromRequestSets[s][d.slot-1][i];
								var compareResult = compare2RunesByFocus(lastRune, d, focus1, focus2, focus3);
								// if new rune is better than the compared
								if(compareResult == 1) {
									if(i == 0) {
										resultSetsFromRequestSets[s][d.slot-1].splice(0, 0, d); 
										if( resultSetsFromRequestSets[s][d.slot-1].length > setLimit)
											resultSetsFromRequestSets[s][d.slot-1].splice(resultSetsFromRequestSets[s][d.slot-1].length-1, 1); 
									}
									else
										continue;
								}
								else if(compareResult == 0) {
									resultSetsFromRequestSets[s][d.slot-1].splice(i, 0, d);
									if( resultSetsFromRequestSets[s][d.slot-1].length > setLimit)
										resultSetsFromRequestSets[s][d.slot-1].splice(resultSetsFromRequestSets[s][d.slot-1].length-1, 1);
								}
								else {
									if(i == resultSetsFromRequestSets[s][d.slot-1].length-1) {
									}
									else {
										resultSetsFromRequestSets[s][d.slot-1].splice(i+1, 0, d); 
										if( resultSetsFromRequestSets[s][d.slot-1].length > setLimit)
											resultSetsFromRequestSets[s][d.slot-1].splice(resultSetsFromRequestSets[s][d.slot-1].length-1, 1);
									}
								}
								break;
							}
						}
					}
					
					s++;
				}
			}
			
		}
		
	});
	
	if(focusSelected) {
		for(var i=0; i<3; i++) {
			for(var j=0; j<6; j++) {
				//$.merge(resultSets[j], resultSetsFromRequestSets[i][j]);
				resultSets[j] = arrayOfRunesUnique( resultSets[j].concat(resultSetsFromRequestSets[i][j]));
			}
		}
	}
	
	return resultSets;
}

function canRequestedSetsBeFulfilled( requestedSetTypes, equippedSetTypes, currentlyAddedSetType, requestedSetNumber, remainingRunes, numberOfEquippedRequestedSetSlots, isAddedToTotal) {
	if( requestedSetNumber == 6) {
		if( requestedSetTypes[ currentlyAddedSetType ] - equippedSetTypes[ currentlyAddedSetType ] <= 0 )
			return false;			
	}
	else {
		if( requestedSetNumber - numberOfEquippedRequestedSetSlots - ( isAddedToTotal ? 1 : 0 )  > remainingRunes ) //
			return false;
	}
	
	return true;
}

// find all possible permutations based on the 6 slot sets and requested set types
function getPossiblePermutations(setsForAllSlots, requestedSetTypes) {
	var resultPermutations = [];
// if no sets are requested, or all runes are requested to be of one set (ex:3x Energy),
//just create all possible permutations
	var allOneSet = false;
	for(var id in requestedSetTypes){
		if( requestedSetTypes[id] == 6){
			allOneSet = true;
			break;
		}
	}
	var requestedSetNumber = totalRunes(requestedSetTypes);

	if(requestedSetNumber == 0 || allOneSet) {
		for(var i0=0; i0<setsForAllSlots[0].length; i0++) {
			for(var i1=0; i1<setsForAllSlots[1].length; i1++) {
				for(var i2=0; i2<setsForAllSlots[2].length; i2++) {
					for(var i3=0; i3<setsForAllSlots[3].length; i3++) {
						for(var i4=0; i4<setsForAllSlots[4].length; i4++) {
							for(var i5=0; i5<setsForAllSlots[5].length; i5++) {
								var perm = [];
								perm.push( setsForAllSlots[0][i0] );
								perm.push( setsForAllSlots[1][i1] );
								perm.push( setsForAllSlots[2][i2] );
								perm.push( setsForAllSlots[3][i3] );
								perm.push( setsForAllSlots[4][i4] );
								perm.push( setsForAllSlots[5][i5] );
								resultPermutations.push( perm );
							}
						}
					}
				}
			}
		}
	}
	// if different sets are selected, advanced logic
	else {
		var equippedSetTypes = {"Energy": 0,"Fatal":0,"Blade":0,"Rage":0,"Swift":0,"Focus":0,"Guard":0,"Endure":0,"Violent":0,"Will":0,"Nemesis":0,"Shield":0,"Revenge":0,"Despair":0,"Vampire":0};
		var numberOfEquippedRequestedSetSlots = 0;
		var addedCounter = [false,false,false,false,false,false];
		
		for(var i0=0; i0<setsForAllSlots[0].length; i0++) {
			addedCounter[0] = false;
			if( requestedSetTypes[setsForAllSlots[0][i0]["set"]] > 0 && requestedSetTypes[setsForAllSlots[0][i0]["set"]] > equippedSetTypes[setsForAllSlots[0][i0]["set"]] )
				addedCounter[0] = true;
			if(!canRequestedSetsBeFulfilled( requestedSetTypes, equippedSetTypes, setsForAllSlots[0][i0]["set"],requestedSetNumber, 5, numberOfEquippedRequestedSetSlots, addedCounter[0]))
				continue;
				
			if(addedCounter[0])
				numberOfEquippedRequestedSetSlots++;
			equippedSetTypes[ setsForAllSlots[0][i0]["set"] ] += 1;
			
			for(var i1=0; i1<setsForAllSlots[1].length; i1++) {
				addedCounter[1] = false;
				if( requestedSetTypes[setsForAllSlots[1][i1]["set"]] > 0 && requestedSetTypes[setsForAllSlots[1][i1]["set"]] > equippedSetTypes[setsForAllSlots[1][i1]["set"]])
					addedCounter[1] = true;
				if(!canRequestedSetsBeFulfilled( requestedSetTypes, equippedSetTypes, setsForAllSlots[1][i1]["set"],requestedSetNumber, 4, numberOfEquippedRequestedSetSlots, addedCounter[1]))
					continue;
					
				if(addedCounter[1])
					numberOfEquippedRequestedSetSlots++;
				equippedSetTypes[ setsForAllSlots[1][i1]["set"] ] += 1;
			
				for(var i2=0; i2<setsForAllSlots[2].length; i2++) {
					addedCounter[2] = false;
					if( requestedSetTypes[setsForAllSlots[2][i2]["set"]] > 0 && requestedSetTypes[setsForAllSlots[2][i2]["set"]] > equippedSetTypes[setsForAllSlots[2][i2]["set"]])
						addedCounter[2] = true;
					if(!canRequestedSetsBeFulfilled( requestedSetTypes, equippedSetTypes, setsForAllSlots[2][i2]["set"],requestedSetNumber, 3, numberOfEquippedRequestedSetSlots, addedCounter[2]))
						continue;
						
					if(addedCounter[2])
						numberOfEquippedRequestedSetSlots++;
					equippedSetTypes[ setsForAllSlots[2][i2]["set"] ] += 1;
						
					for(var i3=0; i3<setsForAllSlots[3].length; i3++) {
						addedCounter[3] = false;
						if( requestedSetTypes[setsForAllSlots[3][i3]["set"]] > 0 && requestedSetTypes[setsForAllSlots[3][i3]["set"]] > equippedSetTypes[setsForAllSlots[3][i3]["set"]])
							addedCounter[3] = true;
						if(!canRequestedSetsBeFulfilled( requestedSetTypes, equippedSetTypes, setsForAllSlots[3][i3]["set"],requestedSetNumber, 2, numberOfEquippedRequestedSetSlots, addedCounter[3]))
							continue;
						
						if(addedCounter[3])
							numberOfEquippedRequestedSetSlots++;
						equippedSetTypes[ setsForAllSlots[3][i3]["set"] ] += 1;
							
						for(var i4=0; i4<setsForAllSlots[4].length; i4++) {
							addedCounter[4] = false;
							if( requestedSetTypes[setsForAllSlots[4][i4]["set"]] > 0  && requestedSetTypes[setsForAllSlots[4][i4]["set"]] > equippedSetTypes[setsForAllSlots[4][i4]["set"]])
								addedCounter[4] = true;
							if(!canRequestedSetsBeFulfilled( requestedSetTypes, equippedSetTypes, setsForAllSlots[4][i4]["set"],requestedSetNumber, 1, numberOfEquippedRequestedSetSlots, addedCounter[4]))
								continue;
							if(addedCounter[4])
								numberOfEquippedRequestedSetSlots++;
							equippedSetTypes[ setsForAllSlots[4][i4]["set"] ] += 1;
								
							for(var i5=0; i5<setsForAllSlots[5].length; i5++) {
								addedCounter[5] = false;
								if( requestedSetTypes[setsForAllSlots[5][i5]["set"]] > 0  && requestedSetTypes[setsForAllSlots[5][i5]["set"]] > equippedSetTypes[setsForAllSlots[5][i5]["set"]])
									addedCounter[5] = true;
								if(!canRequestedSetsBeFulfilled( requestedSetTypes, equippedSetTypes, setsForAllSlots[5][i5]["set"],requestedSetNumber, 0, numberOfEquippedRequestedSetSlots, addedCounter[5]))
									continue;

								var perm = [];
								perm.push( JSON.parse(JSON.stringify( setsForAllSlots[0][i0] )) );
								perm.push( JSON.parse(JSON.stringify( setsForAllSlots[1][i1] )) );
								perm.push( JSON.parse(JSON.stringify( setsForAllSlots[2][i2] )) );
								perm.push( JSON.parse(JSON.stringify( setsForAllSlots[3][i3] )) );
								perm.push( JSON.parse(JSON.stringify( setsForAllSlots[4][i4] )) );
								perm.push( JSON.parse(JSON.stringify( setsForAllSlots[5][i5] )) );
								resultPermutations.push( perm );
							}
							equippedSetTypes[ setsForAllSlots[4][i4]["set"] ] -= 1;
							if( addedCounter[4] )
								numberOfEquippedRequestedSetSlots--;
						}
						equippedSetTypes[ setsForAllSlots[3][i3]["set"] ] -= 1;
						if( addedCounter[3] )
							numberOfEquippedRequestedSetSlots--;
					}
					equippedSetTypes[ setsForAllSlots[2][i2]["set"] ] -= 1;
					if( addedCounter[2] )
						numberOfEquippedRequestedSetSlots--;
				}
				equippedSetTypes[ setsForAllSlots[1][i1]["set"] ] -= 1;
				if( addedCounter[1] )
					numberOfEquippedRequestedSetSlots--;
			}
			equippedSetTypes[ setsForAllSlots[0][i0]["set"] ] -= 1;
			if( addedCounter[0] )
				numberOfEquippedRequestedSetSlots--;
		}
	}
	return resultPermutations;
}

// find all possible permutations and calculate monster stats for them
// CURRENTLY NOT USED!!! LOGIC MOVED IN EVENT DEFINITION
function optimize(gridRunes, gridMons, focusSelected) {
	// validate monster
	if( $("#opt_monster").val() == "" || $("#opt_monster").val() == "0"){
		alert("Selected monster is required.");
		return false;
	}
	// validate preferences
	if( $("#opt_set1").val() == "" && $("#opt_set2").val() == "" && $("#opt_set3").val() == "" && $("#opt_slot2").val() == "" && $("#opt_slot4").val() == "" && $("#opt_slot6").val() == ""){
		alert("Selected at least one set or main stat for slot 2,4 or 6");
		return false;
	}
	
	// validate focuses
	if(focusSelected) {
		if( $("#opt_focus1").val() == "" && $("#opt_focus2").val() == "" && $("#opt_focus3").val() == ""){
			alert("Selected at least one stat to focus.");
			return false;
		}
	}
	// validate requested sets
	var requestedSetTypes = {"Energy": 0,"Fatal":0,"Blade":0,"Rage":0,"Swift":0,"Focus":0,"Guard":0,"Endure":0,"Violent":0,"Will":0,"Nemesis":0,"Shield":0,"Revenge":0,"Despair":0,"Vampire":0};
	if( $("#opt_set1").val() != "")
		requestedSetTypes[$("#opt_set1").val()] += allSets[$("#opt_set1").val()][0];
	if( $("#opt_set2").val() != "")
		requestedSetTypes[$("#opt_set2").val()] += allSets[$("#opt_set2").val()][0];
	if( $("#opt_set3").val() != "")
		requestedSetTypes[$("#opt_set3").val()] += allSets[$("#opt_set3").val()][0];
	var totalRequestedSlots = totalRunes(requestedSetTypes);
	if(totalRequestedSlots > 6){
		alert("Selected sets require more than 6 sots!");
		return;
	}
	var startTime = new Date().getTime();

	//var extendedMonsters = optimize(gridRunes, gridMons, $('#opt_monster').val(), requestedSetTypes);		
	// get optimized monster
	var monster = getRowDataById(gridMons, $('#opt_monster').val());
	
	// get 6 sets of possible runes, 1 for each slot
	var setsForAllSlots = pickCandidateRunes(gridRunes, requestedSetTypes, $('#opt_monster').val(), focusSelected);
	
	for(var i=0; i<setsForAllSlots.length;i++) {
		if( setsForAllSlots[i].length == 0) {
			alert("There are no runes matching your preferences for slot " + (i+1) + "!");
			return;
		}
	}
	
	// find all possible permutations based on the 6 slot sets and requested set types
	var allRunePermutations = [];
			
	var calculateAndDisplay = function() {
		if(allRunePermutations.length > 0) {
			var extendedMonsters = [];
	
			var length = allRunePermutations.length;
			var index = 0;
			var displayBuilds = function() {
				gridOpt = initOptTable(extendedMonsters);	
						
				var endTime = new Date().getTime();
				var time = endTime - startTime;
				$("#opt_time").html("Builds loaded in "+ time + "ms.");
			};
			var process = function() {
				for (; index < length; index++) {
						// make copy of the monster and extend it
					var monster_x = extendMonster( JSON.parse(JSON.stringify(monster)), allRunePermutations[index]);
					
					// check for max values - REMOVED AFTER FILTERS ARE ADDED
					/*if( !( monster_x.m_crate > Number($('#opt_max_crate').val()) || monster_x.m_acc > Number($('#opt_max_acc_res').val()) || monster_x.m_res > Number($('#opt_max_acc_res').val()) ) ) {
						extendedMonsters.push( monster_x );
					}*/
					extendedMonsters.push( monster_x );
					
					if (index + 1 < length && index % 100 == 0) {
						$("#opt_time").html("Calculating builds stats " + index + "/" + length + ". Press Abort to stop. Any results over 100k will be slow to display and over 200k may crash the page");
						asyncProcess = setTimeout(process, 1);
						index++
						break;
					}
					
					if(index + 1 == length) {
						$("#opt_time").html("Preparing builds for display. This may take some time and slow your browser.");
		
						asyncProcess = setTimeout(displayBuilds, 1);
					}
				}
			};
			process();
		}else {
			var endTime = new Date().getTime();
			var time = endTime - startTime;
			$("#opt_time").html("No possible builds found.");
			gridOpt.rows().clear().draw();
		}
	};
	// if no sets are requested, or all runes are requested to be of one set (ex:3x Energy),
	//just create all possible permutations
	var allOneSet = false;
	for(var id in requestedSetTypes){
		if( requestedSetTypes[id] == 6){
			allOneSet = true;
			break;
		}
	}
	var requestedSetNumber = totalRunes(requestedSetTypes);

	if(requestedSetNumber == 0 || allOneSet) {
		for(var i0=0; i0<setsForAllSlots[0].length; i0++) {
			for(var i1=0; i1<setsForAllSlots[1].length; i1++) {
				for(var i2=0; i2<setsForAllSlots[2].length; i2++) {
					for(var i3=0; i3<setsForAllSlots[3].length; i3++) {
						for(var i4=0; i4<setsForAllSlots[4].length; i4++) {
							for(var i5=0; i5<setsForAllSlots[5].length; i5++) {
								var perm = [];
								perm.push( JSON.parse(JSON.stringify( setsForAllSlots[0][i0] )) );
								perm.push( JSON.parse(JSON.stringify( setsForAllSlots[1][i1] )) );
								perm.push( JSON.parse(JSON.stringify( setsForAllSlots[2][i2] )) );
								perm.push( JSON.parse(JSON.stringify( setsForAllSlots[3][i3] )) );
								perm.push( JSON.parse(JSON.stringify( setsForAllSlots[4][i4] )) );
								perm.push( JSON.parse(JSON.stringify( setsForAllSlots[5][i5] )) );
								allRunePermutations.push( perm );
							}
						}
					}
				}
			}
		}
		
		asyncProcess = setTimeout(calculateAndDisplay, 1);
	}
	// if different sets are selected, advanced logic
	else {
		var i0 = 0;
		var i1 = 0;
		var i2 = 0;
		var i3 = 0;
		var i4 = 0;
		var i5 = 0;
		var iterations = 0;
		
		var equippedSetTypes = {"Energy": 0,"Fatal":0,"Blade":0,"Rage":0,"Swift":0,"Focus":0,"Guard":0,"Endure":0,"Violent":0,"Will":0,"Nemesis":0,"Shield":0,"Revenge":0,"Despair":0,"Vampire":0};
		var numberOfEquippedRequestedSetSlots = 0;
		var addedCounter = [false,false,false,false,false,false];
		var lastProcessed = [-1,-1,-1,-1,-1,-1];
		var warningIssued = false;
		
		var getPermutationsLoop = function() {
			for(; i0<setsForAllSlots[0].length; i0++) {
				if(i0 != lastProcessed[0]) {
					iterations += 1;
					lastProcessed[0] = i0;
					addedCounter[0] = false;
					if( requestedSetTypes[setsForAllSlots[0][i0]["set"]] > 0 && requestedSetTypes[setsForAllSlots[0][i0]["set"]] > equippedSetTypes[setsForAllSlots[0][i0]["set"]] )
						addedCounter[0] = true;
					if(!canRequestedSetsBeFulfilled( requestedSetTypes, equippedSetTypes, setsForAllSlots[0][i0]["set"],requestedSetNumber, 5, numberOfEquippedRequestedSetSlots, addedCounter[0]))
						continue;
						
					if(addedCounter[0])
						numberOfEquippedRequestedSetSlots++;
					equippedSetTypes[ setsForAllSlots[0][i0]["set"] ] += 1;
				}
				
				for(; i1<setsForAllSlots[1].length; i1++) {
					if(i1 != lastProcessed[1]) {
						iterations += 1;
						lastProcessed[1] = i1;
						addedCounter[1] = false;
						if( requestedSetTypes[setsForAllSlots[1][i1]["set"]] > 0 && requestedSetTypes[setsForAllSlots[1][i1]["set"]] > equippedSetTypes[setsForAllSlots[1][i1]["set"]])
							addedCounter[1] = true;
						if(!canRequestedSetsBeFulfilled( requestedSetTypes, equippedSetTypes, setsForAllSlots[1][i1]["set"],requestedSetNumber, 4, numberOfEquippedRequestedSetSlots, addedCounter[1]))
							continue;
							
						if(addedCounter[1])
							numberOfEquippedRequestedSetSlots++;
						equippedSetTypes[ setsForAllSlots[1][i1]["set"] ] += 1;
					}
					
					for(; i2<setsForAllSlots[2].length; i2++) {
						if(i2 != lastProcessed[2]) {
							iterations += 1;
							lastProcessed[2] = i2;
							addedCounter[2] = false;
							if( requestedSetTypes[setsForAllSlots[2][i2]["set"]] > 0 && requestedSetTypes[setsForAllSlots[2][i2]["set"]] > equippedSetTypes[setsForAllSlots[2][i2]["set"]])
								addedCounter[2] = true;
							if(!canRequestedSetsBeFulfilled( requestedSetTypes, equippedSetTypes, setsForAllSlots[2][i2]["set"],requestedSetNumber, 3, numberOfEquippedRequestedSetSlots, addedCounter[2]))
								continue;
								
							if(addedCounter[2])
								numberOfEquippedRequestedSetSlots++;
							equippedSetTypes[ setsForAllSlots[2][i2]["set"] ] += 1;
						}
						
						for(; i3<setsForAllSlots[3].length; i3++) {
							if(i3 != lastProcessed[3]) {
								iterations += 1;
								lastProcessed[3] = i3;
								addedCounter[3] = false;
								if( requestedSetTypes[setsForAllSlots[3][i3]["set"]] > 0 && requestedSetTypes[setsForAllSlots[3][i3]["set"]] > equippedSetTypes[setsForAllSlots[3][i3]["set"]])
									addedCounter[3] = true;
								if(!canRequestedSetsBeFulfilled( requestedSetTypes, equippedSetTypes, setsForAllSlots[3][i3]["set"],requestedSetNumber, 2, numberOfEquippedRequestedSetSlots, addedCounter[3]))
									continue;
								
								if(addedCounter[3])
									numberOfEquippedRequestedSetSlots++;
								equippedSetTypes[ setsForAllSlots[3][i3]["set"] ] += 1;
							}
							
							for(; i4<setsForAllSlots[4].length; i4++) {
								if(i4 != lastProcessed[4]) {
									iterations += 1;
									lastProcessed[4] = i4;
									addedCounter[4] = false;
									if( requestedSetTypes[setsForAllSlots[4][i4]["set"]] > 0  && requestedSetTypes[setsForAllSlots[4][i4]["set"]] > equippedSetTypes[setsForAllSlots[4][i4]["set"]])
										addedCounter[4] = true;
									if(!canRequestedSetsBeFulfilled( requestedSetTypes, equippedSetTypes, setsForAllSlots[4][i4]["set"],requestedSetNumber, 1, numberOfEquippedRequestedSetSlots, addedCounter[4]))
										continue;
									if(addedCounter[4])
										numberOfEquippedRequestedSetSlots++;
									equippedSetTypes[ setsForAllSlots[4][i4]["set"] ] += 1;
								}
								
								for(; i5<setsForAllSlots[5].length; i5++) {
									iterations += 1;
									addedCounter[5] = false;
									if( requestedSetTypes[setsForAllSlots[5][i5]["set"]] > 0  && requestedSetTypes[setsForAllSlots[5][i5]["set"]] > equippedSetTypes[setsForAllSlots[5][i5]["set"]])
										addedCounter[5] = true;
									if(!canRequestedSetsBeFulfilled( requestedSetTypes, equippedSetTypes, setsForAllSlots[5][i5]["set"],requestedSetNumber, 0, numberOfEquippedRequestedSetSlots, addedCounter[5]))
										continue;
									
									var perm = [];
									perm.push( JSON.parse(JSON.stringify( setsForAllSlots[0][i0] )) );
									perm.push( JSON.parse(JSON.stringify( setsForAllSlots[1][i1] )) );
									perm.push( JSON.parse(JSON.stringify( setsForAllSlots[2][i2] )) );
									perm.push( JSON.parse(JSON.stringify( setsForAllSlots[3][i3] )) );
									perm.push( JSON.parse(JSON.stringify( setsForAllSlots[4][i4] )) );
									perm.push( JSON.parse(JSON.stringify( setsForAllSlots[5][i5] )) );
									allRunePermutations.push( perm );
									
									if(iterations % 100 == 0) {
										$("#opt_time").html("Calculating number of permutations: " + allRunePermutations.length + ". Press Abort to stop. Any results over 100k will be slow to display and over 200k may crash the page.");
										if(!warningIssued && allRunePermutations.length > 100000) {
											if(!confirm(' Any results over 100k will be slow to display and over 200k may crash the page. Continue?')) {
												return;
											}
											else {
												warningIssued = true;
											}
										}
										asyncProcess = setTimeout(getPermutationsLoop, 1);
										i5++;
										return;
									}
								}
								equippedSetTypes[ setsForAllSlots[4][i4]["set"] ] -= 1;
								if( addedCounter[4] )
									numberOfEquippedRequestedSetSlots--;
								i5 = 0;
							}
							lastProcessed[4] = -1;
							equippedSetTypes[ setsForAllSlots[3][i3]["set"] ] -= 1;
							if( addedCounter[3] )
								numberOfEquippedRequestedSetSlots--;
							i4 = 0;
						}
						lastProcessed[3] = -1;
						equippedSetTypes[ setsForAllSlots[2][i2]["set"] ] -= 1;
						if( addedCounter[2] )
							numberOfEquippedRequestedSetSlots--;
						i3 = 0;
					}
					lastProcessed[2] = -1;
					equippedSetTypes[ setsForAllSlots[1][i1]["set"] ] -= 1;
					if( addedCounter[1] )
						numberOfEquippedRequestedSetSlots--;
					i2 = 0;
				}
				lastProcessed[1] = -1;
				equippedSetTypes[ setsForAllSlots[0][i0]["set"] ] -= 1;
				if( addedCounter[0] )
					numberOfEquippedRequestedSetSlots--;
				i1 = 0;
			}
			
			asyncProcess = setTimeout(calculateAndDisplay, 1);
		};
		
		getPermutationsLoop();
	}
}

// togles visibility of columns of table
function toggleVisibility(table, columns) {
	for(var i=0; i<columns.length; i++) {
		var column = table.column(columns[i]);
		column.visible( ! column.visible() );
	}
}
// ----------------------------- Saved builds functions
//create new tab with id and title
function addTab(name, title) {
	var li = $('<li/>'); 
	// add the link
	li.append('<a href="#' + name + '" data-toggle="tab">' + title + '</a>'); //li.append('<span aria-hidden="true">X</span>');
	// add the li to the ul
	$('#myTab').append(li);
	
	// add the tab content
	var content = $('<div role="tabpanel" class="tab-pane" id="' + name + '"/>');
	$('#myTabContents').append(content);
}

// destroy tab
function deleteTab(name) {
	$('#myTab li a[href="#'+ name +'"]').parents('li').remove();
	$('#'+name).remove();
	$("#myTab a:last").tab('show');
}

function deleteAllSavedBuilds(savedBuilds) {
	for(var i=0; i<savedBuilds.length; i++) {
		deleteTab("build"+savedBuilds[i].id);
	}
}

// create tabs and populate with all monster builds data
function displayAllSavedBuilds(gridRunes, gridMons, savedBuilds) {
	for(var i=0; i<savedBuilds.length; i++) {
		addTab("build"+savedBuilds[i].id, "Build "+savedBuilds[i].id);
		displayMonsterBuild(gridRunes, gridMons, "build"+savedBuilds[i].id, savedBuilds[i].build, savedBuilds[i].id);
	}
}

// populate a tab with html and monster build data
function displayMonsterBuild(gridRunes, gridMons, newTabName, monster, buildId) {
	var newHtml = '<div class="panel panel-default" >\
	<div class="panel-heading">\
	<div class="row">\
	<div class="col-md-12">\
	<div class="right">\
		<button type="submit" class="deleteTab btn btn-danger btn-xs" data-name="' + newTabName + '" data-id="' + buildId + '">Remove</button>\
		<!--<a href="#" data-name="' + newTabName + '" data-id="' + buildId + '" class="deleteTab">Remove</a>-->\
		<button type="submit" class="buildLockRunes btn btn-primary btn-xs" data-ids="' + monster.rune_ids + '">Lock runes</button>\
		<button type="submit" class="buildUnlockRunes btn btn-primary btn-xs" data-ids="' + monster.rune_ids + '">Unlock runes</button>\
		<button type="submit" class="buildEquipRunes btn btn-primary btn-xs" data-monsterid="' + monster.id + '" data-monstername="' + monster.name + '" data-ids="' + monster.rune_ids + '">Equip runes</button>\
	</div>\
	</div>\
	</div>\
	Rune build for <strong>' + monster.name + '</strong> with runes <strong>' + monster.rune_ids + '</strong></div>\
	<div class="panel-body">\
	<div class="row">\
		<div class="col-md-3">\
			<div class="panel panel-default"">\
				<div class="panel-heading">Total set bonuses</div>\
				<div class="panel-body" id="' + newTabName + '_panel1">\
				\
				</div>\
			</div>\
		</div>\
		\
		<div class="col-md-3">\
			<div class="panel panel-default">\
				<div class="panel-heading">Total monster stats</div>\
				<div class="panel-body" id="' + newTabName + '_panel2">\
					\
				</div>\
			</div>\
		</div>\
		\
		<div class="col-md-6">\
			<div class="panel panel-default">\
				<div class="panel-heading">Equipped runes</div>\
				<div class="panel-body" id="' + newTabName + '_panel3">\
				\
					<div class="row">\
						\
						<div class="col-md-4">\
							<br/><br/>\
							<div id="' + newTabName + '_m6_rune"></div>\
							\
						</div>\
						<div class="col-md-4">\
								<div id="' + newTabName + '_m1_rune"></div>\
						</div>\
						\
						<div class="col-md-4">\
							<br/><br/>\
							<div id="' + newTabName + '_m2_rune"></div>\
						</div>\
						\
						\
					</div>\
					\
					<br/>\
					<div class="row">\
\
						<div class="col-md-4">\
							<div id="' + newTabName + '_m5_rune"></div>\
						</div>\
						\
						<div class="col-md-4">\
							<br/><br/>\
							<div id="' + newTabName + '_m4_rune"></div>\
							\
						</div>\
						<div class="col-md-4">\
							<div id="' + newTabName + '_m3_rune"></div>\
						</div>\
						\
						\
					</div>\
				</div>\
			</div>\
		</div>\
		\
	</div>\
	</div>\
	</div>';
	
	$('#'+newTabName).html(newHtml);
	displayMonsterSetBonuses(newTabName + '_panel1', monster);
	displayMonsterActualStats(newTabName + '_panel2', monster);
	
	for(var i=1; i<=6; i++) {
		slotRune = null;
		if(monster.rune_ids[i-1] != "-")
			slotRune = getRowDataById(gridRunes, monster.rune_ids[i-1]);
		displayRuneSlot(newTabName + "_m"+i+"_rune", slotRune, i, false);		
	}
	
	$('.deleteTab').on( 'click', function(e) {
		e.preventDefault();
		deleteTab($(this).data("name"));
		
		savedBuilds = JSON.parse($('#savedBuilds').val());
		savedBuilds = removeObjectFromArrayByProperty(savedBuilds, "id", $(this).data("id"));
		$('#savedBuilds').val(JSON.stringify(savedBuilds));
		var dataString = exportData(gridRunes, gridMons);
	  localStorage.setItem(localDataName, dataString);
	});
	
	$('.buildLockRunes').on( 'click', function(e) {
		e.preventDefault();
		
		var runes = [];
		if($(this).data("ids") != "") {
			runes = $(this).data("ids").split(",");
			for(var i=0; i<runes.length; i++) {
				runes[i] = Number(runes[i]);
			}
			gridRunes.data().each( function (d) {
				if(jQuery.inArray( d.id, runes ) >= 0) {
					d.locked = 1;
				}
			});
			gridRunes.rows().invalidate().draw();
			var dataString = exportData(gridRunes, gridMons);
			localStorage.setItem(localDataName, dataString);
		}
	});
	
	$('.buildUnlockRunes').on( 'click', function(e) {
		e.preventDefault();
		
		var runes = [];
		if($(this).data("ids") != "") {
			runes = $(this).data("ids").split(",");
			for(var i=0; i<runes.length; i++) {
				runes[i] = Number(runes[i]);
			}
			gridRunes.data().each( function (d) {
				if(jQuery.inArray( d.id, runes ) >= 0) {
					d.locked = 0;
				}
			});
			gridRunes.rows().invalidate().draw();
			var dataString = exportData(gridRunes, gridMons);
			localStorage.setItem(localDataName, dataString);
		}
	});
	
	$('.buildEquipRunes').on( 'click', function(e) {
		e.preventDefault();
		
		var runes = [];
		var monsterId = Number($(this).data("monsterid"));
		var monsterName = $(this).data("monstername");
		if($(this).data("ids") != "" && monsterName != "") {
			runes = $(this).data("ids").split(",");
			for(var i=0; i<runes.length; i++) {
				runes[i] = Number(runes[i]);
			}
			gridRunes.data().each( function (d) {
				if(d.monster == monsterId ) {
					d.monster = 0;
					d.monster_n = "-";
				}
				if(jQuery.inArray( d.id, runes ) >= 0) {
					d.monster = monsterId;
					d.monster_n = monsterName;
				}
			});
			gridRunes.rows().invalidate().draw();
			var dataString = exportData(gridRunes, gridMons);
			localStorage.setItem(localDataName, dataString);
		}
	});
	
}

// ----------------------------- PAGE VARIABLES, EVENTS AND LOGIC
$(document).ready(function(){
	var nextRuneId = 0;
	var nextMonsId = 0;
	var nextBuildId = 0;
	var runesFirstActivate = true;
	var monsFirstActivate = true;
	var optFirstActivate = true;
	
	var savedBuilds = [];
	$('#savedBuilds').val(JSON.stringify(savedBuilds));

	var gridRunes = initRunesTable([]);
	var gridMons = initMonstersTable([]);
	//var gridOpt1 = initOpt1Table([]);
	//var gridOpt2 = initOpt2Table([]);
	gridOpt = initOptTable([]);
	
	// AUTO load last saved data from localStorage
	// var localData = $.cookie(localDataName);
	var localData = localStorage.getItem(localDataName);
	if( localData != null && localData != "") {
		var allData = JSON.parse( localData );
		allData.runes = fixImportRunes(allData.runes);
		
		gridRunes = initRunesTable(allData.runes);
		gridMons = initMonstersTable(allData.mons);
		nextRuneId = findMaxId(allData.runes);
		nextMonsId = findMaxId(allData.mons);
		
		if(allData.savedBuilds) {
			savedBuilds = allData.savedBuilds;
			displayAllSavedBuilds(gridRunes, gridMons, savedBuilds);
			nextBuildId = findMaxId(allData.savedBuilds);
		}
		$('#savedBuilds').val(JSON.stringify(savedBuilds));
		
		$('#exportimport').val(localData);
		$('#import_export_message').html('<br/><strong>NOTICE: The following data was automatically imported from browser cache. Total imported runes: ' +allData.runes.length+'; Total imported monsters: '+allData.mons.length+'.</strong>');
	}
	
	replaceMonstersInSelect("rune_monster", gridMons, true);
	replaceMonstersInSelect("opt_monster", gridMons, true);
	
	// row select for runes table
	$('#grid_runes tbody').on( 'click', 'tr', function (e) {
		e.preventDefault();
		if ( $(this).hasClass('selected') ) {
			$(this).removeClass('selected');
			$("#rune_id").val("");
			$("#rune_update").attr("disabled",true);
		}
		else {
			gridRunes.$('tr.selected').removeClass('selected');
			
			var selectedRune = gridRunes.row( $(this) ).data();
			if(selectedRune) {
				var startTime = new Date().getTime();
				
				$(this).addClass('selected');
				//not needed here because we do not modify the original
				//selectedRune = JSON.parse(JSON.stringify(selectedRune));
				displayRune(selectedRune);
				displayRuneSlot("rune_preview", selectedRune, selectedRune.slot, false);
				$("#rune_update").attr("disabled",false);
				
				var endTime = new Date().getTime();
				var time = endTime - startTime;
				$("#rune_time").html("Rune loaded in "+ time + "ms");
			}
		}
	});
	
	// rune lock button
	$('#grid_runes tbody').on( 'click', 'a.lockRune', function (e) {
		e.preventDefault();
		if($(this).data("locked") == "0") {
			$(this).find('img').attr('src',"images/Locked.png");
			$(this).data("locked","1");
			var rune = gridRunes.row( $(this).parents('tr') ).data();
			rune.locked = 1;
		}else	if($(this).data("locked") == "1") {
			$(this).find('img').attr('src',"images/UnLocked.png");
			$(this).data("locked","0");
			var rune = gridRunes.row( $(this).parents('tr') ).data();
			rune.locked = 0;
		}
		gridRunes.rows().invalidate();
		var dataString = exportData(gridRunes, gridMons);
	  localStorage.setItem(localDataName, dataString);
	});
	
	// row select for monsters table
	$('#grid_monsters tbody').on( 'click', 'tr', function (e) {
		e.preventDefault();
		if ( $(this).hasClass('selected') ) {
			$(this).removeClass('selected');
			$("#monster_id").val("");
			$("#monster_update").attr("disabled",true);
		}
		else {
			gridMons.$('tr.selected').removeClass('selected');
			
			var selectedMonster = gridMons.row( $(this) ).data();
			if(selectedMonster) {
				var startTime = new Date().getTime();
				
				$(this).addClass('selected');
				$("#monster_update").attr("disabled",false);
				selectedMonster = JSON.parse(JSON.stringify(selectedMonster));
				
				var monster_x = extendMonster(selectedMonster, getRunesWithMons(gridRunes,selectedMonster.id));
				displayMonster(monster_x);
				displayMonsterSetBonuses("monster_panel1", monster_x);
				displayMonsterActualStats("monster_panel2", monster_x);

				for(var i=1; i<=6; i++) {
					slotRune = null;
					if(monster_x.rune_ids[i-1] != "-")
						slotRune = getRowDataById(gridRunes, monster_x.rune_ids[i-1]);
					displayRuneSlot("m"+i+"_rune", slotRune, i, false);				
				}
				
				var endTime = new Date().getTime();
				var time = endTime - startTime;
				$("#monster_time").html("Monster loaded in "+ time + "ms");
			}
			
		}
	});
	
	// delete row from runes table
	$('#grid_runes tbody').on( 'click', 'a.del_row', function (e) {
		e.preventDefault();
		if (confirm('Delete this rune?')) {
			var currPage = gridRunes.page();
			gridRunes
				.row( $(this).parents('tr') )
				.remove()
				.draw();
			gridRunes.page(currPage).draw(false);
			var dataString = exportData(gridRunes, gridMons);
	        localStorage.setItem(localDataName, dataString);
		}
	});
	
	// delete monster from runes table
	$('#grid_monsters tbody').on( 'click', 'a.del_row', function (e) {
		e.preventDefault();
		if (confirm('Delete this monster?')) {
			var currPage = gridMons.page();
			gridMons
				.row( $(this).parents('tr') )
				.remove()
				.draw();
			gridMons.page(currPage).draw(false);
			replaceMonstersInSelect("rune_monster", gridMons, true);
			replaceMonstersInSelect("opt_monster", gridMons, true);
			var dataString = exportData(gridRunes, gridMons);
	        localStorage.setItem(localDataName, dataString);
		}
	});

	
	// ----------------------------- "Rune details" panel buttons
	// button Create rune
	$('#rune_create').on( 'click', function(e) {
		e.preventDefault();
		if( $("#rune_set").val() == "" || $("#rune_slot").val() == "" || $("#rune_grade").val() == ""	|| $("#rune_level").val() == "" || $("#rune_mainvalue").val() == ""){
			alert("Set type, slot, level, grade and main stat are required.");
			return false;
		}
		nextRuneId = createRune(gridRunes,nextRuneId);
		var dataString = exportData(gridRunes, gridMons);
	  localStorage.setItem(localDataName, dataString);
		alert("Rune created.");
	});
	
	// button Update rune
	$('#rune_update').on( 'click', function(e) {
		e.preventDefault();
		if( $("#rune_set").val() == "" || $("#rune_slot").val() == "" || $("#rune_grade").val() == ""	|| $("#rune_level").val() == "" || $("#rune_mainvalue").val() == ""){
			alert("Set type, slot, level, grade and main stat are required.");
			return false;
		}
		updateRune(gridRunes);
		var dataString = exportData(gridRunes, gridMons);
	  localStorage.setItem(localDataName, dataString);
	});
	
	// button Clear rune fields
	$('#rune_clear').on( 'click', function(e) {
		e.preventDefault();
		gridRunes.$('tr.selected').removeClass('selected');
		$("#rune_update").attr("disabled",true);
		displayRune(emptyRune);
		$("#rune_set").val('Energy');
		$("#rune_monster").val(0);
		$("#rune_maintype").val('SPD');
	});
	
	// change main stat base on rune slot
	$("#rune_slot").keyup(function() {
		if($("#rune_slot").val() == "1") {
			$("#rune_maintype").val("ATK flat");
		}
		else if($("#rune_slot").val() == "3") {
			$("#rune_maintype").val("DEF flat");
		}
		else if($("#rune_slot").val() == "5") {
			$("#rune_maintype").val("HP flat");
		}
		populateRuneMainStat();
	});
	
	// auto populate main stat
	$("#rune_level").keyup(function() {
		populateRuneMainStat();
	});
	$("#rune_grade").keyup(function() {
		populateRuneMainStat();
	});
	$("#rune_maintype").change(function() {
		populateRuneMainStat();
	});
	
	// clear fields for Value if type is set to "-"
	$('#rune_innatetype').on( 'change', function(e) {
		if($("#rune_innatetype").val() == "") {
			$("#rune_innatevalue").val("");
		}
	});
	$('#rune_stat1type').on( 'change', function(e) {
		if($("#rune_stat1type").val() == "") {
			$("#rune_stat1value").val("");
		}
	});
	$('#rune_stat2type').on( 'change', function(e) {
		if($("#rune_stat2type").val() == "") {
			$("#rune_stat2value").val("");
		}
	});
	$('#rune_stat3type').on( 'change', function(e) {
		if($("#rune_stat3type").val() == "") {
			$("#rune_stat3value").val("");
		}
	});
	$('#rune_stat4type').on( 'change', function(e) {
		if($("#rune_stat4type").val() == "") {
			$("#rune_stat4value").val("");
		}
	});
	
		
	// ----------------------------- "Monster details" panel buttons
	// button Create monster
	$('#monster_create').on( 'click', function(e) {
		e.preventDefault();
		if( $("#monster_name").val() == "" || $("#monster_level").val() == "" || $("#monster_hp").val() == ""	|| $("#monster_atk").val() == "" || $("#monster_def").val() == "" || $("#monster_spd").val() == "" || $("#monster_crate").val() == "" || $("#monster_cdmg").val() == "" || $("#monster_res").val() == "" || $("#monster_acc").val() == ""){
			alert("All fields are required.");
			return false;
		}
		nextMonsId = createMonster(gridMons,nextMonsId);
		replaceMonstersInSelect("rune_monster", gridMons, true);
		replaceMonstersInSelect("opt_monster", gridMons, true);
		var dataString = exportData(gridRunes, gridMons);
	  localStorage.setItem(localDataName, dataString);
		alert("Monster created.");
	});
	
	// button Update monster
	$('#monster_update').on( 'click', function(e) {
		e.preventDefault();
		if( $("#monster_name").val() == "" || $("#monster_level").val() == "" || $("#monster_hp").val() == ""	|| $("#monster_atk").val() == "" || $("#monster_def").val() == "" || $("#monster_spd").val() == "" || $("#monster_crate").val() == "" || $("#monster_cdmg").val() == "" || $("#monster_res").val() == "" || $("#monster_acc").val() == ""){
			alert("All fields are required.");
			return false;
		}
		updateMonster(gridMons);
		replaceMonstersInSelect("rune_monster", gridMons, true);
		replaceMonstersInSelect("opt_monster", gridMons, true);
		var dataString = exportData(gridRunes, gridMons);
	  localStorage.setItem(localDataName, dataString);
	});
	
	// button Clear monster fields
	$('#monster_clear').on( 'click', function(e) {
		e.preventDefault();
		gridMons.$('tr.selected').removeClass('selected');
		$("#monster_update").attr("disabled",true);
		displayMonster(emptyMonster);
	});

	
	// ----------------------------- "Export/Import" buttons
	$('#btn_export').on( 'click', function(e) {
		e.preventDefault();
		var dataString = exportData(gridRunes, gridMons);
		localStorage.setItem(localDataName, dataString);
		//$.cookie(localDataName, dataString);
		$('#exportimport').val( dataString );
	});
	
	$('#btn_import').on( 'click', function(e) {
		e.preventDefault();
		var allData = JSON.parse( $('#exportimport').val() );
		allData.runes = fixImportRunes(allData.runes);
		
		gridRunes = initRunesTable(allData.runes);
		gridMons = initMonstersTable(allData.mons);
		nextRuneId = findMaxId(allData.runes);
		nextMonsId = findMaxId(allData.mons);
		
		// delete all current build tabs
		deleteAllSavedBuilds(savedBuilds);
		
		if(allData.savedBuilds) {
			savedBuilds = allData.savedBuilds;
			displayAllSavedBuilds(gridRunes, gridMons, savedBuilds);
			nextBuildId = findMaxId(allData.savedBuilds);
			$('#savedBuilds').val(JSON.stringify(savedBuilds));
		}
		
		$('#import_export_message').html('<br/><strong>Total imported runes: ' +allData.runes.length+'; Total imported monsters: '+allData.mons.length+'.</strong>');
		
		replaceMonstersInSelect("rune_monster", gridMons, true);
		replaceMonstersInSelect("opt_monster", gridMons, true);
	});
	
	
	// ----------------------------- "Optimizer" panel buttons
	// show the selected monster base stats
	$('#opt_monster').on( 'change', function(e) {
		var newId = $('#opt_monster').val();
		var monster = getRowDataById(gridMons, newId);
		if(monster == null){
			monster = emptyMonster;
		}
		displayMonsterOpt(monster);
	});
	
	// perform the optimizations
	$('#rune_optimize').on( 'click', function(e) {
		e.preventDefault();
		
		optimize(gridRunes, gridMons, false);
	});
	
	$('#rune_optimize_abort').on( 'click', function(e) {
		e.preventDefault();
		clearTimeout(asyncProcess);
	});
		
		// preview a build in separate tab
	$('#grid_opt tbody').on( 'click', 'tr a.previewBuild', function (e) {
		e.preventDefault();
		nextBuildId++;
		var monster_x = gridOpt.row( $(this).parents('tr')).data();
		savedBuilds = JSON.parse($('#savedBuilds').val());
		savedBuilds.push( {"id":nextBuildId, "build":monster_x} );
		$('#savedBuilds').val(JSON.stringify(savedBuilds));
		
		var newTabName = "build"+nextBuildId;
		addTab(newTabName, "Build " + nextBuildId);
		displayMonsterBuild(gridRunes, gridMons, newTabName, monster_x, nextBuildId);
		$("#myTab a:last").tab('show');
		var dataString = exportData(gridRunes, gridMons);
	    localStorage.setItem(localDataName, dataString);
	});
	
	// switch between Actual and +15 stats
	$('body').on('click', '#showActual', function (e) {
		e.preventDefault();
		$('#optStatHeader').html('<center><strong style="font-size: x-large;">Actual stats </strong> / <a href="#" id="showPlus15"> +15 stats </a></center>');
		toggleVisibility(gridOpt, [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
	});
	
	// switch between Actual and +15 stats
	$('body').on('click', '#showPlus15', function (e) {
		e.preventDefault();
		$('#optStatHeader').html('<center><a href="#" id="showActual">Actual stats </a> / <strong style="font-size: x-large;">+15 stats </strong></center>');
		toggleVisibility(gridOpt, [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
	});
	 
	// adjust header widths on tab activation 
	/*$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var target = $(e.target).attr("href") // activated tab
		if(target === "#runes" && runesFirstActivate) {
			gridRunes.columns.adjust().draw();
			runesFirstActivate = false;
		}else if(target === "#monsters" && monsFirstActivate) {
			gridMons.columns.adjust().draw();
			monsFirstActivate = false;
		}else if(target === "#optimizer" && optFirstActivate) {
			gridOpt1.columns.adjust().draw();
			gridOpt2.columns.adjust().draw();
			optFirstActivate = false;
		}
	});*/

	// perform the optimizations
	$('#rune_optimize_focus').on( 'click', function(e) {
		e.preventDefault();
		
		optimize(gridRunes, gridMons, true);
	});
	
	$('#rune_optimize_abort_focus').on( 'click', function(e) {
		e.preventDefault();
		clearTimeout(asyncProcess);
	});
	
	// clear optimizer filter
	$('#rune_optimize_filter_clear').on( 'click', function(e) {
		e.preventDefault();
		var stats = ["hp","atk","def","spd","crate","cdmg","res","acc"];
		
		for(var i=0; i<8; i++) {
			$('#filter_min_' + stats[i]).val("");
			$('#filter_max_' + stats[i]).val("");
		}
	});
	
	// apply optimizer filter
	$('#rune_optimize_filter_apply').on( 'click', function(e) {
		e.preventDefault();
		gridOpt.draw();
	});
	
	// add filters in Rune table footers
	gridRunes.columns().flatten().each( function ( colIdx ) {
		if(colIdx != 0 && colIdx != 5 && colIdx != 7 && colIdx != 9 && colIdx != 10) {
    // Create the select list and search operation
    var select = $('<select />')
        .appendTo(
            gridRunes.column(colIdx).footer()
        )
        .on( 'change', function () {
            gridRunes
                .column( colIdx )
                .search( $(this).val() )
                .draw();
        } );
		select.append( $('<option value=""></option>') );
    // Get the search data for the first column and add to the select list
    gridRunes
        .column( colIdx )
        .cache( 'search' )
        .sort()
        .unique()
        .each( function ( d ) {
					select.append( $('<option value="'+d+'">'+d+'</option>') );
        } );
		}
	});

});