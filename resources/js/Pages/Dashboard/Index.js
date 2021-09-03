import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import { Authenticated } from '@/Layouts/Authenticated';
import { Card } from '@/Components';
import { BudgetPercentageChart } from './BudgetPercentageChart';
import { formatter } from '@/lib/idrFormatter';
import { ApbnBudgetPercentage } from './ApbnBudgetPercentargeChart';
import { ApbnRealizationChart } from './ApbnRealizationChart';
import { ApbdRealizationChart } from './AbpdRealizationChart';
import { PerformanceRealizationAppraisal } from './PerformanceRealizationAppraisal';
Index.layout = children => <Authenticated children={ children } />;
const BudgetWidget = ({ title = null, value = null, icon = null, children }) => {
    return (
        <Card>
            <div className="row flex-between-center g-0">
                <div className="col-6 d-lg-block flex-between-center">
                    <h6 className="mb-2 text-900 text-nowrap">{ title }</h6>
                    <h4 className="fs-3 fw-normal text-700 mb-0 text-nowrap">{ value }</h4>
                </div>
                { icon && <div className="col-auto h-100">
                    { icon }
                </div> }
                { children }
            </div>
        </Card>
    );
};
export default function Index({
    apbdBudgetTotal,
    apbnBudgetTotal,
    apbnTargetTotal,
    apbdTargetTotal,
    apbnRealizationTotal,
    apbdRealizationTotal,
}) {
    return (
        <>
            <Head title="Dashboard" />
            <div className="row g-3 mb-3">
                <div className="col-md-4">
                    <BudgetPercentageChart />
                </div>
                <div className="col-md-8">
                    <div className="row g-3">
                        <div className="col-12">
                            <BudgetWidget title="Anggaran APBN" value={ formatter.format(apbnBudgetTotal) } icon={ <i className="fas fa-chart-area fa-2x"></i> } />
                        </div>
                        <div className="col-md-6">
                            <BudgetWidget title="Target Penyerapan APBN" value={ formatter.format(apbnTargetTotal) } icon={ <i className="fas fa-chart-area fa-2x"></i> } />
                        </div>
                        <div className="col-md-6">
                            <BudgetWidget title="Realisasi Penyerapan APBN" value={ formatter.format(apbnRealizationTotal) } icon={ <i className="fas fa-chart-area fa-2x"></i> } />
                        </div>
                        <div className="col-12">
                            <BudgetWidget title="Anggaran APBD" value={ formatter.format(apbdBudgetTotal) } icon={ <i className="fas fa-chart-area fa-2x"></i> } />
                        </div>
                        <div className="col-md-6">
                            <BudgetWidget title="Target Penyerapan APBD" value={ formatter.format(apbdTargetTotal) } icon={ <i className="fas fa-chart-area fa-2x"></i> } />
                        </div>
                        <div className="col-md-6">
                            <BudgetWidget title="Realisasi Penyerapan APBD" value={ formatter.format(apbdRealizationTotal) } icon={ <i className="fas fa-chart-area fa-2x"></i> } />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-3">
                <div className="col-md-6">
                    <ApbnBudgetPercentage />
                </div>
                <div className="col-md-6">
                    <ApbdRealizationChart />
                </div>
                <div className="col-md-6">
                    <ApbnRealizationChart />
                </div>
                <div className="col-md-6">
                    <PerformanceRealizationAppraisal />
                </div>
            </div>
        </>
    );
}
