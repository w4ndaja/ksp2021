import { Card } from '@/Components';
import { usePage } from '@inertiajs/inertia-react';
import React, { useEffect, useMemo, useRef } from 'react';

export const ApbnRealizationChart = () => {
    useEffect(() => {
        budgetTotalRef.current = window.echarts.init(chartElRef.current);
        budgetTotalRef.current.setOption({
            tooltip: {},
            legend: {},
            xAxis: {
                data: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "November", "Desember"]
            },
            yAxis: {},
            series: [{
                name: "Target",
                type: "bar",
                data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            }, {
                name: "Realisasi",
                type: "bar",
                data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            }]
        });
    }, []);
    const budgetTotalRef = useRef();
    const chartElRef = useRef();
    return (
        <Card title="Realisasi Penyerapan APBN" className="h-100">
            <div ref={ chartElRef } style={ { minWidth: 300, minHeight: 300, width: '100%', height: '100%' } } />
        </Card>
    );
};
