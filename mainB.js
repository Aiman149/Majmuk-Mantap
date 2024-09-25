const questions = [
    {
        question: '1) Yang manakah bukan kata majmuk mantap?',
        answers: ['Tanggungjawab', 'Peribahasa', 'Beritahu', 'Olahraga'],
        correct: 2
    },
    {
        question: '2) Sebahagian besar ___________ kerajaan merupakan guru sekolah.',
        answers: ['kaki bangku', 'kaki lima', 'kaki tangan', 'kakitangan'],
        correct: 3
    },
    {
        question: '3) "Kilang yang menghasilkan produk daripada daging lembu itu milik syarikat __________," kata Cik Ilyana.',
        answers: ['Bumiputera', 'antarabangsa', 'kakitangan', 'jawatankuasa'],
        correct: 0
    },
    {
        question: '4) " __________ kamu di sini adalah memantau keadaan kolam ternakan ikan ini" kata Encik Hemachandran kepada pekerja baharu itu.',
        answers: ['kakitangan', 'tanggungjawab', 'tandatangan', 'dukacita'],
        correct: 1
    },
    {
        question: '5) "Saya akan menjalani latihan __________ pada petang ini di padang sekolah," kata Ikhmal kepada Cikgu Zainuddin.',
        answers: ['tandatangan', 'antarabangsa', 'bumiputera', 'olahraga'],
        correct: 3
    },
    {
        question: '6) "Dia bukan __________ Malaysia kerana berasal dari Singapura," kata Hanum kepada Syuhada.',
        answers: ['warganegara', 'kakitangan', 'pesuruhjaya', 'antarabangsa'],
        correct: 0
    },
    {
        question: '7) Cikgu Syikin mahu kami menyusun kerusi dan meja di dalam kelas itu semula seperti __________.',
        answers: ['sukarela', 'sukacita', 'apabila', 'sediakala'],
        correct: 3
    },
    {
        question: '8) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Antara bangsa', 'Antarabanggsa', 'Antarrabangsa', 'antarabangsa'],
        correct: 3
    },
    {
        question: '9) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Jawatankuasa', 'Jawatankuassa', 'Jawatakuasa', 'jawatakkuasa'],
        correct: 0
    },
    {
        question: '10) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Olah raga', 'Olahraga', 'Ollahraga', 'Olahragga'],
        correct: 1
    },
    {
        question: '11) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Sukarella', 'Sukarrela', 'Sukkarela', 'sukarela'],
        correct: 3
    },
    {
        question: '12) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Tanggungjawab', 'Tangunggjawab', 'Tanggungan', 'tanggunggjawab'],
        correct: 0
    },
    {
        question: '13) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Berritahu', 'Beritahu', 'Baritahu ', 'Beritau '],
        correct: 1
    },
    {
        question: '14) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Kakiktangan', 'Kakiangan', 'Kakitangan', 'Kakitanga'],
        correct: 2
    },
    {
        question: '15) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Matahhari', 'Matari', 'Mentari', 'matahari'],
        correct: 3
    },
    {
        question: '16) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Surujaya', 'Serujaya', 'Suruhanjaya', 'Suruhajaya'],
        correct: 2
    },
    {
        question: '17) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Bumitera', 'Bummiputera', 'Bumipettera', 'Bumiputera'],
        correct: 3
    },
    {
        question: '18) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Kejasama', 'Kerjasama', 'Kerjama', 'kerjassama'],
        correct: 1
    },
    {
        question: '19) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Setiusuha', 'Setiasaha', 'Setiausaha', 'Settiaussaha'],
        correct: 2
    },
    {
        question: '20) Manakah antara berikut merupakan ejaan yang betul?',
        answers: ['Tandatangan', 'Tadatangan', 'Taddatangan', 'tandangan'],
        correct: 0
    },
    {
        question: '21) Manakah antara berikut merupakan kata majmuk mantap?',
        answers: ['Pusat Sumber', 'Pesuruhjaya', 'Klinik perubatan', 'Alat tulis'],
        correct: 1
    },
    {
        question: '22) Manakah antara berikut merupakan kata majmuk mantap?',
        answers: ['Warga Asing', 'Papan kenyataan', 'Warganegara', 'Bilik darjah'],
        correct: 2
    },
    {
        question: '23) Manakah antara berikut merupakan kata majmuk mantap?',
        answers: ['Telur Ayam', 'Kakitangan', 'Kaki ayam', 'Kaki bangku'],
        correct: 1
    },
    {
        question: '24) Manakah antara berikut merupakan kata majmuk mantap?',
        answers: ['Rantai Emas', 'Minta Diri', 'Tong Sampah', 'Sukarela'],
        correct: 3
    },
    {
        question: '25) Manakah antara berikut merupakan kata majmuk mantap?',
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

function nextQuestion() {
    currentQuestionIndex++;
    // In the nextQuestion function
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        // Display the final score
        questionElement.innerHTML = `<div class="final-score">Tahniah! Anda melepasi set B, skor anda sebanyak: ${score}/${questions.length}</div>`;
        nextButton.style.display = 'none';
        answerButtons.forEach(button => button.style.display = 'none');

        // Show the button to go to Section B
        const sectionBButton = document.getElementById('sectionB-btn');
        sectionBButton.style.display = 'block';  // Make the button visible
    }

}

// Start the quiz
startQuiz();
