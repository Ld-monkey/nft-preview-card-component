/* eslint-disable jsx-a11y/anchor-is-valid */
import Equilibrium from '../../assets/images/image-equilibrium.jpg';
import IconView from '../../assets/images/icon-view.svg';
import Avatar from '../../assets/images/image-avatar.png';

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
            className="group relative overflow-hidden rounded-lg outline-none hover:cursor-pointer
              focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-4
              focus-visible:ring-offset-card-very-dark-blue"
          >
            <img src={Equilibrium} alt="Cristal cube in tree dimension" />
            <div
              className="invisible absolute top-0 flex h-full w-full items-center justify-center
                transition-all duration-150 ease-in-out group-hover:visible
                group-hover:bg-cyan/50 group-focus:visible group-focus:bg-cyan/50"
            >
              <img src={IconView} alt="Eye icon" />
            </div>
          </div>
          <header className="mt-6 space-y-3 sm:space-y-4">
            <h1 className="text-[1.375rem] font-semibold hover:cursor-pointer hover:text-cyan">
              Equilibrium #3429
            </h1>
            <p className="text-[1.125rem] font-light leading-[1.625rem] text-soft-blue">
              Our Equilibrium collection promotes balance and calm.
            </p>
          </header>
          <div className="my-4 sm:my-6">
            <ul className="flex justify-between">
              <li className="bg-ethereum-icon bg-left bg-no-repeat pl-4 font-semibold text-cyan">
                0.041 ETH
              </li>
              <li className="bg-clock-icon bg-no-repeat bg-left pl-[22px] text-soft-blue">
                3 days left
              </li>
            </ul>
          </div>
          <hr className="border-line-very-dark-blue" />
          <footer className="flex gap-4 items-center mt-4">
            <img
              src={Avatar}
              alt="avatar"
              className="size-8 border-white border-2 rounded-full"
            />
            <p className="text-soft-blue">
              Creation of{' '}
              <a href="#" className="text-white hover:text-cyan">
                Jules Wyvern
              </a>
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default App;
