<?php

/**
 * Load all modules and set global vars.
 */

define( 'DEBUG_MODE', true );
define( 'ABS_PATH', dirname(__FILE__) . '/' );

if ( defined('DEBUG_MODE') && DEBUG_MODE ) {
	@ini_set( 'display_errors', 1 );
	error_reporting( E_ALL );
}

/**
 * Load a file from the includes directory.
 * @param string $file The file path to include.
 */
function _loadInclude( $file ) {
	require_once 'includes/' . $file . '.php';
}

_loadInclude( 'class-PageMeta' );

// Load a global instance of the meta class
global $meta;
$meta = new PageMeta();

_loadInclude( 'templateFunctions' );

/**
 * Get the revised file name from the revisions manifest.
 * @param  string $filename The original file name.
 *                          Don't include '/dist' at the start.
 * @return string           The revised file name, if the manifest exists.
 *                          Returns the original file name if it doesn't exist.
 */
function getRevision( $filename ) {
	$manifest_filepath = ABS_PATH . 'dist/rev-manifest.json';

	if ( file_exists( $manifest_filepath ) && is_readable( $manifest_filepath ) ) {
		$manifest = json_decode( file_get_contents( $manifest_filepath ), true );
		$filename = $manifest[ $filename ];
	}

	return $filename;
}
