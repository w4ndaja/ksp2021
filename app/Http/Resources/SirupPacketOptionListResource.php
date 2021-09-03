<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SirupPacketOptionListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'label' => "{$this->id}-{$this->nama}",
            'value' => $this->id,
        ];
    }
}
