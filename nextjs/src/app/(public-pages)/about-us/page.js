export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600">About Chat App</h1>
        <p className="text-gray-600 mt-4 text-center">
          Welcome to <span className="font-semibold">Chat App</span>, the ultimate messaging platform designed to keep you connected with your friends anytime, anywhere.
        </p>
        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-blue-500 text-xl">🔒</span>
            <p className="text-gray-700"><strong>Secure & Private:</strong> End-to-end encrypted messages for complete privacy.</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-500 text-xl">⚡</span>
            <p className="text-gray-700"><strong>Real-Time Messaging:</strong> Powered by WebSockets for instant communication.</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-purple-500 text-xl">🎨</span>
            <p className="text-gray-700"><strong>User-Friendly Design:</strong> A clean and simple interface for effortless chatting.</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-yellow-500 text-xl">🤝</span>
            <p className="text-gray-700"><strong>Stay Connected:</strong> Easily add and chat with your friends, share updates, and receive notifications.</p>
          </div>
        </div>
        <p className="mt-6 text-center text-gray-500">
          At <span className="font-semibold">Chat App</span>, we believe that conversations should be <strong>fast, secure, and hassle-free</strong>.  
          Join us and experience the future of messaging today!
        </p>
      </div>
    </div>
  );
}
