import ghLogo from './assets/gh_logo.png';
import itchLogo from './assets/itchio_logo.png';

function Game() {
    return (
        <section className="py-20 bg-black text-white text-center items-center">
            <h1 className="text-4xl font-bold mb-4">Game Development Projects</h1>
            <p className="text-lg pb-8">This page is dedicated to showcasing my Game Development projects.</p>
            <div className="flex flex-col items-center justify-center gap-16">
                <div className="md:w-1/2 bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-2xl font-bold mb-2">Foiled! (Alpha)</h2>
                    <p className="text-lg pb-8">
                        Welcome to Foiled, a PvP game where fencers can test their skills against 
                        trained AI opponents! Whether you are a novice fencer or a skilled Olympian, 
                        this game will challenge you and improve your fencing skills. Foiled centers 
                        around a tournament style game play where fencers can play against a wide variety 
                        of opponents. In between matches you can improve your skills by taking lessons with 
                        our well-renowned fencing coach, Ward. Are you ready to play? En Garde!
                    </p>
                    <h3 className="text-xl font-bold mb-2">View Here</h3>
                    <a className="hover:scale-110 transition-transform" href="https://atomictwig.itch.io/foiled" target="_blank" rel="noopener noreferrer">
                        <img src={itchLogo} alt="Itch.io Logo" className="h-24 inline-block mr-2" />
                    </a>
                </div>
                <div className="md:w-1/2 bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-2xl font-bold mb-2">Build By Bubble (GGJ 2025)</h2>
                    <p className="text-lg pb-8">
                        Welcome to Foiled, a PvP game where fencers can test their skills against 
                        trained AI opponents! Whether you are a novice fencer or a skilled Olympian, 
                        this game will challenge you and improve your fencing skills. Foiled centers 
                        around a tournament style game play where fencers can play against a wide variety 
                        of opponents. In between matches you can improve your skills by taking lessons with 
                        our well-renowned fencing coach, Ward. Are you ready to play? En Garde!
                    </p>
                    <h3 className="text-xl font-bold mb-2">View Here</h3>
                    <a className="hover:scale-110 transition-transform" href="https://atomictwig.itch.io/foiled" target="_blank" rel="noopener noreferrer">
                        <img src={ghLogo} alt="Itch.io Logo" className="h-24 inline-block mr-2" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Game;
