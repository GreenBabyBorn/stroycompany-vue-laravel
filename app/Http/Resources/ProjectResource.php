<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'years' => $this->years,
            'photo' => new SinglePhotoResource($this->photo),

            'stages' => StageResource::collection($this->stages)
        ];
    }
}
