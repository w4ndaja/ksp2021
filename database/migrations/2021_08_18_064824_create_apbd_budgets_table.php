<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApbdBudgetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('apbd_budgets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('year_id');
            $table->foreignId('opd_work_unit_id');
            $table->foreignId('user_id');
            $table->bigInteger('budget');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('apbd_budgets');
    }
}
