<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OpdWorkUnit extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function province()
    {
        return $this->belongsTo(Province::class);
    }

    public function regency()
    {
        return $this->belongsTo(Regency::class, 'city_id');
    }
    public function distric()
    {
        return $this->belongsTo(District::class);
    }
    public function workingArea()
    {
        return $this->belongsTo(WorkingArea::class);
    }

    public function workUnits()
    {
        return $this->hasMany(WorkUnit::class);
    }
}
