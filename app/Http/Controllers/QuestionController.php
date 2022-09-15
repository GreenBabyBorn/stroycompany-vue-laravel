<?php

namespace App\Http\Controllers;

use App\Http\Requests\QuestionRequest;
use App\Http\Resources\QuestionResource;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{

    public function index()
    {
        $orderBy = $_GET['orderBy'] ?? 'DESC';
        $sortBy = $_GET['sortBy'] ?? 'id';
        return QuestionResource::collection(Question::orderBy($sortBy,$orderBy)->get());
    }


    public function store(QuestionRequest $request)
    {
        $question = Question::create($request->only(['name', 'phone', 'text']));
        return new QuestionResource($question);
    }


    public function show(Question $question)
    {
        return new QuestionResource($question);
    }


    public function update(Request $request, Question $question)
    {
        $question->update($request->only(['seen']));
        return new QuestionResource($question);
    }


    public function destroy(Question $question)
    {
        $question->delete();
        return response()->noContent();
    }
}
