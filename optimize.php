<?php
ini_set('display_errors',0);
error_reporting(0);
header('Content-Type: application/json');

$allSets = array( 
	"Energy"=> array(2, "HP%", 15), 
	"Fatal"=>array(4, "ATK%", 35), 
	"Blade"=>array(2, "CRate",12), 
	"Rage"=>array(4, "CDmg", 40), 
	"Swift"=>array(4, "SPD%", 25), 
	"Focus"=>array(2, "ACC", 20), 
	"Guard"=>array(2, "DEF%", 15), 
	"Endure"=>array(2, "RES", 20), 
	"Violent"=>array(4, "", ""), 
	"Will"=>array(2, "", ""), 
	"Nemesis"=>array(2, "", ""), 
	"Shield"=>array(2, "", ""), 
	"Revenge"=>array(2, "", ""), 
	"Despair"=>array(4, "", ""), 
	"Vampire"=>array(4, "", ""), 
	"Destroy"=>array(2, "", "") 
); 

$allStatsMax = array(
	"SPD"=>array( "g1"=>18, "g2"=>19, "g3"=>25, "g4"=>30, "g5"=>39, "g6"=>42),
	"ATK flat"=>array( "g1"=>54, "g2"=>74, "g3"=>93, "g4"=>113, "g5"=>135, "g6"=>160),
	"ATK%"=>array( "g1"=>18, "g2"=>20, "g3"=>38, "g4"=>43, "g5"=>51, "g6"=>63),
	"HP%"=>array( "g1"=>18, "g2"=>20, "g3"=>38, "g4"=>43, "g5"=>51, "g6"=>63),
	"HP flat"=>array( "g1"=>804, "g2"=>1092, "g3"=>1380, "g4"=>1704, "g5"=>2088, "g6"=>2448),
	"DEF%"=>array( "g1"=>18, "g2"=>20, "g3"=>38, "g4"=>43, "g5"=>51, "g6"=>63),
	"DEF flat"=>array( "g1"=>54, "g2"=>74, "g3"=>93, "g4"=>113, "g5"=>136, "g6"=>160),
	"CRate"=>array( "g1"=>18, "g2"=>20, "g3"=>37, "g4"=>41, "g5"=>47, "g6"=>58),
	"CDmg"=>array( "g1"=>20, "g2"=>37, "g3"=>43, "g4"=>58, "g5"=>65, "g6"=>80),
	"RES"=>array( "g1"=>18, "g2"=>20, "g3"=>38, "g4"=>44, "g5"=>51, "g6"=>64),
	"ACC"=>array( "g1"=>18, "g2"=>20, "g3"=>38, "g4"=>44, "g5"=>51, "g6"=>64)
);

function newResult() {
	return array("success"=>false, "id"=>0, "error"=>"Unexpected error", "data"=>"", "redirect"=>"", "field_errors"=>"");
}

// ----------------------------- Optimizer functions
function getRowDataById($allRunes, $id) {
	foreach($allRunes as $rune) {
		if($rune["id"] == $id)
			return $rune;
	}
	return null;
}

// removes duplicated runes from array
function arrayOfRunesUnique($array) {
	$result = array_unique($array);
  return $result;
}

function totalRunes($data) {
	$count = 0;
	foreach ($data as $k => $v) {
    $count += $v;
	}

	return $count;
}

