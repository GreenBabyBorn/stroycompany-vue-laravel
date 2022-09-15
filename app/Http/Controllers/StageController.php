<?php

namespace App\Http\Controllers;

use App\Http\Requests\StageRequest;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\StageResource;
use App\Models\Photo;
use App\Models\Project;
use App\Models\Stage;
use Illuminate\Http\Request;

class StageController extends Controller
{

    public function index(Project $project)
    {
        return StageResource::collection($project->stages);
    }

    public function store(StageRequest $request, Project $project)
    {
        $filename = $request->file('photo')->store('/', 'public');

        $photo = Photo::create([
            'name' => 'Фото этапа проекта',
            'description' => null,
            'path' => asset('storage') . '/' . $filename,
            'filename' => $filename

        ]);
        $stage = Stage::create([
            'name' => $request->name,
            'description' => $request->description,
            'years' => $request->years,
            'photo_id' => $photo->id,
            'project_id' => $project->id,
        ]);

        return new StageResource($stage);

    }

//    public function show(Project $project, Stage $stage)
//    {
//        return $stage;
//    }

    public function update(Request $request, Stage $stage)
    {
        $stage->update($request->except(["photo"]));
        return new StageResource($stage);
    }


    public function destroy(Stage $stage)
    {
        $stage->delete();
        return response()->noContent();
    }
}
