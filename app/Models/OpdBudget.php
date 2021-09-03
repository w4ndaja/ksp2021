<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OpdBudget extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function year()
    {
        return $this->belongsTo(Year::class);
    }

    public function opdWorkUnit()
    {
        return $this->belongsTo(OpdWorkUnit::class);
    }
}
