function QuestionCard({
    currentQuestion,
    showAnswer,
    setShowAnswer,
}) {
    if (!currentQuestion) {
        return (
            <div>
                <h2>Question</h2>
                <p>Select a category and generate a question.</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Question</h2>

            <p>{currentQuestion.question}</p>

            <button
                onClick={() => setShowAnswer(true)}
            >
                Show Answer
            </button>

            {showAnswer && (
                <>
                    <h3>Answer:</h3>
                    <p>{currentQuestion.answer}</p>
                </>
            )}
        </div>
    );
}

export default QuestionCard;