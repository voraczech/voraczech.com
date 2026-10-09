export default defineNuxtPlugin((nuxtApp) => {
  let cancelActiveTransition: (() => void) | undefined

  nuxtApp.hook("page:view-transition:start", (transition) => {
    cancelActiveTransition?.()

    const inputEvents = ["pointerdown", "touchstart", "wheel", "keydown"] as const
    const cleanup = () => {
      window.clearTimeout(timeout)
      for (const event of inputEvents) {
        window.removeEventListener(event, skip, true)
      }
      if (cancelActiveTransition === skip) {
        cancelActiveTransition = undefined
      }
    }
    const skip = () => {
      // Cancel only the visual effect; Nuxt still completes the navigation.
      transition.skipTransition()
      cleanup()
    }

    // Nuxt holds the snapshot while async page data loads. Never wait indefinitely.
    const timeout = window.setTimeout(skip, 700)
    cancelActiveTransition = skip
    for (const event of inputEvents) {
      window.addEventListener(event, skip, { capture: true, passive: true })
    }

    // A skipped/invalid transition rejects ready; always handle that rejection.
    void transition.ready.catch(cleanup)
    void transition.finished.then(cleanup, cleanup)
  })
})
