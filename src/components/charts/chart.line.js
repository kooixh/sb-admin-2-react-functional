import React, {useEffect} from 'react';

export function ChartLine(props) {
    useEffect(() => props.callback(props.chartRef), []);
    return (
        <div className="chart-area">
            <canvas id={props.chartId} ref={props.chartRef}/>
        </div>
    )
}

