export default {
  // Vite (esbuild) handles the JSX transform with the automatic runtime, so
  // no React plugin is needed. Editing a file triggers a full preview reload
  // (no Fast Refresh), which is fine for this course.
  esbuild: {
    jsx: "automatic",
  },
  server: {
    host: true,
    allowedHosts: true,
  },
}
