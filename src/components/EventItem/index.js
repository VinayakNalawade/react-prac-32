import './index.css'

const EventItem = props => {
  const {onClickItem, item, selected} = props

  const showEvent = () => {
    onClickItem(item)
  }

  return (
    <li className="eventItem">
      <button className="eventbutton" onClick={showEvent} type="button">
        <img
          className={selected === item.id ? 'selectedimg' : 'eventimg'}
          alt="event"
          src={item.imageUrl}
        />
        <p className="eventname">{item.name}</p>
        <p className="eventlocation">{item.location}</p>
      </button>
    </li>
  )
}

export default EventItem
