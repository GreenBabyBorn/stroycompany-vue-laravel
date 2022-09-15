<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectRequest;
use App\Http\Requests\ProjectUpdateRequest;
use App\Http\Resources\ProjectResource;
use App\Models\Photo;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{

    public function index()
    {
        return ProjectResource::collection(Project::all());
    }


    public function store(ProjectRequest $request)
    {
        $filename = $request->file('photo')->store('/', 'public');

        $photo = Photo::create([
            'name' => 'Фото проекта',
            'description' => null,
            'path' => asset('storage') . '/' . $filename,
            'filename' => $filename

        ]);
        $project = Project::create([
            'name' => $request->name,
            'description' => $request->description,
            'years' => $request->years,
            'photo_id' => $photo->id
            ]);

        return new ProjectResource($project);
    }


    public function show(Project $project)
    {
        return new ProjectResource($project);
    }


    public function update(ProjectUpdateRequest $request, Project $project)
    {
        $project->update($request->except(["photo"]));
        return new ProjectResource($project);
    }


    public function destroy(Project $project)
    {
        $project->delete();
        return response()->noContent();
    }
}
