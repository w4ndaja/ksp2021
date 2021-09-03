<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Procurement extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    // protected $casts = [
    //     'contract_date' => 'datetime:d F Y',
    //     'start_date' => 'datetime:d F Y',
    //     'end_date' => 'datetime:d F Y',
    // ];

    public function year()
    {
        return $this->belongsTo(Year::class);
    }

    public function workUnit()
    {
        return $this->belongsTo(WorkUnit::class);
    }
}
