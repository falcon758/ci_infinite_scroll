<?php

namespace Myth\Auth\Models;

use CodeIgniter\Model;
use DateTime;

class RealState extends Model
{
    protected $table          = 'real_state';
    protected $primaryKey     = 'id';
    protected $returnType     = 'object';
    protected $useSoftDeletes = false;
    protected $allowedFields  = [
        'address', 'price', 'size',
    ];
    protected $useTimestamps   = false;
    protected $validationRules = [
        'address' => 'required',
        'price'   => 'required',
        'size'    => 'required',
    ];
    protected $validationMessages = [];
    protected $skipValidation     = false;

    /**
     * Retrieves real state
     *
     * @return array
     */
    public function listRealState(array $filters): array
    {
        $listRealState = $this->db->table('real_state')
        ->where('id >', $filters['lastID'])
        ->limit(10);

        if (isset($filters['address'])) {
            $listRealState->like('address', $filters['address']);
        }

        if (isset($filters['price'])) {
            $listRealState->where('price', $filters['price']);
        }

        if (isset($filters['size'])) {
            $listRealState->where('size', $filters['size']);
        }

        return $listRealState
                    ->get()
                    ->getResultArray();
    }
}