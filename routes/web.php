<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\dbController;
use App\Http\Controllers\authController;
use App\Http\Controllers\apiController;


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
    return Inertia::render('Example');
});

Route::get('/gamePeak', [dbController::class, 'showPeakGame']);
Route::get('/searchPeak/{idGame}', [dbController::class, 'searchPeakGame']);
Route::get('/game/{idGame}', [dbController::class, 'showPageGame']);
Route::get('/cekStatistik', [dbController::class, 'cekGameStatistik']);
Route::get('/getFavorit/{idGame}/{idUsers}', [dbController::class, 'getFavGame']);
Route::get('/insertStats/{idGame}/{dateStat}/{peakPlayer}', [dbController::class, 'insertStatistikGame']);
Route::get('/deleteStats/{idGame}/{idPeak}', [dbController::class, 'deleteStatistikGame']);
Route::get('/updateStats/{idGame}/{idPeak}/{dateStat}/{peakPlayer}', [dbController::class, 'updateStatistikGame']);
Route::get('/updateInGame/{idGame}/{inGame}', [dbController::class, 'updateInGamePeak']);
Route::get('/updatePeakPlayer/{idGame}/{peakPlayer}', [dbController::class, 'updatePeakPlayer']);
Route::get('/LoginPage', [authController::class, 'loginPage']);
Route::get('/RegisterPage', [authController::class, 'registerPage']);
Route::get('/logout', [authController::class, 'usersLogout'])->middleware('auth');

Route::post('/register', [authController::class, 'usersRegister']);
Route::post('/login', [authController::class, 'usersLogin']);

Route::get('/createStatistik/{idGame}', [dbController::class, 'createGameStatistik']);
Route::get('/addFavGame/{idGame}/{idUsers}', [dbController::class, 'addFavGame']);
Route::get('/delFavGame/{idFav}', [dbController::class, 'delFavGame']);
Route::get('/showGameFav/{idUsers}', [dbController::class, 'showFavGame']);