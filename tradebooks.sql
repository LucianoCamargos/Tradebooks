-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 17-Fev-2023 às 01:31
-- Versão do servidor: 10.4.25-MariaDB
-- versão do PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `tradebooks`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `galery_books`
--

CREATE TABLE `galery_books` (
  `id` int(10) UNSIGNED NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `book_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `galery_books`
--

INSERT INTO `galery_books` (`id`, `image`, `book_id`) VALUES
(20, '/uploads/MariaIsa/book-1673107025452.jpeg', 13),
(21, '/uploads/MariaIsa/book-1673107286780.jpeg', 14),
(22, '/uploads/MariaIsa/book-1673107469867.jpeg', 15),
(23, '/uploads/MariaIsa/book-1673107627905.jpeg', 16),
(24, '/uploads/MariaIsa/book-1673107739294.jpeg', 17),
(25, '/uploads/MariaIsa/book-1673107886225.jpeg', 18),
(26, '/uploads/MariaIsa/book-1673108064356.jpeg', 19),
(27, '/uploads/MariaIsa/book-1673108064357.jpeg', 19),
(28, '/uploads/MariaIsa/book-1673108148310.jpeg', 20),
(32, '/uploads/Alison/book-1676590700686.jpeg', 22);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_adress`
--

CREATE TABLE `tb_adress` (
  `ID` int(11) NOT NULL,
  `CEP` varchar(8) NOT NULL,
  `RUA` varchar(20) NOT NULL,
  `BAIRRO` varchar(50) NOT NULL,
  `CIDADE` varchar(50) NOT NULL,
  `ESTADO` varchar(50) NOT NULL,
  `COMPLEMENTO` varchar(100) DEFAULT NULL,
  `USERS_ID` int(11) NOT NULL,
  `NUMERO` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_adress`
--

INSERT INTO `tb_adress` (`ID`, `CEP`, `RUA`, `BAIRRO`, `CIDADE`, `ESTADO`, `COMPLEMENTO`, `USERS_ID`, `NUMERO`) VALUES
(15, '04651075', 'Travessa São Silvest', 'Vila São Paulo', 'São Paulo', 'SP', '', 1, 23),
(17, '11410-00', 'Avenida Puglisi - de', 'Pitangueiras', 'Guarujá', 'SP', '', 5, 65),
(18, '11410-00', 'Avenida Puglisi  - l', 'Pitangueiras', 'Guarujá', 'SP', '', 5, 95),
(20, '12.953-0', 'Avenida Campo Grande', 'Loteamento Pedra Bela', 'Atibaia', 'SP', '', 1, 60),
(22, '1324500', 'rua BARI', 'Parque da Felicidade', 'Jarinu', 'SP', '', 8, 590),
(23, '12365987', 'rua Maria', 'Parque da Felicidade', 'São Paulo', 'SP', '', 9, 698);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_books`
--

CREATE TABLE `tb_books` (
  `ID` int(11) NOT NULL,
  `TITLE_BOOK` varchar(100) NOT NULL,
  `PRICE` float(10,2) DEFAULT NULL,
  `DESCRIPTION_BOOK` varchar(255) NOT NULL,
  `CATEGORY` varchar(50) NOT NULL,
  `TIPO` varchar(10) NOT NULL,
  `QTDE` int(11) DEFAULT NULL,
  `USERS_ID` int(11) NOT NULL,
  `ACABAMENTO` varchar(20) DEFAULT NULL,
  `ANO_EDICAO` date DEFAULT NULL,
  `AUTOR` varchar(100) DEFAULT NULL,
  `EDITORA` varchar(100) DEFAULT NULL,
  `IDIOMA` varchar(25) DEFAULT NULL,
  `NUMERO_EDICAO` int(11) DEFAULT NULL,
  `NUMERO_PAGINAS` int(11) DEFAULT NULL,
  `condicao_book` varchar(50) DEFAULT NULL,
  `tipo_anuncio` varchar(50) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_books`
--

INSERT INTO `tb_books` (`ID`, `TITLE_BOOK`, `PRICE`, `DESCRIPTION_BOOK`, `CATEGORY`, `TIPO`, `QTDE`, `USERS_ID`, `ACABAMENTO`, `ANO_EDICAO`, `AUTOR`, `EDITORA`, `IDIOMA`, `NUMERO_EDICAO`, `NUMERO_PAGINAS`, `condicao_book`, `tipo_anuncio`, `image`) VALUES
(13, 'Mindset A nova psicologia do sucesso', 44.90, 'Carol S. Dweck, ph.D., professora de psicologia na Universidade Stanford e especialista internacional em sucesso e motivação, desenvolveu, ao longo de décadas de pesquisa, um conceito fundamental: a atitude mental com que encaramos a vida, que ela chama d', 'Psicologia', 'Impresso', 50, 1, ' Livro brochura (pap', '2017-01-01', 'Dweck, Carol S.', ' Editora Schwarcz SA', 'Português', 1, 312, 'Novo', 'Venda', '/uploads/MariaIsa/book-1673107025452.jpeg'),
(14, 'A SUTIL ARTE DE LIGAR O FODA-SE', 37.45, 'Um guia completo e atualizado com a descrição detalhada de mais de 290 cristais e pedras de todo o mundo, suas propriedades terapêuticas e espirituais. De forma clara o autor introduz e orienta o leitor no mundo dos cristais, desde a identificação e seleç', 'Autoajuda', 'Impresso', 50, 1, '', '2017-01-01', 'MARK MANSON', '‎ Intrínseca', 'Português', 1, 224, 'Novo', 'Venda', '/uploads/MariaIsa/book-1673107286780.jpeg'),
(15, 'A Seleção', 39.90, 'Muitas garotas sonham em ser princesas, mas este não é o caso de America Singer. Ela topa se inscrever na Seleção só para agradar a mãe, certa de que não será sorteada para participar da competição em que o príncipe escolherá sua futura esposa. Mas é clar', 'Literatura Infantojuvenil', 'Impresso', 50, 1, ' Livro brochura (pap', '2012-01-01', 'Cass, Kiera', ' Editora Schwarcz SA', 'Português', 1, 368, 'Novo', 'Venda', '/uploads/MariaIsa/book-1673107469867.jpeg'),
(16, 'Harry Potter e o Prisioneiro de Azkaban', 59.90, 'As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no expresso a vapor que o levará de volta à escola de bruxaria. Mais uma vez suas férias na rua dos Alfeneiros foi triste e solitária. Com muita ação, humor e magia, Harry Potter ', 'Literatura Infantojuvenil', 'Impresso', 50, 1, 'CAPA DURA', '2017-01-01', 'ROWLING, J.K.', 'ROCCO', 'Português', 1, 288, 'Novo', 'Venda', '/uploads/MariaIsa/book-1673107627905.jpeg'),
(17, 'A rainha vermelha', 39.90, 'O mundo de Mare Barrow é dividido pelo sangue: vermelho ou prateado. Mare e sua família são vermelhos: plebeus, humildes, destinados a servir uma elite prateada cujos poderes sobrenaturais os tornam quase deuses. Mare rouba o que pode para ajudar sua famí', 'Literatura Infantojuvenil', 'Impresso', 49, 1, ' Livro brochura (pap', '2015-01-01', 'Aveyard, Victoria', ' Editora Schwarcz SA', 'Português', 1, 424, 'Novo', 'Venda', '/uploads/MariaIsa/book-1673107739294.jpeg'),
(18, 'O pequeno príncipe', 21.90, 'Nesta clássica história que marcou gerações de leitores em todo o mundo, um piloto cai com seu avião no deserto do Saara e encontra um pequeno príncipe, que o leva a uma jornada filosófica e poética através de planetas que encerram a solidão humana. A edi', 'Literatura Infantojuvenil', 'Impresso', 49, 1, '', '2018-01-01', 'Antoine de Saint-Exupéry', ' HarperCollins', 'Português', 1, 96, 'Novo', 'Venda', '/uploads/MariaIsa/book-1673107886225.jpeg'),
(19, 'Como as democracias morrem', 44.90, 'Uma análise crua e perturbadora das ameaças às democracias em todo o mundo. Democracias tradicionais entram em colapso? Essa é a questão que Steven Levitsky e Daniel Ziblatt – dois conceituados professores de Harvard – respondem ao discutir o modo como a ', 'Ciências Humanas e Sociais', 'Impresso', 49, 1, ' Livro brochura (pap', '2018-01-01', 'Levitsky, Steven; Ziblatt, Daniel', ' Editora Schwarcz SA', 'Português', 1, 272, 'Novo', 'Venda', '/uploads/MariaIsa/book-1673108064356.jpeg'),
(20, 'As aventuras de Mike', 45.90, 'Sabe aquele garoto popular da escola? Que é descolado se veste bem e faz sucesso com as garotas? Pois é, esse com certeza não é o Mike. Na verdade, o Mike é exatamente o contrário de tudo isso! Ele é desastrado, prefere videogames e salgadinhos no lugar d', 'Literatura Infantojuvenil', 'Impresso', 50, 1, ' Livro brochura (pap', '2019-01-01', ' Dearo, Gabriel; Digilio, Manu', ' Editora Planeta do Brasil Ltda.', 'Português', 1, 144, 'Novo', 'Venda', '/uploads/MariaIsa/book-1673108148310.jpeg'),
(22, 'A volta ao mundo em 80 dias', 0.00, 'Uma aposta foi o bastante para Phileas Fogg e seu fiel escudeiro, Jean Passepartout, embarcarem em uma das maiores aventuras da literatura mundial, nos moldes da narrativa fantástica de Júlio Verne. O escritor francês, um dos precursores da moderna ficção', 'Literatura Infantojuvenil', 'Impresso', 5, 8, ' Livro brochura (pap', '2011-01-01', 'MARK MANSON', ' Editora Schwarcz SA', 'Português', 1, 234, 'Novo', 'Venda', '/uploads/Alison/book-1676590700686.jpeg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_itens`
--

CREATE TABLE `tb_itens` (
  `ID` int(11) NOT NULL,
  `QTDE` int(11) NOT NULL,
  `ID_PEDIDOS` int(11) NOT NULL,
  `BOOKS_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_itens`
--

INSERT INTO `tb_itens` (`ID`, `QTDE`, `ID_PEDIDOS`, `BOOKS_ID`) VALUES
(110, 1, 63, 14),
(111, 1, 63, 15),
(112, 1, 63, 13),
(113, 1, 63, 18),
(114, 1, 64, 14),
(115, 1, 64, 15),
(116, 1, 64, 13),
(117, 1, 64, 18),
(118, 1, 65, 18),
(119, 1, 65, 14),
(120, 1, 65, 15),
(121, 1, 65, 13),
(127, 1, 95, 16),
(128, 1, 95, 15),
(129, 1, 100, 15),
(130, 1, 101, 15),
(131, 1, 102, 15),
(132, 1, 104, 15),
(133, 1, 104, 14),
(134, 1, 106, 14),
(135, 1, 106, 15),
(136, 1, 106, 13),
(137, 1, 106, 16),
(138, 1, 107, 15),
(139, 1, 107, 14),
(140, 1, 108, 14),
(141, 1, 108, 15),
(142, 1, 109, 17),
(143, 1, 109, 16),
(144, 1, 110, 15),
(145, 1, 110, 14),
(146, 1, 111, 14),
(147, 1, 111, 15),
(148, 1, 112, 15),
(149, 1, 112, 14),
(150, 1, 113, 14),
(151, 1, 113, 15),
(152, 1, 113, 17),
(153, 1, 114, 14),
(154, 1, 114, 17),
(155, 1, 114, 15),
(156, 1, 115, 14),
(157, 1, 115, 17),
(158, 1, 115, 15),
(159, 1, 116, 18),
(160, 1, 116, 17),
(161, 1, 116, 19),
(162, 1, 117, 18),
(163, 1, 117, 17),
(164, 1, 118, 17),
(165, 1, 118, 18),
(166, 1, 118, 19);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_pedidos`
--

CREATE TABLE `tb_pedidos` (
  `ID` int(11) NOT NULL,
  `TYPE_PEDIDO` varchar(20) NOT NULL,
  `STATUS_PEDIDO` varchar(20) NOT NULL,
  `VALOR_FRETE` float(10,2) DEFAULT NULL,
  `VALOR_PEDIDO` float(10,2) DEFAULT NULL,
  `VALOR_TOTAL` float(10,2) DEFAULT NULL,
  `DATE_PEDIDO` datetime DEFAULT NULL,
  `DATE_ENTREGA` datetime DEFAULT NULL,
  `USERS_ID` int(11) NOT NULL,
  `ADDRESS_ID` int(11) DEFAULT NULL,
  `FORMA_PAGAMENTO` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_pedidos`
--

INSERT INTO `tb_pedidos` (`ID`, `TYPE_PEDIDO`, `STATUS_PEDIDO`, `VALOR_FRETE`, `VALOR_PEDIDO`, `VALOR_TOTAL`, `DATE_PEDIDO`, `DATE_ENTREGA`, `USERS_ID`, `ADDRESS_ID`, `FORMA_PAGAMENTO`) VALUES
(63, 'Venda', '', 0.00, 144.15, 0.00, NULL, NULL, 8, 22, 'Pix'),
(64, 'Venda', '', 0.00, 144.15, 0.00, NULL, NULL, 9, 23, 'Pix'),
(65, 'Venda', '', 0.00, 144.15, 0.00, NULL, NULL, 8, 22, 'Pix'),
(66, 'Venda', '', 0.00, 21.90, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(67, 'Venda', '', 0.00, 37.45, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(68, 'Venda', '', 0.00, 39.90, 0.00, NULL, NULL, 8, 22, 'Pix'),
(69, 'Venda', '', 0.00, 39.90, 0.00, NULL, NULL, 8, 22, 'Pix'),
(70, 'Venda', '', 0.00, 39.90, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(71, 'Venda', '', 0.00, 37.45, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(72, 'Venda', '', 0.00, 37.45, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(73, 'Venda', '', 0.00, 44.90, 0.00, NULL, NULL, 8, 22, 'Pix'),
(74, 'Venda', '', 0.00, 21.90, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(75, 'Venda', '', 0.00, 37.45, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(76, 'Venda', '', 0.00, 44.90, 0.00, NULL, NULL, 9, 23, 'Pix'),
(77, 'Venda', '', 0.00, 44.90, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(78, 'Venda', '', 0.00, 44.90, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(79, 'Venda', '', 0.00, 44.90, 0.00, NULL, NULL, 8, 22, 'Pix'),
(80, 'Venda', '', 0.00, 44.90, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(81, 'Venda', '', 0.00, 44.90, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(82, 'Venda', '', 0.00, 44.90, 0.00, NULL, NULL, 8, 22, 'Pix'),
(83, 'Venda', '', 0.00, 44.90, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(84, 'Venda', '', 0.00, 44.90, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(85, 'Venda', '', 0.00, 44.90, 0.00, NULL, NULL, 8, 22, 'Pix'),
(86, 'Venda', '', 0.00, 44.90, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(87, 'Venda', '', 0.00, 44.90, 0.00, NULL, NULL, 8, 22, 'Pix'),
(88, 'Venda', '', 0.00, 37.45, 0.00, NULL, NULL, 8, 22, 'Pix'),
(89, 'Venda', '', 0.00, 44.90, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(90, 'Venda', '', 0.00, 37.45, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(91, 'Venda', '', 0.00, 39.90, 0.00, NULL, NULL, 8, 22, 'Pix'),
(92, 'Venda', '', 0.00, 39.90, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(93, 'Venda', '', 0.00, 44.90, 0.00, NULL, NULL, 8, 22, 'Pix'),
(94, 'Venda', '', 0.00, 44.90, 0.00, NULL, NULL, 9, 23, 'Cartão de crédito'),
(95, 'Venda', '', 0.00, 99.80, 0.00, NULL, NULL, 9, 23, 'Cartão de crédito'),
(96, 'Venda', '', 0.00, 37.45, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(97, 'Venda', '', 0.00, 39.90, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(98, 'Venda', '', 0.00, 44.90, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(99, 'Venda', '', 0.00, 39.90, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(100, 'Venda', '', 0.00, 77.35, 0.00, NULL, NULL, 8, 22, 'Pix'),
(101, 'Venda', '', 0.00, 77.35, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(102, 'Venda', '', 0.00, 77.35, 0.00, NULL, NULL, 9, 23, 'Cartão de crédito'),
(103, 'Venda', '', 0.00, 77.35, 0.00, NULL, NULL, 9, 23, 'Cartão de crédito'),
(104, 'Venda', '', 0.00, 77.35, 0.00, NULL, NULL, 8, 22, 'Pix'),
(105, 'Venda', '', 0.00, 39.90, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(106, 'Venda', '', 0.00, 182.15, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(107, 'Venda', '', 0.00, 77.35, 0.00, NULL, NULL, 8, 22, ''),
(108, 'Venda', '', 0.00, 77.35, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(109, 'Venda', '', 0.00, 99.80, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(110, 'Venda', '', 0.00, 77.35, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(111, 'Venda', '', 0.00, 0.00, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(112, 'Venda', '', 0.00, 0.00, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(113, 'Venda', '', 0.00, 0.00, 0.00, NULL, NULL, 8, 22, 'Pix'),
(114, 'Venda', '', 0.00, 0.00, 0.00, NULL, NULL, 9, 23, 'Cartão de crédito'),
(115, 'Venda', '', 0.00, 0.00, 0.00, NULL, NULL, 9, 23, 'Cartão de crédito'),
(116, 'Venda', '', 0.00, 0.00, 0.00, NULL, NULL, 9, 23, 'Pix'),
(117, 'Venda', '', 0.00, 61.80, 0.00, NULL, NULL, 8, 22, 'Cartão de crédito'),
(118, 'Venda', '', 0.00, 106.70, 106.70, NULL, NULL, 8, 22, 'Cartão de crédito');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `FULL_NAME` varchar(100) NOT NULL,
  `USER_NAME` varchar(100) NOT NULL,
  `BIRTH_DATE` date DEFAULT NULL,
  `CPF` varchar(11) DEFAULT NULL,
  `SEXO` varchar(20) DEFAULT NULL,
  `TEL` varchar(13) DEFAULT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `UPASSWORD` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`ID`, `FULL_NAME`, `USER_NAME`, `BIRTH_DATE`, `CPF`, `SEXO`, `TEL`, `EMAIL`, `UPASSWORD`) VALUES
(1, 'Maria Isabel', 'MariaIsa', '1991-09-28', '415.513.798', 'Venda_Troca', '3456', 'mariaisabel@gmail.com', '12345678'),
(5, 'Alberto Nascimento', 'AlbertN', '1981-02-15', '00000000000', 'Venda', '11965859658', 'alberto123@gmail.com', '12345678'),
(6, 'Roberto da Silva', 'RS', NULL, NULL, NULL, NULL, 'roberto@gmail.com', '$2b$10$xKF1DXa50SnLch663y9J2u.ZWv2k7wk69nQOrQ3jtd9'),
(7, 'Daniel Rodrigues Brandão', 'Daniel', NULL, NULL, NULL, NULL, 'drb12da@gmail.com', '$2b$10$s.cpKp7ieaM78xqd7r7LEeG2h0qeBdFcLkhU.VhaTfd'),
(8, 'Alisson', 'Alison', '1980-01-20', '45632156984', 'masc', '11956326849', 'alison@gmail.com', '$2b$10$XqGkqq7WrPJ.5TIU27B7cOo1UHl3s.wG/LbqhAUzHQzrrPTpOnHou'),
(9, 'Bruna Maria', 'Maria', '2002-01-02', '4343', 'fem', '119556', 'mariagabriela0711@gmail.com', '$2b$10$X9MGnruX9mSn2VjFYfXBsuyGb8c.gpp0zCbCnHySHDlh9xfYybRFq');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `galery_books`
--
ALTER TABLE `galery_books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book_id` (`book_id`);

--
-- Índices para tabela `tb_adress`
--
ALTER TABLE `tb_adress`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `USERS_ID` (`USERS_ID`);

--
-- Índices para tabela `tb_books`
--
ALTER TABLE `tb_books`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `USERS_ID` (`USERS_ID`);

--
-- Índices para tabela `tb_itens`
--
ALTER TABLE `tb_itens`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `BOOKS_ID` (`BOOKS_ID`),
  ADD KEY `ID_PEDIDOS` (`ID_PEDIDOS`);

--
-- Índices para tabela `tb_pedidos`
--
ALTER TABLE `tb_pedidos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `USERS_ID` (`USERS_ID`),
  ADD KEY `ADDRESS_ID` (`ADDRESS_ID`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `USER_NAME` (`USER_NAME`),
  ADD UNIQUE KEY `EMAIL` (`EMAIL`),
  ADD UNIQUE KEY `CPF` (`CPF`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `galery_books`
--
ALTER TABLE `galery_books`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de tabela `tb_adress`
--
ALTER TABLE `tb_adress`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de tabela `tb_books`
--
ALTER TABLE `tb_books`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de tabela `tb_itens`
--
ALTER TABLE `tb_itens`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=167;

--
-- AUTO_INCREMENT de tabela `tb_pedidos`
--
ALTER TABLE `tb_pedidos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `galery_books`
--
ALTER TABLE `galery_books`
  ADD CONSTRAINT `galery_books_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `tb_books` (`ID`);

--
-- Limitadores para a tabela `tb_adress`
--
ALTER TABLE `tb_adress`
  ADD CONSTRAINT `tb_adress_ibfk_1` FOREIGN KEY (`USERS_ID`) REFERENCES `users` (`ID`);

--
-- Limitadores para a tabela `tb_books`
--
ALTER TABLE `tb_books`
  ADD CONSTRAINT `tb_books_ibfk_1` FOREIGN KEY (`USERS_ID`) REFERENCES `users` (`ID`);

--
-- Limitadores para a tabela `tb_itens`
--
ALTER TABLE `tb_itens`
  ADD CONSTRAINT `tb_itens_ibfk_1` FOREIGN KEY (`BOOKS_ID`) REFERENCES `tb_books` (`ID`),
  ADD CONSTRAINT `tb_itens_ibfk_2` FOREIGN KEY (`ID_PEDIDOS`) REFERENCES `tb_pedidos` (`ID`);

--
-- Limitadores para a tabela `tb_pedidos`
--
ALTER TABLE `tb_pedidos`
  ADD CONSTRAINT `tb_pedidos_ibfk_1` FOREIGN KEY (`USERS_ID`) REFERENCES `users` (`ID`),
  ADD CONSTRAINT `tb_pedidos_ibfk_2` FOREIGN KEY (`ADDRESS_ID`) REFERENCES `tb_adress` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
