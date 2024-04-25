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

    public function getDataGame(){
        $data = DB::select('SELECT * from tbl_statistik LIMIT 1, 10');

        return response()->json($data);
    }

    public function showPageGame($idGame){
        $monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        
        $data = DB::select('SELECT * FROM tbl_statistik WHERE id_game='.$idGame.' ORDER BY date_statistik ASC');

        if(count($data) == 0){
            return "Error, there are no data statistic yet";
        }

        $tempTahun = substr($data[0]->date_statistik, 0, 4);
        $dataStat = array(
            "idGame" => $data[0]->id_game,
            "yearsStat" => array([
                "year" => $tempTahun,
                "peaks" => array([
                    "month" => $monthNames[(int)substr($data[0]->date_statistik, 5, 2) - 1],
                    "peakPlayer" => $data[0]->peak_player, 
                    "gainPlayer" => $data[0]->gain_player
                ])
            ])
        );
        
        $idxYearStat = 0;

        for($i = 1; $i < count($data); $i++){
            $month = (int)substr($data[$i]->date_statistik, 5, 2) - 1;
            $thisYear = substr($data[$i]->date_statistik, 0, 4);
            
            if($thisYear == $tempTahun){
                array_push($dataStat["yearsStat"][$idxYearStat]["peaks"], [
                    "month" => $monthNames[$month],
                    "peakPlayer" => $data[$i]->peak_player,
                    "gainPlayer" => $data[$i]->gain_player
                ]);
            }else{
                $tempTahun = substr($data[$i]->date_statistik, 0, 4);

                array_push($dataStat["yearsStat"], [
                    "year" => $tempTahun,
                    "peaks" => array([
                        "month" => $monthNames[$month],
                        "peakPlayer" => $data[$i]->peak_player,
                        "gainPlayer" => $data[$i]->gain_player
                    ])
                ]);
                $idxYearStat += 1;
            }
        }

        return view('game', ["dataStat" => $dataStat]);
    }
}
