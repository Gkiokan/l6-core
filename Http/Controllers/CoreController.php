<?php

namespace Gkiokan\Core\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class CoreController extends Controller
{

      public function index()
      {
          return view('core::layouts.vue')->with('src', 'core');
      }
}
