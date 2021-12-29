import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CollectionProps {
  name: string;
  links: {
    name: string;
    href: string;
  }[];
}

function CollectionLinks({ name, links }: CollectionProps): JSX.Element {
  return (
    <>
      <div className="cursor-pointer text-xl">{name}</div>
      <div className="flex flex-col pl-2 text-md">
        {links.map((l) => (
          <Link key={`${name}-${l.href}`} href={l.href}>
            {l.name}
          </Link>
        ))}
      </div>
    </>
  );
}

function Sidebar(): JSX.Element {
  return (
    <div className="flex flex-col bg-depths px-4 pt-2 pb-6 text-white border-r border-skull">
      <div className="flex-grow text-md tracking-tight mt-1">
        <Image
          alt="Forgotten Runes Logo"
          src="/img/forgotten-runes-logo.png"
          height={45}
          width={140}
        />
        <div className="flex flex-col space-y-1 mt-4">
          <CollectionLinks
            name="Wizards"
            links={[
              { name: 'Ranking', href: '/' },
              { name: 'Traits', href: '/traits' },
              { name: 'Affinities', href: '/affinities' },
            ]}
          />
          <CollectionLinks
            name="Souls"
            links={[
              { name: 'Ranking', href: '/souls' },
              { name: 'Traits', href: '/souls-traits' },
            ]}
          />
          <CollectionLinks
            name="Ponies"
            links={[
              { name: 'Ranking', href: '/ponies' },
              { name: 'Traits', href: '/ponies-traits' },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex my-2 space-x-2 items-center">
          <Image
            src="/img/houngan.png"
            alt="Houngan Logo"
            width={28}
            height={28}
          />
          <div
            className="cursor-pointer"
            onClick={() => window.open('https://twitter.com/axejintao')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="#FFFFFF"
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"
              />
            </svg>
          </div>

          <div
            className="cursor-pointer"
            onClick={() =>
              window.open('https://github.com/axejintao/wizards-viewer')
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="#FFFFFF"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => window.open('https://discord.gg/N6uHbhBX')}
          >
            <svg
              width="22"
              height="22"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 24 24"
            >
              <path
                fill="#FFFFFF"
                d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.248 18.348l-.371-1.295.896.833.847.784 1.505 1.33v-12.558c0-.798-.644-1.442-1.435-1.442h-9.38c-.791 0-1.435.644-1.435 1.442v9.464c0 .798.644 1.442 1.435 1.442h7.938zm-1.26-3.206l-.462-.567c.917-.259 1.267-.833 1.267-.833-.287.189-.56.322-.805.413-.35.147-.686.245-1.015.301-.672.126-1.288.091-1.813-.007-.399-.077-.742-.189-1.029-.301-.161-.063-.336-.14-.511-.238l-.028-.016-.007-.003-.028-.016-.028-.021-.196-.119s.336.56 1.225.826l-.469.581c-1.547-.049-2.135-1.064-2.135-1.064 0-2.254 1.008-4.081 1.008-4.081 1.008-.756 1.967-.735 1.967-.735l.07.084c-1.26.364-1.841.917-1.841.917l.413-.203c.749-.329 1.344-.42 1.589-.441l.119-.014c.427-.056.91-.07 1.414-.014.665.077 1.379.273 2.107.672 0 0-.553-.525-1.743-.889l.098-.112s.959-.021 1.967.735c0 0 1.008 1.827 1.008 4.081 0 0-.573.977-2.142 1.064zm-.7-3.269c-.399 0-.714.35-.714.777 0 .427.322.777.714.777.399 0 .714-.35.714-.777 0-.427-.315-.777-.714-.777zm-2.555 0c-.399 0-.714.35-.714.777 0 .427.322.777.714.777.399 0 .714-.35.714-.777.007-.427-.315-.777-.714-.777z"
              />
            </svg>
          </div>
        </div>
        <div>{"Wizard's Guide"}</div>
        <div className="text-xs">Version: 1.0.0</div>
        <div className="text-xs">Houngan Productions</div>
      </div>
    </div>
  );
}

export default Sidebar;
