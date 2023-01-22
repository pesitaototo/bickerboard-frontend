import { useDispatch, useSelector } from "react-redux"

const Bicker = ({ bicker }) => {
  return (
    <div className="bicker-post">
      <a href="">{bicker.title}</a> - {bicker.user.username} - {bicker.date.toLocaleString()}
    </div>
  )
}

const BickerList = () => {
  const bickers = useSelector(state => state.bickers)

  return (
    <div>
      {console.log(bickers)}
      {bickers.map(bicker => <Bicker bicker={bicker} key={bicker.id} />)}
    </div>
  )
}

export default BickerList