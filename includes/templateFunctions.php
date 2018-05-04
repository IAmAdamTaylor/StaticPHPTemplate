<?php

/**
 * Helper functions for loading templates.
 */

/**
 * Include a partial from the 'partials/' folder.
 * @param  string $filename The file name of the partial.
 *                          If inside a subfolder include the folder name, e.g.
 *                          getPartial( 'header/social' );
 */
function getPartial( $filename ) {
	if ( !preg_match( '#^partials/#', $filename ) ) {
		$filename = 'partials/' . $filename;
	}

	if ( !preg_match( '#\.php$#', $filename ) ) {
		$filename .= '.php';
	}

	$filename = ABS_PATH . $filename;

	if ( file_exists( $filename ) && is_readable( $filename ) ) {
		include $filename;
	}
}

/**
 * Load the header partial.
 */
function getHeader() {
	getPartial( 'header' );
}

/**
 * Load the footer partial.
 */
function getFooter() {
	getPartial( 'footer' );
}

/**
 * Include an assset file into the main document.
 * The file will only be included if it exists.
 * @param  string $file_path The path to the asset, including extenstion.
 *                           If it is contained in a subfolder this folder name 
 *                           should be passed as part of this parameter.
 * @return string
 */
function includeAsset( $file_path ) {
	$file_path = ABS_PATH . $file_path;

	if ( file_exists( $file_path ) && is_readable( $file_path ) ) {
		include $file_path;
	}
}
