<?php
$files = array_diff(scandir('.'), array('..', '.'));
echo json_encode(array_values($files));
?>
