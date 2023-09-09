import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const ResidentCard = ({ url }) => {

    const [resident, getResident ] = useFetch(url)

    useEffect(() =>{
        getResident()
    }, [])

    console.log(resident)

  return (
    <article className="resident">
        <header className="resident__header">
           <img className="resident__image" src={resident?.image} alt="" />
           <div className="resident__status">
            <spna className={`resident__status__circle ${resident?.status}`}></spna>
            <span className="resident__status_value">{resident?.status}</span>
           </div>
        </header>
        <section className="resident__body">
            <h3 className="resident__name">{resident?.name}</h3>
            <hr className="resident__separator"/>
            <ul className="resident__list">
                <li className="resident__item">
                    <span className="resident__label">Specie</span>
                    <span className="resident__value">{resident?.species}</span>
                    </li>
                <li className="resident__label"><span>Origin</span>
                <span className="resident__value">{resident?.origin.name}</span>
                </li>
                <li className="resident__item">
                    <span className="resident__label">Episodes where appear</span>
                    <span className="resident__value">{resident?.episode.length}</span>
                    </li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentCard