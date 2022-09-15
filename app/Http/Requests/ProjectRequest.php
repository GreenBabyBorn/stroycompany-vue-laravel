<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProjectRequest extends FormRequest
{




    public function rules()
    {
        return [
            'name' => 'required|string|',
            'description' => 'required|string|',
            'years' => 'required|string|',
            'photo' => 'required|file|mimes:jpg,png,jpeg,webp'
        ];
    }
}
