<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
		<title>All My SW Runes - Summoners War Rune Optimizer</title> 
		<link rel="shortcut icon" href="images/ico.jpg"/>
		
    <link href="css/bootstrap.css" rel="stylesheet">
		<link href="css/datepicker.css" rel="stylesheet">
		<link href="css/datepicker3.css" rel="stylesheet">
		<link href="css/jquery.dataTables.css" rel="stylesheet">
		<link href="css/custom_style.css" rel="stylesheet">

    <script src="js/jquery.min.js"></script>
		<script src="js/jquery.cookie.js"></script>
    <script src="js/bootstrap.min.js"></script>
		<script src="js/jquery.dataTables.min.js"></script>
		<script src="js/moment.js"></script>
		<script src="js/swrunes.js"></script>
		<script src="js/Blob.js"></script>
		<script src="js/FileSaver.js"></script>
		
		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn\'t work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  <body bgcolor=white>
		<div class="container">
		<div class="right">
								Original Excel <a href="http://www.reddit.com/r/summonerswar/comments/35jet9/get_ready_for_free_rune_removal_with_my_gift_to/">tool</a> by <a href="http://www.reddit.com/user/Guitoudou">r/Guitoudou</a>.
								<br/>
								Web tool created by <a href="http://www.reddit.com/user/redeemer40/">r/redeemer40</a>
							</div>
			<h1>All My SW Runes - Summoners War Rune Database and Optimizer</h1>
			<div class="row">
				<div class="col-md-12" id="staticAlertHolder">
					<div class="myAlert1 alert alert-danger"><a href="#" class="close">&times;</a>
					We are aware of the occasional Db Connection errors and are working to resolve them. If you experience such problem, you may try later or download the Offline version or use the "Generate in CSV file" option in Optimizer tab.<br/>
					To ensure the best user experience the Optimizer results will be cleaned on every Whole Hour. Avoid making long optimizations after 55th min to avoid loss of data.
					</div>
  			</div>
				<div class="col-md-12" id="alertHolder">
  			</div>
				<div class="col-md-12">
					<div role="tabpanel" class="panel panel-default ebook">
						<div class="panel-heading no-padding">
							
							<ul class="nav nav-pills" role="tablist" id="myTab">
								<li><a href="#runes" aria-controls="runes" role="tab" data-toggle="tab">Runes</a></li>
								<li><a href="#bezhoe" data-toggle="tab">Adv.Runes</a></li>
								<li><a href="#monsters" data-toggle="tab">Monsters</a></li>
								<li><a href="#optimizer" data-toggle="tab">Optimizer</a></li>
								<li class="active"><a href="#export" data-toggle="tab">Export/Import</a></li>
								<li><a href="#notes" data-toggle="tab">Notes</a></li>
							</ul>
							
						</div>

						<div class="panel-body">	
							<div class="tab-content" id="myTabContents">
<!-- ---------------------------------TAB BEZHOE----------------------- -->			
								<div role="tabpanel" class="tab-pane" id="bezhoe">
									<div class="row">
										<div class="col-md-12">
											<div class="panel panel-default" id="subrune-panel">
												<div class="panel-heading">All runes - Advanced tab displaying all substats</div>
												<div class="panel-body">
									<table id="grid_subrunes" class="table table-bordered table-hover display">
										<thead>
											<tr>
												<th rowspan="2">ID</th>
												<th rowspan="2">Location</th>
												<th rowspan="2">Set</th>
												<th rowspan="2">Slot</th>
												<th rowspan="2">Grade</th>
												<th rowspan="2">Level</th>
												<th rowspan="2">Eff%</th>
												<th colspan="2">Main stat</th>
												<th colspan="2">Innate stat</th>
												<th colspan="11" style="text-align:center;">Substats</th>
											</tr>
											<tr>
												<th>Type</th>
												<th>Value</th>
												<th>Type</th>
												<th>Value</th>
												<th>ATK%</th>
												<th>ATK</th>
												<th>DEF%</th>
												<th>DEF</th>
												<th>HP%</th>
												<th>HP</th>
												<th>SPD</th>
												<th>ACC</th>
												<th>RES</th>
												<th>CRate</th>
												<th>CDmg</th>
											</tr>
										</thead>
										<tbody>
										</tbody>
										<tfoot>
											<tr>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
											</tr>
										</tfoot>
									</table>
												</div>
											</div>
										</div>
									</div>
									
									<div id="rune_time"></div>
								</div>
								
