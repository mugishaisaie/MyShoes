export function formatRWF(value) {
  if (typeof value !== 'number') return value
  return 'RWF ' + value.toLocaleString('en-US')
}
