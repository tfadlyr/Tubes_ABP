<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblStatistikTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_statistik', function (Blueprint $table) {
            $table->id('id_statistik'); // Primary key with auto-increment
            $table->integer('id_game');
            $table->date('date_statistik');
            $table->integer('peak_player');
            $table->integer('gain_player');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_statistik');
    }
}
