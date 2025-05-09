import Logo from '@/components/shared/Logo';
import NavButtons from '@/components/shared/Navbar/NavButtons';
import NavLinks from '@/components/shared/Navbar/NavLinks';

export default function Navbar() {
  return (
    <div className="bg-background relative z-10 flex w-full items-center justify-center">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
        </div>

        <div>
          <NavLinks />
        </div>

        <div>
          <NavButtons />
        </div>
      </div>
    </div>
  );
}
