<html>
<body>
<?php
require("dbwrapper.php");

$dbase = new Wrapper(
	"sw_user",
	"sw_pass",
	"localhost",
	"sw_runes",
	null
);

$totalRecords = $dbase->getTotalRecords();
//$totalSessions = $dbase->getUniqueSessions();
$recordsPerSession = $dbase->getSessionsAndRecords();

$dbase->close();
//print_r($totalRecords); echo "<br/>";
//print_r($recordsPerSession); echo "<br/>";
?>

Statistics for the most recent usage (last 1 hour): </br>
Total builds count: <?php echo $totalRecords[0]["cnt"]; ?><br/>
Total users: <?php echo count($recordsPerSession); ?><br/>
Sessions and number of builds: (if the tool works slow, blame the top people on the list)<br/>

<?php
if (count($recordsPerSession) > 0) {
	?>
	<table border="1">
		<thead>
		<th>Session ID</th>
		<th>Builds count</th>
		</thead>
		<tbody>
		<?php
		for ($i = 0; $i < count($recordsPerSession); $i++) {
			?>
			<tr>
				<td><?php echo substr($recordsPerSession[$i]["session"], 0, 4); ?>**</td>
				<td><?php echo $recordsPerSession[$i]["cnt"]; ?></td>
			</tr>
			<?php
		}
		?>
		</tbody>
	</table>
	<?php
}
?>
</body>
</html>