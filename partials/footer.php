<?php

/**
 * The footer of the site.
 */

global $meta;

?>

	<footer class="footer" role="contentinfo">

		<div class="container">
			<div class="footer__secondary">
				
				<p>&copy; Copyright <a href="TODO:CLIENT_URL" target="_blank" rel="noopener">TODO:CLIENT_NAME</a> <?php echo date('Y'); ?></p>

				<ul class="footer__links">
					<li>
						<a href="/privacy-policy/">Privacy Policy</a>
					</li><li>
						<a href="TODO:CREATOR_URL" target="_blank" rel="noopener">Website by TODO:CREATOR_NAME</a>
					</li>
				</ul>

			</div>
		</div>
	</footer>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script>jQuery.noConflict();</script>
	<script src="/dist/<?php echo getRevision('js/footer.min.js'); ?>"></script>

	<?php
		// Conditionally load the Google Maps library and initialiser
		// The API key used is a shared one across all projects
	?>
	<?php if ( false && 'TODO:PAGE_SLUG' == $meta->slug ): ?>
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAzFKXWKxUhX9JTp5jHRA2drw4rE4VNTUE"></script>
		<script src="/dist/<?php echo getRevision('js/google-maps.min.js'); ?>"></script>
	<?php endif; ?>

</body>
</html>
