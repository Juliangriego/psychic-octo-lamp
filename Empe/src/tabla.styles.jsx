import { Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { styled } from "@mui/system";


export const StyledTableContainer = styled(TableContainer)({
    boxShadow:"none",
    borderRadius: "10px", 
    border: "1px solid #ECEFF1"

})

export const StyledTable = styled(Table)({
    borderRadius: "10px", 
    boxShadow:"none"
})

export const StyledTableRow = styled(TableRow)({
})

export const StyledTableCell = styled(TableCell)({
    fontFamily:'Rubik',
    textAlign:"left",
    padding: "7px 20px",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "14px"
})

export const StyledTableHeadCell = styled(StyledTableCell)({
    fontWeight:500,
    color: "#02599E",
    lineHeight: "14px",
    paddingTop:9
})

export const StyledTableHead = styled(TableHead)({
    borderRadius:10,
})