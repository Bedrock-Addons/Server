<?php

function tab_active($page)
{
    echo substr($_SERVER['SCRIPT_NAME'], - strlen($page)) === $page ? ' class="active"' : '';
}

function demo_nav()
{
    ?>
    <ul class="nav nav-tabs demo-nav-tabs">
        <li<?php tab_active('index.php'); ?>><a href="index.php">Default</a></li>
        <li<?php tab_active('plus.php'); ?>><a href="plus.php">Advanced</a></li>
    </ul>
    <?php
}
?>
