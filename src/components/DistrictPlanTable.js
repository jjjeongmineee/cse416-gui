import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

export function DistrictPlanTable({districtPlan}) {
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
                        <TableCell sx={{margin: "auto"}}>Number of Districts</TableCell>
                        {/*<TableCell sx={{margin: "auto"}}>{summary.numOfDistrictPlan}</TableCell>*/}
                        <TableCell sx={{margin: "auto"}}>{1}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{margin: "auto"}}>Summary of Each District in the Plan</TableCell>
                        {/*<TableCell sx={{margin: "auto"}}>{summary.avgNumOfMajorMinorRepPerPlan}</TableCell>*/}
                        <TableCell sx={{margin: "auto"}}>{1}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{margin: "auto"}}>Republican/Democratic Split</TableCell>
                        {/*<TableCell sx={{margin: "auto"}}>{summary.avgEqualPopulationMeasure}</TableCell>*/}
                        <TableCell sx={{margin: "auto"}}>{1}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{margin: "auto"}}>Election from which Voting Preference is used</TableCell>
                        {/*<TableCell sx={{margin: "auto"}}>{summary.avgPolsbyPopperValue}</TableCell>*/}
                        <TableCell sx={{margin: "auto"}}>{1}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{margin: "auto"}}>Number of Opportunity Districts</TableCell>
                        {/*<TableCell sx={{margin: "auto"}}>{summary.avgRepDemSplit}</TableCell>*/}
                        <TableCell sx={{margin: "auto"}}>{1}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{margin: "auto"}}>Number of Safe Districts</TableCell>
                        {/*<TableCell sx={{margin: "auto"}}>{summary.avgRepDemSplit}</TableCell>*/}
                        <TableCell sx={{margin: "auto"}}>{1}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{margin: "auto"}}>Polsby Popper Compactness Score of Each District</TableCell>
                        {/*<TableCell sx={{margin: "auto"}}>{summary.avgRepDemSplit}</TableCell>*/}
                        <TableCell sx={{margin: "auto"}}>{1}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
