export interface Isetting {
  label: string
  handler: (...args: string[]) => void
}

export interface IsettingList {
  settings: Isetting[];
}

export interface IdropDown {
  label: string,
  list: string[],
  filter: string[],
  setFilter: React.Dispatch<React.SetStateAction<string[]>>
}