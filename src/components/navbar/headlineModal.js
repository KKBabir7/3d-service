'use client';

const HeadlineModal = ({ show, onClose, onSubmit, headlineText, setHeadlineText }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-90 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-[600px] h-[300px]">
          <h2 className="text-xl font-bold mb-4">Enter Headline Text</h2>
          <textarea
          rows="6" cols="50"
            type="text"
            className="border-2 border-gray-300 rounded-lg p-2 w-full "
            placeholder="Enter headline text"
            value={headlineText}
            onChange={(e) => setHeadlineText(e.target.value)}
          />
          <div className="mt-4 flex justify-end">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeadlineModal;
  