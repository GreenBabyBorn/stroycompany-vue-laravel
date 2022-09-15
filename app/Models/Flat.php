<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flat extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'cost',
        'square',
        'home_id',
        'photo_id'
    ];

    public function photo()
    {
        return $this->belongsTo(Photo::class);
    }

    public function home()
    {
        return $this->belongsTo(Home::class);
    }
}
