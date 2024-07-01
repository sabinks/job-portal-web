<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployerProfile extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'organization_name', 'slug', 'contact_number', 'address',
        'banner', 'banner_path',
        'display_address',
        'make_profile_public',
        'industry_type_id', 'display_industry_type'
    ];

    public function vacancies()
    {
        return $this->hasMany(Vacancy::class, 'created_for', 'user_id');
    }
    public function industryType()
    {
        return $this->belongsTo(IndustryType::class, 'industry_type_id');
    }
}
