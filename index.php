<?php

/**
 * The entry point for all requests.
 * Sets up some global vars and then routes the request 
 * in the simplest manner possible.
 */

require_once 'load.php';

if ( isset( $_GET['q'] ) ) {
	$q = $_GET['q'];
} else {
	// If path is not set, this file has been requested -> show home page
	$q = 'home';
}

// Strip any trailing slashes
$q = rtrim( $q, '/\\' );

// Set up any 301 redirects
$redirects = array(
	// 'OLD_PERMALINK' => 'REDIRECT_TO',
);

$q_filepath = ABS_PATH . 'pages/' . $q . '.php';

if ( file_exists( $q_filepath ) && is_readable( $q_filepath ) && '__template' !== $q ) {

	// Add to the global meta object
	$meta->slug = $q;
	include_once $q_filepath;

} else if ( isset( $redirects[ $q ] ) ) {

	header( "Location: " . $redirects[ $q ] );
	exit(); 

} else {

	$meta->slug = '404';

	// Send a 404 header
	header("HTTP/1.0 404 Not Found");
	include_once ABS_PATH . 'pages/404.php';

}
