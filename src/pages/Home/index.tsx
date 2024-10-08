import reactLogo from '@/assets/react.svg';

import viteLogo from '/vite.svg';

export default function HomePage() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <p className="text-primary">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <button className="btn btn-primary my-2">Click</button>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
