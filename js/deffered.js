var calculateAndDisplay = function() {
		$("#optimize_error").val("");
		$("#optimize_count").val("0");
		$("#optimize_calls_count").val("0");
		var target_optimize_calls_count = 0;
		if(allRunePermutations.length > 0) {
			$("#opt_time").html("" + moment().format('MMM Do YY HH:mm:ss') + ": Preparing builds for display. This may take some time. 0 / " + allRunePermutations.length);
			var optimize_run = parseInt($("#optimize_run").val(),10) + 1;
			$("#optimize_run").val(optimize_run);
			var runes = [];
			var dataString = gridRunes.data().each( function (d) {
				runes.push(d);
			});
			var monster = getRowDataById(gridMons, $('#opt_monster').val());
			
			function GetSomeDeferredStuff() {
				var deferreds = [];
				var step = 20000;
				/*if(allRunePermutations.length >200000)
					step = 40000;
				if(allRunePermutations.length >1000000)
					step = 100000;*/
				var j = 0;
				while( j*step < allRunePermutations.length) {
					target_optimize_calls_count++;
					deferreds.push(
						$.ajax({
							type: "POST",
							url: "optimize.php",
							cache: false,
							data: {
								"setsForAllSlots" : JSON.stringify(setsForAllSlots),
								"monster": JSON.stringify(monster),
								"requestedSetTypes" : JSON.stringify(requestedSetTypes),
								"allRunePermutations": JSON.stringify(allRunePermutations.slice( j*step, (j+1)*step )),
								"optimize_run": optimize_run,
								"focus": focusSelected,
								"sessionId": $('#sessionId').val(),
								"opt_monster": $('#opt_monster').val(),
								"opt_set1": $('#opt_set1').val(),
								"opt_slot2": $('#opt_slot2').val(),
								"opt_set2": $('#opt_set2').val(),
								"opt_slot4": $('#opt_slot4').val(),
								"opt_set3": $('#opt_set3').val(),
								"opt_slot6": $('#opt_slot6').val(),
								"opt_use_locked": $("#opt_use_locked").is(':checked'),
								"opt_only_unequipped": $("#opt_only_unequipped").is(':checked'),
								"opt_only_6star": $("#opt_only_6star").is(':checked'),
								"opt_only_56star": $("#opt_only_56star").is(':checked'),
								"opt_use_runes": $('#opt_use_runes').val(),
								"opt_not_use_runes": $('#opt_not_use_runes').val(),
								"opt_focus1": $('#opt_focus1').val(),
								"opt_focus2": $('#opt_focus2').val(),
								"opt_focus3": $('#opt_focus3').val(),
								"filter_min_hp": $('#filter_min_hp').val(),
								"filter_max_hp": $('#filter_max_hp').val(),
								"filter_min_atk": $('#filter_min_atk').val(),
								"filter_max_atk": $('#filter_max_atk').val(),
								"filter_min_def": $('#filter_min_def').val(),
								"filter_max_def": $('#filter_max_def').val(),
								"filter_min_spd": $('#filter_min_spd').val(),
								"filter_max_spd": $('#filter_max_spd').val(),
								"filter_type_div": $("#filter_type_div input[type='radio']:checked").val(),
								"filter_min_crate": $('#filter_min_crate').val(),
								"filter_max_crate": $('#filter_max_crate').val(),
								"filter_min_cdmg": $('#filter_min_cdmg').val(),
								"filter_max_cdmg": $('#filter_max_cdmg').val(),
								"filter_min_res": $('#filter_min_res').val(),
								"filter_max_res": $('#filter_max_res').val(),
								"filter_min_acc": $('#filter_min_acc').val(),
								"filter_max_acc": $('#filter_max_acc').val()
							},
							dataType: "json",
							success: function(data){
								data = JSON.parse(data);
								var optimize_count = parseInt($("#optimize_count").val(),10) + data.id;
								$("#optimize_count").val(optimize_count);
								var optimize_calls_count = parseInt($("#optimize_calls_count").val(),10) + 1;
								$("#optimize_calls_count").val(optimize_calls_count);
								$("#opt_time").html("" + moment().format('MMM Do YY HH:mm:ss') + ": Preparing builds for display. This may take some time. " + optimize_count + " / " + allRunePermutations.length);
								return 1;
							},
							error: function(jqXHR, textStatus, errorThrown){
								var optimize_calls_count = parseInt($("#optimize_calls_count").val(),10) + 1;
								$("#optimize_calls_count").val(optimize_calls_count);
								$("#optimize_error").val("An unexpected error occured.");
								return 1;
							},
							statusCode: {
						     	500: function() {
										var optimize_calls_count = parseInt($("#optimize_calls_count").val(),10) + 1;
										$("#optimize_calls_count").val(optimize_calls_count);
						     		$("#optimize_error").val("An unexpected error occured.");
										return 1;
						    	}
						    },
						})
					);
					j++;
				}				
				return deferreds;
			}
			var deferreds = GetSomeDeferredStuff();
			$.when.apply(null, deferreds).then(function() {
				if($("#optimize_error").val() != "") {
					$("#opt_time").html("" + moment().format('MMM Do YY HH:mm:ss') + ": " + $("#optimize_error").val() + " Some of the builds failed to calculate and display.");
				}else {
					var endTime = new Date().getTime();
					var time = endTime - startTime;
					$("#opt_time").html("" + moment().format('MMM Do YY HH:mm:ss') + ": " + parseInt($("#optimize_count").val(),10) +" Builds loaded in "+ time + "ms.");
				}
				gridOpt.draw();
       });

		}else {
			var endTime = new Date().getTime();
			var time = endTime - startTime;
			$("#opt_time").html("" + moment().format('MMM Do YY HH:mm:ss') + ": No possible builds found.");
			gridOpt.rows().clear().draw();
		}
	};