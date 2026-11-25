const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projectos", href: "#projectos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  return (
    <header className="animate-header sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-10">

        <a
          href="#inicio"
          aria-label="Paulino Jerónimo - Início"
          className="flex flex-col leading-none"
        >
          <span className="text-[19px] font-semibold tracking-[-0.7px] text-[#111111]">
            Paulino Jerónimo<span className="text-[#142B49]">.</span>
          </span>

          <span className="mt-1.5 text-[9px] font-medium tracking-[2px] text-gray-500">
            SOLUÇÕES DIGITAIS
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-gray-600 transition-colors duration-200 hover:text-[#142B49]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/244931832460"
          target="_blank"
          rel="noopener noreferrer"
          className="interactive-button hidden rounded-sm bg-[#142B49] px-5 py-3 text-[12px] font-medium text-white hover:bg-[#0D1E33] sm:inline-flex"
        >
          Vamos conversar <span className="ml-2">↗</span>
        </a>

        <details className="group relative md:hidden">
          <summary
            aria-label="Abrir menu de navegação"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-sm border border-gray-200 text-xl text-[#142B49] [&::-webkit-details-marker]:hidden"
          >
            <span className="group-open:hidden">☰</span>
            <span className="hidden group-open:inline">×</span>
          </summary>

          <nav
            aria-label="Navegação móvel"
            className="absolute right-0 top-14 flex w-64 origin-top flex-col gap-1 border border-gray-200 bg-white p-3 shadow-lg animate-fade-in"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#142B49]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://wa.me/244931832460"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-[#142B49] px-4 py-3 text-center text-sm font-medium text-white"
            >
              Vamos conversar ↗
            </a>
          </nav>
        </details>

      </div>
    </header>
  );
}