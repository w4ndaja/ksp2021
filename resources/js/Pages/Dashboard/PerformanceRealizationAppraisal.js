import { Card } from '@/Components';
import { usePage } from '@inertiajs/inertia-react';
import React, { useEffect, useMemo, useRef } from 'react';

export const PerformanceRealizationAppraisal = () => {
    const { props: { apbdBudgetTotal, apbnBudgetTotal } } = usePage();
    const totalBudget = apbdBudgetTotal + apbnBudgetTotal;
    const apbdBudgetPercentage = apbdBudgetTotal / totalBudget * 100;
    const apbnBudgetPercentage = apbnBudgetTotal / totalBudget * 100;
    useEffect(() => {
        budgetTotalRef.current = window.echarts.init(chartElRef.current);
        budgetTotalRef.current.setOption({
            title: {
                text: '',
                subtext: '',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{d} %'
            },
            legend: {
                orient: 'horizontal',
                left: 'center',
            },
            series: [
                {
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 2, name: 'Dekonsentrasi' },
                        { value: 3, name: 'DAK' },
                        { value: 2, name: 'DAU' },
                    ]
                }
            ]
        });
    }, []);
    const budgetTotalRef = useRef();
    const chartElRef = useRef();
    return (
        <Card title="Persentase Anggaran APBN" className="h-100">
            <div ref={ chartElRef } style={ { minWidth: 300, minHeight: 300, width: '100%', height: '100%' } } />
        </Card>
    );
};