// valuate if a rune is focus worthy
function isRuneFocusWorthy($d, $focus1, $focus2, $focus3) {
	// judge slots 2,4 and 6 by mainstat, if the mainstat for the slot is not selected
	if( ($d["slot"] == 2 && $_POST["opt_slot2"] == "") || ($d["slot"] == 4 && $_POST["opt_slot4"] == "") || ($d["slot"] == 6 && $_POST["opt_slot6"] == "") ) {
		if( strrpos($focus1, $d["m_t"]) > -1 || strrpos($focus2, $d["m_t"]) > -1 || strrpos($focus3, $d["m_t"]) > -1 )
			return true;
	}

	// judge slots 1,3 and 5 by substats only
	if( $d["i_t"] != "" && ( strrpos($focus1, $d["i_t"]) > -1 || strrpos($focus2, $d["i_t"]) > -1 || strrpos($focus3, $d["i_t"]) > -1 ))
		return true;
	if( $d["s1_t"] != "" && ( strrpos($focus1, $d["s1_t"]) > -1 || strrpos($focus2, $d["s1_t"]) > -1 || strrpos($focus3, $d["s1_t"]) > -1 ))
		return true;
	if( $d["s2_t"] != "" && ( strrpos($focus1, $d["s2_t"]) > -1 || strrpos($focus2, $d["s2_t"]) > -1 || strrpos($focus3, $d["s2_t"]) > -1 ))
		return true;
	if( $d["s3_t"] != "" && ( strrpos($focus1, $d["s3_t"]) > -1 || strrpos($focus2, $d["s3_t"]) > -1 || strrpos($focus3, $d["s3_t"]) > -1 ))
		return true;
	if( $d["s4_t"] != "" && ( strrpos($focus1, $d["s4_t"]) > -1 || strrpos($focus2, $d["s4_t"]) > -1 || strrpos($focus3, $d["s4_t"]) > -1 ))
		return true;

	// if everything failed, check if the rune set bonus equals any focus
	/*if( allSets[d.set][1].indexOf(focus1) > -1 || allSets[d.set][1].indexOf(focus2) > -1 || allSets[d.set][1].indexOf(focus3) > -1)
		return true;*/
		
	return false;
}

// valuate which of 2 runes is better regarding focuses
/*function compare2RunesByFocus($rune1, $rune2, $focus1, $focus2, $focus3) {
	$bonuses1 = array();
	$bonuses2 = array();
	$bonuses1.push( getRuneBonuses(rune1, focus1) );
	bonuses1.push( getRuneBonuses(rune1, focus2) );
	bonuses1.push( getRuneBonuses(rune1, focus3) );
	bonuses2.push( getRuneBonuses(rune2, focus1) );
	bonuses2.push( getRuneBonuses(rune2, focus2) );
	bonuses2.push( getRuneBonuses(rune2, focus3) );
	
	$totalBonuses1 = [ bonuses1[0][0] + bonuses1[1][0] + bonuses1[2][0] , bonuses1[0][1] + bonuses1[1][1] + bonuses1[2][1] ];
	$totalBonuses2 = [ bonuses2[0][0] + bonuses2[1][0] + bonuses2[2][0] , bonuses2[0][1] + bonuses2[1][1] + bonuses2[2][1] ];
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
	
}*/

