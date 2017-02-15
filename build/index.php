<?php /*
@Author: Daniil Godoriloff
@Date:   2016-11-03T02:56:43+07:00
@Last modified by:   Daniil Godoriloff
@Last modified time: 2017-02-15T21:19:14+07:00
*/ ?>

<?php include "php/engine/config.php"; //КОНФИГ ?>
<?php include "php/main/head.php"; //ВЫВОД СОДЕРЖИМОГО ФАЙЛА HEAD ?>
<?php
  echo '<main>';
  	if (isset($_GET['page'])) {
  		if (in_array($_GET['page'], $pages)) {
  			include 'php/pages/' . $_GET['page'] . '/content' . '.php';
  		} else {
  			include 'php/pages/error/content.php';
  		}
  	}
  echo '</main>';
?>

<?php include "php/main/footer.php"; //ВЫВОД СОДЕРЖИМОГО ФАЙЛА FOOTER?>
