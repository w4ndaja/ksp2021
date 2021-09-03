<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProcurementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('procurements', function (Blueprint $table) {
            $table->id();
            $table->foreignId('year_id');
            $table->foreignId('work_unit_id');
            $table->string('activity_number');
            $table->string('rup_code');
            $table->string('implement_method');
            $table->enum('job_type', ['Jasa', 'Pengadaan Barang', 'Konstruksi']);
            $table->enum('fund_source', ['APBN', 'APBD']);
            $table->string('pa_name');
            $table->string('pa_nip');
            $table->string('pa_position');
            $table->string('provider_name');
            $table->string('provider_address');
            $table->string('contract_no');
            $table->date('contract_date');
            $table->string('job_location');
            $table->string('job_magnitude');
            $table->string('job_longitude');
            $table->string('smpk_no');
            $table->integer('duration_day')->default(0);
            $table->integer('duration_week')->default(0);
            $table->integer('duration_month')->default(0);
            $table->integer('duration_year')->default(0);
            $table->date('start_date');
            $table->date('end_date');
            $table->double('value');
            $table->text('description');
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
        Schema::dropIfExists('procurements');
    }
}