/*function pickCandidateRunes($allRunes, $requestedSetTypes, $monsterId, $focusSelected) {
	// create 6 empty sets
	$resultSets = array( array(),array(),array(),array(),array(),array() );
	
	$requestedSetNumber = totalRunes($requestedSetTypes);
	$notWantedRuneIds = array();
	$wantedRuneIds = array();
	$wantedRuneSlots = array();
	if($('#opt_use_runes').val() != "") {
		$wantedRuneIds = explode($_POST["opt_use_runes"],",");
		for($i=0; $i<count($wantedRuneIds); $i++) {
			$wantedRuneIds[i] = intval($wantedRuneIds[$i]);
			$wantedRune = getRowDataById($allRunes, $wantedRuneIds[$i]);
			$wantedRuneSlots[] = $wantedRune["slot"];
		}
	}
	if($_POST["opt_not_use_runes"]!= "") {
		$notWantedRuneIds = explode($_POST["opt_not_use_runes"],",");
		for($i=0; $i<count($notWantedRuneIds); $i++) {
			$notWantedRuneIds[$i] = intval($notWantedRuneIds[$i]);
		}
	}
	
	//focuses
	$resultSetsFromRequestSets = array(
		array( array(),array(),array(),array(),array(),array() ), 
		array( array(),array(),array(),array(),array(),array() ),
		array( array(),array(),array(),array(),array(),array() )
	);
	$focus1 = $_POST["opt_focus1"]; if($focus1 == "") $focus1 = null;
	$focus2 = $_POST["opt_focus2"]; if($focus2 == "") $focus2 = null;
	$focus3 = $_POST["opt_focus3"]; if($focus3 == "") $focus3 = null;
	$setLimit = $focusRuneSlotCount / 2;
	$generalLimit = $focusRuneSlotCount;
	if( $requestedSetNumber >0 )
		$generalLimit = $focusRuneSlotCount / 2;
	
	foreach($allRunes as $d) {
	
		// check if rune is requested by id and add it
		if( in_array( $d["id"], $wantedRuneIds)) {
			$resultSets[$d["slot"]-1][] = $d;
			continue;
		}
		// check if rune is not requested by id and there is requested rune for that slot
		else {
			if(in_array( $d["slot"], $wantedRuneSlots )) {
				continue;
			}
		}
		
		// check if rune is requested by id to not be used
		if( in_array( $d["id"], $notWantedRuneIds )) {
			continue;
		}
	
		// check if rune is locked
		if($d["locked"] == 1 && $_POST["opt_use_locked"] == "false" ) {
			if($d["monster"] != $monsterId)
				continue;
		}
	
    // check if rune is equipped by monster
		if($d["monster"] != "" && $_POST["opt_only_unequipped"] == "true" ) {
			// pick the ones already equipped on the monster
			if($d["monster"] != $monsterId)
				continue;
		}
		// if the requested set types slots sum up to 6 (energy + vampire = 6; energy + focus = 4) reject runes not from those sets
		if($requestedSetNumber == 6 && $requestedSetTypes[$d["set"]] == 0) {
			continue;
		}
		// if slot is 2, 4 or 6 and there are preferences for it, refuse 
		if( ($d["slot"] == 2 && $_POST["opt_slot2"] != "" && $_POST["opt_slot2"] !== $d["m_t"]) ||
				($d["slot"] == 4 && $_POST["opt_slot4"] != "" && $_POST["opt_slot4"] !== $d["m_t"]) ||
				($d["slot"] == 6 && $_POST["opt_slot6"] != "" && $_POST["opt_slot6"] !== $d["m_t"])) {
			continue;
		}
		if( $_POST["opt_only_6star"] == "true" && $d["grade"] != 6 && ($d["slot"] == 2 || $d["slot"] == 4 || $d["slot"] == 6 )) {
			continue;
		}
		if( $_POST["opt_only_56star"] == "true" && $d["grade"] != 6 && $d["grade"] != 5 ) {
			continue;
		}
		
		if($focusSelected == 0) {
			$resultSets[$d["slot"]-1][] = $d;
		}
		else {
			// if there are no runes, push the first one
			if( count($resultSets[$d["slot"]-1]) == 0)
				$resultSets[$d["slot"]-1][] = $d;
			else {
				// if there are more runes than the limit check if rune is worthy to consider based on focus
				if( count($resultSets[$d["slot"]-1]) >= $generalLimit && !isRuneFocusWorthy($d, $focus1, $focus2, $focus3))
					continue;
				// evaluate the place for the new rune based on focuses	
				for($i = count($resultSets[$d["slot"]-1])-1; $i>=0 ; $i--) {
					$lastRune = $resultSets[$d["slot"]-1][$i];
					$compareResult = compare2RunesByFocus(lastRune, d, focus1, focus2, focus3);
					// if new rune is better than the compared
					if(compareResult == 1) {
						if(i == 0) {
							resultSets[$d["slot"]-1].splice(0, 0, d); 
							if( resultSets[$d["slot"]-1].length > generalLimit)
								resultSets[$d["slot"]-1].splice(resultSets[$d["slot"]-1].length-1, 1); 
						}
						else
							continue;
					}
					else if(compareResult == 0) {
						resultSets[$d["slot"]-1].splice(i, 0, d);
						if( resultSets[$d["slot"]-1].length > generalLimit)
								resultSets[$d["slot"]-1].splice(resultSets[$d["slot"]-1].length-1, 1);
					}
					else {
						if(i == resultSets[$d["slot"]-1].length-1) {
						}
						else {
							resultSets[$d["slot"]-1].splice(i+1, 0, d); 
							if( resultSets[$d["slot"]-1].length > generalLimit)
								resultSets[$d["slot"]-1].splice(resultSets[$d["slot"]-1].length-1, 1); 
						}
					}
					break;
				}
			}
			
			// do the same for every requested set, and join the results
			$s = 0;
			for($j in requestedSetTypes) {
				if(requestedSetTypes[j] > 0) {
					if(d.set == j) {
						// if tehre are no runes, push the first one
						if( resultSetsFromRequestSets[s][$d["slot"]-1].length == 0)
							resultSetsFromRequestSets[s][$d["slot"]-1].push( JSON.parse(JSON.stringify(d)) );
						else {
							// if there are more runes than the limit check if rune is worthy to consider based on focus
							if( resultSetsFromRequestSets[s][$d["slot"]-1].length >= setLimit && !isRuneFocusWorthy(d, focus1, focus2, focus3))
								continue;
							// evaluate the place for the new rune based on focuses	
							for($i = resultSetsFromRequestSets[s][$d["slot"]-1].length-1; i>=0 ; i--) {
								$lastRune = resultSetsFromRequestSets[s][$d["slot"]-1][i];
								$compareResult = compare2RunesByFocus(lastRune, d, focus1, focus2, focus3);
								// if new rune is better than the compared
								if(compareResult == 1) {
									if(i == 0) {
										resultSetsFromRequestSets[s][$d["slot"]-1].splice(0, 0, d); 
										if( resultSetsFromRequestSets[s][$d["slot"]-1].length > setLimit)
											resultSetsFromRequestSets[s][$d["slot"]-1].splice(resultSetsFromRequestSets[s][$d["slot"]-1].length-1, 1); 
									}
									else
										continue;
								}
								else if(compareResult == 0) {
									resultSetsFromRequestSets[s][$d["slot"]-1].splice(i, 0, d);
									if( resultSetsFromRequestSets[s][$d["slot"]-1].length > setLimit)
										resultSetsFromRequestSets[s][$d["slot"]-1].splice(resultSetsFromRequestSets[s][$d["slot"]-1].length-1, 1);
								}
								else {
									if(i == resultSetsFromRequestSets[s][$d["slot"]-1].length-1) {
									}
									else {
										resultSetsFromRequestSets[s][$d["slot"]-1].splice(i+1, 0, d); 
										if( resultSetsFromRequestSets[s][$d["slot"]-1].length > setLimit)
											resultSetsFromRequestSets[s][$d["slot"]-1].splice(resultSetsFromRequestSets[s][$d["slot"]-1].length-1, 1);
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
	
	if($focusSelected == 1) {
		for($i=0; $i<3; $i++) {
			for($j=0; $j<6; $j++) {
				$resultSets[$j] = arrayOfRunesUnique( array_merge($resultSets[$j], $resultSetsFromRequestSets[$i][$j]));
			}
		}
	}
	
	return $resultSets;
}
*/

