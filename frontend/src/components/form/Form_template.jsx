import React from 'react'

export default function Form_template() {
  return (
    <div>
        <svg
      className="w-52 h-64 mt-64 mr-20 rounded-tr-[20px]"

    >
      <rect x="10" y="10" width="180" height="30" class=" fill-gray-400" />
      <rect x="10" y="50" width="180" height="30" class=" fill-gray-400" />
      <rect x="10" y="90" width="180" height="50" class=" fill-gray-400" />
      <rect x="10" y="150" width="180" height="50" class=" fill-gray-400" />
      <rect x="10" y="210" width="180" height="30" class=" fill-gray-400" />
      <polyline
        points="0,0 180,0 200,20 200,250 0,250 0,20 0,0"
        className="stroke-gray-500 stroke-2 fill-transparent"
      />
      <polyline
        points="180,0 180,20 200,20"
        className="stroke-gray-500 stroke-2 fill-gray-500"
      />
    </svg>
    </div>
  )
}
