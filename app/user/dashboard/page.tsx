'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Trophy, Clock, TrendingUp, Play, Award, Bell } from 'lucide-react';
import Link from 'next/link';
import UserLayout from '@/components/user/UserLayout';

const enrolledCourses = [
  {
    id: 1,
    title: 'Dasar-Dasar Pemrograman Web',
    instructor: 'Dr. Ahmad Fauzi',
    progress: 65,
    totalLessons: 12,
    completedLessons: 8,
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Desain Grafis untuk Pemula',
    instructor: 'Sarah Putri',
    progress: 40,
    totalLessons: 10,
    completedLessons: 4,
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Bahasa Inggris Percakapan',
    instructor: 'John Smith',
    progress: 80,
    totalLessons: 15,
    completedLessons: 12,
    thumbnail: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const notifications = [
  {
    id: 1,
    title: 'Materi Baru Tersedia',
    message: 'Materi baru telah ditambahkan di kursus "Dasar-Dasar Pemrograman Web"',
    time: '2 jam yang lalu',
  },
  {
    id: 2,
    title: 'Selamat!',
    message: 'Anda telah menyelesaikan 80% dari kursus "Bahasa Inggris Percakapan"',
    time: '1 hari yang lalu',
  },
];

const recommendations = [
  {
    id: 4,
    title: 'Python untuk Data Science',
    instructor: 'Dr. Maria Chen',
    rating: 4.8,
    students: 1250,
    thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    title: 'Digital Marketing Mastery',
    instructor: 'Rina Wijaya',
    rating: 4.9,
    students: 2100,
    thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function UserDashboard() {
  return (
    <UserLayout>
      <div className="space-y-8">
        <div className="animate-fadeIn">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Dashboard Pembelajaran
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Selamat datang kembali! Lanjutkan perjalanan belajar Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="stat-card animate-scaleIn hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-[#005EB8]/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-[#005EB8]" />
                </div>
                <TrendingUp className="h-5 w-5 text-[#008A00]" />
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">3</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Kursus Aktif</p>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card animate-scaleIn delay-100 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-[#008A00]/10 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-[#008A00]" />
                </div>
                <TrendingUp className="h-5 w-5 text-[#008A00]" />
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">2</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sertifikat</p>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card animate-scaleIn delay-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-[#F4B400]/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-[#F4B400]" />
                </div>
                <TrendingUp className="h-5 w-5 text-[#008A00]" />
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">24</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Jam Belajar</p>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card animate-scaleIn delay-300 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-[#005EB8]/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-[#005EB8]" />
                </div>
                <TrendingUp className="h-5 w-5 text-[#008A00]" />
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">62%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Rata-rata Progress</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="main-card animate-fadeSlide">
              <CardHeader>
                <CardTitle>Kursus Saya</CardTitle>
                <CardDescription>
                  Lanjutkan pembelajaran dari terakhir kali Anda berhenti
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {enrolledCourses.map((course, index) => (
                  <div
                    key={course.id}
                    className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-full sm:w-32 h-32 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {course.instructor}
                      </p>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">
                            {course.completedLessons} dari {course.totalLessons} pelajaran
                          </span>
                          <span className="font-medium text-[#005EB8]">
                            {course.progress}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#005EB8] rounded-full transition-all"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col gap-2">
                      <Link href={`/user/courses/${course.id}/player`} className="flex-1">
                        <Button className="w-full bg-[#005EB8] hover:bg-[#004A93]">
                          <Play className="h-4 w-4 mr-2" />
                          Lanjutkan
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}

                <Link href="/courses">
                  <Button variant="outline" className="w-full">
                    Jelajahi Kursus Lainnya
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="main-card animate-fadeSlide delay-200">
              <CardHeader>
                <CardTitle>Rekomendasi Untuk Anda</CardTitle>
                <CardDescription>
                  Kursus yang mungkin Anda sukai
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendations.map((course) => (
                  <div
                    key={course.id}
                    className="flex gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {course.instructor}
                      </p>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-[#F4B400] font-medium">⭐ {course.rating}</span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {course.students} siswa
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="main-card animate-fadeSlide delay-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Notifikasi</CardTitle>
                  <Bell className="h-5 w-5 text-[#005EB8]" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  >
                    <p className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                      {notification.title}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {notification.time}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="main-card animate-fadeSlide delay-300">
              <CardHeader>
                <CardTitle>Pencapaian Terbaru</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-[#008A00]/10">
                  <div className="h-12 w-12 rounded-full bg-[#008A00]/20 flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-[#008A00]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Pemula yang Gigih
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Selesaikan 3 kursus
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg bg-[#F4B400]/10">
                  <div className="h-12 w-12 rounded-full bg-[#F4B400]/20 flex items-center justify-center">
                    <Award className="h-6 w-6 text-[#F4B400]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Pelajar Konsisten
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Belajar 7 hari berturut
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="main-card animate-fadeSlide delay-400">
              <CardHeader>
                <CardTitle>Aktivitas Minggu Ini</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'].map((day, index) => (
                    <div key={day} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{day}</span>
                      <div className="flex gap-1">
                        {Array(Math.min(5, index + 2)).fill(0).map((_, i) => (
                          <div key={i} className="h-2 w-2 rounded-full bg-[#008A00]"></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
