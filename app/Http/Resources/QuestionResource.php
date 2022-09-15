<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'seen'=>$this->seen,
            'name'=>$this->name,
            'phone'=>$this->phone,
            'text'=>$this->text,
            'date' => $this->created_at->format('d.m.Y'),
            'time' => $this->created_at->format('H:i'),
        ];
    }
}
