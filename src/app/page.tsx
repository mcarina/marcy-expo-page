
import CardHome from "@/components/CardHome";
import { SobreProjeto } from "@/components/SobreProjeto";
import { Sparkles } from "lucide-react"

export default function Home() {
  return (
      <div className="home min-h-screen" >
        <div className="home-container">
          
          <pre className='flex flex-cols h-full flex-col items-center justify-center space-y-2.5 whitespace-pre md:space-y-3 w-full'>
            <div className="flex justify-center">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <code className='text-[2dvw] leading-[0.9] tracking-tight lg:text-[1.4dvh] select-none '>{ascii}</code>
            <div className='text-center text-sm md:text-base'>
              <h2>Full Stack web developer</h2>
              <p className="p-subtext text-muted-foreground leading-relaxed mt-2 text-balance max-w-[220px] mx-auto sm:max-w-none">
                Aprendendo e resolvendo novos problemas de código
              </p>
            </div>
              
              <CardHome/>
              <SobreProjeto/>
          
          </pre>

        </div>


      </div>
);
}

const ascii = `
  /./,   __ _ _ __ ___ _   _    ______ ______   ___  
 /    , / _  |  __/ __| | | |  / _ .  v '_ .  /  _ . 
/ /./. , (_| | | | (__| |_| | | . __/>  <| |_) | (_)|
./    ./,__,_|_|  \___| .__, |  .___/_/._; .__/ .___ / 
                       |___/            |_|          
`