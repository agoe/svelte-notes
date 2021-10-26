<script lang="ts">
  import logo from "@/assets/svelte.png";
  import { Link, useLocation } from "svelte-navigator";
  //https://github.com/EmilTholin/svelte-routing/issues/63
  const location = useLocation();

  let isCurrentPath = (pathname: String, href: String) => pathname === href;
  //class={`nav-link ${$location.pathname === '/' && 'active'}`}
  //class={` option ${$location.pathname === "/" ? "active" : ""}`}
  $: console.log($location.pathname);
</script>

<header class="global-header">
  <div class="app-name">
    <img src={logo} alt="Svelte Logo" class="logo" />
    <div class="title">Notes App</div>
    <div class="options">
      <Link class="option {$location.pathname === '/' ? 'active' : ''}" to="/"
        >Base</Link
      >
      <Link
        class="option{`nav-link ${$location.pathname === '/' && ';active'}`}"
        to="home">Home</Link
      >
      <Link class="option" to="notes">Notes</Link>
      <Link class="option" to="about">About</Link>
      <Link class="option" to="blog">Blog</Link>
    </div>
  </div>
</header>

<style lang="scss">
  .options {
    width: 90%;
    height: 100%;
    display: flex;

    align-items: center;
    justify-content: flex-end;
    font-weight: bold;
  }
  .options > :global(a) {
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
    color: white;
  }
  .active > :global(a) {
    color: orangered;
  }

  .option {
    padding: 10px 15px;
    cursor: pointer;
    font-weight: bold;
    color: white;
  }

  a.active {
    color: orange;
  }
  .global-header {
    background-color: #313131;
    height: 56px;
    color: white;
    padding: 15px;
    box-sizing: border-box;
    .app-name {
      display: flex;
      align-items: center;
      height: 100%;
      .logo {
        height: 100%;
        margin-right: 5px;
      }
      .title {
        font-weight: bold;
      }
    }
  }
</style>
