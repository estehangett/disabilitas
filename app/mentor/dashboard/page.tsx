'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, TrendingUp, Star, Edit, Eye, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import MentorLayout from '@/components/mentor/MentorLayout';

const mentorCourses = [
  {
    id: 1,
    title: 'Dasar-Dasar Pemrograman Web',
    students: 1250,
    revenue: 15000000,
    rating: 4.8,
    status: 'active',
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'JavaScript Advanced',
    students: 890,
    revenue: 12000000,
    rating: 4.7,
    status: 'active',
    thumbnail: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'React untuk Pemula',
    students: 650,
    revenue: 9500000,
    rating: 4.9,
    status: 'draft',
    thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function MentorDashboard() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const totalStudents = mentorCourses.reduce((sum, course) => sum + course.students, 0);
  const totalRevenue = mentorCourses.reduce((sum, course) => sum + course.revenue, 0);
  const averageRating = (mentorCourses.reduce((sum, course) => sum + course.rating, 0) / mentorCourses.length).toFixed(1);

  return (
    <MentorLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-fadeIn">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Dashboard Mentor
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Kelola kursus dan pantau performa Anda
            </p>
          </div>
          <Link href="/mentor/courses/new">
            <Button size="lg" className="bg-[#005EB8] hover:bg-[#004A93]">
              <BookOpen className="h-5 w-5 mr-2" />
              Buat Kursus Baru
            </Button>
          </Link>
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
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{mentorCourses.length}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Kursus</p>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card animate-scaleIn delay-100 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-[#008A00]/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#008A00]" />
                </div>
                <TrendingUp className="h-5 w-5 text-[#008A00]" />
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {totalStudents.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Siswa</p>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card animate-scaleIn delay-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-[#F4B400]/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-[#F4B400]" />
                </div>
                <TrendingUp className="h-5 w-5 text-[#008A00]" />
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(totalRevenue)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Pendapatan</p>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card animate-scaleIn delay-300 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-[#005EB8]/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-[#F4B400]" />
                </div>
                <TrendingUp className="h-5 w-5 text-[#008A00]" />
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{averageRating}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Rating Rata-rata</p>
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
                  Kelola dan pantau performa kursus Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {mentorCourses.map((course, index) => (
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
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                          {course.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          course.status === 'active'
                            ? 'bg-[#008A00]/10 text-[#008A00]'
                            : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                        }`}>
                          {course.status === 'active' ? 'Aktif' : 'Draft'}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            {course.students.toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Siswa</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-[#F4B400]">
                            {course.rating}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Rating</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            {formatCurrency(course.revenue)}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Pendapatan</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col gap-2">
                      <Link href={`/mentor/courses/${course.id}/edit`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                      </Link>
                      <Link href={`/courses/${course.id}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          <Eye className="h-4 w-4 mr-1" />
                          Lihat
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}

                <Link href="/mentor/courses">
                  <Button variant="outline" className="w-full">
                    Lihat Semua Kursus
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="main-card animate-fadeSlide delay-200">
              <CardHeader>
                <CardTitle>Statistik Bulanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Siswa Baru</span>
                    <span className="font-semibold text-gray-900 dark:text-white">+245</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-[#005EB8] rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Kursus Diselesaikan</span>
                    <span className="font-semibold text-gray-900 dark:text-white">189</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-[#008A00] rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Ulasan Positif</span>
                    <span className="font-semibold text-gray-900 dark:text-white">98%</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-[#F4B400] rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="main-card animate-fadeSlide delay-300">
              <CardHeader>
                <CardTitle>Pesan Terbaru</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((msg) => (
                  <div key={msg} className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <div className="h-10 w-10 rounded-full bg-[#005EB8]/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-[#005EB8]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        Siswa {msg}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                        Pertanyaan tentang materi modul 3...
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        {msg} jam yang lalu
                      </p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Lihat Semua Pesan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MentorLayout>
  );
}
