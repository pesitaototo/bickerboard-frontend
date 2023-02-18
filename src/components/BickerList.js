import { useDispatch, useSelector } from "react-redux"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Link } from "react-router-dom"

const Bicker = ({ bicker, recentBicker }) => {

  return (
    <TableRow>
      <TableCell align="center">
        <Link to={`bickers/${bicker.id}`}>{bicker.title}</Link>
      </TableCell>
      <TableCell align="center">{bicker.user.username}</TableCell>
      <TableCell align="center">{bicker.bickerings.length}</TableCell>
      <TableCell align="center">{bicker.date.toLocaleString()}</TableCell>
      <TableCell align="center">
        { recentBicker
          ? 'recent post by ' + recentBicker.user.username + ' on ' + recentBicker.date
          : 'no replies'}
      </TableCell>
    </TableRow>
  )
}

const BickerList = () => {
  const bickers = useSelector(state => state.bickers)

  return (
    <div>
      <h1>Bickers</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Username</TableCell>
              <TableCell align="center">Replies</TableCell>
              <TableCell align="center">Date</TableCell>
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