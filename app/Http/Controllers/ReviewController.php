<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReviewResource;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index()
    {
        return ReviewResource::collection(Review::all());
    }
    public function indexApproved()
    {
        return ReviewResource::collection(Review::all()->where('status', true));

    }

    public function store(Request $request)
    {
        $review = Review::create($request->only(['author', 'text', 'email']));
        return new ReviewResource($review);
    }

    public function show(Review $review)
    {
        return new ReviewResource($review);
    }

    public function update(Request $request, Review $review)
    {
        $review->update($request->only(['status']));
        return new ReviewResource( $review);
    }

    public function destroy(Review $review)
    {
        $review->delete();
        return response()->noContent();
    }

}
