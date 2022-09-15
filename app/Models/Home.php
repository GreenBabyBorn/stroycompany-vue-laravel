<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Home extends Model
{

    use HasFactory;
    protected $fillable = [
        'name',
        "description",
        'user_id'
    ];
    public function user()
    {
       return $this->belongsTo(User::class);
    }

    public function photos()
    {
        return $this->hasMany(HomePhoto::class);
    }

    public function flats()
    {
        return $this->hasMany(Flat::class);
    }
}
