const questions = [
    {
        question: '1) _________ Encik Khairul sangat unik dan sukar ditiru.',
        answers: ['Tandatangan', 'Tanda tangan', 'Tanda lahir', 'Tanda kaki'],
        correct: 0
    },
    {
        question: '2) Atlet ________ SMK Permatang Rawa sangat berdisiplin.',
        answers: ['olah raga', 'olahraga', 'sukaneka', 'sukantara'],
        correct: 1
    },
    {
        question: '3) Ahli ________________ baharu akan dipilih pada mesyuarat itu nanti.',
        answers: ['jawatan', 'jawatanpuasa', 'jawatankuasa', 'jawatan kuasa'],
        correct: 2
    },
    {
        question: '4) Sebahagian besar ___________ kerajaan merupakan guru sekolah.',
        answers: ['kaki bangku', 'kaki lima', 'kaki tangan', 'kakitangan'],
        correct: 3
    },
    {
        question: '5) Pak Meon merupakan _____________ Kampung Tok Panjang.',
        answers: ['setiausaha', 'setia usaha', 'setiawangsa', 'setia wangsa'],
        correct: 0
    },
    {
        question: '6) Penduduk bukan ___________ Malaysia kebanyakannya berasal dari Indonesia.',
        answers: ['warga negara', 'warganegara', 'warga negeri', 'warganegeri'],
        correct: 1
    },
    {
        question: '7) Orang ramai digalakkan untuk tampil secara _________ ke hospital berdekatan bagi menjalani saringan penyakit covid-19.',
        answers: ['suka hati', 'sukanya', 'sukarela', 'suka rela'],
        correct: 2
    },
    {
        question: '8) Azizulhasni Awang telah mengharumkan nama negara dalam sukan berbasikal peringkat ________.',
        answers: ['sedunia', 'antara dunia', 'antara bangsa', 'antarabangsa'],
        correct: 3
    },
    {
        question: '9) Majoriti penduduk Malaysia merupakan ____________.',
        answers: ['bumiputera', 'bumiputra', 'bumi putera', 'bumi putra'],
        correct: 0
    },
    {
        question: '10) __________ pertama seorang Ketua Tingkatan ialah mengenal pasti murid yang tidak hadir pada setiap hari persekolahan.',
        answers: ['Tanggung jawab', 'Tanggungjawab', 'Tanggungan', 'Tanggung soal'],
        correct: 1
    },
    {
        question: '11) Apakah definisi kata majmuk mantap?',
        answers: ['Dua kata dasar yang dirangkaikan untuk membentuk satu perkataan baharu yang ditulis secara terpisah', 'Dua perkataan yang ditulis secara bercantum.', 'Perkataan baru hasil gabungan dua kata tunggal yang mantap .', 'Satu perkataan yang istimewa .'],
        correct: 0
    },
    {
        question: '12) Cikgu Nazila memakai losyen pelembap untuk melindungi kulitnya daripada cahaya __________.',
        answers: ['sukarela', 'olahraga', 'antarabangsa', 'matahari'],
        correct: 3
    },
    {
        question: '13) Akif merupakan seorang __________ bagi persatuan Bahasa Melayu.',
        answers: ['pesuruhjaya', 'setiausaha', 'suruhanjaya', 'kakitangan'],
        correct: 1
    },
    {
        question: '14) Kata majmuk terdiri daripada',
        answers: ['Kata majmuk mantap', 'Kata majmuk bebas', 'Kata majmuk  mantap dan bebas', 'Kata majmuk bertindih'],
        correct: 2
    },
    {
        question: '15) Larian maraton itu terbuka kepada __________ Malaysia sahaja.',
        answers: ['setiausaha', 'antarabangsa', 'olahraga', 'warganegara'],
        correct: 3
    },
    {
        question: '16) Yang manakah merupakan kata majmuk yang telah mantap?',
        answers: ['Jawatankuasa', 'Pesuruh jaya', 'Peribahasa', 'Manakala'],
        correct: 0
    },
    {
        question: '17) __________ Encik Syariman diperlukan bagi meluluskan kertas kerja tersebut.',
        answers: ['Tandanama', 'Tanggungjawab', 'Tandatangan', 'Tuanrumah'],
        correct: 2
    },
    {
        question: '18) Pokok memerlukan cahaya __________ untuk proses fotosintesis.',
        answers: ['mata hari', 'matari', 'matahari', 'matahhari'],
        correct: 2
    },
    {
        question: '19) Kamal secara __________ menawarkan diri untuk membentangkan hasil tugasan Kumpulan.',
        answers: ['sukarela', 'tanggungjawab', 'kerjasama', 'kakitangan'],
        correct: 2
    },
    {
        question: '20) Cikgu Lyana telah menjalankan __________ nya sebagai pengadil bagi pertandingan bola baling',
        answers: ['sukarela', 'setiausaha', 'tanggung jawab', 'tanggungjawab'],
        correct: 3
    },
    {
        question: '21) Yang manakah bukan kata majmuk mantap?',
        answers: ['Tanggungjawab', 'Peribahasa', 'Beritahu', 'Olahraga'],
        correct: 2
    },
    {
        question: '22) Sebahagian besar ___________ kerajaan merupakan guru sekolah.',
        answers: ['kaki bangku', 'kaki lima', 'kaki tangan', 'kakitangan'],
        correct: 3
    },
    {
        question: '23) "Kilang yang menghasilkan produk daripada daging lembu itu milik syarikat __________," kata Cik Ilyana.',
        answers: ['Bumiputera', 'antarabangsa', 'kakitangan', 'jawatankuasa'],
        correct: 0
    },
    {
        question: '24) " __________ kamu di sini adalah memantau keadaan kolam ternakan ikan ini" kata Encik Hemachandran kepada pekerja baharu itu.',
        answers: ['kakitangan', 'tanggungjawab', 'tandatangan', 'dukacita'],
        correct: 1
    },
    {
        question: '25) "Saya akan menjalani latihan __________ pada petang ini di padang sekolah," kata Ikhmal kepada Cikgu Zainuddin.',
        answers: ['tandatangan', 'antarabangsa', 'bumiputera', 'olahraga'],
        correct: 3
    },
    {
        question: '26) "Dia bukan __________ Malaysia kerana berasal dari Singapura," kata Hanum kepada Syuhada.',
        answers: ['warganegara', 'kakitangan', 'pesuruhjaya', 'antarabangsa'],
        correct: 0
    },
    {
        question: '27) Cikgu Syikin mahu kami menyusun kerusi dan meja di dalam kelas itu semula seperti __________.',
        answers: ['sukarela', 'sukacita', 'apabila', 'sediakala'],
        correct: 3
    },
    {
        question: '28) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Antara bangsa', 'Antarabanggsa', 'Antarrabangsa', 'antarabangsa'],
        correct: 3
    },
    {
        question: '29) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Jawatankuasa', 'Jawatankuassa', 'Jawatakuasa', 'jawatakkuasa'],
        correct: 0
    },
    {
        question: '30) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Olah raga', 'Olahraga', 'Ollahraga', 'Olahragga'],
        correct: 1
    },
    {
        question: '31) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Sukarella', 'Sukarrela', 'Sukkarela', 'sukarela'],
        correct: 3
    },
    {
        question: '32) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Tanggungjawab', 'Tangunggjawab', 'Tanggungan', 'tanggunggjawab'],
        correct: 0
    },
    {
        question: '33) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Berritahu', 'Beritahu', 'Baritahu ', 'Beritau '],
        correct: 1
    },
    {
        question: '34) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Kakiktangan', 'Kakiangan', 'Kakitangan', 'Kakitanga'],
        correct: 2
    },
    {
        question: '35) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Matahhari', 'Matari', 'Mentari', 'matahari'],
        correct: 3
    },
    {
        question: '36) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Surujaya', 'Serujaya', 'Suruhanjaya', 'Suruhajaya'],
        correct: 2
    },
    {
        question: '37) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Bumitera', 'Bummiputera', 'Bumipettera', 'Bumiputera'],
        correct: 3
    },
    {
        question: '38) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Kejasama', 'Kerjasama', 'Kerjama', 'kerjassama'],
        correct: 1
    },
    {
        question: '39) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Setiusuha', 'Setiasaha', 'Setiausaha', 'Settiaussaha'],
        correct: 2
    },
    {
        question: '40) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Tandatangan', 'Tadatangan', 'Taddatangan', 'tandangan'],
        correct: 0
    },
    {
        question: '41) Manakah antara berikut merupakan kata majmuk mantap?',
        answers: ['Pusat Sumber', 'Pesuruhjaya', 'Klinik perubatan', 'Alat tulis'],
        correct: 1
    },
    {
        question: '42) Manakah antara berikut merupakan kata majmuk mantap?',
        answers: ['Warga Asing', 'Papan kenyataan', 'Warganegara', 'Bilik darjah'],
        correct: 2
    },
    {
        question: '43) Manakah antara berikut merupakan kata majmuk mantap?',
        answers: ['Telur Ayam', 'Kakitangan', 'Kaki ayam', 'Kaki bangku'],
        correct: 1
    },
    {
        question: '44) Manakah antara berikut merupakan kata majmuk mantap?',
        answers: ['Rantai Emas', 'Minta Diri', 'Tong Sampah', 'Sukarela'],
        correct: 3
    },
    {
        question: '45) Manakah antara berikut merupakan kata majmuk mantap?',
        answers: ['Tanggungjawab', 'Sarung tangan', 'Papan tulis', 'Kapal terbang'],
        correct: 0
    }
];


