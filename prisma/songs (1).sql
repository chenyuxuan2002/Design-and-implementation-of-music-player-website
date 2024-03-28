
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Music`
--

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

CREATE TABLE `songs` (
  `song_id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `artist` varchar(191) DEFAULT NULL,
  `release_date` datetime(3) DEFAULT NULL,
  `genre` varchar(191) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `mp3Path` varchar(191) DEFAULT NULL,
  `albumUrl` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`song_id`, `title`, `artist`, `release_date`, `genre`, `duration`, `mp3Path`, `albumUrl`) VALUES
(1, 'We Can\'t Stop', 'Miley Cyrus', '2022-01-01 00:00:00.000', 'Western music', 240, '/song-files/We_Cant_stop.mp3', 'https://www.sonymusic.co.jp/img/common/artist_image/71005000/71005101/images/Miley-Cyrus_Cant-Stop_RGB.jpg'),
(2, 'Peter Pan Was Right', 'Anson Seabra', '2022-01-02 00:00:00.000', 'Western music', 210, '/song-files/Peter_Pan_Was_Right.mp3', 'https://www.songmeaningsandfacts.com/wp-content/uploads/2023/08/Peter-Pan-Was-Right-by-Anson-Seabra.jpg'),
(3, 'Heartbeat', 'Nightcore', '2022-01-03 00:00:00.000', 'Western music', 195, '/song-files/heartbeat.mp3', 'https://pic3.zhimg.com/v2-d7ceff4b91521ab2e9c41c65b13dfaca_b.jpg'),
(4, 'Shape of You', 'Ed Sheeran', '2022-01-04 00:00:00.000', 'Western music', 235, '/song-files/shape_of_you.mp3', 'https://i.dailymail.co.uk/1s/2018/12/11/14/7287168-6483653-Accolade_Ed_shared_this_picture_on_Instagram_with_the_caption_Th-m-126_1544540076356.jpg'),
(5, 'Unstoppable', 'Sia', '2022-01-05 00:00:00.000', 'Western music', 220, '/song-files/Unstoppable.mp3', 'https://www.v81radio.com/wp-content/uploads/2016/01/Sia-This-Is-Acting-Deluxe-2016.jpg?kuid=e7c735d7-6455-4f67-9a50-9c7e2f466a88&kref=https%3A%2F%2Fwww.v81radio.com%2Fthe-most-anticipated-albums-of-2016%2Fsia-this-is-acting-deluxe-2016%2F'),
(6, 'Bones', 'Imagine Dragons', '2022-01-06 00:00:00.000', 'Western music', 200, '/song-files/Bones-Imagine Dragons.128.mp3', 'https://i.pinimg.com/originals/5e/74/71/5e74719cf1bc69bc8179bd6936df45a8.jpg'),
(7, 'Paralyse', 'Polarheart', '2022-01-07 00:00:00.000', 'Western music', 190, '/song-files/Paralyse.mp3', 'https://images.rapgenius.com/fe498e2f1cb8821a780176dbb6409591.600x600x1.jpg'),
(8, 'Me And My Broken Heart', 'Push Baby', '2022-01-08 00:00:00.000', 'Western music', 210, '/song-files/me_and_my_broken_heart.mp3', 'https://thefuelonline.com/wp-content/uploads/2015/04/rixton-press-2014-650c.jpg'),
(9, 'Feelings', 'Maroon 5', '2022-01-09 00:00:00.000', 'Western music', 180, '/song-files/Feelings.mp3', 'https://image.ceneostatic.pl/data/products/31890429/f-maroon-5-v-deluxe-edition-cd.jpg'),
(10, '半壶纱', '刘珂矣', '2022-01-10 00:00:00.000', 'Chinese classical music', 220, '/song-files/半壶纱.mp3', 'https://th.bing.com/th/id/R.3c3d1ad49ccaf2e8cf614f4a09393ac9?rik=AW5VEH%2BqScgJog&riu=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181028%2F76ca1af16518402696e71e9f02e54bf0.jpeg&ehk=nIOiIGPzcBulq1ygRPK%2B41WcfuwyU9nbSEmH2g0A%2Fi8%3D&risl=&pid=ImgRaw&r=0'),
(11, '倾尽天下', '河图', '2022-01-11 00:00:00.000', 'Chinese classical music', 205, '/song-files/倾尽天下.mp3', 'https://pic1.zhimg.com/v2-63de11121c27202823c6ebfcf1462b7c_ipico.jpg'),
(12, '江南', '林俊杰', '2022-01-12 00:00:00.000', 'Chinese classical music', 240, '/song-files/江南.mp3', 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000kYs1E2jJK3x.jpg?max_age=2592000'),
(13, '故人泪', '麦小兜', '2022-01-13 00:00:00.000', 'Chinese classical music', 200, '/song-files/故人泪-麦小兜.128.mp3', 'https://th.bing.com/th/id/R.ef30ff14695932fc9410e9f54c797bf6?rik=ygRJkUIRhuQy7g&riu=http%3A%2F%2Fimge.kugou.com%2Fstdmusic%2F20190614%2F20190614142604936924.jpg&ehk=gd9PcI%2F8kwl%2BOpcmjmZNGUYLyqQ%2FE%2BdaPeiH4dxNE%2Bg%3D&risl=&pid=ImgRaw&r=0'),
(14, '沉香', '张杰,张靓颖', '2022-01-14 00:00:00.000', 'Chinese classical music', 225, '/song-files/沉香.mp3', 'https://s201.lzjoy.com/res/statics/fileupload/normal/202209/7ee5616163330d4556966.png?1a97f6b8f66911f917ea2658cf2d093cb573f486&x-oss-process=image/resize,h_300,m_lfit'),
(15, '莫问归期', '蒋雪儿', '2022-01-15 00:00:00.000', 'Chinese classical music', 210, '/song-files/莫问归期.mp3', 'https://oss.tan8.com/yuepuku/147/73775/73775_prev.jpeg?v=1666874599'),
(16, '丽江古城', '白羽', '2022-01-16 00:00:00.000', 'Chinese classical music', 190, '/song-files/丽江古城.mp3', 'https://img9.doubanio.com/pview/event_poster/raw/public/8556973ae1f6524.jpg'),
(17, '消愁', '毛不易', '2022-01-17 00:00:00.000', 'Popular music', 195, '/song-files/消愁.mp3', 'https://p1.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?imageView=1&thumbnail=480x0&type=webp'),
(18, '起风了', '林俊杰', '2022-01-18 00:00:00.000', 'Popular music', 230, '/song-files/起风了.mp3', 'https://th.bing.com/th/id/R.a51f14d47b572fa1c2c49f066d1ceef7?rik=DJqTjfz6KjZ7JQ&riu=http%3a%2f%2fimg.7qile.com%2fsmm202303%2f1057.jpg&ehk=X9%2bhu8NkBER2JAvdmL54S%2fqaAzb2grxVGfDO1%2fHFoF0%3d&risl=&pid=ImgRaw&r=0'),
(19, '演员', '薛之谦', '2022-01-19 00:00:00.000', 'Popular music', 210, '/song-files/演员.mp3', 'https://chinesealbumart.com/wp-content/uploads/2017/07/2016-07-19-%E8%96%9B%E4%B9%8B%E8%B0%A6-%E5%88%9D%E5%AD%A6%E8%80%85-iPHONE.jpg'),
(20, '孤勇者', '陈奕迅', '2022-01-20 00:00:00.000', 'Popular music', 200, '/song-files/孤勇者.mp3', 'https://th.bing.com/th/id/R.89f29ab11d97c94723ce6c3442a693ac?rik=dgRe%2b2EvGPjBAQ&riu=http%3a%2f%2fn.sinaimg.cn%2fsinakd20121%2f0%2fw800h800%2f20220726%2fd2bb-718ce47fa4e692c4d0cfb1c6bcf2e653.jpg&ehk=C0SLqx71Lm6YKDkODW25FI6h%2bKbGeSKKb7h9K8cjB%2fk%3d&risl=&pid=ImgRaw&r=0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`song_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `songs`
--
ALTER TABLE `songs`
  MODIFY `song_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