// ----------------------------- CALCULATE MONSTER ACTUAL STATS FUNCTIONS
// extend a basic monster with 0 valies
function emptyExtend($monster) {
	return array_merge($monster, array( "a_hp"=>0,"a_atk"=>0,"a_def"=>0,"a_spd"=>0,"a_crate"=>0,"a_cdmg"=>0,"a_res"=>0,"a_acc"=>0,
	"m_hp"=>0,"m_atk"=>0,"m_def"=>0,"m_spd"=>0,"m_crate"=>0,"m_cdmg"=>0,"m_res"=>0,"m_acc"=>0,
	"o_hp_p"=>0, "o_hp"=>0,"o_atk_p"=>0,"o_atk"=>0,"o_def_p"=>0,"o_def"=>0,"o_spd"=>0,"o_crate"=>0,"o_cdmg"=>0,"o_res"=>0,"o_acc"=>0,
	"om_hp_p"=>0, "om_hp"=>0,"om_atk_p"=>0,"om_atk"=>0,"om_def_p"=>0,"om_def"=>0,"om_spd"=>0,"om_crate"=>0,"om_cdmg"=>0,"om_res"=>0,"om_acc"=>0,
	"substat_skillups"=>0, "rune_ids"=>"","sets"=>"","slots246"=>"" ));
}

