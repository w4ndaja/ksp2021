<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RppData extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function year()
    {
        return $this->belongsTo(Year::class);
    }
}
