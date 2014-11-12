<?php
require 'lib/flight/Flight.php';

Flight::route('/', function() {
	echo 'helllou';
});

Flight::start();