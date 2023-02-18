import { useSelector } from "react-redux"

const Bickering = ({ bickering }) => {

  return (
    <div className="bickering-item">
      <p className="bickering-title">
      {bickering.content}
      </p>
    </div>
  )
}

const BickeringList = () => {
  const bickerings = useSelector(state => state.bickerings)

  return (
    <div className="bickering-container">
      <h2>Recent Bickerings</h2>
      {bickerings.map(bickering => <Bickering bickering={bickering} key={bickering.id} />)}
    </div>
  )
}

export default BickeringList