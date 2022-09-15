<?php

use App\Http\Controllers\FlatController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\QuestionController;

use App\Http\Controllers\ReviewController;
use App\Http\Controllers\StageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/questions', [QuestionController::class, 'index']);
    Route::get('/questions/{question}', [QuestionController::class, 'show']);
    Route::patch('/questions/{question}', [QuestionController::class, 'update']);
    Route::delete('/questions/{question}', [QuestionController::class, 'destroy']);

    Route::post('/projects', [ProjectController::class, 'store']);
    Route::patch('/projects/{project}', [ProjectController::class, 'update']);
    Route::delete('/projects/{project}', [ProjectController::class, 'destroy']);

    Route::post('/projects/{project}/stages', [StageController::class, 'store']);
    Route::patch('/stages/{stage}', [StageController::class, 'update']);
    Route::delete('/stages/{stage}', [StageController::class, 'destroy']);

    Route::get('/reviews', [ReviewController::class, 'index']);
//    Route::get('/reviews/{review}', [ReviewController::class, 'show']);
    Route::patch('/reviews/{review}', [ReviewController::class, 'update']);
    Route::delete('/reviews/{review}', [ReviewController::class, 'destroy']);

//    Route::get('/photos', [PhotoController::class, 'index']);
//    Route::get('/photos/{photo}', [PhotoController::class, 'show']);
//    Route::patch('/photos/{photo}', [PhotoController::class, 'update']);
});



Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);


Route::post('/questions', [QuestionController::class, 'store']);

Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{project}', [ProjectController::class, 'show']);

Route::get('/projects/{project}/stages', [StageController::class, 'index']);
//Route::get('/projects/{project}/stages/{stage}', [StageController::class, 'show']);

Route::get('/reviews/approved', [ReviewController::class, 'indexApproved']);
Route::post('/reviews', [ReviewController::class, 'store']);

