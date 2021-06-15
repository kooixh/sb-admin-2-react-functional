import React, {useEffect} from 'react';

export function BarChart(props) {
    useEffect(() => props.callback(props.chartRef));
    return (
        <div className="chart-bar">
            <canvas id={props.chartId} ref={props.chartRef}/>
        </div>
    )
}
