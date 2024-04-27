<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\User;

class authController extends Controller
{
    public function usersRegister(Request $request){
        $this->validate($request, [
            'name'      => 'required',
            'email'     => 'required|unique:users',
            'username'  => 'required',
            'password'  => 'required'
        ]);

        User::create([
            'name'      => $request->name,
            'email'     => $request->email,
            'username'  => $request->username,
            'role'      => $request->role,
            'password'  => bcrypt($request->password)
        ]);

        return redirect('/');
    }

    public function usersLogin(Request $request){
        $this->validate($request, [
            'username'     => 'required',
            'password'  => 'required'
        ]);

        $auth = $request->only('username', 'password');

        if (Auth::attempt($auth)) {
            $request->session()->regenerate();

            return redirect('/');
        }

        return back()->withErrors([
            'username' => 'Username tidak ditemukan',
        ]);
    }

    public function usersLogout(){
        auth()->logout();

        return redirect('/');
    }
}