<!-- ---------------------------------TAB RUNES----------------------- -->
								<div role="tabpanel" class="tab-pane" id="runes">
								
									<div class="row">
										<div class="col-md-10">
											<div class="panel panel-default" id="rune-panel">
												<div class="panel-heading">Rune details (* = required)</div>
												<div class="panel-body">
													<div class="row">
														<div class="col-md-2">
															<label for="rune_id">Id</label>
															<input type="text" class="form-control" placeholder="Id" name="rune_id" id="rune_id" value="" readonly/>
														</div>
														<div class="col-md-2">
															<label for="rune_set">Set*</label>
															<select class="form-control" name="rune_set" id="rune_set">
																<option value="Energy">Energy</option>
																<option value="Fatal">Fatal</option>
																<option value="Blade">Blade</option>
																<option value="Rage">Rage</option>
																<option value="Swift">Swift</option>
																<option value="Focus">Focus</option>
																<option value="Guard">Guard</option>
																<option value="Endure">Endure</option>
																<option value="Violent">Violent</option>
																<option value="Will">Will</option>
																<option value="Nemesis">Nemesis</option>
																<option value="Shield">Shield</option>
																<option value="Revenge">Revenge</option>
																<option value="Despair">Despair</option>
																<option value="Vampire">Vampire</option>
																<option value="Destroy">Destroy</option>
															</select>
														</div>
														
														<div class="col-md-2">
															<label for="rune_slot">Slot(1-6)*</label>
															<select class="form-control" name="rune_slot" id="rune_slot">
																<option value="1">1</option>
																<option value="2">2</option>
																<option value="3">3</option>
																<option value="4">4</option>
																<option value="5">5</option>
																<option value="6">6</option>
															</select>
														</div>
														<div class="col-md-2">
															<label for="rune_monster">Monster</label>
															<select class="form-control" name="rune_monster" id="rune_monster">
																<option value="0">Inventory</option>
															</select>
														</div>
													
														<div class="col-md-2">
															<label for="rune_grade">Grade(1-6)*</label>
															<select class="form-control" name="rune_grade" id="rune_grade">
																<option value="1">1</option>
																<option value="2">2</option>
																<option value="3">3</option>
																<option value="4">4</option>
																<option value="5">5</option>
																<option value="6">6</option>
															</select>
														</div>
														
														<div class="col-md-2">
															<label for="rune_level">Level(0-15)*</label>
															<select class="form-control" name="rune_level" id="rune_level">
																<option value="0">0</option>
																<option value="1">1</option>
																<option value="2">2</option>
																<option value="3">3</option>
																<option value="4">4</option>
																<option value="5">5</option>
																<option value="6">6</option>
																<option value="7">7</option>
																<option value="8">8</option>
																<option value="9">9</option>
																<option value="10">10</option>
																<option value="11">11</option>
																<option value="12">12</option>
																<option value="13">13</option>
																<option value="14">14</option>
																<option value="15">15</option>
															</select>
														</div>
													</div>
													
													<div class="row">
														<div class="col-md-2">
															<label for="rune_maintype">Main stat*</label>
															<select class="form-control" name="rune_maintype" id="rune_maintype">
																<option value="SPD">SPD</option>
																<option value="ATK%">ATK%</option>
																<option value="ATK flat">ATK flat</option>
																<option value="DEF%">DEF%</option>
																<option value="DEF flat">DEF flat</option>
																<option value="HP%">HP%</option>
																<option value="HP flat">HP flat</option>
																<option value="CRate">CRate</option>
																<option value="CDmg">CDmg</option>
																<option value="RES">RES</option>
																<option value="ACC">ACC</option>
															</select>
														</div>
														<div class="col-md-1">
															<label for="rune_mainvalue">Value*</label>
															<input type="text" class="form-control" placeholder="value" name="rune_mainvalue" id="rune_mainvalue" value="" />
														</div>
														
														<div class="col-md-2">
															<label for="rune_innatetype">Innate stat</label>
															<select class="form-control" name="rune_innatetype" id="rune_innatetype">
																<option value="">-</option>
																<option value="SPD">SPD</option>
																<option value="ATK%">ATK%</option>
																<option value="ATK flat">ATK flat</option>
																<option value="DEF%">DEF%</option>
																<option value="DEF flat">DEF flat</option>
																<option value="HP%">HP%</option>
																<option value="HP flat">HP flat</option>
																<option value="CRate">CRate</option>
																<option value="CDmg">CDmg</option>
																<option value="RES">RES</option>
																<option value="ACC">ACC</option>
															</select>
														</div>
														<div class="col-md-1">
															<label for="rune_innatevalue">value</label>
															<input type="text" class="form-control" placeholder="value" name="rune_innatevalue" id="rune_innatevalue" value="" />
														</div>

														<div class="col-md-2">
															<label for="rune_stat1type">Stat 1</label>
															<select class="form-control" name="rune_stat1type" id="rune_stat1type">
																<option value="">-</option>
																<option value="SPD">SPD</option>
																<option value="ATK%">ATK%</option>
																<option value="ATK flat">ATK flat</option>
																<option value="DEF%">DEF%</option>
																<option value="DEF flat">DEF flat</option>
																<option value="HP%">HP%</option>
																<option value="HP flat">HP flat</option>
																<option value="CRate">CRate</option>
																<option value="CDmg">CDmg</option>
																<option value="RES">RES</option>
																<option value="ACC">ACC</option>
															</select>
														</div>
														<div class="col-md-1">
															<label for="rune_stat1value">Value</label>
															<input type="text" class="form-control" placeholder="value" name="rune_stat1value" id="rune_stat1value" value="" />
														</div>
													
														<div class="col-md-2">
															<label for="rune_stat2type">Stat 2</label>
															<select class="form-control" name="rune_stat2type" id="rune_stat2type">
																<option value="">-</option>
																<option value="SPD">SPD</option>
																<option value="ATK%">ATK%</option>
																<option value="ATK flat">ATK flat</option>
																<option value="DEF%">DEF%</option>
																<option value="DEF flat">DEF flat</option>
																<option value="HP%">HP%</option>
																<option value="HP flat">HP flat</option>
																<option value="CRate">CRate</option>
																<option value="CDmg">CDmg</option>
																<option value="RES">RES</option>
																<option value="ACC">ACC</option>
															</select>
														</div>
														<div class="col-md-1">
															<label for="rune_stat2value">Value</label>
															<input type="text" class="form-control" placeholder="value" name="rune_stat2value" id="rune_stat2value" value="" />
														</div>
													</div>
														
													<div class="row">
														<div class="col-md-2">
															<label for="rune_stat3type">Stat 3</label>
															<select class="form-control" name="rune_stat3type" id="rune_stat3type">
																<option value="">-</option>
																<option value="SPD">SPD</option>
																<option value="ATK%">ATK%</option>
																<option value="ATK flat">ATK flat</option>
																<option value="DEF%">DEF%</option>
																<option value="DEF flat">DEF flat</option>
																<option value="HP%">HP%</option>
																<option value="HP flat">HP flat</option>
																<option value="CRate">CRate</option>
																<option value="CDmg">CDmg</option>
																<option value="RES">RES</option>
																<option value="ACC">ACC</option>
															</select>
														</div>
														<div class="col-md-1">
															<label for="rune_stat3value">Value</label>
															<input type="text" class="form-control" placeholder="value" name="rune_stat3value" id="rune_stat3value" value="" />
														</div>

														<div class="col-md-2">
															<label for="rune_stat4type">Stat 4</label>
															<select class="form-control" name="rune_stat4type" id="rune_stat4type">
																<option value="">-</option>
																<option value="SPD">SPD</option>
																<option value="ATK%">ATK%</option>
																<option value="ATK flat">ATK flat</option>
																<option value="DEF%">DEF%</option>
																<option value="DEF flat">DEF flat</option>
																<option value="HP%">HP%</option>
																<option value="HP flat">HP flat</option>
																<option value="CRate">CRate</option>
																<option value="CDmg">CDmg</option>
																<option value="RES">RES</option>
																<option value="ACC">ACC</option>
															</select>
														</div>
														<div class="col-md-1">
															<label for="rune_stat4value">Value</label>
															<input type="text" class="form-control" placeholder="value" name="rune_stat4value" id="rune_stat4value" value="" />
														</div>
														
														<button type="submit" class="btn btn-primary" id="rune_clear">Clear</button>
														<button type="submit" class="btn btn-primary" id="rune_update" disabled="true">Save current</button>
														<button type="submit" class="btn btn-primary" id="rune_create">Create new</button>
													</div>

												</div>
											</div>

										</div>
										<div class="col-md-2">
											<div id="rune_preview"></div>
											<div class="col-md-3" id="rune_time"></div>
										</div>
									</div>
								
									<div class="row">
										<div class="col-md-12">
											<div class="panel panel-default" id="allrune-panel">
												<div class="panel-heading">
													<div class="row">
														<div class="col-md-12">
															<div class="right">
																<button type="submit" class="btn btn-danger btn-xs" id="deleteAllRunes">Delete All</button>
																<button type="submit" class="btn btn-primary btn-xs" id ="unlockAllRunes">Unlock All</button>
																<button type="submit" class="btn btn-primary btn-xs" id ="lockAllEquippedRunes">Lock All Equipped</button>
																<button type="submit" class="btn btn-primary btn-xs" id ="unequipAllRunes">Unequip All</button>
															</div>
														</div>
													</div>
													All runes
												</div>
												<div class="panel-body">
													<table id="grid_runes" class="table table-bordered table-hover display">
														<thead>
															<tr>
																<th rowspan="2">ID</th>
																<th rowspan="2">Location</th>
																<th rowspan="2">Set</th>
																<th rowspan="2">Slot</th>
																<th rowspan="2">Grade</th>
																<th rowspan="2">Level</th>
																<th colspan="2">Main stat</th>
																<th colspan="2">Innate stat</th>
																<th rowspan="2">Eff %</th>
																<th rowspan="2">Action</th>
															</tr>
															<tr>
																<th>Type</th>
																<th>Value</th>
																<th>Type</th>
																<th>Value</th>
															</tr>
														</thead>
														<tbody>
														</tbody>
														<tfoot>
															<tr>
																<th></th>
																<th></th>
																<th></th>
																<th></th>
																<th></th>
																<th></th>
																<th></th>
																<th></th>
																<th></th>
																<th></th>
																<th></th>
																<th></th>
															</tr>
														</tfoot>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>

