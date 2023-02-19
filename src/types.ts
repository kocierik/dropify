export interface Isetting {
  label: string
  handler: (...args: string[]) => void
}