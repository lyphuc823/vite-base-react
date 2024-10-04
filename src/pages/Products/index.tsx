/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import { toast } from 'react-toastify';
import { Link, useNavigate } from '@tanstack/react-router';

import reactLogo from '@/assets/react.svg';
import { Route } from '@/routes/_authenticated/products';

import viteLogo from '/vite.svg';
import { PATH } from '@/constants/path';

export default function ProductPage() {
  const { page, filter, sort } = Route.useSearch();
  const { products } = Route.useLoaderData();

  const navigate = useNavigate({ from: Route.fullPath });

  const handleClick = () => {
    toast.success('Wow so easy !');
    navigate({
      search: (prev) => ({ ...prev, size: prev.size === 20 ? 10 : 20 }),
    });
  };

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
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        Page {page} / Sort {sort} / Filter {filter}
      </p>
      <button onClick={handleClick}>Next Page</button>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.map((i) => (
              <div className="group relative" key={i.id}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={i.thumbnail}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  ></img>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link
                        to={PATH.PRODUCT_DETAIL.replace(
                          '$productId',
                          String(i.id)
                        )}
                        params={{ productId: '2' }}
                      >
                        <a href="#">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          ></span>
                          {i.title}
                        </a>
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{i.brand}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${i.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
