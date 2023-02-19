import React from 'react'
import { useState } from 'react'
import ItemDropdown from './ItemDropdown'

const DropDown = (props: {
  label: string
  list: string[]
  filter: string[]
  setFilter: React.Dispatch<React.SetStateAction<string[]>>
}) => {
  const [isList, setIsList] = useState(false)
  return (
    <div className="z-10">
      <button
        onClick={() => setIsList(!isList)}
        className="w-64 p-4 shadow rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer"
      >
        {props.label}
        <div>
          {isList ? (
            <div>
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z" fill="#1F2937" />
              </svg>
            </div>
          ) : (
            <div>
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z" fill="#1F2937" />
              </svg>
            </div>
          )}
        </div>
      </button>
      {isList && (
        <div className=" absolute w-64 mt-2 p-4 bg-white shadow rounded">
          {props.list.map((item, i) => {
            return <ItemDropdown game={item} key={i} filter={props.filter} setFilter={props.setFilter} />
          })}
          <button
            onClick={() => setIsList(!isList)}
            className="hover:-translate-y-1 hover:scale-105 duration-300 text-xs bg-green-100 hover:bg-green-200 rounded-md mt-6 font-medium py-2 w-full leading-3 text-green-700"
          >
            Select
          </button>
        </div>
      )}
      <style>
        {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
      </style>
    </div>
  )
}
export default DropDown
