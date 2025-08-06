export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          About the <span className="gradient-text">Project</span>
        </h2>
        
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            <span className="text-trial-red font-semibold">TRIAL</span> is a platform where videos compete for permanence. 
            <span className="text-trial-gold font-semibold"> Viewers are the jury.</span> 
            <span className="text-white font-semibold"> Creators are the gladiators.</span> 
            Every upload is a test. The audience decides what lives or dies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl mb-4">⚔️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Creators</h3>
              <p className="text-gray-400">Upload videos and face the trial. Only the engaging survive.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Judges</h3>
              <p className="text-gray-400">Watch, vote, and decide what deserves immortality.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-xl font-semibold text-white mb-2">Champions</h3>
              <p className="text-gray-400">Videos that survive become permanent legends.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
