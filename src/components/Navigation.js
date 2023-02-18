import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const Navigation = () => {

  return (
    <div className="navigation-bar">
      <div>
        <Button>
        <Link to="/">Bicker Home</Link>
        </Button>
      </div>
      <div>
        <Button>
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </div>
  )
}

export default Navigation