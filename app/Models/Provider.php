<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provider extends Model
{
    use HasFactory;
    protected $connection = 'pgsql';
    protected $table = 'rekanan';
    protected $primaryKey = 'rkn_id';
    protected $guarded = [];
}
