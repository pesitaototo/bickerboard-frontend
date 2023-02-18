import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logoutUser } from "../reducers/userReducer"

const Logout = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(logoutUser())
      .then(() => {
        navigate('/')
      })
  }, [])

  return null
}

export default Logout