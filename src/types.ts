export interface Isetting {
  label: string
  handler: (...args: string[]) => void
}

export interface IdropDown {
  label: string,
  list: string[],
  filter: string[],
  setFilter: React.Dispatch<React.SetStateAction<string[]>>
}