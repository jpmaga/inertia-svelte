<script>
  import Inertia, { shouldIntercept } from 'inertia'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let href,
    data = {},
    method = 'get',
    replace = false,
    preserveScroll = false,
    preserveState = false

  function visit(event) {
    dispatch('click', event)

    if (shouldIntercept(event)) {
      event.preventDefault()

      Inertia.visit(href, {
        data,
        method,
        preserveScroll,
        preserveState,
        replace,
      })
    }
  }
</script>

<a href={href} on:click={visit}>
  <slot />
</a>
