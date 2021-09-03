<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RupPacket extends Model
{
    use HasFactory;
    protected $connection = 'pgsql';
    protected $table = 'rup_paket';
    protected $guarded = [];
}
