import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

const Bicker = ({ bicker }) => {
  if (!bicker) {
    return null
  }

  return (
    <div>
      <h3>{bicker.title}</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minHeight: 150 }}>
          <TableHead>
            <TableRow>
              <TableCell>Posted by</TableCell>
              <TableCell align="center">Content</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{bicker.user.username}</TableCell>
              <TableCell>{bicker.content}</TableCell>
              <TableCell align="right">{bicker.date}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Bicker