<!-- ---------------------------------TAB MONSTERS----------------------- -->
								<div role="tabpanel" class="tab-pane" id="monsters">
								
									<div class="row">
										<div class="col-md-8">
											<div class="panel panel-default" id="allrune-panel">
												<div class="panel-heading">
													<div class="row">
														<div class="col-md-12">
															<div class="right">
																<button type="submit" class="btn btn-danger btn-xs" id="deleteAllMons">Delete All</button>
															</div>
														</div>
													</div>
													All monsters
												</div>
												<div class="panel-body">
													<table id="grid_monsters" class="table table-bordered table-hover display">
														<thead>
															<tr>
																<th rowspan="2">ID</th>
																<th rowspan="2">Name</th>
																<th rowspan="2">Level</th>
																<th colspan="8">Base stats</th>
																<th rowspan="2">Action</th>
															</tr>
															<tr>
																<th>HP</th>
																<th>ATK</th>
																<th>DEF</th>
																<th>SPD</th>
																<th>CRate</th>
																<th>CDmg</th>
																<th>RES</th>
																<th>ACC</th>
															</tr>
														</thead>
														<tbody>
														</tbody>
													</table>
												</div>
											</div>
										</div>
										
										<div class="col-md-4">
											<div class="panel panel-default" id="allrune-panel">
												<div class="panel-heading">Monster details and base stats (* = required)</div>
												<div class="panel-body">
													<div class="row">
														<div class="col-md-3">
															<label for="monster_id">Id</label>
															<input type="text" class="form-control" placeholder="Id" name="monster_id" id="monster_id" value="" readonly/>
														</div>
														<div class="col-md-6">
															<label for="monster_name">Name*</label>
															<input type="text" class="form-control" placeholder="Name" name="monster_name" id="monster_name" value="" />
														</div>
														<div class="col-md-3">
															<label for="monster_level">Level*</label>
															<input type="text" class="form-control" placeholder="Level" name="monster_level" id="monster_level" value="" />
														</div>
													</div>
													
													<div class="row">
														
														<div class="col-md-4">
															<label for="monster_hp">HP*</label>
															<input type="text" class="form-control" placeholder="HP" name="monster_hp" id="monster_hp" value="" />
														</div>
														<div class="col-md-4">
															<label for="monster_atk">ATK*</label>
															<input type="text" class="form-control" placeholder="ATK" name="monster_atk" id="monster_atk" value="" />
														</div>
														<div class="col-md-4">
															<label for="monster_def">DEF*</label>
															<input type="text" class="form-control" placeholder="DEF" name="monster_def" id="monster_def" value="" />
														</div>
														<div class="col-md-4">
															<label for="monster_spd">SPD*</label>
															<input type="text" class="form-control" placeholder="SPD" name="monster_spd" id="monster_spd" value="" />
														</div>
														<div class="col-md-4">
															<label for="monster_crate">CRate*</label>
															<input type="text" class="form-control" placeholder="CRate" name="monster_crate" id="monster_crate" value="" />
														</div>
														<div class="col-md-4">
															<label for="monster_cdmg">CDmg*</label>
															<input type="text" class="form-control" placeholder="CDmg" name="monster_cdmg" id="monster_cdmg" value="" />
														</div>
														<div class="col-md-4">
															<label for="monster_res">RES*</label>
															<input type="text" class="form-control" placeholder="RES" name="monster_res" id="monster_res" value="" />
														</div>
														<div class="col-md-4">
															<label for="monster_acc">ACC*</label>
															<input type="text" class="form-control" placeholder="ACC" name="monster_acc" id="monster_acc" value="" />
														</div>
														
													</div>
													<div class="row">
														<button type="submit" class="btn btn-primary" id="monster_clear">Clear</button>
														<button type="submit" class="btn btn-primary" id="monster_update" disabled="true">Save current</button>
														<button type="submit" class="btn btn-primary" id="monster_create">Create new</button>
													</div>
												
												</div>
											</div>
										</div>
										
									</div>
									
									<div class="row">
										<div class="col-md-3">
											<div class="panel panel-default" id="allrune-panel">
												<div class="panel-heading">Total set bonuses</div>
												<div class="panel-body" id="monster_panel1">
												
												</div>
											</div>
										</div>
										
										<div class="col-md-3">
											<div class="panel panel-default" id="allrune-panel">
												<div class="panel-heading">Total monster stats</div>
												<div class="panel-body" id="monster_panel2">
													
												</div>
											</div>
										</div>
										
										<div class="col-md-6">
											<div class="panel panel-default" id="allrune-panel">
												<div class="panel-heading">
													<div class="row">
														<div class="col-md-12">
															<div class="right">
																<button type="submit" class="btn btn-danger btn-xs" id="deleteMonsRunes" disabled="">Delete Runes</button>
																<button type="submit" class="btn btn-primary btn-xs" id="unequipMonsRunes" disabled="">Unequip runes</button>
																<button type="submit" class="btn btn-primary btn-xs" id="lockMonsRunes" disabled="">Lock runes</button>
																<button type="submit" class="btn btn-primary btn-xs" id="unlockMonsRunes" disabled="">Unlock Runes</button>
															</div>
														</div>
													</div>
													Equipped runes
												</div>
												<div class="panel-body" id="monster_panel3">
												
													<div class="row">
														
														<div class="col-md-4">
															<br/><br/>
															<div id="m6_rune"></div>
															
														</div>
														<div class="col-md-4">
																<div id="m1_rune"></div>
														</div>
														
														<div class="col-md-4">
															<br/><br/>
															<div id="m2_rune"></div>
														</div>
														
														
													</div>
													
													<br/>
													<div class="row">

														<div class="col-md-4">
															<div id="m5_rune"></div>
														</div>
														
														<div class="col-md-4">
															<br/><br/>
															<div id="m4_rune"></div>
															
														</div>
														<div class="col-md-4">
															<div id="m3_rune"></div>
														</div>
														
														
													</div>
												</div>
											</div>
										</div>
										
									</div>
									
									<div id="monster_time"></div>
								</div>
								