// order the runes by slot ascending
function orderBySlots($runes) {
	$new_runes = array();
	for($i=1; $i<=6;$i++) {
		for($j=0;$j<count($runes);$j++) {
			if($runes[$j]["slot"] == $i) {
				$new_runes[] = $runes[$j];
				break;
			}
		}
	}
	return $new_runes;
}

// add the stat to monsters rune bonus stats
function addStat(& $monster, $type, $value, $add_max, $grade){
	global $allStatsMax ;

	if($type != "" || $value != "") {
		switch ($type) {
			case "SPD":
				$monster["o_spd"] += $value;
				if($add_max)
					$monster["om_spd"] += $allStatsMax[$type]["g".$grade];
				else
					$monster["om_spd"] += $value;
				break;
			case "SPD%":
				$monster["o_spd"] += ceil( $monster["b_spd"] * $value / 100);
				$monster["om_spd"] += ceil( $monster["b_spd"] * $value / 100);
				break;
			case "HP%":
				$monster["o_hp_p"] += $value;
				if($add_max)
					$monster["om_hp_p"] += $allStatsMax[$type]["g".$grade];
				else
					$monster["om_hp_p"] += $value;
				break;
			case "HP flat":
				$monster["o_hp"] += $value;
				if($add_max)
					$monster["om_hp"] += $allStatsMax[$type]["g".$grade];
				else
					$monster["om_hp"] += $value;
				break;
			case "ATK%":
				$monster["o_atk_p"] += $value;
				if($add_max)
					$monster["om_atk_p"] += $allStatsMax[$type]["g".$grade];
				else
					$monster["om_atk_p"] += $value;
				break;
			case "ATK flat":
				$monster["o_atk"] += $value;
				if($add_max)
					$monster["om_atk"] += $allStatsMax[$type]["g".$grade];
				else
					$monster["om_atk"] += $value;
				break;
			case "DEF%":
				$monster["o_def_p"] += $value;
				if($add_max)
					$monster["om_def_p"] += $allStatsMax[$type]["g".$grade];
				else
					$monster["om_def_p"] += $value;
				break;
			case "DEF flat":
				$monster["o_def"] += $value;
				if($add_max)
					$monster["om_def"] += $allStatsMax[$type]["g".$grade];
				else
					$monster["om_def"] += $value;
				break;
			case "CRate":
				$monster["o_crate"] += $value;
				if($add_max)
					$monster["om_crate"] += $allStatsMax[$type]["g".$grade];
				else
					$monster["om_crate"] += $value;
				break;
			case "CDmg":
				$monster["o_cdmg"] += $value;
				if($add_max)
					$monster["om_cdmg"] += $allStatsMax[$type]["g".$grade];
				else
					$monster["om_cdmg"] += $value;
				break;
			case "RES":
				$monster["o_res"] += $value;
				if($add_max)
					$monster["om_res"] += $allStatsMax[$type]["g".$grade];
				else
					$monster["om_res"] += $value;
				break;
			case "ACC":
				$monster["o_acc"] += $value;
				if($add_max)
					$monster["om_acc"] += $allStatsMax[$type]["g".$grade];
				else
					$monster["om_acc"] += $value;
				break;
		}
	}
}

