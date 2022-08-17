import { PieChart, Box, Button } from '@cloudscape-design/components';
import classes from "./data.module.css";
import UnAuth from "../../../components/unAuth";
import CustomAlert from "../../../components/customAlert";
import { NavLink } from "react-router-dom";
export default function Data(props) {
    const header = "Successful Retrieval"
    const message = "Your data was successfully retrieved"
    return (
        <>
            {props.user.auth ?
                <>
                    {/* Valid Types are success, error, warning, info */}
                    {/* Determine if Alert is visible based on other factors of page */}
                    <CustomAlert header={header} message={message} type='success' isVisible={true} />


                    <div className={classes.wrapper}>
                        <h1 style={{ textAlign: "center" }}>Segmented Data</h1>
                        <NavLink to='/uploadFile'><Button>Upload a File</Button></NavLink>
                        <PieChart
                            data={[
                                { title: "Item A", percentage: 40, value: 40 },
                                { title: "Item B", percentage: 25, value: 25 },
                                { title: "Item C", percentage: 20, value: 20 },
                                { title: "Item D", percentage: 10, value: 10 },
                                { title: "Item E", percentage: 5, value: 5 }
                            ]}
                            segmentDescription={(datum, sum) =>
                                `${datum.value} units, ${(
                                    (datum.value / sum) *
                                    100
                                ).toFixed(0)}%`
                            }
                            i18nStrings={{
                                detailsValue: "Value",
                                detailsPercentage: "Percentage",
                                filterLabel: "Filter displayed data",
                                filterPlaceholder: "Filter data",
                                filterSelectedAriaLabel: "selected",
                                detailPopoverDismissAriaLabel: "Dismiss",
                                legendAriaLabel: "Legend",
                                chartAriaRoleDescription: "pie chart",
                                segmentAriaRoleDescription: "segment"
                            }}
                            ariaDescription="Donut chart showing generic example data."
                            ariaLabel="Donut chart"
                            errorText="Error loading data."
                            innerMetricDescription="total units"
                            innerMetricValue="100"
                            loadingText="Loading chart"
                            recoveryText="Retry"
                            size="large"
                            variant="donut"
                            empty={
                                <Box textAlign="center" color="inherit">
                                    <b>No data available</b>
                                    <Box variant="p" color="inherit">
                                        There is no data available
                                    </Box>
                                </Box>
                            }
                            noMatch={
                                <Box textAlign="center" color="inherit">
                                    <b>No matching data</b>
                                    <Box variant="p" color="inherit">
                                        There is no matching data to display
                                    </Box>
                                    <Button>Clear filter</Button>
                                </Box>
                            }
                        />
                    </div>
                </>
                : <UnAuth />
            }
        </>
    )
}