<!-- ---------------------------------TAB OPTIMIZER----------------------- -->
								<div role="tabpanel" class="tab-pane" id="optimizer">
									<!-- CONDITIONS -->
									<div class="row">
										<div class="col-md-4">
											<div class="panel panel-default">
												<div class="panel-heading">1.Monster and base stats</div>
												<div class="panel-body">
													<div class="row">
														<div class="col-md-12">
															<label for="opt_monster">Monster*</label>
															<select class="form-control" name="opt_monster" id="opt_monster">
																<option value="0">-</option>
																<option value="1">Soha</option>
																<option value="2">Zeratu</option>
																<option value="3">Ramagos</option>
															</select>
														</div>
													</div>
													<div class="row">
														<div class="col-md-12">Base stats:</div>
														<div class="col-md-3">HP</div><div class="col-md-3" id="o1_1">0</div>
														<div class="col-md-3">CRate</div><div class="col-md-3" id="o1_5">0</div>
														<div class="col-md-3">ATK</div><div class="col-md-3" id="o1_2">0</div>
														<div class="col-md-3">CDmg</div><div class="col-md-3" id="o1_6">0</div>
														<div class="col-md-3">DEF</div><div class="col-md-3" id="o1_3">0</div>
														<div class="col-md-3">RES</div><div class="col-md-3" id="o1_7">0</div>
														<div class="col-md-3">SPD</div><div class="col-md-3" id="o1_4">0</div>
														<div class="col-md-3">ACC</div><div class="col-md-3" id="o1_8">0</div>
													</div>
												</div>
											</div>
										</div>
										
										<div class="col-md-4">
											<div class="panel panel-default">
												<div class="panel-heading">2.Sets and slot types (*choose at least 1)</div>
												<div class="panel-body">
													<div class="row">
														<div class="col-md-6">
															<label for="opt_set1">Set1</label>
															<select class="form-control" name="opt_set1" id="opt_set1">
																<option value="">-</option>
																<option value="Energy">Energy</option>
																<option value="Fatal">Fatal</option>
																<option value="Blade">Blade</option>
																<option value="Rage">Rage</option>
																<option value="Swift">Swift</option>
																<option value="Focus">Focus</option>
																<option value="Guard">Guard</option>
																<option value="Endure">Endure</option>
																<option value="Violent">Violent</option>
																<option value="Will">Will</option>
																<option value="Nemesis">Nemesis</option>
																<option value="Shield">Shield</option>
																<option value="Revenge">Revenge</option>
																<option value="Despair">Despair</option>
																<option value="Vampire">Vampire</option>
																<option value="Destroy">Destroy</option>
															</select>
														</div>
														<div class="col-md-6">
															<label for="opt_slot2">Slot2</label>
															<select class="form-control" name="opt_slot2" id="opt_slot2">
																<option value="">-</option>
																<option value="SPD">SPD</option>
																<option value="ATK%">ATK%</option>
																<option value="ATK flat">ATK flat</option>
																<option value="DEF%">DEF%</option>
																<option value="DEF flat">DEF flat</option>
																<option value="HP%">HP%</option>
																<option value="HP flat">HP flat</option>
															</select>
														</div>
													</div>
													<div class="row">
														<div class="col-md-6">
															<label for="opt_set2">Set2</label>
															<select class="form-control" name="opt_set2" id="opt_set2">
																<option value="">-</option>
																<option value="Energy">Energy</option>
																<option value="Fatal">Fatal</option>
																<option value="Blade">Blade</option>
																<option value="Rage">Rage</option>
																<option value="Swift">Swift</option>
																<option value="Focus">Focus</option>
																<option value="Guard">Guard</option>
																<option value="Endure">Endure</option>
																<option value="Violent">Violent</option>
																<option value="Will">Will</option>
																<option value="Nemesis">Nemesis</option>
																<option value="Shield">Shield</option>
																<option value="Revenge">Revenge</option>
																<option value="Despair">Despair</option>
																<option value="Vampire">Vampire</option>
																<option value="Destroy">Destroy</option>
															</select>
														</div>
														<div class="col-md-6">
															<label for="opt_slot4">Slot4</label>
															<select class="form-control" name="opt_slot4" id="opt_slot4">
																<option value="">-</option>
																<option value="ATK%">ATK%</option>
																<option value="ATK flat">ATK flat</option>
																<option value="DEF%">DEF%</option>
																<option value="DEF flat">DEF flat</option>
																<option value="HP%">HP%</option>
																<option value="HP flat">HP flat</option>
																<option value="CRate">CRate</option>
																<option value="CDmg">CDmg</option>
															</select>
														</div>
													</div>

													<div class="row">
														<div class="col-md-6">
															<label for="opt_set3">Set3</label>
															<select class="form-control" name="opt_set3" id="opt_set3">
																<option value="">-</option>
																<option value="Energy">Energy</option>
																<option value="Fatal">Fatal</option>
																<option value="Blade">Blade</option>
																<option value="Rage">Rage</option>
																<option value="Swift">Swift</option>
																<option value="Focus">Focus</option>
																<option value="Guard">Guard</option>
																<option value="Endure">Endure</option>
																<option value="Violent">Violent</option>
																<option value="Will">Will</option>
																<option value="Nemesis">Nemesis</option>
																<option value="Shield">Shield</option>
																<option value="Revenge">Revenge</option>
																<option value="Despair">Despair</option>
																<option value="Vampire">Vampire</option>
																<option value="Destroy">Destroy</option>
															</select>
														</div>
														<div class="col-md-6">
															<label for="opt_slot6">Slot6</label>
															<select class="form-control" name="opt_slot6" id="opt_slot6">
																<option value="">-</option>
																<option value="ATK%">ATK%</option>
																<option value="ATK flat">ATK flat</option>
																<option value="DEF%">DEF%</option>
																<option value="DEF flat">DEF flat</option>
																<option value="HP%">HP%</option>
																<option value="HP flat">HP flat</option>
																<option value="RES">RES</option>
																<option value="ACC">ACC</option>
															</select>
														</div>
													</div>
													
													<div class="row">
														<div class="col-md-12">
															<div class="checkbox">
																<label><input type="checkbox" value="" id="opt_no_broken">No broken sets</label>
															</div>
														</div>
													</div>

												</div>

											</div>
										</div>
										
										<div class="col-md-4">
											<div class="panel panel-default">
												<div class="panel-heading">3.Additional preferences</div>
												<div class="panel-body">
													<div class="row">
														<div class="col-md-12">
															<div class="checkbox">
																<label><input type="checkbox" value="" id="opt_use_locked">Use locked runes</label>
															</div>
															<div class="checkbox">
																<label><input type="checkbox" value="" checked="true" id="opt_only_unequipped">Use only runes from inventory</label>
															</div>
															<div class="checkbox">
																<label><input type="checkbox" value="" id="opt_only_6star">Use only 6* runes for slots 2,4,6(+ 5* SPD)</label>
															</div>
															<div class="checkbox">
																<label><input type="checkbox" value="" id="opt_only_56star">Use only 5/6* runes</label>
															</div>
															<div class="checkbox">
																<label><input type="checkbox" value="" id="opt_only_lvl_6_or_up">Use only runes lvl >=</label><input type="text" id="opt_only_lvl_or_up_value" value="6"/>
															</div>
															<div> Include these runes <input type="text" id="opt_use_runes" placeholder="ex:11,12,70" value=""/></div>
															<div> Do not include these runes <input type="text" id="opt_not_use_runes" placeholder="ex:11,12,70" value=""/></div>
														</div>
														
														<div class="col-md-12">
															<br/>
															<button type="submit" class="btn btn-danger btn-lg" id="rune_optimize_abort">Abort</button>
															<button type="submit" class="btn btn-primary btn-lg" id="rune_optimize">GO</button>
															Generate ALL possible builds(ignores focus panel): 
															<div class="checkbox">
																<label><input type="checkbox" value="" id="generate_to_file">Generate in csv file.</label>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										<div class="col-md-12">
											<div class="panel panel-default">
												<div class="panel-heading collapsed" data-toggle="collapse" data-target="#focusbody" style="cursor: pointer;"><span class="glyphicon glyphicon-chevron-up"></span> 4.Focus on following stats (WARNING: will generate BEST builds with regards of those stats. Other stats may be brutally neglected)</div>
												<div class="panel-body">
													<div id="focusbody" class="collapse row">
														<div class="col-md-8">
															<div class="row">
																<div class="col-md-4">
																	<label for="opt_focus1">Focus 1</label>
																	<select class="form-control" name="opt_focus1" id="opt_focus1">
																		<option value="">-</option>
																		<option value="HP">HP</option>
																		<option value="ATK">ATK</option>
																		<option value="DEF">DEF</option>
																		<option value="SPD">SPD</option>
																		<option value="CRate">CRate</option>
																		<option value="CDmg">CDmg</option>
																		<option value="RES">RES</option>
																		<option value="ACC">ACC</option>
																	</select>
																</div>
																<div class="col-md-4">
																	<label for="opt_focus2">Focus 2</label>
																	<select class="form-control" name="opt_focus2" id="opt_focus2">
																		<option value="">-</option>
																		<option value="HP">HP</option>
																		<option value="ATK">ATK</option>
																		<option value="DEF">DEF</option>
																		<option value="SPD">SPD</option>
																		<option value="CRate">CRate</option>
																		<option value="CDmg">CDmg</option>
																		<option value="RES">RES</option>
																		<option value="ACC">ACC</option>
																	</select>
																</div>
																<div class="col-md-4">
																	<label for="opt_focus3">Focus 3</label>
																	<select class="form-control" name="opt_focus3" id="opt_focus3">
																		<option value="">-</option>
																		<option value="HP">HP</option>
																		<option value="ATK">ATK</option>
																		<option value="DEF">DEF</option>
																		<option value="SPD">SPD</option>
																		<option value="CRate">CRate</option>
																		<option value="CDmg">CDmg</option>
																		<option value="RES">RES</option>
																		<option value="ACC">ACC</option>
																	</select>
																</div>
																<!--<div class="col-md-6">
																	<div class="checkbox">
																		<label><input type="checkbox" value="" id="opt_focus_simple">Simple rune selection (pick only the best runes; WARNING: may not fulfill set requirements and show no results)</label>
																	</div>
																</div>-->
															</div>
														</div>
															
														
														<div class="col-md-4">
															<br/>
															<button type="submit" class="btn btn-danger btn-lg" id="rune_optimize_abort_focus">Abort</button>
															<button type="submit" class="btn btn-primary btn-lg" id="rune_optimize_focus">GO</button>
															Generate BEST BUILDS with focus on those stats: 
														</div>
													</div>
												</div>
											</div>
										</div>
										
										<div class="col-md-12">
											<div class="panel panel-default">
												<div class="panel-heading collapsed" data-toggle="collapse" data-target="#filter" style="cursor: pointer;"><span class="glyphicon glyphicon-chevron-up"></span> 5.Filters (filter values are applied upon pressing buttons "GO" or "Apply", or sorting the table by any column)</div>
												<div class="panel-body">
													<div id="filter" class="collapse">
														<div class="row">
															<div class="col-md-10">
																<div class="row">
																	<div class="col-md-3">
																		<input type="text" size="5" id="filter_min_hp" value=""/> &lt; HP &lt; <input type="text" size="5" id="filter_max_hp" value=""/>
																	</div>
																	<div class="col-md-3">
																		<input type="text" size="5" id="filter_min_atk" value=""/> &lt; ATK &lt; <input type="text" size="5" id="filter_max_atk" value=""/>
																	</div>
																	<div class="col-md-3">
																		<input type="text" size="5" id="filter_min_def" value=""/> &lt; DEF &lt; <input type="text" size="5" id="filter_max_def" value=""/>
																	</div>
																	<div class="col-md-3">
																		<input type="text" size="5" id="filter_min_spd" value=""/> &lt; SPD &lt; <input type="text" size="5" id="filter_max_spd" value=""/>
																	</div>
																</div>
															</div>
															<div class="col-md-2">
																<div id="filter_type_div">
																	<label class="radio-inline"><input type="radio" name="filter_type" value="a" checked>Actual</label>
																	<label class="radio-inline"><input type="radio" name="filter_type" value="m">+15 stats</label>
																</div>
															</div>
														</div>
														<div class="row">
															<div class="col-md-10">
																<div class="row">
																	<div class="col-md-3">
																		<input type="text" size="5" id="filter_min_crate" value=""/> &lt; CR &lt; <input type="text" size="5" id="filter_max_crate" value="120"/>
																	</div>
																	<div class="col-md-3">
																		<input type="text" size="5" id="filter_min_cdmg" value=""/> &lt; CD &lt; <input type="text" size="5" id="filter_max_cdmg" value=""/>
																	</div>
																	<div class="col-md-3">
																		<input type="text" size="5" id="filter_min_res" value=""/> &lt; RES &lt; <input type="text" size="5" id="filter_max_res" value="120"/>
																	</div>
																	<div class="col-md-3">
																		<input type="text" size="5" id="filter_min_acc" value=""/> &lt; ACC &lt; <input type="text" size="5" id="filter_max_acc" value="120"/>
																	</div>
																</div>
															</div>
															<div class="col-md-2">
																<div>
																	<button type="submit" class="btn btn-default btn-sm" id="rune_optimize_filter_clear">Clear</button>
																	<button type="submit" class="btn btn-primary btn-sm" id="rune_optimize_filter_apply">Apply</button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										
									</div>
								
									<br/>
									<!-- RESULTS -->
									<div class="row"> <div class="col-md-12" id="opt_time"></div></div>
									
									<div class="row">
										<div class="col-md-12">
											<table id="grid_opt" class="table table-bordered table-hover display">
												<thead>
													<tr>
														<th rowspan="2">runeIds*</th>
														<th rowspan="2">sets*</th>
														<th colspan="22" id="optStatHeader"><center><strong style="font-size: x-large;">Actual stats </strong> / <a href="#" id="showPlus15"> +15 stats </a></center></th>
														<th rowspan="2">slots 2/4/6*</th>
														<th rowspan="2">substat<br/>upgrades</th>
													</tr>
													<tr>
														<th>HP</th>
														<th>ATK</th>
														<th>DEF</th>
														<th>SPD</th>
														<th>CRate</th>
														<th>CDmg</th>
														<th>RES</th>
														<th>ACC</th>
														<th>DPS(atk)</th>
														<th>Eff.HP</th>
														<th>Eff.HP (def br)</th>
														<th>HP</th>
														<th>ATK</th>
														<th>DEF</th>
														<th>SPD</th>
														<th>CRate</th>
														<th>CDmg</th>
														<th>RES</th>
														<th>ACC</th>
														<th>DPS(atk)</th>
														<th>Eff.HP</th>
														<th>Eff.HP (def br)</th>
													</tr>
												</thead>
												<tbody>
												</tbody>
											</table>
											* Table function "Search" is limited only to columns runeIds, sets and slots2/4/6.<br/>
											** Optimization results expire on every whole hour.<br/>
											*** The top row in green is the monster current build.
										</div>
									</div>							
								</div>

