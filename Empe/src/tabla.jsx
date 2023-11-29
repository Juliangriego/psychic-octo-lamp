import {
    Paper,
    TableBody,
  } from "@mui/material";
  import { StyledTable, StyledTableCell, StyledTableContainer, StyledTableHead, StyledTableHeadCell, StyledTableRow } from "./tabla.styles";
  
  
  export const BasicTable = ({columns, data}) => {
    return (
      <StyledTableContainer component={Paper}>
        <StyledTable>
          <StyledTableHead>
            <StyledTableRow>
              {
                columns.map((col) =><StyledTableHeadCell>{col.label}</StyledTableHeadCell>)
              }
            </StyledTableRow>
          </StyledTableHead>
          <TableBody>
              {data.map((row,i) => (
                <StyledTableRow
                    key={columns[i].label + i.toString()}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {
                    row.data.map((cell) =>
                      <StyledTableCell key={columns[i].label + i.toString()} component="th" scope="row">
                        {cell.toString()}
                      </StyledTableCell>
                    )
                  }
                </StyledTableRow>
              ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    )}