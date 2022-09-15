<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'phone' => $request['phone'],
            'password' => bcrypt($request['password'])
        ]);

        return response($user, 201);
    }

    public function login(LoginRequest $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            auth()->user()->tokens()->delete();
            $token = Auth::user()->createToken('api')->plainTextToken;

            return response()->json([
                'name' => Auth::user()->name,
                'email' => Auth::user()->email,
                'token' => $token,
            ], 200);
        };

        return response()->json([
            'code' => 422,
            'message' => 'Incorrect login or password',

        ], 422);
    }

    public function logout(Request $request)
    {
//        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        auth()->user()->tokens()->delete();
        return response()->json([
            'code' => 200,
            'message' => 'Success logout',

        ], 200);
    }
}
