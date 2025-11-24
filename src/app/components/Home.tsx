// src/pages/Home.jsx
import { motion } from 'framer-motion';
import styles from './../../app/assets/App.scss';


export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center text-center min-h-screen px-6">
<div className="mt-20" />
<h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-300">
Hello I'm
</h2>
<h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
Pearson Grant
</h1>
<h3 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-8">
DevOps Engineer
</h3>


<p className="text-gray-300 max-w-2xl leading-relaxed">
I'm a DevOps Engineer based in Harare, Zimbabwe. I build scalable cloud
infrastructure, automate CI/CD pipelines, and create reliable systems
that blend efficiency with powerful functionality.
</p>


{/* Buttons */}
<div className="flex gap-6 mt-10">
<button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg">
{/* <FiDownload /> Download CV */}
</button>
<button className="flex items-center gap-2 border border-purple-500 hover:bg-purple-600 hover:text-white text-purple-400 px-6 py-3 rounded-lg">
Hire Me
</button>
</div>


{/* Social Icons */}

</section>
);
}