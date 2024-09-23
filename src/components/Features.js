import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline'; 

function Features() {
  return (
    <section id="features" className=" p-8 py-32 bg-gray-900">
      <h2 className="text-4xl p-5 mb-20 font-bold text-center text-white ">Why Choose SkillBoost?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


        {/* Feature Card 2 */}
        <div className="flex items-start p-4 border rounded-lg shadow-md bg-white feature-card">
          <CheckCircleIcon className="w-6 h-6 text-blue-500 mr-3" />
          <div>
            <h3 className="font-bold text-md mb-2">Interactive Quizzes and Assessments</h3>
            <p>Include quizzes and assessments after each module to reinforce learning and track progress.</p>
          </div>
        </div>

        {/* Feature Card 3 */}
        <div className="flex items-start p-4 border rounded-lg shadow-md bg-white feature-card">
          <CheckCircleIcon className="w-6 h-6 text-blue-500 mr-3" />
          <div>
            <h3 className="font-bold text-md mb-2">Flexible Learning Options</h3>
            <p>Study at your own pace, anytime, anywhere.</p>
          </div>
        </div>

        {/* Feature Card 3 */}
        <div className="flex items-start p-4 border rounded-lg shadow-md bg-white feature-card">
          <CheckCircleIcon className="w-6 h-6 text-blue-500 mr-3" />
          <div>
            <h3 className="font-bold text-md mb-2">Integration with Professional Networks</h3>
            <p>Allow users to connect their profiles with LinkedIn or other professional networks to showcase their completed courses.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Features;