// add all rune stat to monsters rune bonus stats
function equipRune(& $monster, $rune) {
	addStat($monster, $rune["m_t"], $rune["m_v"], true, $rune["grade"]);
	addStat($monster, $rune["i_t"], $rune["i_v"], false, $rune["grade"]);
	addStat($monster, $rune["s1_t"], $rune["s1_v"], false, null);
	addStat($monster, $rune["s2_t"], $rune["s2_v"], false, null);
	addStat($monster, $rune["s3_t"], $rune["s3_v"], false, null);
	addStat($monster, $rune["s4_t"], $rune["s4_v"], false, null);
	if($rune["level"] < 12)
		$monster["substat_skillups"] +=  floor( (14 - $rune["level"]) / 3);

	if($rune["slot"] != 1)
		$monster["rune_ids"] .= ",";
	$monster["rune_ids"] .= $rune["id"];

	// fill slot 2,4 and 6 main stats
	if($rune["slot"] == 2 || $rune["slot"] == 4 || $rune["slot"] == 6) {
		if($rune["slot"] == 4 || $rune["slot"] == 6)
			$monster["slots246"] .= ", ";
		$monster["slots246"] .= $rune["m_t"];
	}
}

// calculates actual monster stats and +15 stats based on base stats and rune bonus stats
function calculateActualAndMax(& $monster) {
	// actual
	$monster["a_hp"] = $monster["b_hp"] + ceil(( $monster["b_hp"] * $monster["o_hp_p"]) / 100) + $monster["o_hp"];
	$monster["a_atk"] = $monster["b_atk"] + ceil(( $monster["b_atk"] * $monster["o_atk_p"]) / 100) + $monster["o_atk"];
	$monster["a_def"] = $monster["b_def"] + ceil(( $monster["b_def"] * $monster["o_def_p"]) / 100) + $monster["o_def"];
	$monster["a_spd"] = $monster["b_spd"] + $monster["o_spd"];
	$monster["a_crate"] = $monster["b_crate"] + $monster["o_crate"];
	$monster["a_cdmg"] = $monster["b_cdmg"] + $monster["o_cdmg"];
	$monster["a_res"] = $monster["b_res"] + $monster["o_res"];
	$monster["a_acc"] = $monster["b_acc"] + $monster["o_acc"];
	// max
	$monster["m_hp"] = $monster["b_hp"] + ceil(( $monster["b_hp"] * $monster["om_hp_p"]) / 100) + $monster["om_hp"];
	$monster["m_atk"] = $monster["b_atk"] + ceil(( $monster["b_atk"] * $monster["om_atk_p"]) / 100) + $monster["om_atk"];
	$monster["m_def"] = $monster["b_def"] + ceil(( $monster["b_def"] * $monster["om_def_p"]) / 100) + $monster["om_def"];
	$monster["m_spd"] = $monster["b_spd"] + $monster["om_spd"];
	$monster["m_crate"] = $monster["b_crate"] + $monster["om_crate"];
	$monster["m_cdmg"] = $monster["b_cdmg"] + $monster["om_cdmg"];
	$monster["m_res"] = $monster["b_res"] + $monster["om_res"];
	$monster["m_acc"] = $monster["b_acc"] + $monster["om_acc"];
}

// determines rune set bonuses and adds them into rune bonus stats
function determineCompleteSetsAndEffects(& $monster, $runes){
	global $allSets; 

	$setCounter = array("Energy"=> 0,"Fatal"=>0,"Blade"=>0,"Rage"=>0,"Swift"=>0,"Focus"=>0,"Guard"=>0,"Endure"=>0,"Violent"=>0,"Will"=>0,"Nemesis"=>0,"Shield"=>0,"Revenge"=>0,"Despair"=>0,"Vampire"=>0,"Destroy"=>0);
	for($i=0; $i<count($runes); $i++) {
		$setCounter[$runes[$i]["set"]]++;
	}
	foreach($setCounter as $setName => $setCount) {
		while( $setCounter[$setName] >= $allSets[$setName][0]) {
			if($monster["sets"] != "" )
				$monster["sets"] .= ",";
			$monster["sets"] .= $setName;
			addStat($monster, $allSets[$setName][1], $allSets[$setName][2], false, null);
			$setCounter[$setName] -= $allSets[$setName][0];
		}
	}
}

