<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stage extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        "description",
        'years',
        'photo_id',
        'project_id',

    ];

    public function photo()
    {
        return $this->belongsTo(Photo::class);
    }

}
