'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  BanknotesIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  DocumentTextIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';
import MentorLayout from '@/components/mentor/MentorLayout';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const revenueTransactions = [
  {
    id: 'TXN-001',
    courseTitle: 'Web Development Basics',
    studentName: 'John Doe',
    amount: 499000,
    date: '2024-10-15',
    status: 'completed',
    paymentMethod: 'Credit Card',
  },
  {
    id: 'TXN-002',
    courseTitle: 'JavaScript Advanced',
    studentName: 'Jane Smith',
    amount: 599000,
    date: '2024-10-14',
    status: 'completed',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 'TXN-003',
    courseTitle: 'React for Beginners',
    studentName: 'Bob Johnson',
    amount: 549000,
    date: '2024-10-13',
    status: 'pending',
    paymentMethod: 'E-Wallet',
  },
  {
    id: 'TXN-004',
    courseTitle: 'Web Development Basics',
    studentName: 'Alice Brown',
    amount: 499000,
    date: '2024-10-12',
    status: 'completed',
    paymentMethod: 'Credit Card',
  },
  {
    id: 'TXN-005',
    courseTitle: 'Python Data Science',
    studentName: 'Charlie Wilson',
    amount: 699000,
    date: '2024-10-11',
    status: 'failed',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 'TXN-006',
    courseTitle: 'UI/UX Design',
    studentName: 'Diana Martinez',
    amount: 399000,
    date: '2024-10-10',
    status: 'completed',
    paymentMethod: 'Credit Card',
  },
];

const payoutHistory = [
  {
    id: 'PAYOUT-001',
    amount: 2950000,
    date: '2024-10-01',
    status: 'completed',
    bankAccount: 'BCA ****8765',
  },
  {
    id: 'PAYOUT-002',
    amount: 3450000,
    date: '2024-09-01',
    status: 'completed',
    bankAccount: 'BCA ****8765',
  },
  {
    id: 'PAYOUT-003',
    amount: 2800000,
    date: '2024-08-01',
    status: 'completed',
    bankAccount: 'BCA ****8765',
  },
  {
    id: 'PAYOUT-004',
    amount: 5200000,
    date: '2024-07-01',
    status: 'completed',
    bankAccount: 'BCA ****8765',
  },
];

