import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import React from "react";

export default function PoliticalTable() {
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
                        <TableCell sx={{margin: "auto"}}>3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{margin: "auto"}}>Seat/Vote Share</TableCell>
                        <TableCell sx={{margin: "auto"}}>10000000</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{margin: "auto"}}>Republican VS Democratic</TableCell>
                        <TableCell sx={{margin: "auto"}}>3000000 / 7000000</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{margin: "auto"}}>Opportunity</TableCell>
                        <TableCell sx={{margin: "auto"}}>3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{margin: "auto"}}>Box and Whisker</TableCell>
                        <TableCell sx={{margin: "auto"}}>3</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}