<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\dbController;
use App\Http\Controllers\authController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Dashboard');
});

Route::get('/gamePeak/{idGame}', [dbController::class, 'showPeakGame']);
Route::get('/game/{idGame}', [dbController::class, 'showPageGame']);

Route::post('/register', [authController::class, 'usersRegister']);
Route::post('/login', [authController::class, 'usersLogin']);
Route::get('/logout', [authController::class, 'usersLogout'])->middleware('auth');