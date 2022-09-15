<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        "description",
        'years',
        'photo_id',

    ];
    public function photo()
    {
        return $this->belongsTo(Photo::class);
    }

    public function stages()
    {
        return $this->hasMany(Stage::class);
    }

}
