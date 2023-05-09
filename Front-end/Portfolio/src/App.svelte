<script>
	export let name;
</script>

<main>
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/Contact">Contact</a></li>
		</ul>
	</nav>

	<style>
		nav{
			text-align: right;
			margin-bottom: 2em;
			margin-right: 10em;
		}
		ul{
			text-transform: uppercase;
			font-size: 1em;
			font-weight: 100;
		}
		li{
			display: inline-block;
			color: #f4f4f4;
			padding-right: 10px;
		}

	</style>
	</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>