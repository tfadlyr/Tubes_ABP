<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class dbController extends Controller
{
    public function showPeakGame(){
        $peakData = DB::table('tbl_peak')->get();
        return response()->json($peakData);
    }

    public function searchPeakGame($idGame){
        $peakData = DB::table('tbl_peak')->where('id_game', $idGame)->get();
        return response()->json($peakData);
    }

    public function cekGameStatistik(){
        $data = DB::select('SELECT DISTINCT id_game FROM tbl_statistik');
        return response()->json($data);
    }
    
    public function showPageGame($idGame){
        $monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        
        $data = DB::select('SELECT * FROM tbl_statistik WHERE id_game='.$idGame.' ORDER BY date_statistik DESC');

        if(count($data) == 0){
            return Inertia::render('Game', ["dataStat" => null]);
        }

        $tempTahun = substr($data[0]->date_statistik, 0, 4);
        $dataStat = array(
            "idGame" => $data[0]->id_game,
            "yearsStat" => array([
                "year" => $tempTahun,
                "peaks" => array([
                    "idPeak" => $data[0]->id_statistik,
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
                    "idPeak" => $data[$i]->id_statistik,
                    "month" => $monthNames[$month],
                    "peakPlayer" => $data[$i]->peak_player,
                    "gainPlayer" => $data[$i]->gain_player
                ]);
            }else{
                $tempTahun = substr($data[$i]->date_statistik, 0, 4);

                array_push($dataStat["yearsStat"], [
                    "year" => $tempTahun,
                    "peaks" => array([
                        "idPeak" => $data[$i]->id_statistik,
                        "month" => $monthNames[$month],
                        "peakPlayer" => $data[$i]->peak_player,
                        "gainPlayer" => $data[$i]->gain_player
                    ])
                ]);
                $idxYearStat += 1;
            }
        }

        return Inertia::render('Game', ["dataStat" => $dataStat]);
    }

    public function createGameStatistik($idGame){
        DB::statement("INSERT INTO tbl_statistik(id_game, date_statistik, peak_player, gain_player) 
        VALUES(
            ".$idGame.",
            '".date("Y-m-d")."',
            0,
            0
        )");
        
        DB::statement(
            "INSERT INTO tbl_peak VALUES(
                ".$idGame.",
                0,
                0
            )"
        );

        return redirect('/game/'.$idGame);
    }

    public function insertStatistikGame($idGame, $dateStat, $peakPlayer){
        DB::statement(
            "INSERT INTO tbl_statistik(id_game, date_statistik, peak_player, gain_player) 
            VALUES(
                ".$idGame.",
                '".$dateStat."',
                ".$peakPlayer.",
                0
            )"
        );

        return redirect('/game/'.$idGame.'');
    }

    public function deleteStatistikGame($idGame, $idPeak){
        DB::statement(
            "DELETE FROM tbl_statistik WHERE id_statistik='".$idPeak."'"
        );

        return redirect('/game/'.$idGame.'');
    }

    public function updateStatistikGame($idGame, $idPeak, $dateStat, $peakPlayer){
        DB::statement(
            "UPDATE tbl_statistik SET date_statistik='".$dateStat."', peak_player=".$peakPlayer." 
            WHERE id_statistik=".$idPeak.""
        );

        return redirect('/game/'.$idGame.'');
    }

    public function updateInGamePeak($idGame, $inGame){
        DB::statement(
            "UPDATE tbl_peak SET in_game_peak=".$inGame." WHERE id_game=".$idGame.""
        );

        return redirect('/game/'.$idGame.'');
    }

    public function updatePeakPlayer($idGame, $peakPlayer){
        DB::statement(
            "UPDATE tbl_peak SET peak_player=".$peakPlayer." WHERE id_game=".$idGame.""
        );

        return redirect('/game/'.$idGame.'');
    }
}
