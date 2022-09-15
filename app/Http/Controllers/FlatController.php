<?php

namespace App\Http\Controllers;

use App\Http\Resources\FlatResource;
use App\Models\Flat;
use App\Models\Home;
use App\Models\Photo;
use Illuminate\Http\Request;

class FlatController extends Controller
{

    public function index()
    {
        return FlatResource::collection(Flat::all());
    }


    public function store(Home $home, Request $request)
    {
        $filename = $request->file('photo')->store('/', 'public');
        $photo = Photo::create([
            'name' => $request->null,
            'description' => $request->null,
            'path' => asset('storage') . '/' . $filename,
            'filename' => $filename

        ]);
        $flat = Flat::create([
            'name' => $request->name,
            'description' => $request->description,
            'cost' => $request->cost,
            'square' => $request->square,
            'home_id' => $home->id,
            'photo_id' => $photo->id,
        ]);
        return new FlatResource($flat);
    }


    public function show(Flat $flat)
    {
        return new FlatResource($flat);
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
