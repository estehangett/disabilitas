'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  CameraIcon,
  CheckCircleIcon,
  PencilIcon,
  XMarkIcon,
  PlusIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import MentorLayout from '@/components/mentor/MentorLayout';

export default function MentorProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'Dr. Ahmad Hidayat',
    email: 'ahmad.hidayat@email.com',
    phone: '081234567890',
    bio: 'Saya adalah instruktur berpengalaman dengan lebih dari 5 tahun mengajar pemrograman. Fokus saya adalah membuat pembelajaran menjadi mudah dan menyenangkan untuk semua orang, termasuk penyandang disabilitas.',
    expertise: ['Web Development', 'JavaScript', 'React', 'Python'],
    newExpertise: '',
    bankAccount: {
      accountName: 'Ahmad Hidayat',
      accountNumber: '****8765',
      bankName: 'BCA',
    },
    socialLinks: {
      portfolio: 'https://ahmadportfolio.com',
      github: 'https://github.com/ahmadh',
      linkedin: 'https://linkedin.com/in/ahmadh',
    },
  });

  const [avatarPreview, setAvatarPreview] = useState<string | null>(
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
  );

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBankAccountChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      bankAccount: {
        ...prev.bankAccount,
        [field]: value
      }
    }));
  };

  const handleSocialLinkChange = (platform: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value
      }
    }));
  };

  const handleAddExpertise = () => {
    if (formData.newExpertise.trim()) {
      setFormData(prev => ({
        ...prev,
        expertise: [...prev.expertise, formData.newExpertise],
        newExpertise: ''
      }));
    }
  };

  const handleRemoveExpertise = (expertise: string) => {
    setFormData(prev => ({
      ...prev,
      expertise: prev.expertise.filter(e => e !== expertise)
    }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log('Saving profile:', formData);
    setIsEditing(false);
  };

  return (
    <MentorLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-fadeIn">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Profile Mentor
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Kelola informasi profil dan keahlian Anda
            </p>
          </div>
          <div>
            {!isEditing ? (
              <Button
                onClick={() => setIsEditing(true)}
                className="bg-[#005EB8] hover:bg-[#004A93]"
              >
                <PencilIcon className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                >
                  Batal
                </Button>
                <Button
                  onClick={handleSave}
                  className="bg-[#008A00] hover:bg-[#006600]"
                >
                  <CheckCircleIcon className="h-4 w-4 mr-2" />
                  Simpan
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="animate-scaleIn">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-[#005EB8]">
                      <img
                        src={avatarPreview || ''}
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {isEditing && (
                      <button
                        onClick={() => document.getElementById('avatar-upload')?.click()}
                        className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-[#005EB8] hover:bg-[#004A93] flex items-center justify-center text-white transition-colors"
                      >
                        <CameraIcon className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      {formData.fullName}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {formData.email}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge className="bg-[#005EB8]">Mentor</Badge>
                    <Badge className="bg-[#008A00]">Verified</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-scaleIn delay-100">
              <CardHeader>
                <CardTitle className="text-lg">Statistik Mentor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Kursus Aktif</span>
                  <span className="font-bold text-[#005EB8]">3</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Total Siswa</span>
                  <span className="font-bold text-[#008A00]">2,790</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Rating Rata-rata</span>
                  <span className="font-bold text-[#F4B400]">4.8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Total Pendapatan</span>
                  <span className="font-bold text-gray-900 dark:text-white">Rp 36.5M</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card className="animate-fadeSlide">
              <CardHeader>
                <CardTitle>Informasi Pribadi</CardTitle>
                <CardDescription>
                  Update informasi pribadi Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nama Lengkap</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      disabled
                      className="bg-gray-50 dark:bg-gray-800"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="phone">No. Telepon</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    disabled={!isEditing}
                    rows={4}
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Ceritakan tentang diri Anda dan pengalaman mengajar Anda
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fadeSlide delay-100">
              <CardHeader>
                <CardTitle>Keahlian</CardTitle>
                <CardDescription>
                  Daftarkan keahlian dan topik yang Anda ajarkan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {formData.expertise.map((exp) => (
                    <Badge key={exp} className="bg-[#005EB8] text-white">
                      {exp}
                      {isEditing && (
                        <button
                          onClick={() => handleRemoveExpertise(exp)}
                          className="ml-2 hover:opacity-80"
                        >
                          <XMarkIcon className="h-3 w-3" />
                        </button>
                      )}
                    </Badge>
                  ))}
                </div>

                {isEditing && (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Tambah keahlian baru..."
                      value={formData.newExpertise}
                      onChange={(e) => handleInputChange('newExpertise', e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddExpertise();
                        }
                      }}
                    />
                    <Button
                      type="button"
                      onClick={handleAddExpertise}
                      className="bg-[#005EB8] hover:bg-[#004A93]"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="animate-fadeSlide delay-200">
              <CardHeader>
                <CardTitle>Tautan Sosial</CardTitle>
                <CardDescription>
                  Tambahkan tautan ke portfolio dan media sosial Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio Website</Label>
                  <Input
                    id="portfolio"
                    placeholder="https://..."
                    value={formData.socialLinks.portfolio}
                    onChange={(e) => handleSocialLinkChange('portfolio', e.target.value)}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="github">GitHub</Label>
                  <Input
                    id="github"
                    placeholder="https://github.com/..."
                    value={formData.socialLinks.github}
                    onChange={(e) => handleSocialLinkChange('github', e.target.value)}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input
                    id="linkedin"
                    placeholder="https://linkedin.com/in/..."
                    value={formData.socialLinks.linkedin}
                    onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fadeSlide delay-300">
              <CardHeader>
                <CardTitle>Rekening Bank</CardTitle>
                <CardDescription>
                  Gunakan untuk pencairan komisi kursus
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bankName">Nama Bank</Label>
                    <Input
                      id="bankName"
                      value={formData.bankAccount.bankName}
                      onChange={(e) => handleBankAccountChange('bankName', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="accountName">Nama Pemilik Rekening</Label>
                    <Input
                      id="accountName"
                      value={formData.bankAccount.accountName}
                      onChange={(e) => handleBankAccountChange('accountName', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="accountNumber">Nomor Rekening</Label>
                    <Input
                      id="accountNumber"
                      value={formData.bankAccount.accountNumber}
                      onChange={(e) => handleBankAccountChange('accountNumber', e.target.value)}
                      disabled={!isEditing}
                      placeholder="(Nomor akan disembunyikan untuk keamanan)"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Nomor rekening dienkripsi dan hanya terlihat oleh admin
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MentorLayout>
  );
}
