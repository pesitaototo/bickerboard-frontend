import { useDispatch, useSelector } from "react-redux"

const Bicker = ({ bicker, recentBicker }) => {

  return (
    <div className="Bicker-Table-Row">
      <p className="bicker-title">
      {bicker.title}
      </p>
      <p className="bicker-username">
        {bicker.user.username}
      </p>
      <p className="bicker-replies">
        {bicker.bickerings.length}
      </p>
      <p className="bicker-date">
        {bicker.date.toLocaleString()}
      </p>
      <p className="bicker-activity">
        { recentBicker
          ? 'recent post by ' + recentBicker.user.username + ' on ' + recentBicker.date
          : 'no replies'}
      </p>
    </div>
  )
}

const BickerList = () => {
  const bickers = useSelector(state => state.bickers)

  return (
    <div className="Bicker-Table">
      <h1>Bickers</h1>
      <header className="Bicker-Table-Header">
        <b className="bicker-title">Title</b>
        <b className="bicker-username">Username</b>
        <b className="bicker-replies">Replies</b>
        <b className="bicker-date">Date</b>
        <b className="bicker-activity">Last activity</b>
      </header>
      <div className="Bicker-Table-Data">
        {bickers.map(bicker => 
          <Bicker 
            key={bicker.id}
            bicker={bicker} 
            recentBicker={bicker.bickerings[bicker.bickerings.length-1]}
          />
        )}
      </div>
    </div>
  )
}

export default BickerList