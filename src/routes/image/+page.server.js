export function load({ params, url }) {
  return { ender: url.searchParams.get("end") };
}
