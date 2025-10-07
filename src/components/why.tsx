export default function Reason() {
  return (
    <section className="bg-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why companies large and small trust Thetechers
          </h2>
          <a 
            href=""
            className="inline-block text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all"
          >
            Contact sales to request a demo
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ISO */}
          <div className="bg-indigo-100 p-6 rounded-xl hover:shadow-lg transition-shadow border-2 border-indigo-200">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">ISO</h3>
            <p className="text-gray-700">ISO-27001 enteprise-grade security compliant</p>
          </div>

          {/* #1 Platform */}
          <div className="bg-indigo-100 p-6 rounded-xl hover:shadow-lg transition-shadow border-2 border-indigo-200">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">#1</h3>
            <p className="text-gray-700">Visual Collaboration Platform on G2</p>
          </div>

          {/* Fortune 100 */}
          <div className="bg-indigo-100 p-6 rounded-xl hover:shadow-lg transition-shadow border-2 border-indigo-200">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">99%</h3>
            <p className="text-gray-700">of the fortune 100 are customers</p>
          </div>

          {/* Templates */}
          <div className="bg-indigo-100 p-6 rounded-xl hover:shadow-lg transition-shadow border-2 border-indigo-200">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">1000+</h3>
            <p className="text-gray-700">community and expert-built templates</p>
          </div>

          {/* Users */}
          <div className="bg-indigo-100 p-6 rounded-xl hover:shadow-lg transition-shadow border-2 border-indigo-200">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">45M+</h3>
            <p className="text-gray-700">users around the world</p>
          </div>

          {/* Integrations */}
          <div className="bg-indigo-100 p-6 rounded-xl hover:shadow-lg transition-shadow border-2 border-indigo-200">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">100+</h3>
            <p className="text-gray-700">integrations with technology partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}