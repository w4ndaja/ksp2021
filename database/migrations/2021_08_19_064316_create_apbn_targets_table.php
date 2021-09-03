<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApbnTargetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('apbn_targets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('year_id');
            $table->foreignId('opd_work_unit_id');
            $table->foreignId('user_id');
            $table->bigInteger('january')->default(0);
            $table->bigInteger('february')->default(0);
            $table->bigInteger('march')->default(0);
            $table->bigInteger('april')->default(0);
            $table->bigInteger('mei')->default(0);
            $table->bigInteger('june')->default(0);
            $table->bigInteger('july')->default(0);
            $table->bigInteger('august')->default(0);
            $table->bigInteger('september')->default(0);
            $table->bigInteger('october')->default(0);
            $table->bigInteger('november')->default(0);
            $table->bigInteger('december')->default(0);
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
        Schema::dropIfExists('apbn_targets');
    }
}
