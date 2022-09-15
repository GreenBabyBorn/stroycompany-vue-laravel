<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProjectUpdateRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => '|string|',
            'description' => '|string|',
            'years' => '|string|',
            'photo' => '|file|mimes:jpg,png,jpeg,webp'
        ];
    }
}
