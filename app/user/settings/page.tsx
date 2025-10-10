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
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import UserLayout from '@/components/user/UserLayout';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function UserSettings() {
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    courseUpdates: true,
    promotions: false,
    weeklyDigest: true,
    assignmentReminders: true,
    certificateAlerts: true,
  });

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    showProgress: true,
    showCertificates: true,
    allowMessages: true,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [language, setLanguage] = useState('id');
  const [timezone, setTimezone] = useState('Asia/Jakarta');

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
  };

  const handleSaveSettings = () => {
    console.log('Saving settings...');
  };

  return (
    <UserLayout>
      <div className="space-y-8">
        <div className="animate-fadeIn">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Pengaturan
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
                    <Label className="font-medium">Email Notifikasi</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Terima notifikasi melalui email
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.emailNotifications}
                    onCheckedChange={(value) => handleNotificationChange('emailNotifications', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Update Kursus</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Notifikasi materi baru
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.courseUpdates}
                    onCheckedChange={(value) => handleNotificationChange('courseUpdates', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Promosi & Penawaran</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Info promo dan diskon
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.promotions}
                    onCheckedChange={(value) => handleNotificationChange('promotions', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Ringkasan Mingguan</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Laporan progress mingguan
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.weeklyDigest}
                    onCheckedChange={(value) => handleNotificationChange('weeklyDigest', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Pengingat Tugas</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Reminder deadline tugas
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.assignmentReminders}
                    onCheckedChange={(value) => handleNotificationChange('assignmentReminders', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Alert Sertifikat</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Notifikasi sertifikat siap
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.certificateAlerts}
                    onCheckedChange={(value) => handleNotificationChange('certificateAlerts', value)}
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
                  Kontrol siapa yang dapat melihat informasi Anda
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
                      <SelectItem value="friends">Teman Saja</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Tampilkan Progress</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Orang lain bisa lihat progress
                    </p>
                  </div>
                  <Switch
                    checked={privacySettings.showProgress}
                    onCheckedChange={(value) => handlePrivacyChange('showProgress', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Tampilkan Sertifikat</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Sertifikat dapat dilihat publik
                    </p>
                  </div>
                  <Switch
                    checked={privacySettings.showCertificates}
                    onCheckedChange={(value) => handlePrivacyChange('showCertificates', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Izinkan Pesan</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      User lain bisa mengirim pesan
                    </p>
                  </div>
                  <Switch
                    checked={privacySettings.allowMessages}
                    onCheckedChange={(value) => handlePrivacyChange('allowMessages', value)}
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
                      <SelectItem value="ar">العربية (Arabic)</SelectItem>
                      <SelectItem value="zh">中文 (Chinese)</SelectItem>
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
                      <SelectItem value="Asia/Singapore">Singapore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={handleSaveSettings} className="w-full bg-[#005EB8] hover:bg-[#004A93]">
                  <CheckCircleIcon className="h-4 w-4 mr-2" />
                  Simpan Pengaturan
                </Button>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 animate-scaleIn delay-400">
              <CardHeader>
                <CardTitle className="text-red-600 dark:text-red-400">Zona Berbahaya</CardTitle>
                <CardDescription>
                  Tindakan yang tidak dapat dibatalkan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <p className="text-sm text-red-600 dark:text-red-400">
                    Menghapus akun akan menghilangkan semua data Anda secara permanen termasuk progress kursus dan sertifikat.
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
    </UserLayout>
  );
}
