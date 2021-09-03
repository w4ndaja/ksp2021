<?php

namespace App\Http\Controllers;

use App\Models\ApbdBudget;
use App\Models\ApbdRealization;
use App\Models\ApbdTarget;
use App\Models\ApbnBudget;
use App\Models\ApbnRealization;
use App\Models\ApbnTarget;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $apbdBudgetTotal = fn () => ApbdBudget::sum('budget');
        $apbnBudgetTotal = fn () => ApbnBudget::sum('budget');
        $apbnTargetTotal = fn () => ApbnTarget::sum('january') + ApbnTarget::sum('february') + ApbnTarget::sum('march') + ApbnTarget::sum('april') + ApbnTarget::sum('mei') + ApbnTarget::sum('june') + ApbnTarget::sum('july') + ApbnTarget::sum('august') + ApbnTarget::sum('september') + ApbnTarget::sum('october') + ApbnTarget::sum('november') + ApbnTarget::sum('december');
        $apbdTargetTotal = fn () => ApbdTarget::sum('january') + ApbdTarget::sum('february') + ApbdTarget::sum('march') + ApbdTarget::sum('april') + ApbdTarget::sum('mei') + ApbdTarget::sum('june') + ApbdTarget::sum('july') + ApbdTarget::sum('august') + ApbdTarget::sum('september') + ApbdTarget::sum('october') + ApbdTarget::sum('november') + ApbdTarget::sum('december');
        $apbnRealizationTotal = fn () => ApbnRealization::sum('january') + ApbnRealization::sum('february') + ApbnRealization::sum('march') + ApbnRealization::sum('april') + ApbnRealization::sum('mei') + ApbnRealization::sum('june') + ApbnRealization::sum('july') + ApbnRealization::sum('august') + ApbnRealization::sum('september') + ApbnRealization::sum('october') + ApbnRealization::sum('november') + ApbnRealization::sum('december');
        $apbdRealizationTotal = fn () => ApbdRealization::sum('january') + ApbdRealization::sum('february') + ApbdRealization::sum('march') + ApbdRealization::sum('april') + ApbdRealization::sum('mei') + ApbdRealization::sum('june') + ApbdRealization::sum('july') + ApbdRealization::sum('august') + ApbdRealization::sum('september') + ApbdRealization::sum('october') + ApbdRealization::sum('november') + ApbdRealization::sum('december');
        return Inertia::render('Dashboard/Index', compact('apbdBudgetTotal', 'apbnBudgetTotal', 'apbnTargetTotal', 'apbdTargetTotal', 'apbnRealizationTotal', 'apbdRealizationTotal'));
    }
}
