import React from 'react'

export default function Team(props) {
  return (
    <div>
      {console.log(props.match.params.teamId)}
    </div>
  )
}