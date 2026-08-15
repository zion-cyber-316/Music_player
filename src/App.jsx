import M1 from "./M/M1"
import M2 from "./M/M2"
import M3 from "./M/M3"
import M4 from "./M/M4"
import M5 from "./M/M5"
import M6 from "./M/M6"
import MusicPlayer from "./MusicPlayer"
import MusicPlayer2 from "./MusicPlayer2"


function App() {


  return (
    <div
  className="relative h-screen bg-cover bg-center text-white text-center font-bold pt-4 text-4xl underline"
  style={{
    backgroundImage: "url('1.jpeg')",
  }}
>
  <h3>Frinds-Club</h3>

  {/* Person ke head ke upar Music Players */}

{/* Person 1 */}
<div className="absolute
  top-[5%] left-[3%]
  sm:top-[6%] sm:left-[5%]
  md:top-[7%] md:left-[7%]
  lg:top-[7%] lg:left-[9%]
">
  <M1 />
</div>

{/* Person 2 */}
<div className="absolute
  top-[12%] left-[13%]
  sm:top-[14%] sm:left-[15%]
  md:top-[16%] md:left-[17%]
  lg:top-[17%] lg:left-[18%]
">
  <M2 />
</div>

{/* Person 3 */}
<div className="absolute
  top-[9%] left-[23%]
  sm:top-[11%] sm:left-[24%]
  md:top-[12%] md:left-[26%]
  lg:top-[13%] lg:left-[27%]
">
  <M3 />
</div>

{/* Person 4 */}
<div className="absolute
  top-[9%] left-[31%]
  sm:top-[10%] sm:left-[32%]
  md:top-[12%] md:left-[34%]
  lg:top-[13%] lg:left-[35%]
">
  <M4 />
</div>

{/* Person 5 */}
<div className="absolute
  top-[7%] left-[39%]
  sm:top-[9%] sm:left-[40%]
  md:top-[10%] md:left-[42%]
  lg:top-[11%] lg:left-[43%]
">
  <M5 />
</div>

{/* Person 6 */}
<div className="absolute
  top-[9%] left-[48%]
  sm:top-[10%] sm:left-[49%]
  md:top-[12%] md:left-[51%]
  lg:top-[13%] lg:left-[52%]
">
  <M6 />
</div>

{/* Person 7 */}
<div className="absolute
  top-[11%] left-[55%]
  sm:top-[12%] sm:left-[56%]
  md:top-[14%] md:left-[58%]
  lg:top-[15%] lg:left-[59%]
">
  <M1 />
</div>

{/* Person 8 */}
<div className="absolute
  top-[7%] left-[64%]
  sm:top-[9%] sm:left-[65%]
  md:top-[10%] md:left-[67%]
  lg:top-[11%] lg:left-[68%]
">
  <M2 />
</div>

{/* Person 9 */}
<div className="absolute
  top-[10%] left-[73%]
  sm:top-[11%] sm:left-[74%]
  md:top-[13%] md:left-[76%]
  lg:top-[14%] lg:left-[77%]
">
  <M3 />
</div>

{/* Person 10 */}
<div className="absolute
  top-[8%] left-[80%]
  sm:top-[10%] sm:left-[81%]
  md:top-[11%] md:left-[83%]
  lg:top-[12%] lg:left-[84%]
">
  <M4 />
</div>
  {/* Bottom Music Player */}
  <MusicPlayer2 />
</div>
  )
}

export default App
