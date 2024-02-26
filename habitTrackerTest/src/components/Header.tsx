// Icons
import { BsPlus, BsX } from "react-icons/bs";
// Image
import logoImage from "../assets/logo.svg";
//Components
import * as Dialog from "@radix-ui/react-dialog";
import NewHabitForm from "./NewHabitForm";

const Header = () => {
  return (
    <header>
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
        <img src={logoImage} alt="HabitsLogo" />

        <Dialog.Root>
          <Dialog.Trigger className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background">
            <BsPlus size={20} className="text-violet-500" />
            Criar hábito
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0">

              <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

                <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
                  <BsX size={24} aria-label="Fechar" />
                </Dialog.Close>

                <Dialog.Title className="text-3xl leading-tight font-extrabold">
                  Criar bábito
                </Dialog.Title>

                <NewHabitForm />
                
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
};

export default Header;
