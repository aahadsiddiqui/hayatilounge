/**
 * Next.js Instrumentation Hook — runs once on server startup.
 *
 * Node.js 22+ ships a built-in `localStorage` global that requires
 * `--localstorage-file <path>` to work. When that flag is absent or
 * points to an invalid path, the object exists but its methods throw
 * ("localStorage.getItem is not a function"), which crashes SSR for
 * any package (e.g. Framer Motion) that probes localStorage at import
 * time. We replace it with a safe no-op so SSR completes cleanly and
 * real browser localStorage is unaffected on the client.
 */
export function register() {
  if (typeof globalThis.localStorage !== "undefined") {
    try {
      globalThis.localStorage.getItem("__probe__");
    } catch {
      // Broken Node.js 22 localStorage — replace with a safe no-op.
      Object.defineProperty(globalThis, "localStorage", {
        value: {
          getItem:    ()  => null,
          setItem:    ()  => undefined,
          removeItem: ()  => undefined,
          clear:      ()  => undefined,
          key:        ()  => null,
          length: 0,
        },
        writable:     true,
        configurable: true,
      });
    }
  }
}
