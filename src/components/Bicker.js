import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { Link } from "react-router-dom"
import { showDate } from "../utils"

const Bickering = ({ bickering }) => {

  return (
    <TableRow>
      <TableCell style={{verticalAlign: 'top'}}>
        <div>
          {bickering.user.username}
        </div>
        <br/>
        <br/>
        <div>
          Posted {showDate(bickering.date)}
        </div>
      </TableCell>
      <TableCell>{bickering.content}</TableCell>
    </TableRow>
  )
}

const Bicker = ({ bicker }) => {
  if (!bicker) {
    return null
  }

  return (
    <div className="Bicker-Table">
      <h2><Link to="/">Bickers</Link> / {bicker.title}</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minHeight: 150 }}>
          <colgroup>
            <col width="20%" />
            <col width="80%" />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell align="left"><b>Topic: {bicker.title}</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{verticalAlign: 'top'}}>
                <div>
                  {bicker.user.username}
                </div>
                <br/>
                <br/>
                <div>
                  Posted {showDate(bicker.date)}
                </div>
              </TableCell>
              <TableCell>{bicker.content}</TableCell>
            </TableRow>
            {bicker.bickerings
              .map(bickering => <Bickering key={bickering.id} bickering={bickering} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Bicker