<!-- ---------------------------------TAB Import/Export----------------------- -->
								<div role="tabpanel" class="tab-pane active" id="export">
								
									<div class="row">
										<div class="col-md-12">
											<strong>Please read the RECOMENDATIONS in tab Notes BEFORE USAGE :)</strong>
											<br/>
											<br/>
											<strong><a target="_blank" href="https://www.reddit.com/r/summonerswar/comments/3yzb02/releasing_the_sw_monsters_runes_extractor/">SWParser.exe</a>: use this tool by <a target="_blank" href="https://www.reddit.com/user/kakarotoks">/u/kakarotoks</a> to export your data directly from your phone.</strong>
											<br/>
											<br/>
											<strong>[NEW!!!] Our Server is in Europe. If the tool works slow for you it may be because of your far location or your slow internet speed or because it is FRR and the all SW is spamming us. Follow these instructions to run it locally on your machine being limited only by your CPU and RAM: <a target="_blank" href="https://docs.google.com/uc?id=0B-GpYLz2ELqgeTJjaUQtSElEdDQ&export=download">Download v1.05</a> <a target="_blank" href="http://swrunes.all.my/AllMySWRunes%20v1.05.rar">(mirror 1)</a></strong>
											<br/>
											<br/>
											To <strong>SAVE</strong> the current runes and monsters use the "Export" button. The tool automaticaly saves your data to your browser <strong>cache</strong> after every change. But to be 100% sure better copy the data and save it to a file on your machine.
											<br/>
											To <strong>LOAD</strong> your runes into the tool, simply paste the saved data into the text field and press "Import" button. If you get pop-ups upon import, the data has been corrupted and some columns may be empty.
											<br/> 
											If you have data saved in browser cache, it will be imported automatically on page load.
											<br/>
											<br/> 
											<a href="https://docs.google.com/document/d/1Vkeuu-wxNfguH1r1gDBPKYA1VsPlrOhilTUFik2BNpM/edit?usp=sharing" target="_blank">IMPORT DATA WITH ALL MONSTERS</a>
											<div id="import_export_message"></div>
											<textarea class="form-control" rows="4" cols="140" placeholder="Save this data" name="exportimport" id="exportimport"></textarea>
										</div>
									</div>
									<div class="row">
										<button type="submit" class="btn btn-primary" id="btn_export">Export</button>
										<button type="submit" class="btn btn-primary" id="btn_import">Import</button>
									</div>
										
									<div class="checkbox">
										<label><input type="checkbox" checked="true" value="" id="import_replace_in_storage">On import replace "(In Storage)" in Monster names with *</label>
									</div>
									
								</div>
								
