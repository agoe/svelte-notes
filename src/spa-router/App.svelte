<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Blog from "./Blog.svelte";
  import BackButton from "./BackButton.svelte";
  import ForwardButton from "./ForwardButton.svelte";
  import Notes from "../pages/Home3.svelte";
  import Header from "../components/HeaderWithRouter.svelte";
</script>

<Router>
  <Header />

  <main>
    <Route path="blog/*blogRoute" component={Blog} />

    <Route path="home">
      <h3>Home</h3>
      <p>Home sweet home...</p>
    </Route>
    <Route path="notes" component={Notes} />

    <Route path="about">
      <h3>About</h3>
      <p>That's what it's all about!</p>
    </Route>

    <Route>
      <h3>Default</h3>
      <p>No Route could be matched.</p>
    </Route>
  </main>
</Router>

<style lang="scss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    height: 100%;
  }
  :global(body) {
    /* this will apply to <body> */
    margin: 0;
    height: 100%;
    background-color: #fbfbfb;
  }
</style>
