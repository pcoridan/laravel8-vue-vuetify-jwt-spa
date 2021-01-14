<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $main_admin = new User();
        $main_admin->name = 'Patrick Coridan';
        $main_admin->email = 'pcoridan@gmail.com';
        $main_admin->password = bcrypt('test');
        $main_admin->save();
    }
}
