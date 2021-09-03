<?php

use App\Http\Controllers\ApbdBudgetController;
use App\Http\Controllers\ApbdRealizationController;
use App\Http\Controllers\ApbdTargetController;
use App\Http\Controllers\ApbnBudgetController;
use App\Http\Controllers\ApbnRealizationController;
use App\Http\Controllers\ApbnTargetController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DistricController;
use App\Http\Controllers\GeneralController;
use App\Http\Controllers\IndoRegionController;
use App\Http\Controllers\OpdBudgetController;
use App\Http\Controllers\OpdRealizationController;
use App\Http\Controllers\OpdTargetController;
use App\Http\Controllers\OpdWorkUnitController;
use App\Http\Controllers\ProcurementController;
use App\Http\Controllers\ProviderController;
use App\Http\Controllers\ProvinceController;
use App\Http\Controllers\RegencyBudgetController;
use App\Http\Controllers\RegencyController;
use App\Http\Controllers\RegencyTargetController;
use App\Http\Controllers\RppDataController;
use App\Http\Controllers\RupPacketOptionListController;
use App\Http\Controllers\SirupPacketOptionListController;
use App\Http\Controllers\SpjShoppingController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WorkUnitController;
use App\Http\Controllers\YearController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', fn () => redirect()->route('dashboard'));

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::resource('opd-work-units', OpdWorkUnitController::class)->except('create', 'edit', 'show');
    Route::resource('work-units', WorkUnitController::class)->except('create', 'edit', 'show');
    Route::resource('provinces', ProvinceController::class)->except('create', 'edit', 'show');
    Route::resource('regencies', RegencyController::class)->except('create', 'edit', 'show');
    Route::resource('districts', DistricController::class)->except('create', 'edit', 'show');
    Route::resource('years', YearController::class)->except('create', 'edit', 'show');
    Route::resource('users', UserController::class)->except('create', 'edit', 'show');
    Route::resource('regency-targets', RegencyTargetController::class)->except('create', 'edit', 'show');
    Route::resource('regency-budgets', RegencyBudgetController::class)->except('create', 'edit', 'show');
    Route::resource('apbd-realizations', ApbdRealizationController::class)->except('create', 'edit', 'show');
    Route::resource('apbd-targets', ApbdTargetController::class)->except('create', 'edit', 'show');
    Route::resource('apbd-budgets', ApbdBudgetController::class)->except('create', 'edit', 'show');
    Route::resource('apbn-realizations', ApbnRealizationController::class)->except('create', 'edit', 'show');
    Route::resource('apbn-targets', ApbnTargetController::class)->except('create', 'edit', 'show');
    Route::resource('apbn-budgets', ApbnBudgetController::class)->except('create', 'edit', 'show');
    Route::resource('opd-realizations', OpdRealizationController::class)->except('create', 'edit', 'show');
    Route::resource('opd-targets', OpdTargetController::class)->except('create', 'edit', 'show');
    Route::resource('opd-budgets', OpdBudgetController::class)->except('create', 'edit', 'show');
    Route::resource('generals', GeneralController::class)->except('create', 'edit', 'show');
    Route::resource('providers', ProviderController::class)->except('create', 'edit', 'show');
    Route::resource('procurements', ProcurementController::class)->except('create', 'edit', 'show');
    Route::resource('spj-shoppings', SpjShoppingController::class)->except('create', 'edit', 'show');
    Route::resource('rpp-data', RppDataController::class)->except('create', 'edit', 'show');
    Route::get('rup-packet-list', RupPacketOptionListController::class)->name('rup-packet.list');
    Route::get('sirup-packet-list', SirupPacketOptionListController::class)->name('sirup-packet.list');
});

Route::middleware('auth')->prefix('indo-region')->group(function () {
    Route::get('provinces', [IndoRegionController::class, 'provinces'])->name('provinces');
    Route::get('provinces/{province}', [IndoRegionController::class, 'regencies'])->name('regencies');
    Route::get('provinces/regencies/{regency}', [IndoRegionController::class, 'districs'])->name('districs');
});

require __DIR__ . '/auth.php';
