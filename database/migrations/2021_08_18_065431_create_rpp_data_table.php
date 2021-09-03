<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRppDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rpp_data', function (Blueprint $table) {
            $table->id();
            $table->foreignId('year_id');
            $table->string('letter_no');
            $table->date('letter_date');
            $table->string('attachment');
            $table->string('regarding');
            $table->string('to');
            $table->string('activity_number');
            $table->string('rup_code');
            $table->string('implement_method');
            $table->string('pa_name');
            $table->string('pa_nip');
            $table->string('pa_position');
            $table->string('pa_sk');
            $table->string('pa_cp');
            $table->string('job_location');
            $table->string('hps_value');
            $table->enum('fund_source', ['APBN', 'APBD']);
            $table->enum('job_type', ['Jasa', 'Pengadaan Barang', 'Konstruksi']);
            $table->string('contract_type');
            $table->integer('support_count');
            $table->integer('duration_day')->default(0);
            $table->integer('duration_week')->default(0);
            $table->integer('duration_month')->default(0);
            $table->integer('duration_year')->default(0);
            $table->date('start_date');
            $table->date('end_date');
            $table->string('framework_attachment');
            $table->string('images_attachment');
            $table->string('hps_value_attachment');
            $table->string('contract_plan_attachment');
            $table->string('copy_of_dpa_attachment');
            $table->string('pptk_sk_attachment');
            $table->string('rup_attachment');
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
        Schema::dropIfExists('rpp_data');
    }
}
