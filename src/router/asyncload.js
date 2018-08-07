export const asyncImport = (url) => {
  return () => import(`@/${url}`)
}
