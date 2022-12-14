import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import React from "react";
import {useRecoilValue} from "recoil";
import {districtEnsembleSummaryAtom, planTypeAtom} from "../atom";
import {Card, CardContent, CardHeader, CardMedia} from "@mui/material";
import splits from "../data/images/Splits.png";

export default function SummaryTable() {
    const planType = useRecoilValue(planTypeAtom);
    const summary = useRecoilValue(districtEnsembleSummaryAtom);

    return (
        <div>
            <TableContainer component={Paper} sx={{marginBottom: "50px"}}>
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
                            <TableCell sx={{margin: "auto"}}>Number of District Plans</TableCell>
                            {summary && <TableCell sx={{margin: "auto"}}>{summary.numOfDistrictPlans}</TableCell>}
                            {/*<TableCell sx={{margin: "auto"}}>{1}</TableCell>*/}
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{margin: "auto"}}>Average Number of Majority-Minority Representatives per
                                Plan</TableCell>
                            {summary && <TableCell sx={{margin: "auto"}}>{summary.avgNumOfMajorMinorRepPerPlan}</TableCell>}
                            {/*<TableCell sx={{margin: "auto"}}>{1}</TableCell>*/}
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{margin: "auto"}}>Average Equal Population Measure</TableCell>
                            {summary && <TableCell sx={{margin: "auto"}}>{summary.avgEqualPopulationMeasure}</TableCell>}
                            {/*<TableCell sx={{margin: "auto"}}>{1}</TableCell>*/}
                        </TableRow>
                        {/*<TableRow>*/}
                        {/*    <TableCell sx={{margin: "auto"}}>Average Polsby-Popper Value</TableCell>*/}
                        {/*    {summary && <TableCell sx={{margin: "auto"}}>{summary.avgPolsbyPopperValue}</TableCell>}*/}
                        {/*    /!*<TableCell sx={{margin: "auto"}}>{1}</TableCell>*!/*/}
                        {/*</TableRow>*/}
                        <TableRow>
                            <TableCell sx={{margin: "auto"}}>Average Republican/Democratic Split</TableCell>
                            {summary && <TableCell sx={{margin: "auto"}}>{summary.avgRepDemSplit}</TableCell>}
                            {/*<TableCell sx={{margin: "auto"}}>{1}</TableCell>*/}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            {/*<Card hidden={planType !== PlanType.MMD}>*/}
            {/*    <CardHeader title="Summary Layout"/>*/}
            {/*    <CardContent>*/}
            {/*        <p>5</p>*/}
            {/*    </CardContent>*/}
            {/*</Card>*/}
            <Card sx={{height: '100%', width: '100%', marginBottom: "50px"}}>
                <CardMedia
                    component="img"
                    image={splits}
                />
            </Card>
        </div>
    );
}
