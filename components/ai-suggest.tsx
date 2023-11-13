import { useState } from "react";

const GiftSuggestion = () => {
  const [suggestion, setSuggestion] = useState("");

  const handleSuggest = () => {
    // Replace this with your logic to suggest a gift
    setSuggestion("AI suggests a wonderful gift for your loved one!");
  };

  return (
    <div className="mt-10 px-4 md:px-20 lg:px-32 space-y-4">
      <h3 className="text-center text-lg font-semibold">Gift Suggestion</h3>
      <p className="text-center mb-4">
        Allow AI to suggest the ideal gift for your loved one:
      </p>
      <div className="flex justify-center">
        <button
          className="w-40 px-4 py-2 bg-pink-300 text-pink-700 rounded-md hover:bg-pink-400 transition"
          onClick={handleSuggest}
        >
          Suggest
        </button>
      </div>
      {suggestion && (
        <div className="mt-4 text-center">
          <p className="text-green-600 font-semibold">{suggestion}</p>
        </div>
      )}
    </div>
  );
};

export default GiftSuggestion;
