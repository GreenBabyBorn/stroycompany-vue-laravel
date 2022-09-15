<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'author'=>$this->author,
            'email'=>$this->email,
            'text'=>$this->text,
            'status'=>$this->status,
            'date' => $this->created_at->format('d.m.Y'),
            'time' => $this->created_at->format('H:i'),

        ];
    }
}
