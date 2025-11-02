'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Cog6ToothIcon,
  BellIcon,
  ShieldCheckIcon,
  KeyIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  LockClosedIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import MentorLayout from '@/components/mentor/MentorLayout';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function MentorSettings() {
  const [notificationSettings, setNotificationSettings] = useState({
    courseEnrollment: true,
    studentMessages: true,
    paymentReceived: true,
    promotionalEmails: false,
    weeklyReport: true,
    courseReviews: true,
    systemUpdates: true,
  });

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    showStudentCount: true,
    showRating: true,
    showRevenue: false,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [language, setLanguage] = useState('id');
  const [timezone, setTimezone] = useState('Asia/Jakarta');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotificationSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handlePrivacyChange = (key: string, value: string | boolean) => {
    setPrivacySettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handlePasswordChange = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Password baru tidak cocok!');
      return;
    }
    console.log('Changing password...');
    alert('Password berhasil diubah');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleSaveSettings = () => {
    console.log('Saving settings...');
    alert('Pengaturan berhasil disimpan');
  };

  const handleEnable2FA = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
  };

  return (
    <MentorLayout>
      <div className="space-y-8">
        <div className="animate-fadeIn">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Pengaturan Mentor
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Kelola preferensi akun dan keamanan Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="animate-scaleIn">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BellIcon className="h-5 w-5 text-[#005EB8]" />
                  <CardTitle>Notifikasi</CardTitle>
                </div>
                <CardDescription>
                  Atur preferensi notifikasi Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Pendaftaran Siswa Baru</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Notifikasi ketika ada siswa baru
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.courseEnrollment}
                    onCheckedChange={(value) => handleNotificationChange('courseEnrollment', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Pesan dari Siswa</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Notifikasi pesan masuk dari siswa
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.studentMessages}
                    onCheckedChange={(value) => handleNotificationChange('studentMessages', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Pembayaran Diterima</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Notifikasi penjualan dan pembayaran
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.paymentReceived}
                    onCheckedChange={(value) => handleNotificationChange('paymentReceived', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Email Promosi</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Email tentang promo dan penawaran
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.promotionalEmails}
                    onCheckedChange={(value) => handleNotificationChange('promotionalEmails', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Laporan Mingguan</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Ringkasan performa mingguan
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.weeklyReport}
                    onCheckedChange={(value) => handleNotificationChange('weeklyReport', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Review Kursus</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Notifikasi review dari siswa
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.courseReviews}
                    onCheckedChange={(value) => handleNotificationChange('courseReviews', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Update Sistem</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Notifikasi update dan maintenance
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.systemUpdates}
                    onCheckedChange={(value) => handleNotificationChange('systemUpdates', value)}
                  />
                </div>

                <Button onClick={handleSaveSettings} className="w-full bg-[#005EB8] hover:bg-[#004A93]">
                  <CheckCircleIcon className="h-4 w-4 mr-2" />
                  Simpan Notifikasi
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-scaleIn delay-100">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-5 w-5 text-[#005EB8]" />
                  <CardTitle>Privasi</CardTitle>
                </div>
                <CardDescription>
                  Kontrol visibilitas profil dan data Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Visibilitas Profil</Label>
                  <Select
                    value={privacySettings.profileVisibility}
                    onValueChange={(value) => handlePrivacyChange('profileVisibility', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Publik</SelectItem>
                      <SelectItem value="private">Privat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Tampilkan Jumlah Siswa</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Orang lain bisa lihat jumlah siswa Anda
                    </p>
                  </div>
                  <Switch
                    checked={privacySettings.showStudentCount}
                    onCheckedChange={(value) => handlePrivacyChange('showStudentCount', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Tampilkan Rating</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Rating dan review dapat dilihat publik
                    </p>
                  </div>
                  <Switch
                    checked={privacySettings.showRating}
                    onCheckedChange={(value) => handlePrivacyChange('showRating', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Tampilkan Pendapatan</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Pendapatan hanya terlihat oleh Anda
                    </p>
                  </div>
                  <Switch
                    checked={privacySettings.showRevenue}
                    onCheckedChange={(value) => handlePrivacyChange('showRevenue', value)}
                  />
                </div>

                <Button onClick={handleSaveSettings} className="w-full bg-[#005EB8] hover:bg-[#004A93]">
                  <CheckCircleIcon className="h-4 w-4 mr-2" />
                  Simpan Privasi
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="animate-scaleIn delay-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <KeyIcon className="h-5 w-5 text-[#005EB8]" />
                  <CardTitle>Keamanan</CardTitle>
                </div>
                <CardDescription>
                  Ubah password dan tingkatkan keamanan akun
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Password Saat Ini</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                    placeholder="Masukkan password saat ini"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">Password Baru</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    placeholder="Masukkan password baru"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Konfirmasi Password Baru</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                    placeholder="Konfirmasi password baru"
                  />
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Password harus memenuhi syarat:
                  </p>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                    <li>Minimal 8 karakter</li>
                    <li>Kombinasi huruf besar dan kecil</li>
                    <li>Minimal 1 angka</li>
                    <li>Minimal 1 karakter spesial</li>
                  </ul>
                </div>

                <Button onClick={handlePasswordChange} className="w-full bg-[#D93025] hover:bg-[#B71C1C]">
                  <KeyIcon className="h-4 w-4 mr-2" />
                  Ubah Password
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-scaleIn delay-300">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <LockClosedIcon className="h-5 w-5 text-[#005EB8]" />
                  <CardTitle>Autentikasi Dua Faktor</CardTitle>
                </div>
                <CardDescription>
                  Tambah lapisan keamanan ekstra
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between p-4 rounded-lg bg-[#005EB8]/10 border border-[#005EB8]/20">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white mb-1">
                      Status: {twoFactorEnabled ? 'Aktif' : 'Tidak Aktif'}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {twoFactorEnabled
                        ? 'Akun Anda dilindungi dengan autentikasi dua faktor'
                        : 'Aktifkan untuk keamanan akun yang lebih baik'}
                    </p>
                  </div>
                  <Switch
                    checked={twoFactorEnabled}
                    onCheckedChange={handleEnable2FA}
                  />
                </div>

                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <p>Keuntungan autentikasi dua faktor:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Perlindungan maksimal untuk akun</li>
                    <li>Verifikasi login dengan aplikasi authenticator</li>
                    <li>Akses yang lebih aman</li>
                  </ul>
                </div>

                <Button className="w-full bg-[#005EB8] hover:bg-[#004A93]" disabled>
                  {twoFactorEnabled ? 'Matikan 2FA' : 'Aktifkan 2FA'}
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-scaleIn delay-400">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <GlobeAltIcon className="h-5 w-5 text-[#005EB8]" />
                  <CardTitle>Bahasa & Zona Waktu</CardTitle>
                </div>
                <CardDescription>
                  Sesuaikan bahasa dan zona waktu Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Bahasa</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="id">Bahasa Indonesia</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Zona Waktu</Label>
                  <Select value={timezone} onValueChange={setTimezone}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Asia/Jakarta">WIB - Jakarta</SelectItem>
                      <SelectItem value="Asia/Makassar">WITA - Makassar</SelectItem>
                      <SelectItem value="Asia/Jayapura">WIT - Jayapura</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={handleSaveSettings} className="w-full bg-[#005EB8] hover:bg-[#004A93]">
                  <CheckCircleIcon className="h-4 w-4 mr-2" />
                  Simpan Pengaturan
                </Button>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 animate-scaleIn delay-500">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-600" />
                  <CardTitle className="text-red-600 dark:text-red-400">Zona Berbahaya</CardTitle>
                </div>
                <CardDescription>
                  Tindakan yang tidak dapat dibatalkan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <p className="text-sm text-red-600 dark:text-red-400">
                    Menghapus akun akan menghilangkan semua data Anda termasuk kursus, siswa, dan pendapatan yang sudah terkumpul.
                  </p>
                </div>
                <Button variant="destructive" className="w-full">
                  Hapus Akun
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MentorLayout>
  );
}
