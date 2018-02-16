<?php

/**
 * The footer of the site.
 */

?>

<footer class="footer u-no-spacing" role="contentinfo">

		<div class="credits row">
			<div class="inner">
				
				<div class="credits__left">&copy; Copyright <a href="CLIENTURL" target="_blank">CLIENT</a> <?php echo date('Y'); ?></div>

				<div class="credits__right">
					<ul class="hlist">
						<li>
							<a href="privacy-policy.php">Privacy Policy</a>
						</li><li>
							<a href="CREATOR_URL" target="_blank">Website by CREATOR</a>
						</li>
					</ul>
				</div>

			</div>
		</div>
	</footer>

	<!-- <script src="https://maps.googleapis.com/maps/api/js?key=API_KEY"></script> -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script>jQuery.noConflict();</script>
	<script src="/dist/<?php echo getRevision('js/footer.min.js'); ?>"></script>

</body>
</html>
