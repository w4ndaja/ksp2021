<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpjShoppingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('spj_shoppings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('year_id');
            $table->foreignId('opd_work_unit_id');
            $table->string('code');
            $table->string('name');
            $table->double('value');
            $table->string('status');
            $table->string('file');
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
        Schema::dropIfExists('spj_shoppings');
    }
}
