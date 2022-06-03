import React from "react";
import styles from './ExpenseChart.module.css'

const ChartBar = ({
    value,
    maxValue,
    label
}) => {
    console.log('Max Val::', maxValue)
    console.log('Val::', value)
    let barFillHeight = '0%';
    if (maxValue > 0) {
        barFillHeight = Math.round((value / maxValue) * 100) + '%'
    }
    return (
        <>
            <div className={styles.chartBar}>
                <div className={styles.inner}>
                    <div className={styles.fill} style={{ height: barFillHeight }}></div>
                </div>
                <div className={styles.label}>{label}</div>
            </div>
        </>
    );
}

const Chart = ({ dataPoints }) => {
    const dataPointValues = dataPoints.map(dt => dt.value)
    console.log("Total Points :: ", dataPointValues)
    const totalMax = Math.max(...dataPointValues);
    console.log("Total :: ", totalMax)
    return (
        <>
            <div className={styles.chart}>
                {dataPoints.map((dataPoint =>
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMax}
                        label={dataPoint.label}
                    />
                ))}
            </div>
        </>
    );
}

const ExpenseChart = ({ expenses }) => {
    console.log("from chart", expenses)
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];
    for (let ex of expenses) {
        const expenseMonth = ex.date.getMonth();
        console.log("Expense Month", expenseMonth)
        chartDataPoints[expenseMonth].value += ex.amount;
    }

    return <Chart dataPoints={chartDataPoints} />
}

export default ExpenseChart;