<?php

/**
 * Header for the site.
 */

global $meta;

?><!DOCTYPE html>
<!--[if IE 9]>
<html class="ie ie9 no-js" lang="en-gb">
<![endif]-->
<!--[if !(IE 9)]><!-->
<html class="no-js" lang="en-gb">
<!--<![endif]-->
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title><?php echo $meta->title; ?> | SITE_TITLE</title>
	<meta name="description" content="<?php echo $meta->description; ?>">

	<!-- Start Favicons -->
	
	<!-- End Favicons -->

	<link rel="stylesheet" type="text/css" href="/dist/<?php echo getRevision('css/style.min.css'); ?>">

	<script type="text/javascript" src="/dist/<?php echo getRevision('js/head.min.js'); ?>"></script>

	<!-- Start TypeKit Kit -->
	
	<!-- End TypeKit Kit -->

	<!-- Start Google Analytics -->
	
	<!-- End Google Analytics -->
</head>
<body class="page page-<?php echo $meta->slug; ?>">

	<header class="header" role="banner">
		<div class="container">
				
			<a href="/">
				<h1 class="logomark">
					<span class="u-visually-hidden">TITLE</span>
				</h1>
			</a>
			
		</div>
	</header>