let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.btn');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');

// Audio elements for sound effects
const correctSound = document.getElementById('correct-sound');
const incorrectSound = document.getElementById('incorrect-sound');

function startQuiz() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    answerButtons.forEach((button, index) => {
        button.textContent = question.answers[index];
        button.disabled = false;
        button.style.backgroundColor = '#007bff';
    });
    nextButton.style.display = 'none';
}

function selectAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correct;

    answerButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === correctAnswer) {
            button.style.backgroundColor = '#28a745'; // green for correct
        } else if (index === selectedAnswer && index !== correctAnswer) {
            button.style.backgroundColor = '#dc3545'; // red for wrong
        }
    });

    if (selectedAnswer === correctAnswer) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
        correctSound.play(); // Play correct answer sound
    } else {
        incorrectSound.play(); // Play incorrect answer sound
    }

    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        questionElement.innerHTML = `<div class="final-score">Tahniah! Skor ahkir anda sebanyak: ${score}/${questions.length}</div>`;
        nextButton.style.display = 'none';
        answerButtons.forEach(button => button.style.display = 'none');
    }
}

function selectAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correct;
    const happyImage = document.getElementById('happy-image');
    const sadImage = document.getElementById('sad-image');

    answerButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === correctAnswer) {
            button.style.backgroundColor = '#28a745'; // green for correct
        } else if (index === selectedAnswer && index !== correctAnswer) {
            button.style.backgroundColor = '#dc3545'; // red for wrong
        }
    });

    if (selectedAnswer === correctAnswer) {
        score++;
        scoreElement.textContent = `Skor: ${score}`;
        correctSound.play(); // Play correct answer sound
        happyImage.style.display = 'block'; // Show happy image
        sadImage.style.display = 'none'; // Ensure sad image is hidden
    } else {
        incorrectSound.play(); // Play incorrect answer sound
        happyImage.style.display = 'none'; // Ensure happy image is hidden
        sadImage.style.display = 'block'; // Show sad image
    }

    nextButton.style.display = 'block';
}


startQuiz();
