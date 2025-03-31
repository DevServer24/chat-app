import { Zap,Shield,Users} from "lucide-react"
export const MainFeatures =() =>{
  return(
    <div>
        <section id="features" className="bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-red-500">Powerful</span> Features for <span className="text-orange-500">Modern</span>{" "}
            Communication
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-green-500 hover:transform hover:-translate-y-2 transition-all duration-300">
              <Zap className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-gray-300">
                Messages delivered instantly with our optimized infrastructure. Never wait for your messages to send
                again.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-red-500 hover:transform hover:-translate-y-2 transition-all duration-300">
              <Shield className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">End-to-End Encryption</h3>
              <p className="text-gray-300">
                Your conversations are secure with military-grade encryption. Only you and your recipient can read
                messages.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-orange-500 hover:transform hover:-translate-y-2 transition-all duration-300">
              <Users className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Group Chats</h3>
              <p className="text-gray-300">
                Create groups with unlimited members. Share files, media, and organize events with ease.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}