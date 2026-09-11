import { useState, useEffect } from "react"

// Custom hooks usually live in their own file, named after the hook. App
// imports useFetch from here, the same way it would import a component.
//
// TODO: make this a real hook. Move the data-loading pattern in here:
// 1. Hold data, loading, and error in state.
// 2. In an effect that depends on [url], fetch the url, set data on success,
//    set an error message if it fails, and set loading to false at the end.
// 3. Return { data, loading, error }.
export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=> {
    async function load() {
      try {
        const res = await fetch(url)
        if (!res.ok) throw new Error("Request failed")
        setData(await res.json())
      } catch(err) {
        setError("Could not load.")
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [url])

  return { data, loading, error }
}