// calculates base, actual and +15 dps based on atk, crit rate and crit dmg
function calculateAtkDps(& $monster) {
	$violentBonus = 0.248;
	$maxCritRate = 100;
	
	// calculate base dps
	/*$crate = $monster["b_crate"];
	$monster["b_dps"] = floor( ( ($maxCritRate - $crate) + $crate * (100 + $monster["b_cdmg"]) / 100 ) * $monster["b_atk"] / 100 );*/
	
	// calculate actual dps with treshold base monster speed and consider Violent
	$crate = $monster["a_crate"];
	if($crate > $maxCritRate) {
		$crate = $maxCritRate;
	}
	$monster["a_dps"] = ( ($maxCritRate - $crate) + $crate * (100 + $monster["a_cdmg"]) / 100 ) * $monster["a_atk"] / 100 ;
	$monster["a_dps"] = floor( $monster["a_dps"] * $monster["a_spd"] / $monster["b_spd"] + ( strpos($monster["sets"],"Violent") === false ? 0 : $monster["a_dps"] * $violentBonus ) );
	
	// calculate +15 dps with treshold base monster speed and consider Violent
	$crate = $monster["m_crate"];
	if($crate > $maxCritRate) {
		$crate = $maxCritRate;
	}
	$monster["m_dps"] = ( ($maxCritRate - $crate) + $crate * (100 + $monster["m_cdmg"]) / 100 ) * $monster["m_atk"] / 100;
	$monster["m_dps"] = floor( $monster["m_dps"] * $monster["m_spd"] / $monster["b_spd"] + ( strpos($monster["sets"],"Violent") === false ? 0 : $monster["m_dps"] * $violentBonus ) );
}

// calculates effective hp, actual and +15, def. broken or not, based on hp and defense
function calculateEffectiveHp(& $monster) {
//https://www.reddit.com/r/summonerswar/comments/443yk8/guide_to_maximizing_effective_hp_for_frr/
//effective hp WITHOUT defense break 	= hp*(1000+(Defense*3))/1000
//effective hp WITH defense break 		= hp*(1000+(Defense*1.5))/1000
	$defBreakMultiplier 		= 1.5;
	$noDefBreakMultiplier 	= 3;
	
	// calculate base eff. hp
	/*$monster["b_effhp"] = floor( $monster["b_hp"] * (1000 + $monster["b_def"] * $noDefBreakMultiplier) / 1000 );
	$monster["b_effhp_d"] = floor( $monster["b_hp"] * (1000 + $monster["b_def"] * $defBreakMultiplier) / 1000 );*/
	
	// calculate actual eff. hp
	$monster["a_effhp"] = floor( $monster["a_hp"] * (1000 + $monster["a_def"] * $noDefBreakMultiplier) / 1000 );
	$monster["a_effhp_d"] = floor( $monster["a_hp"] * (1000 + $monster["a_def"] * $defBreakMultiplier) / 1000 );
	
	// calculate +15 eff. hp
	$monster["m_effhp"] = floor( $monster["m_hp"] * (1000 + $monster["m_def"] * $noDefBreakMultiplier) / 1000 );
	$monster["m_effhp_d"] = floor( $monster["m_hp"] * (1000 + $monster["m_def"] * $defBreakMultiplier) / 1000 );
}

function removeUnused(& $monster){
	unset($monster["id"]);
	unset($monster["name"]);
	unset($monster["b_hp"]);
	unset($monster["b_atk"]);
	unset($monster["b_def"]);
	unset($monster["b_spd"]);
	unset($monster["b_crate"]);
	unset($monster["b_cdmg"]);
	unset($monster["b_res"]);
	unset($monster["b_acc"]);
	unset($monster["o_hp_p"]);
	unset($monster["o_hp"]);
	unset($monster["o_atk_p"]);
	unset($monster["o_atk"]);
	unset($monster["o_def_p"]);
	unset($monster["o_def"]);
	unset($monster["o_spd"]);
	unset($monster["o_crate"]);
	unset($monster["o_cdmg"]);
	unset($monster["o_res"]);
	unset($monster["o_acc"]);
	unset($monster["om_hp_p"]);
	unset($monster["om_hp"]);
	unset($monster["om_atk_p"]);
	unset($monster["om_atk"]);
	unset($monster["om_def_p"]);
	unset($monster["om_def"]);
	unset($monster["om_spd"]);
	unset($monster["om_crate"]);
	unset($monster["om_cdmg"]);
	unset($monster["om_res"]);
	unset($monster["om_acc"]);
}

