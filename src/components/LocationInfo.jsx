
const LocationInfo = ({location}) => {
  return (
    <article>
        <h2>{location?.name}</h2>
        <ul>
            <li><span>Type:</span><span>{location?.type}</span></li>
            <li><span>Dimensions:</span><span>{location?.dimension || 'unknow'}</span></li>
            <li><span>Population:</span><span>{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationInfo