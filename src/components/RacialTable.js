import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import React from "react";

export default function RacialTable({racial}) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 500}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{margin: "auto", fontWeight: "bold"}}>Type of
                            Data</TableCell>
                        <TableCell sx={{marginLeft: "100px", fontWeight: "bold"}}>Data
                            Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell sx={{margin: "auto"}}>Overview</TableCell>
                        {/*<TableCell sx={{margin: "auto"}}>{racial.overview}</TableCell>*/}
                        <TableCell sx={{margin: "auto"}}>{3}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{margin: "auto"}}>African-American</TableCell>
                        {/*<TableCell sx={{margin: "auto"}}>{racial.africanAmerican}</TableCell>*/}
                        <TableCell sx={{margin: "auto"}}>{3}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{margin: "auto"}}>Asian-American</TableCell>
                        {/*<TableCell sx={{margin: "auto"}}>{racial.asianAmerican}</TableCell>*/}
                        <TableCell sx={{margin: "auto"}}>{3}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{margin: "auto"}}>Hispanic</TableCell>
                        {/*<TableCell sx={{margin: "auto"}}>{racial.hispanic}</TableCell>*/}
                        <TableCell sx={{margin: "auto"}}>{3}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{margin: "auto"}}>White</TableCell>
                        {/*<TableCell sx={{margin: "auto"}}>{racial.white}</TableCell>*/}
                        <TableCell sx={{margin: "auto"}}>{3}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{margin: "auto"}}>Others</TableCell>
                        {/*<TableCell sx={{margin: "auto"}}>{racial.others}</TableCell>*/}
                        <TableCell sx={{margin: "auto"}}>{3}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
