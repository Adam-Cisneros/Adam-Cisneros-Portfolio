import ghLogo from './assets/gh_logo.png';

function Data() {
    return (
        <section className="py-20 bg-black text-white text-center items-center">
            <h1 className="text-4xl font-bold mb-4">Data/Database Projects</h1>
            <p className="text-lg pb-8">This page is dedicated to showcasing my Data/Database projects.</p>
            <div className="flex flex-col items-center justify-center gap-16">
                <div className="md:w-1/2 bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-2xl font-bold mb-2">Virtual Ecosystem</h2>
                    <p className="text-lg pb-8">
                        This group project will simulate an ecosystem in which a neighboring village will 
                        interact with. Much like a city-management game, the project will want the user to make 
                        decisions on how to manipulate the ecosystem and environment around it. Some examples are 
                        chopping trees to build homes or hunting animals to get hide or food. However, the village may 
                        have to deal with certain environemtal factors such as deforestation, dwindling population of animals, 
                        and/or drought whih may depend on the season. The ecosytem will be self-managing in that as life 
                        interacts with each other the species attributes change. Examples are when a predator hunts its prey, 
                        the prey's species population will decrease and the overall nutrition of the predator's species will 
                        rise which can influence a growth in its population. Events will be time-based like, for example, every 
                        tick could be an hour and for that tick the ecosystem will update and every species will have had a 
                        chance to hunt, eat, or drink, but, every other tick the village will be able to make decisions based 
                        on their observation of their environment to make the village functional, while seasons could change every week.
                    </p>
                    <h3 className="text-xl font-bold mb-2">View Here</h3>
                    <a className="hover:scale-110 transition-transform" href="https://github.com/hlathery/Virtual-Ecosystem" target="_blank" rel="noopener noreferrer">
                        <img src={ghLogo} alt="GitHub Logo" className="h-24 inline-block mr-2" />
                    </a>
                </div>
                <div className="md:w-1/2 bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-2xl font-bold mb-2">Valley Brews (Simulated Commerce Market)</h2>
                    <p className="text-lg">
                        This is a project built over the course of 10 weeks in which we will be building out a backend API for a simulated 
                        commerce market. The project is called Valley Brews and the setting is a fantasy RPG world where adventurers seek to 
                        buy potions. It utilizes Central Coast Cauldrons which is a stubbed out API meant to serve as a starting point for learning how to build 
                        backend services that integrate with a persistence layer. I progressively built out my own forked 
                        version of the API and integrate with a progressively more sophisticated database backend. The application's 
                        setting is a simulated fantasy RPG world with adventurers seeking to buy potions. I am one of many shops in 
                        this world that offer a variety (over 100k possibilities) of potions.
                    </p>
                    <h3 className="text-xl font-bold mb-2">View Here</h3>
                    <a className="hover:scale-110 transition-transform" href="https://github.com/Adam-Cisneros/ValleyBrewss" target="_blank" rel="noopener noreferrer">
                        <img src={ghLogo} alt="GitHub Logo" className="h-24 inline-block mr-2" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Data;