// calculates all rune bonuses over a monster and returns monster_extended object
function extendMonster($monster, $runes) {
	$monster_x = emptyExtend($monster);
	for($i=0; $i<count($runes); $i++) {
		equipRune($monster_x, $runes[$i]);
	}
	determineCompleteSetsAndEffects($monster_x, $runes);
	calculateActualAndMax($monster_x);
	calculateAtkDps($monster_x);
	calculateEffectiveHp($monster_x);
	removeUnused($monster_x);
	
	return $monster_x;
}

include("dbwrapper.php");

if(!isset($_POST["setsForAllSlots"]) || !isset($_POST["monster"]) || !isset($_POST["requestedSetTypes"]) || !isset($_POST["allRunePermutations"]) || !isset($_POST["sessionId"]) || !isset($_POST["optimize_run"]) || !isset($_POST["created"]) 
|| !is_numeric($_POST["sessionId"]) || !is_numeric($_POST["optimize_run"])) {
	$ajax_result = newResult();
	echo json_encode($ajax_result);
	die();
}

try{
	$dbase = new Wrapper("graphact_sw_user","SW_start_1","localhost","graphact_sw_test",null);

	$ajax_result = newResult();
	$newRows = 0;

	$runes = json_decode($_POST["setsForAllSlots"],true);
	$monster = json_decode($_POST["monster"],true);
	$requestedSetTypes = json_decode($_POST["requestedSetTypes"],true);
	$allRunePermutations = json_decode($_POST["allRunePermutations"],true);

	// calculate rune builds for the monster and every few thousand records write results in DB
	$extendedMonsters = array();
	
	// write results in DB
	$length = count($allRunePermutations);
	$index = 0;

	$ajax_result["error"] = "";
	/*if($length > 0 && $_POST["optimize_call"] == 1){
		$before = microtime(true);
		$dbase->deleteBySession($_POST["sessionId"],$_POST["optimize_run"]);
		$after = microtime(true);
		$difference = $after - $before;
		$ajax_result["error"] .= " time delete: ".$difference;
	}*/

	$before = microtime(true);
	for ($index=0; $index < $length; $index++) {
		// make copy of the monster and extend it
		$buildRunes = array();
		for($i1=0; $i1 <6; $i1++) {
			$buildRunes[] = getRowDataById($runes[$i1],$allRunePermutations[$index][$i1]);
		}
		
		$monster_x = extendMonster( $monster, $buildRunes);
		
		$extendedMonsters[] = $monster_x;
		
		if($index == $length-1 || count($extendedMonsters) == 5000) {
			$after = microtime(true);
			$difference = $after - $before;
			
			$ajax_result["error"] .= " Memory at run ".$index.": ".memory_get_usage();
			$ajax_result["error"] .= " time calc: ".$difference;
			$before = microtime(true);
			$newRows += $dbase->newOptimization($_POST["sessionId"], $_POST["optimize_run"], $_POST["created"], $monster["id"], $extendedMonsters);
			$after = microtime(true);
			$difference = $after - $before;
			$ajax_result["error"] .= " time db: ".$difference;
			$before = microtime(true);

			unset($extendedMonsters);
			$extendedMonsters = array();
		}
	}

	$ajax_result["id"] = $newRows;
	$ajax_result["success"] = true;
	$ajax_result["error"] .= " Memory at end : ".memory_get_usage();
	$ajax_result["optimize_run"] = $_POST["optimize_run"];
	$dbase->close();
	echo json_encode($ajax_result);
}catch(Exception $e){
	$ajax_result = newResult();
	$ajax_result["optimize_run"] = $_POST["optimize_run"];
	$ajax_result["error"] = $e->getMessage();
	echo json_encode($ajax_result);
}
?>
