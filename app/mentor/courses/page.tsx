'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  MagnifyingGlassIcon,
  PlusIcon,
  PencilSquareIcon,
  EyeIcon,
  TrashIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import MentorLayout from '@/components/mentor/MentorLayout';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const courses = [
  {
    id: 1,
    title: 'Dasar-Dasar Pemrograman Web',
    category: 'Programming',
    students: 1250,
    revenue: 15000000,
    rating: 4.8,
    totalReviews: 450,
    status: 'active',
    level: 'Pemula',
    price: 499000,
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    lastUpdated: '2024-09-15',
  },
  {
    id: 2,
    title: 'JavaScript Advanced',
    category: 'Programming',
    students: 890,
    revenue: 12000000,
    rating: 4.7,
    totalReviews: 320,
    status: 'active',
    level: 'Mahir',
    price: 599000,
    thumbnail: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    lastUpdated: '2024-08-20',
  },
  {
    id: 3,
    title: 'React untuk Pemula',
    category: 'Programming',
    students: 650,
    revenue: 9500000,
    rating: 4.9,
    totalReviews: 280,
    status: 'draft',
    level: 'Pemula',
    price: 549000,
    thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    lastUpdated: '2024-10-01',
  },
  {
    id: 4,
    title: 'UI/UX Design Fundamentals',
    category: 'Design',
    students: 420,
    revenue: 6800000,
    rating: 4.6,
    totalReviews: 180,
    status: 'active',
    level: 'Pemula',
    price: 399000,
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    lastUpdated: '2024-07-10',
  },
  {
    id: 5,
    title: 'Python Data Science',
    category: 'Programming',
    students: 780,
    revenue: 11200000,
    rating: 4.8,
    totalReviews: 310,
    status: 'active',
    level: 'Menengah',
    price: 699000,
    thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    lastUpdated: '2024-09-05',
  },
];

export default function MentorCourses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const filteredCourses = courses
    .filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'all' || course.status === filterStatus;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === 'students') {
        return b.students - a.students;
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      } else if (sortBy === 'revenue') {
        return b.revenue - a.revenue;
      }
      return 0;
    });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    if (status === 'active') {
      return <Badge className="bg-[#008A00]">Aktif</Badge>;
    } else if (status === 'draft') {
      return <Badge className="bg-gray-500">Draft</Badge>;
    }
    return <Badge>Unknown</Badge>;
  };

  const handleDelete = (courseId: number) => {
    console.log(`Deleting course: ${courseId}`);
  };

  return (
    <MentorLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-fadeIn">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Kursus Saya
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Kelola semua kursus yang Anda buat
            </p>
          </div>
          <Link href="/mentor/courses/new">
            <Button size="lg" className="bg-[#005EB8] hover:bg-[#004A93]">
              <PlusIcon className="h-5 w-5 mr-2" />
              Buat Kursus Baru
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="animate-scaleIn hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-[#005EB8]/10 flex items-center justify-center">
                  <ChartBarIcon className="h-6 w-6 text-[#005EB8]" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{courses.length}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Kursus</p>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scaleIn delay-100 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-[#008A00]/10 flex items-center justify-center">
                  <ChartBarIcon className="h-6 w-6 text-[#008A00]" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {courses.filter(c => c.status === 'active').length}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Kursus Aktif</p>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scaleIn delay-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-500/10 flex items-center justify-center">
                  <ChartBarIcon className="h-6 w-6 text-gray-500" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {courses.filter(c => c.status === 'draft').length}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Draft</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="animate-scaleIn">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Cari kursus..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Status</SelectItem>
                    <SelectItem value="active">Aktif</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Urutkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Terbaru</SelectItem>
                    <SelectItem value="students">Siswa Terbanyak</SelectItem>
                    <SelectItem value="rating">Rating Tertinggi</SelectItem>
                    <SelectItem value="revenue">Pendapatan Tertinggi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <Card
              key={course.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fadeSlide"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3">
                  {getStatusBadge(course.status)}
                </div>
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/70 text-white rounded-full text-xs font-medium">
                  {course.level}
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {course.category}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Siswa</p>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {course.students.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Rating</p>
                    <p className="font-bold text-[#F4B400]">
                      ⭐ {course.rating} ({course.totalReviews})
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Harga</p>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {formatCurrency(course.price)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Pendapatan</p>
                    <p className="font-bold text-[#008A00]">
                      {formatCurrency(course.revenue)}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                    Update: {new Date(course.lastUpdated).toLocaleDateString('id-ID')}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <Link href={`/mentor/courses/${course.id}/edit`}>
                      <Button size="sm" variant="outline" className="w-full">
                        <PencilSquareIcon className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href={`/courses/${course.id}`}>
                      <Button size="sm" variant="outline" className="w-full">
                        <EyeIcon className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-red-600 hover:text-red-700"
                      onClick={() => handleDelete(course.id)}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <Card className="animate-fadeIn">
            <CardContent className="p-12 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="h-20 w-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <ChartBarIcon className="h-10 w-10 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Tidak ada kursus ditemukan
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Coba ubah filter atau buat kursus baru
                  </p>
                  <Link href="/mentor/courses/new">
                    <Button className="bg-[#005EB8] hover:bg-[#004A93]">
                      <PlusIcon className="h-4 w-4 mr-2" />
                      Buat Kursus Baru
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </MentorLayout>
  );
}
