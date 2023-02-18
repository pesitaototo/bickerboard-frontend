import { useDispatch, useSelector } from "react-redux"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Link } from "react-router-dom"
import NewBickerForm from "./NewBickerForm"
import { showDate } from "../utils"

const Bicker = ({ bicker, recentBicker }) => {

  return (
    <TableRow>
      <TableCell align="center">
        <Link to={`bickers/${bicker.id}`}>{bicker.title}</Link>
      </TableCell>
      <TableCell align="center">{bicker.user.username}</TableCell>
      <TableCell align="center">{bicker.bickerings.length}</TableCell>
      <TableCell align="center">{showDate(bicker.date)}</TableCell>
      <TableCell align="center">
        { recentBicker
          ? recentBicker.user.username + ' on ' 
            + showDate(recentBicker.date)
          : 'no replies'}
      </TableCell>
    </TableRow>
  )
}

const BickerList = () => {
  const bickers = useSelector(state => state.bickers)
  const user = useSelector(state => state.user)

  return (
    <div className="Bicker-Table">
      <h2><Link to="/">Bickers</Link></h2>
      {user ? <Link to="/new-bicker">New Bicker</Link> : ''}
      <TableContainer component={Paper}>
        <Table>
          <colgroup>
            <col width="40%" />
            <col width="15%" />
            <col width="5%" />
            <col width="10%" />
            <col width="15%" />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Started by</TableCell>
              <TableCell align="center">Replies</TableCell>
              <TableCell align="center">Posted</TableCell>
              <TableCell align="center">Last activity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {bickers.map(bicker => 
                <Bicker 
                  key={bicker.id}
                  bicker={bicker} 
                  recentBicker={bicker.bickerings[bicker.bickerings.length-1]}
                />
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default BickerList