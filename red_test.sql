-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2023 at 08:37 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `red_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `item_sales`
--

CREATE TABLE `item_sales` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sale_id` varchar(255) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `harga` double NOT NULL,
  `qty` int(11) NOT NULL,
  `ppn_nominal` double NOT NULL,
  `ppn_percent` double DEFAULT 10,
  `sub_total` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `item_sales`
--

INSERT INTO `item_sales` (`id`, `sale_id`, `nama`, `harga`, `qty`, `ppn_nominal`, `ppn_percent`, `sub_total`, `created_at`, `updated_at`) VALUES
(1, '2', 'Barang 1', 35000, 2, 7000, 10, 77000, '2023-12-01 04:49:51', '2023-12-01 22:49:21'),
(2, '2', 'Barang 3', 50000, 2, 10000, 10, 110000, '2023-12-01 04:49:51', '2023-12-01 04:49:51'),
(3, '3', 'Barang 2', 120000, 2, 24000, 10, 264000, '2023-12-01 04:52:30', '2023-12-01 04:52:30'),
(4, '4', 'Barang 3', 45000, 3, 13500, 10, 148500, '2023-12-01 04:54:38', '2023-12-01 04:54:38'),
(5, '4', 'Barang 2', 78500, 2, 15700, 10, 172700, '2023-12-01 04:54:38', '2023-12-01 04:54:38'),
(6, '5', 'Barang 3', 213000, 3, 63900, 10, 702900, '2023-12-01 04:55:55', '2023-12-01 04:55:55'),
(7, '6', 'Barang 3', 245000, 3, 73500, 10, 808500, '2023-12-01 05:25:34', '2023-12-01 05:25:34'),
(8, '6', 'Barang 1', 27800, 2, 5560, 10, 61160, '2023-12-01 05:25:34', '2023-12-01 05:25:34'),
(9, '6', 'Barang 2', 34228, 2, 6845.6, 10, 75301.6, '2023-12-01 05:25:34', '2023-12-01 05:25:34'),
(10, '7', 'Barang 3', 20000, 2, 4000, 10, 44000, '2023-12-01 05:34:47', '2023-12-01 05:34:47'),
(11, '7', 'Barang 1', 50000, 1, 5000, 10, 55000, '2023-12-01 05:34:47', '2023-12-01 05:34:47'),
(12, '8', 'Barang 2', 25000, 1, 2500, 10, 27500, '2023-12-01 05:36:50', '2023-12-01 05:36:50'),
(13, '9', 'Barang 2', 50000, 2, 10000, 10, 110000, '2023-12-01 22:48:33', '2023-12-01 22:48:33'),
(14, '9', 'Barang 3', 20000, 2, 4000, 10, 44000, '2023-12-01 22:48:33', '2023-12-01 22:48:33'),
(16, '10', 'Barang 2', 50000, 2, 10000, 10, 110000, '2023-12-01 22:53:05', '2023-12-01 22:53:05');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_12_01_115026_create_sales_table', 2),
(6, '2023_12_01_115752_create_item_sales_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `no_faktur` varchar(255) NOT NULL,
  `tanggal_pembayaran` date NOT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  `pembayaran` double NOT NULL,
  `total` double NOT NULL,
  `total_kembalian` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `no_faktur`, `tanggal_pembayaran`, `keterangan`, `pembayaran`, `total`, `total_kembalian`, `created_at`, `updated_at`) VALUES
(2, '7827 - 2023-12-01T12:46:32.530Z', '2023-12-01', 'test keterangan', 200000, 154000, 46000, '2023-12-01 04:49:51', '2023-12-01 04:49:51'),
(7, '2489 - 2023-12-01T13:33:46.441Z', '2023-12-25', 'Lorem Dolor', 100000, 99000, 1000, '2023-12-01 05:34:47', '2023-12-01 06:11:22'),
(9, '6513 - 2023-12-02T06:46:43.763Z', '2023-12-02', 'penjualan bulan ini EDIT', 250000, 231000, 19000, '2023-12-01 22:48:33', '2023-12-01 22:49:21');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `item_sales`
--
ALTER TABLE `item_sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `item_sales`
--
ALTER TABLE `item_sales`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
