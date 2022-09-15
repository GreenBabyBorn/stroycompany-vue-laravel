<?php

namespace App\Http\Controllers;

use App\Http\Resources\PhotoResource;
use App\Http\Resources\SinglePhotoResource;
use App\Models\Home;
use App\Models\HomePhoto;
use App\Models\Photo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PhotoController extends Controller
{

    public function index()
    {
        return SinglePhotoResource::collection(Photo::all());
    }


    public function store(Request $request)
    {

    }


    public function show(Photo $photo)
    {
        return new SinglePhotoResource($photo);
    }


    public function update(Request $request, Photo $photo)
    {
        if ($request->hasFile('photo')) {
            Storage::disk('public')->delete($photo->filename);
            $filename = $request->file('photo')->store('/', 'public');

            $photo->update([
                'path' => asset('storage') . '/' . $filename,
                'filename' => $filename
            ]);
        }

        $photo->update($request->all());


        return new SinglePhotoResource($photo);
    }


    public function destroy()
    {

    }
}
