<?php

/**
 * Header for the site.
 */

global $meta;

?><!DOCTYPE html>
<html class="no-js" lang="en-gb">
<head>
	<?php // Don't index certain pages ?>
	<?php if ( isset( $meta->noindex ) && $meta->noindex ): ?>
		<meta name="robots" content="noindex">
	<?php endif; ?>

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title><?php echo $meta->title; ?> | TODO:SITE_TITLE</title>
	<meta name="description" content="<?php echo $meta->description; ?>">

	<!-- Start Favicons -->
	
	<!-- End Favicons -->

	<!-- TypeKit Link Here -->
	<link rel="stylesheet" type="text/css" href="/dist/<?php echo getRevision('css/style.min.css'); ?>">

	<script type="text/javascript" src="/dist/<?php echo getRevision('js/head.min.js'); ?>"></script>

	<!-- Start Google Analytics -->
	
	<!-- End Google Analytics -->
</head>
<body class="page page-<?php echo $meta->slug; ?>">

	<header class="header" role="banner">
		<div class="container">
				
			<a href="/">
				<h1 class="logomark">
					<span class="u-visually-hidden">TODO:SITE_TITLE</span>
				</h1>
			</a>

			<nav class="navigation" role="navigation">
				<ul class="menu">
					<li>
						<a href="/">
							Home
						</a>
					</li>
					<li>
						<a href="/contact/">
							Contact
						</a>
					</li>
				</ul>
			</nav>
			
		</div>
	</header>