<!-- ---------------------------------TAB NOTES----------------------- -->
								<div role="tabpanel" class="tab-pane" id="notes">
								
									<div class="row">
										<div class="col-md-4">
											<div class="panel panel-default" id="allrune-panel">
												<div class="panel-heading">Recommendations</div>
												<div class="panel-body" id="monster_panel2">
													<ul>
														<li> <strong>Save your data:</strong> Please, read how to SAVE your data. Regularly save the data to a file on your computer, do not depend entirely on cached data in Browser. Do not blame us for lost data.</li>
														<li> <strong>Monsters and Runes:</strong> The tool does not automaticaly save your data upon change. To apply changes into tables press "Save current".</li>
														<li> <strong>Runes:</strong> Please, do not create IMPOSSIBLE runes. There is no validation, but your monster statistics will be wrong.
															<br/>(example: main or sub stat ATK +2000 or Slot 2 with main stat RES)</li>
														<li> <strong>Runes:</strong> Level up your runes! The higher level your runes are, the more their pottential is unlocked and the more accurate results you will get in "Actual" and "+15" tables.</li>
														<li> <strong>Monsters:</strong> Name your monsters differently, to avoid confusion when assigning runes to them.
															<br/>(example: "Zairos", "Zairos 2" or "Verde atk", "Verde hp" )</li>
														<li> <strong>Runes and Monsters:</strong> Please, do not assign non number values for the stats, calculations will not work.</li>
														<li> <strong>Optimizer:</strong> Be as precise as possible. Do not set ridiculous preferences for the Optimizer. With even 50 runes all the possible permutations are an ENORMOUS count, the tool will work very slow. BE SMART!
															<br/>(example for ridiculous: set1=Energy, all other fields empty)</li>
														<li> <strong>Optimizer with Focus:</strong> This option is still developed. Focusing does not take into consideration rune set
															<br/>(example: no entered sets, slot2 SPD, Focus on SPD. The results will not be focused on Builds with 3 Swift runes. Better enter: set1=Swift, slot2 SPD, Focus on SPD)</li>
														<li> <strong>Optimizer with Focus:</strong> This option shows only the best Builds focused on the chosen stats. The more stats you choose, the more the focus will be spread. Better do 3 searches with a single Focus, than one search with all 3 Focuses
															<br/>(example: focuses on SPD, HP and RES will spread out the focus too much and build with +16 SPD my be lost in favour of a build with +6 SPD, +6 HP, +10 RES. Better do all 3 searches to be sure not to miss the Perfect build)</li>
														<li> <strong>Runes substat upgrades:</strong> When choosing a set, take into consideration column "substat upgrades" - number of additional substat upgrades the runes will get when leveled up.</li>
														
													</ul>	
												</div>
											</div>
										</div>
									
										<div class="col-md-5">
											<div class="panel panel-default" id="allrune-panel">
												<div class="panel-heading">Change Log</div>
												<div class="panel-body" id="monster_panel2">
													<ul>
														<li> 04.02.2016 - (v1.05) Over 100k HP</a>:
															<ul>
																<li>Optimizer: added <a target="_blank" href="https://www.reddit.com/r/summonerswar/comments/443yk8/guide_to_maximizing_effective_hp_for_frr/">Efficient Hp</a> with and without def break/ Based on HP and Def stats</li>
																<li>Optimizer: added top row with stats of current equiped build</li>
																<li>Optimizer: fixed bugs with Focus optimization</li>
															</ul>
														</li>
														<li> 25.01.2016 - (v1.04) Dat Efficiency</a>:
															<ul>
																<li>Optimizer: improved performance for people outside EU and with slower connection</li>
																<li>Optimizer: changed option "Use only runes lvl 6+" to manually imput lvl</li>
																<li>Optimizer & Build preview: added DPS based on Atk, C.Rate, C.Dmg, Speed and Violent. Do not use it to compare different monsters, because it is based on monsters Base Speed.</li>
																<li>Runes & Adv.runes: fixed table when there are longer names</li>
																<li>Runes & Adv.runes: added default sort order</li>
																<li>Runes: added Stat Efficiency based on <a target="_blank" href="https://www.youtube.com/watch?v=SBWeptNNbYc">Barion's formula</a>, but flat stats have multiplier of 1/2. Note that runes under +12 and without Innate stat will have lower value. Efficiency can go over 100% after using Grindstones.</li>
																<li>Build Preview: added section "Current equipped stats" showing the stats with current equipped runes so it's easy to compare</li>
															</ul>
														</li>
													
														<li> 12.01.2016 - (v1.03) Moved to a new server in EU</a>:
															<ul>
																<li>Optimizer: changed "Use only 6* runes for slots 2,4,6" to include 5* SPD on slot 2</li>
																<li>Optimizer: added option "Use only runes lvl 6+"</li>
																<li>Import: added option on Import "Replace "(In Storage)" in Monster names with *"</li>
																<li>Monster: added buttons to Lock, Unlock, Unequip and Delete runes on a monster</li>
															</ul>
														</li>
														
														<li> 08.01.2016 - (v1.02) For those of you who want multisorting or custom formulas:
															<ul>
																<li>Optimizer: added option to produce results in CSV file so you can apply your custom formulas</li>
															</ul>
														</li>
														<li> 04.01.2016 - (v1.01) Further improvements in performance:
															<ul>
																<li><a target="_blank" href="https://www.reddit.com/r/summonerswar/comments/3yzb02/releasing_the_sw_monsters_runes_extractor/">SWParser.exe</a>: use this tool by <a target="_blank" href="https://www.reddit.com/user/kakarotoks">/u/kakarotoks</a> to export your data directly from your phone</li>
																<li>Runes: added button Lock All Equipped</li>
																<li>Optimizer: reduced strain on server</li>
															</ul>
														</li>
														<li> 24.12.2015 - (v1.0) Added server and database for faster build preview:
															<ul>
																<li>Tool: added messaging system, removed popups</li>
																<li>Runes: added validation and warning for invalid runes on import</li>
																<li>Runes: added buttons Unequip All, Unlock All, Delete all</li>
																<li>Monsters: added button Delete all</li>
																<li>Optimizer: greatly improved performance, added "No broken set option", no more irresponsive scripts, can show over 1milion builds(slow, but can do)</li>
															</ul>
														</li>
														<li> 13.10.2015 - (v0.10) Added Advanced Rune Tab displaying all substats with sorting and filtering. All credits to <a target="_blank" href="https://www.reddit.com/user/BeZhoe">BeZhoe</a>
														</li>
														<li> 12.09.2015 - (v0.9) Added Destroy rune
														</li>
														<li> 12.06.2015 - (v0.8) Filtering results by stat values:
															<ul>
																<li>Optimizer: added filtering of the results by min/max values (slows the table redrawing)</li>
																<li>Build preview: added buttons "Lock runes", "Unlock runes", "Equip runes"</li>
																<li>Tool: added web counter and donate button</li>
															</ul>
														</li>
														<li> 1.06.2015 - (v0.7) Runes input update:
															<ul>
																<li>Runes: added filtering in Runes table</li>
																<li>Runes: rune main stat value is auto populated based on Grade and Level. Doesn't work with grades 1 and 2. Couldn't find data</li>
															</ul>
														</li>
														<li> 31.05.2015 - (v0.6) Faster optimization by choosing stats to focus on:
															<ul>
																<li>Optimizer: added panel with stats to Focus on</li>
																<li>Optimizer: 2 different optimizations: One with ALL possible builds, second with Focus on chosen stats (but showing less builds)</li>
															</ul>
														</li>
														<li> 28.05.2015 - (v0.5) More counters:
															<ul>
																<li>Optimizer: added permutations counting</li>
																<li>Optimizer: added warning for too many results</li>
																<li>Optimizer: added field "Include these runes". Only those runes will be used in their slots.</li>
																<li>Import/Export: Saved in browser cache after every change.</li>
															</ul>
														</li>
														<li> 25.05.2015 - (v0.4) Pages are back:
															<ul>
																<li>Optimizer: over 300% shorter calculations time</li>
																<li>Tables: pagination is back; dont ask for scroller, please</li>
																<li>Optimizer: only 1 table with switching between Actual and +15 stats</li>
																<li>Optimizer: added max cap for C.Rate, Acc and Res</li>
																<li>Runes: added locking of runes</li>
																<li>Runes: "Use only runes without monster" changed to "Use only runes from inventory"</li>
															</ul>
														</li>
														<li> 21.05.2015 - (v0.3) Added:
															<ul>
																<li>Build preview: results from Optimizer tables can be visually previewed and saved in export data</li>
																<li>Tables: removed pagination and added scroller</li>
																<li>Tables: slightly optimized for faster initialization</li>
																<li>Optimizer: even when "Use only runes without monster" is checked, the current equipped runes on the monster will be considered for the optimization</li>
																<li>Rune slot preview: added rune location and id</li>
															</ul>
														</li>
														<li> 17.05.2015 - (v0.2) Added 2 preferences and helpers in registering runes:
															<ul>
																<li>Preferences: checkboxes "Use only 6* runes" and "Use only 5/6* runes"</li>
																<li>Runes: when entering slot 1,3 or 5, the main stat type is changed to ATK flat, DEF flat and HP flat</li>
																<li>Runes: when setting an innate or substat to "-" the value for it is cleared</li>
															</ul>
														</li>
														<li> 16.05.2015 - (v0.1) Release of beta version:
															<ul>
																<li>Runes management: create, update, delete, preview</li>
																<li>Monster management: create, update, delete, preview</li>
																<li>Monster runes preview</li>
																<li>Optimizer with preferences: set1, set2, set3, main stats on slots 2,3,4</li>
																<li>Import/Export functionality with saving into browser cookies</li>
																<li>Tested (sort of) on Mozilla Firefox 29.0.1, Chrome 42.0.2311.152, IE 10.0.9200</li>
															</ul>
														</li>
														<li> 11.05.2015 - start of development</li>

													</ul>	
												</div>
											</div>
										</div>
										
										<div class="col-md-3">
											<div class="panel panel-default" id="allrune-panel">
												<div class="panel-heading">Notes for the future</div>
												<div class="panel-body" id="monster_panel2">
													<ul>
														<li> Optimizer: add column for ATK based DPS</li>
														<li> Optimizer: offer user to imput secondary calculation instead of always +15</li>
														<li> Optimizer: Make searches for spd/hp/def and spd/def/hp interchangeable</li>
														<li> Import: Add checkboxes "Import only 5/6* runes", "Filter out silver monsters" or "Filter out 4* and below" - still not final</li>
														<li> Import: Import directly from a file</li>
														<li> Runes create/update: Add validation for impossible runes
															<br/>(example: Slot 2 with main stat RES)</li>
														<li> Runes create/update (OR in Monster preview): Add validation and Notice that the monster has more than 6 runes equipped or more than 1 rune for a slot</li>
														<li> Monsters: When entering a name for new monster, offer an option to autocomplete the stats at 40lvl</li>
														<li> Hosting: Implement login, rune/monster/build bookmarking and sharing</li>
														
													</ul>	
												</div>
											</div>
										</div>
										
										
									</div>
									
								</div>
							</div>
						</div>
						
						
					</div>
				</div>
			</div>
			
			<div class="row">
				<center>

				<!-- Paypal Donation -->				
				<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
				<input type="hidden" name="cmd" value="_s-xclick">
				<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHXwYJKoZIhvcNAQcEoIIHUDCCB0wCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYBQp61eyNBPbsNzS2S0Qhbk/rejj+Nu9YzmS8OLdx+1vOHC74JY6uvBVDCsyHOH8MGJEEMRfJKi5A4E9h0+95gn/aYeCcApRFcLYVgf2poIiiHRb2Wa6ErxNzt6ibbw36XHhOz+hVeA9RRvcBHby1zploC18cSyn8Vyz8Gkdd7PJzELMAkGBSsOAwIaBQAwgdwGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQIBYamOlTICb6AgbjaY6ofPvDNcSj6byvmDlEz2DYzGnPBUBORTYCurC8bei6iKW6vgi9LQXJPfrjhQ6VyXXd8xSz2KDsn4iJCzQFxCIQNykfsZmLCCg8n1v3ty/sWyH9cbExh5JshdEkZidBJ6efn2sIJQhylc81ENlnSzS7abn3+qq//3YOLQ4XiPBnoskOGvgNZ09873WpGLtEtDY35SMMs9hgf9rzT1ZS+XGnX/DaXXM8EtY+1fwIH3qBlCRipFyL1oIIDhzCCA4MwggLsoAMCAQICAQAwDQYJKoZIhvcNAQEFBQAwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMB4XDTA0MDIxMzEwMTMxNVoXDTM1MDIxMzEwMTMxNVowgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBR07d/ETMS1ycjtkpkvjXZe9k+6CieLuLsPumsJ7QC1odNz3sJiCbs2wC0nLE0uLGaEtXynIgRqIddYCHx88pb5HTXv4SZeuv0Rqq4+axW9PLAAATU8w04qqjaSXgbGLP3NmohqM6bV9kZZwZLR/klDaQGo1u9uDb9lr4Yn+rBQIDAQABo4HuMIHrMB0GA1UdDgQWBBSWn3y7xm8XvVk/UtcKG+wQ1mSUazCBuwYDVR0jBIGzMIGwgBSWn3y7xm8XvVk/UtcKG+wQ1mSUa6GBlKSBkTCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb22CAQAwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOBgQCBXzpWmoBa5e9fo6ujionW1hUhPkOBakTr3YCDjbYfvJEiv/2P+IobhOGJr85+XHhN0v4gUkEDI8r2/rNk1m0GA8HKddvTjyGw/XqXa+LSTlDYkqI8OwR8GEYj4efEtcRpRYBxV8KxAW93YDWzFGvruKnnLbDAF6VR5w/cCMn5hzGCAZowggGWAgEBMIGUMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMTUwNjE0MDcwMTMwWjAjBgkqhkiG9w0BCQQxFgQUPcU1zVJQKBbumPhRHPbAvjb0R5MwDQYJKoZIhvcNAQEBBQAEgYACOH4rSflFgpBQTuwsHpF3VsoVhz2MlmHBtXK3Fx4LWMdiCZ1OPwfCHpmKiEFvGs3ADEdKfQC/DhZpf3ITahcHAxp8ViVt2FBNu9caoaMEo+YDKgciwS772RvDnaflzu+7shd07xFoCeJoMyfQAQyxr1nUs7HiDa5wf699Meh6SA==-----END PKCS7-----
				">
				<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
				<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
				</form>

				
				<!-- hitwebcounter Code START -->
				<a href="http://www.hitwebcounter.com/how-to/how-to-what-is-free-blog-counter.php" target="_blank">
				<img src="http://hitwebcounter.com/counter/counter.php?page=6085542&style=0006&nbdigits=7&type=page&initCount=0" title="URL Counter" Alt="URL Counter"   border="0" >
				</a><br/>
				<!-- hitwebcounter.com --><a href="http://www.hitwebcounter.com/" title="Web Tracker" 
				target="_blank" style="font-family: sans-serif, Arial, Helvetica; 
				font-size: 12px; color: #6E7A76; text-decoration: underline ;"><em>Web Tracker</em>
				</a>

				</center>
			</div>

			<input type="hidden" id="savedBuilds" value="" />
			<input type="hidden" id="sessionId" value="" />
			<input type="hidden" id="optimize_run" value="0" />
			<input type="hidden" id="optimize_error" value="" />
			<input type="hidden" id="optimize_count" value="0" />
			<input type="hidden" id="optimize_calls_count" value="0" />
			
		</div>
  </body>

</html>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-72242820-1', 'auto');
  ga('send', 'pageview');

</script>