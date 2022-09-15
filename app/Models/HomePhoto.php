<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomePhoto extends Model
{
    use HasFactory;

    protected $fillable = [
        'home_id',
        'photo_id',
    ];

    public function photo()
    {
        return $this->belongsTo(Photo::class);
    }
}
