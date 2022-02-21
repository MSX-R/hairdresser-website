import React from 'react'
// import './TableauDames.css'
// Infos recupérées sur https://www.salon-scm.com/tarifs-coiffeur-valbonne.php

function TableauDames() {
  const TableauDames = "Dame"
    const datasDames = [{
        Prestation: 'Shampooing coupe brushing',
        Prix: '38€',
      }, 
      {
        Prestation: 'Shampooing brushing cheveux courts',
        Prix: '23€',
      },
      {
        Prestation: 'Shampooing brushing cheveux longs	',
        Prix: '27€',
      }, 
      {
        Prestation: 'Couleur Inoa	',
        Prix: '29€',
      }, 
      {
        Prestation: 'Permanente REVLON	',
        Prix: '31€',
      }, 
      {
        Prestation: `Permanente L'OREAL	`,
        Prix: '49€',
      }, 
      {
        Prestation: 'Balayage',
        Prix: '43€',
      }, 
      {
        Prestation: 'Lissage Brésilien	',
        Prix: '80€',
      },       
      {
        Prestation: 'Soin',
        Prix: '230€',
      }
      ];
      console.log(datasDames) /* pour voir ce qu'il y'a */

    //   let headings = datas.map(datas[1]);

      return (
        <div>
        <div className="composant-tableau">
                    <h2>{TableauDames}</h2>
        <table className='table table-bordered'>
          <thead className="border-thead">
          <tr className="titres-th">
                <th className="colonne-prestations">Prestations</th>
                <th className="colonne-prix">Prix</th>
          </tr>

          </thead>
          <tbody>
              {datasDames.map(data => {
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

export default TableauDames