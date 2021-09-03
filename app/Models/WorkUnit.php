<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkUnit extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function opdWorkUnit()
    {
        return $this->belongsTo(OpdWorkUnit::class);
    }
}
