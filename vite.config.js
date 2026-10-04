export default {
  // Vite (esbuild) handles the JSX transform with the automatic runtime, so
  // no React plugin is needed. Editing a file triggers a full preview reload
  // (no Fast Refresh), which is fine for this course.
  esbuild: {
    jsx: "automatic",
  },
  // react-router-dom ships a CJS/ESM dist that the in-browser preview serves
  // raw unless we tell Vite to pre-bundle it. Without this the preview throws
  // at runtime. esbuild does the pre-bundle once on boot.
  optimizeDeps: {
    include: ["react-router-dom"],
  },
  server: {
    host: true,
    allowedHosts: true,
  },
}
