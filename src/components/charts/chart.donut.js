import React, {useEffect} from 'react';

export function ChartDonut(props) {
    useEffect(() => props.callback(props.chartRef));
    return (
        <div className="chart-pie pt-4 pb-2">
            <canvas id={props.chartId} ref={props.chartRef}/>
        </div>
    )
}

