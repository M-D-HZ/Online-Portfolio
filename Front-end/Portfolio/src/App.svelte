<script>

</script>

<main>
	<!-- Navbar.svelte -->
    <nav>
      <img src="navicon.png">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/contact" target="_blank">Contact</a></li>
      </ul>
    </nav>

    <style>
      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
      }
      ul {
        list-style-type: none;
        margin-right: 8em;
        padding: 0;
        display: flex;
        justify-content: right;
      }
      li {
        margin: 0 8px;
        font-family: 'Arial', sans-serif;
        color: #ff3e00;
      }
      img {
          margin-right: 16px;
          margin-left: 5em;
      }
      a {
        text-decoration: none;
        color: #333;
        font-weight: bold;
        padding-right: 1em;
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