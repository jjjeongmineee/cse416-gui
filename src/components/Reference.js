import Box from "@mui/material/Box";
import {Card} from "@mui/material";

export function Reference() {
    return (
        <div>
            <Card sx={{marginLeft: "50px", marginRight: "50px", padding: "20px"}}>
                <h2>References</h2>
                <h3>[Georgia]</h3>
                <h4>Current</h4>
                <ul>
                    <li>
                        <a href="https://planscore.org/plan.html?20220112T175102.385451348Z">https://planscore.org/plan.html?20220112T175102.385451348Z</a>
                    </li>
                    <li>
                        <a href="https://georgia.gov/">https://georgia.gov/</a>
                    </li>
                </ul>
                <h4>Census</h4>
                <ul>
                    <li>
                        <a href="https://redistrictingdatahub.org/state/georgia/">https://redistrictingdatahub.org/state/georgia/</a>
                    </li>
                </ul>
                <h3>[Others]</h3>
                <ul>
                    <li>
                        <a href="https://peo.gov.au/understand-our-parliament/your-questions-on-notice/questions/what-are-safe-seats">https://peo.gov.au/understand-our-parliament/your-questions-on-notice/questions/what-are-safe-seats</a>
                    </li>
                    <li>
                        <a href="https://redistrictingonline.org/basics-equalpopulation/#:~:text=Equal%20Population%20is%20the%20constitutional,in%20the%20mid%2D%2760s.">https://redistrictingonline.org/basics-equalpopulation/#:~:text=Equal%20Population%20is%20the%20constitutional,in%20the%20mid%2D%2760s.</a>
                    </li>
                    <li>
                        <a href="https://fairvote.org/archives/multi_winner_rcv_example/">https://fairvote.org/archives/multi_winner_rcv_example/</a>
                    </li>
                    <li>
                        <a href="https://github.com/Dtphelan1/gerrymandering-mcmc">https://github.com/Dtphelan1/gerrymandering-mcmc</a>
                    </li>
                </ul>
            </Card>
        </div>
    );
}
