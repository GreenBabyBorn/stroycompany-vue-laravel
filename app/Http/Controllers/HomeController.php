<?php

namespace App\Http\Controllers;

use App\Http\Resources\HomeResource;
use App\Http\Resources\PhotoResource;
use App\Http\Resources\SinglePhotoResource;
use App\Models\Home;
use App\Models\HomePhoto;
use App\Models\Photo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{

    public function index()
    {
        return HomeResource::collection(Home::all());
    }


    public function store(Request $request)
    {
        $home = Home::create([
            'name' => $request->name,
            'description' => $request->description,
            'user_id' => Auth::id()
        ]);

        if ($request->hasFile('photos')) {
            foreach ($request->file('photos') as $photo) {
                $filename = $photo->store('/', 'public');

                $photo = Photo::create([
                    'name' => null,
                    'description' => null,
                    'path' => asset('storage') . '/' . $filename,
                    'filename' => $filename

                ]);
                HomePhoto::create([
                    'home_id' => $home->id,
                    'photo_id' => $photo->id
                ]);
            }
        }
        return new HomeResource($home);
    }


    public function show(Home $home)
    {
        return new HomeResource($home);
    }


    public function update(Request $request, Home $home)
    {
        $upadteHome = $home->update([
                'name' => $request->name,
                'description' => $request->description,
                'user_id' => Auth::id(),
                'path' => $request->path()]
        );

        return new HomeResource($home);
    }


    public function destroy(Home $home)
    {
        $home->delete();
        return response()->json([
            'code' => 200,
            'message' => 'Success delete home ' . $home->id,

        ], 200);
    }

    public function indexPhotosFromHome(Home $home)
    {
        return PhotoResource::collection($home->photos);
    }

    public function storePhotoForHome(Request $request, Home $home)
    {
        $photo = [];
        if ($request->hasFile('photos')){
            foreach ($request->file('photos') as $photo){
                $filename = $photo->store('/', 'public');

                $photo = Photo::create([
                    'name'=>$request->name,
                    'description'=>$request->description,
                    'path'=> asset('storage') . '/' . $filename,
                    'filename'=> $filename

                ]);
                HomePhoto::create([
                    'home_id'=> $home->id,
                    'photo_id'=> $photo->id
                ]);
            }
        }
        return new SinglePhotoResource($photo);
    }
    public function destroyPhotoFromHome(Home $home, Photo $photo)
    {
        HomePhoto::where('photo_id', $photo->id)->delete();
        Storage::disk('public')->delete($photo->filename);
        $photo->delete();

        return response()->json([
            'code' => 200,
            'message' => 'Success delete photo from home ' . $home->id,

        ], 200);
    }
}
