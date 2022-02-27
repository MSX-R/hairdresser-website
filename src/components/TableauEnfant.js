import React from 'react'
// import './TableauEnfant.css'

function TableauEnfant() {
  const TableauEnfant = "ENFANT"
    const datasEnfants = [{
        Prestation: 'Coupe bébé',
        Prix: '10€',
      }, 
      {
        Prestation: 'Coupe -16ans',
        Prix: '17€',
      },
      {
        Prestation: 'Shampoing, coupe, coiffage -16ans',
        Prix: '17€',
      }, 
      {
        Prestation: 'Shampoing, coupe, coiffage étudiant',
        Prix: '19€',
      } 
      ];
      console.log(datasEnfants) /* pour voir ce qu'il y'a */

    //   let headings = datas.map(datas[1]);

      return (
        <div>
        <div className="composant-tableau">
                    <h2>{TableauEnfant}</h2>
        <table className='table'>
          <thead className="border-thead">
          <tr className="titres-th">
                <th className="colonne-prestations">Prestations</th>
                <th className="colonne-prix">Prix</th>
          </tr>

          </thead>
          <tbody>
              {datasEnfants.map(data => {
                return <tr><td>{data.Prestation}</td>
                <td className="prix">{data.Prix}</td></tr> 
              })
              }
          </tbody>
        </table>
        </div>
        </div>
      );
    }

export default TableauEnfant