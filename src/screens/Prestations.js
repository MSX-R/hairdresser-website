import React from 'react'
import TableauDames from '../components/TableauDames'
import TableauHomme from '../components/TableauHomme'
import TableauEnfant from '../components/TableauEnfant'
import './Prestations.css'
import Nav from '../components/Nav'

function Prestations() {
  return (
<div>
<Nav />
    <div className="main">
      <h1>Prestations et tarifs du salon</h1>
    <TableauDames />
    <TableauHomme />
    <TableauEnfant />

      </div></div>
  )
}

export default Prestations