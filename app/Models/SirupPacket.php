<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SirupPacket extends Model
{
    use HasFactory;
    protected $connection = 'pgsql';
    protected $table = 'paket_sirup';
    protected $guarded = [];
}
