import Equilibrium from '../../assets/images/image-equilibrium.jpg';
import IconView from '../../assets/images/icon-view.svg';

function App() {
  return (
    <div className="flex h-screen w-full items-center bg-bg-very-dark-blue">
      <main className="m-auto">
        <article
          className="w-[90vw] max-w-[327px] rounded-[15px] bg-card-very-dark-blue p-6
            sm:max-w-[350px]"
        >
          <div
            tabIndex={0}
            role="button"
            aria-label="focus"
            className="group relative overflow-hidden rounded-lg outline-none focus-visible:ring-2
              focus-visible:ring-cyan focus-visible:ring-offset-4 hover:cursor-pointer
              focus-visible:ring-offset-card-very-dark-blue"
          >
            <img src={Equilibrium} alt="Cristal cube in tree dimension" />
            <div
              className="invisible absolute top-0 flex h-full w-full items-center justify-center
                transition-all duration-150 ease-in-out group-hover:visible group-focus:visible
                group-focus:bg-cyan/50 group-hover:bg-cyan/50"
            >
              <img src={IconView} alt="Eye icon" />
            </div>
          </div>
          <header>
            <h1>Equilibrium #3429</h1>
            <p>Our Equilibrium collection promotes balance and calm.</p>
          </header>
          <div>
            <ul>
              <li>0.041 ETH</li>
              <li>3 days left</li>
            </ul>
          </div>
          <hr />
          <footer>
            <img src="" alt="" />
            <p>
              Creation of <span>Jules Wyvern</span>
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default App;
