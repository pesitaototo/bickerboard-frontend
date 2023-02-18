import { Button } from "@mui/material"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Navigation = () => {
  const user = useSelector(state => state.user)

  return (
    <div className="navigation-bar">
      <div className="navigation">
        <div className="home">
          <Button>
            <Link to="/">Home</Link>
          </Button>
        </div>
        { user 
          ? <div className="user-modal">
              <div className="profile">
                <Button>
                  <Link to="">User: {user.username}</Link>
                </Button>
              </div>
              <div className="logout">
                <Button>
                  <Link to="/logout">Logout</Link>
                </Button>
              </div>
            </div>
          :
          <div className="login">
            <Button>
              <Link to="/login">Login</Link>
            </Button>
          </div>
        }
      </div>
    </div>
  )
}

export default Navigation