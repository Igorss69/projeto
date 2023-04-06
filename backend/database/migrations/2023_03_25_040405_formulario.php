<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('formularios', function (Blueprint $table) {
            $table->id();
            $table->string('pacienteid');
            $table->string('temperatura');
            $table->string('pa_sistolica');
            $table->string('pa_diastolica');
            $table->string('f_respiratoria');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
