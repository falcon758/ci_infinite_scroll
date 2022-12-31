<?php

namespace App\Controllers;

use App\Models\RealState;

class Home extends BaseController
{
    public function index()
    {
        return view('immo_list');
    }


    public function immoList()
    {
        $realState = model(RealState::class);

        $rules = [
            'lastID' => 'required|numeric|max_length[3]',
            'address' => 'permit_empty|alpha_numeric_space|min_length[3]|max_length[20]',
            'price' => 'permit_empty|numeric|max_length[9]',
            'size' => 'permit_empty|numeric|max_length[9]',
        ];

        if (!$this->validate($rules)) {
            return json_encode([]);
        }

        $filters = array_intersect_key($this->request->getPost(), $rules);

        $immoList = $realState->listRealState($filters);

        return json_encode($immoList);
    }
}
