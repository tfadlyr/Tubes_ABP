<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peak extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_game',
        'peak_player',
        'in_game_peak'
    ];
}
