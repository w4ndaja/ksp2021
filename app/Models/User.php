<?php

namespace App\Models;

use App\Http\Controllers\OpdBudgetController;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function level()
    {
        return $this->belongsTo(Level::class, 'level_id', 'code');
    }

    public function regencyTargets()
    {
        return $this->hasMany(RegencyTarget::class);
    }

    public function opdTargets()
    {
        return $this->hasMany(OpdTarget::class);
    }

    public function regencyBudgets()
    {
        return $this->hasMany(RegencyBudget::class);
    }

    public function apbdRealizations()
    {
        return $this->hasMany(ApbdRealization::class);
    }

    public function apbnRealizations()
    {
        return $this->hasMany(ApbnRealization::class);
    }

    public function apbnTargets()
    {
        return $this->hasMany(ApbnTarget::class);
    }

    public function apbnBudgets()
    {
        return $this->hasMany(ApbnBudget::class);
    }

    public function apbdTargets()
    {
        return $this->hasMany(ApbdTarget::class);
    }

    public function apbdBudgets()
    {
        return $this->hasMany(ApbdBudget::class);
    }

    public function opdRealizations()
    {
        return $this->hasMany(OpdRealization::class);
    }

    public function opdBudgets()
    {
        return $this->hasMany(OpdBudget::class);
    }
}
