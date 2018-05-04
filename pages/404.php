<?php

/**
 * The 404 page of the site.
 */

$meta->title = '404 Page Not Found';
$meta->description = 'We couldn\'t find the page you were looking for.';

getHeader();

?>

<main class="content" role="main">
	<article class="article">
		
		<div class="container">

			<h2 class="title title--primary">404<br>Page Not Found</h2>				
			<div class="article__content s-flow-content">

				<p>We couldn't find the page you were looking for.</p>
				<p>If you typed the URL, please check it for spelling mistakes. Alternatively, you can try refreshing the page.</p>
				<p><a href="/">&lt; Back to Home</a></p>

			</div>

		</div>

	</article>
</main>

<?php getFooter(); ?>