export default function MentorRevenue() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [dateRange, setDateRange] = useState('all');

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-[#008A00]">Selesai</Badge>;
      case 'pending':
        return <Badge className="bg-[#F4B400]">Pending</Badge>;
      case 'failed':
        return <Badge className="bg-[#D93025]">Gagal</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="h-5 w-5 text-[#008A00]" />;
      case 'pending':
        return <ClockIcon className="h-5 w-5 text-[#F4B400]" />;
      case 'failed':
        return <XCircleIcon className="h-5 w-5 text-[#D93025]" />;
      default:
        return null;
    }
  };

  const filteredTransactions = revenueTransactions.filter(txn => {
    if (filterStatus === 'all') return true;
    return txn.status === filterStatus;
  });

  const totalRevenue = revenueTransactions
    .filter(txn => txn.status === 'completed')
    .reduce((sum, txn) => sum + txn.amount, 0);

  const pendingRevenue = revenueTransactions
    .filter(txn => txn.status === 'pending')
    .reduce((sum, txn) => sum + txn.amount, 0);

  const totalPayout = payoutHistory
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + p.amount, 0);

  const availableBalance = totalRevenue - totalPayout;

  return (
    <MentorLayout>
      <div className="space-y-8">
        <div className="animate-fadeIn">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Revenue & Payout
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Kelola pendapatan dan riwayat pencairan dana Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="animate-scaleIn hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-[#008A00]/10 flex items-center justify-center">
                  <BanknotesIcon className="h-6 w-6 text-[#008A00]" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Pendapatan</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(totalRevenue)}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scaleIn delay-100 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-[#F4B400]/10 flex items-center justify-center">
                  <ClockIcon className="h-6 w-6 text-[#F4B400]" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600 dark:text-gray-400">Pending</p>
                <p className="text-2xl font-bold text-[#F4B400]">
                  {formatCurrency(pendingRevenue)}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scaleIn delay-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-[#005EB8]/10 flex items-center justify-center">
                  <ArrowDownIcon className="h-6 w-6 text-[#005EB8]" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Payout</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(totalPayout)}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scaleIn delay-300 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-full bg-[#5FB336]/10 flex items-center justify-center">
                  <ArrowUpIcon className="h-6 w-6 text-[#5FB336]" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600 dark:text-gray-400">Saldo Tersedia</p>
                <p className="text-2xl font-bold text-[#5FB336]">
                  {formatCurrency(availableBalance)}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="animate-fadeSlide">
              <CardHeader>
                <CardTitle>Transaksi Penjualan</CardTitle>
                <CardDescription>
                  Riwayat penjualan kursus Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Semua Status</SelectItem>
                      <SelectItem value="completed">Selesai</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="failed">Gagal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID Transaksi</TableHead>
                        <TableHead>Kursus / Siswa</TableHead>
                        <TableHead>Metode</TableHead>
                        <TableHead>Jumlah</TableHead>
                        <TableHead>Tanggal</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTransactions.map((txn) => (
                        <TableRow key={txn.id}>
                          <TableCell className="font-mono text-sm">{txn.id}</TableCell>
                          <TableCell>
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {txn.courseTitle}
                              </p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                {txn.studentName}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell className="text-sm">{txn.paymentMethod}</TableCell>
                          <TableCell className="font-semibold">
                            {formatCurrency(txn.amount)}
                          </TableCell>
                          <TableCell className="text-sm">
                            {new Date(txn.date).toLocaleDateString('id-ID', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </TableCell>
                          <TableCell>
                            {getStatusBadge(txn.status)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {filteredTransactions.length === 0 && (
                  <div className="text-center py-8">
                    <ChartBarIcon className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600 dark:text-gray-400">
                      Tidak ada transaksi ditemukan
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="animate-fadeSlide delay-100">
              <CardHeader>
                <CardTitle>Riwayat Payout</CardTitle>
                <CardDescription>
                  5 payout terakhir Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {payoutHistory.map((payout) => (
                  <div
                    key={payout.id}
                    className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-[#008A00]/10 flex items-center justify-center">
                          <CheckCircleIcon className="h-5 w-5 text-[#008A00]" />
                        </div>
                        <div>
                          <p className="font-mono text-sm font-medium text-gray-900 dark:text-white">
                            {payout.id}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {new Date(payout.date).toLocaleDateString('id-ID', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 border-t border-gray-200 dark:border-gray-700 pt-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Jumlah</span>
                        <span className="font-bold text-gray-900 dark:text-white">
                          {formatCurrency(payout.amount)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Rekening</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {payout.bankAccount}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                <Button variant="outline" className="w-full">
                  Lihat Semua Payout
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-fadeSlide delay-200 border-2 border-[#005EB8]/20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BanknotesIcon className="h-6 w-6 text-[#005EB8]" />
                  Minta Payout
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-[#005EB8]/10 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Saldo Tersedia
                  </p>
                  <p className="text-2xl font-bold text-[#005EB8]">
                    {formatCurrency(availableBalance)}
                  </p>
                </div>

                <div className="space-y-2 text-sm">
                  <p className="text-gray-600 dark:text-gray-400">
                    ✓ Minimum payout: Rp 100.000
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    ✓ Proses: 5-7 hari kerja
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    ✓ Admin fee: 2%
                  </p>
                </div>

                <Button
                  className="w-full bg-[#005EB8] hover:bg-[#004A93]"
                  disabled={availableBalance < 100000}
                >
                  <ArrowDownIcon className="h-4 w-4 mr-2" />
                  Minta Payout
                </Button>

                {availableBalance < 100000 && (
                  <p className="text-xs text-[#D93025] text-center">
                    Saldo belum mencukupi untuk payout
                  </p>
                )}
              </CardContent>
            </Card>

            <Card className="animate-fadeSlide delay-300">
              <CardHeader>
                <CardTitle>Laporan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                  Download Laporan Bulan Ini
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <DocumentTextIcon className="h-4 w-4 mr-2" />
                  Download Invoice
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MentorLayout>
  );
}
