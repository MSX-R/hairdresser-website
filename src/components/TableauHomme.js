import React from 'react'
// import './TableauHomme.css'

function TableauHomme() {
  const TableauHomme = "HOMME"
    const datasHomme = [{
        Prestation: 'Shampooing coupe coiffage',
        Prix: '23€',
      }, 
      {
        Prestation: 'Taille barbe',
        Prix: '17€',
      },
      {
        Prestation: 'Couleur semi permanente',
        Prix: '10€',
      }
      ];
      console.log(datasHomme) /* pour voir ce qu'il y'a */

    //   let headings = datas.map(datas[1]);

      return (
        <div>
        <div className="composant-tableau">
                    <h2>{TableauHomme}</h2>
        <table className='table'>
          <thead className="border-thead">
          <tr className="titres-th">
                <th className="colonne-prestations">Prestations</th>
                <th className="colonne-prix">Prix</th>
          </tr>

          </thead>
          <tbody>
              {datasHomme.map(data => {
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

export default TableauHomme