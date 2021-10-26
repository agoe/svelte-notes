<script lang="ts">
  // ---------------------------------------------------------
  //  Imports
  // ---------------------------------------------------------
  import Fa from "svelte-fa/src/fa.svelte";
  import { faStar } from "@fortawesome/free-solid-svg-icons";
  import { createEventDispatcher } from "svelte";
  import { formatDate } from "@/lib/utils";
  import Note from "@/components/Note.svelte";
  // ---------------------------------------------------------
  //  Props
  // ---------------------------------------------------------
</script>

<Note
  id={1234}
  title={"Some Note"}
  content={"This note is about this and that"}
  tags={["test", "text"]}
  date={"20210806120000"}
  isFavorite={false}
/>

<style lang="scss">
</style>
