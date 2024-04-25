<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class dbController extends Controller
{
    public function showPeakGame(){
        $peakData = DB::select('SELECT * FROM tbl_peak');

        if(count($peakData) != 0){
            return view('welcome', ["peakData" => $peakData]);
        }else{
            return -1;
        }
    }
}
