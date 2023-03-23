import React from 'react'
import CardListe from './CardListe'

const UserListe = ({data,isLogin}) => {
  console.log(data)
  return (
    <div className='list-form'>
        {data&&
        React.Children.toArray(data.map(el=><CardListe user={el}/>))
        }
    </div>
  )
}

export default UserListe